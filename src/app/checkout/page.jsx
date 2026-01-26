import { getCart } from '@/actions/cart';
import CheckOut from '@/components/cards/CheckOut';
import React from 'react';

const CheckoutPage = async () => {
    const cartItemsFromServer = await getCart();

    // Convert _id and productId to strings for Next.js client
    const cartItems = cartItemsFromServer.map(item => ({
        ...item,
        _id: item._id.toString(),
        productId: item.productId.toString(),
    }));
    return (
        <div>
            <CheckOut cartItems={cartItems}></CheckOut>
        </div>
    );
};

export default CheckoutPage;