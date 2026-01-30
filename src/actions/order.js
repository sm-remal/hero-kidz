"use server"

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { clearCart, getCart } from "./cart";
import { transporter } from "@/lib/sendEmail"; 

const { dbConnect, collections } = require("@/lib/dbConnect")
const orderCollection = dbConnect(collections.ORDER);

// Helper function to generate HTML (Kept outside to maintain clean logic)
const generateInvoiceHTML = (orderId, items, totalPrice, customerName) => {
  const itemRows = items.map(item => `
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.title} (x${item.quantity})</td>
      <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">$${item.price * item.quantity}</td>
    </tr>
  `).join("");

  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
      <h2 style="color: #7c3aed; text-align: center;">Hero Kidz - Order Invoice</h2>
      <p>Hi <strong>${customerName}</strong>,</p>
      <p>Your order has been placed successfully! Order ID: <strong>#${orderId}</strong></p>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background: #f4f4f4;">
            <th style="text-align: left; padding: 10px;">Product</th>
            <th style="text-align: right; padding: 10px;">Subtotal</th>
          </tr>
        </thead>
        <tbody>${itemRows}</tbody>
      </table>
      <h3 style="text-align: right; color: #7c3aed;">Total Amount: $${totalPrice}</h3>
      <p style="font-size: 12px; color: #888; text-align: center; margin-top: 30px;">Thank you for shopping with Hero Kidz!</p>
    </div>
  `;
};

export const createOrder = async (payload) => {
    const { user } = await getServerSession(authOptions) || {};
    if (!user) return { success: false }

    const cart = await getCart();
    if(cart.length == 0) {
        return {success: false}
    }

    // Calculate total for the invoice
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const newOrder = {
        createdAt : new Date().toISOString(),
        items: cart,
        ...payload,
    }

    const result = await orderCollection.insertOne(newOrder)

    if(Boolean(result.insertedId)){
        // Clear the cart
        await clearCart();

        // Send Invoice Email
        try {
            const mailOptions = {
                from: `"Hero Kidz" <${process.env.EMAIL_USER}>`,
                to: user.email,
                subject: "Order Confirmation - Hero Kidz",
                html: generateInvoiceHTML(result.insertedId.toString(), cart, totalPrice, user.name),
            };

            // We use await here to ensure it attempts to send before finishing the action
            await transporter.sendMail(mailOptions);
        } catch (error) {
            console.error("Email Sending Error:", error);
            // We don't return success: false here because the order is already saved in DB
        }
    }

    return {success: result.insertedId}
}