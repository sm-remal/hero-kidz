import { getCart } from '@/actions/cart';
import React from 'react';
import CartItem from '@/components/cards/CartItem';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

const CartPage = async () => {
    // Get cart items
    const cartItemsFromServer = await getCart();

    // Convert _id and productId to strings for Next.js client
    const cartItems = cartItemsFromServer.map(item => ({
        ...item,
        _id: item._id.toString(),
        productId: item.productId.toString(),
    }));

    const subtotal = cartItems.reduce((acc, item) => {
        const p = Number(item.price) || 0;
        const q = Number(item.quantity) || 0;
        return acc + (p * q);
    }, 0);

    const shipping = cartItems.length > 0 ? 60 : 0;
    const total = subtotal + shipping;

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
                <div className="bg-orange-50 p-6 rounded-full text-orange-500">
                    <ShoppingBag size={48} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
                <Link href="/" className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Side: Items */}
                <div className="lg:col-span-2 space-y-4">
                    {cartItems.map((item) => (
                        <CartItem key={item._id} item={item} />
                    ))}
                </div>

                {/* Right Side: Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                        <h2 className="text-xl font-bold mb-6 text-gray-800">Order Summary</h2>
                        <div className="space-y-4 text-gray-600">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-semibold">৳{subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping Charge</span>
                                <span className="font-semibold">৳{shipping}</span>
                            </div>
                            <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-900">
                                <span>Total</span>
                                <span className="text-orange-500">৳{total.toLocaleString()}</span>
                            </div>
                        </div>
                        <button className="w-full bg-orange-500 text-white mt-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all active:scale-95 shadow-lg shadow-orange-100">
                            Checkout Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
