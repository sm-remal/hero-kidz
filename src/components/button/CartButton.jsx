"use client"
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartButton = ({product}) => {

    const isLogin = false;
    const router = useRouter();
    const path = usePathname();

    const add2cart = () => {
        if(isLogin){
            alert(product._id)
        }
        else{
            router.push(`/login?callbackUrl=${path}`)
        }
    }

    return (
        <button onClick={add2cart} className="btn btn-primary flex-1 gap-2 shadow-lg">
            <FaShoppingCart /> Add to Cart
        </button>
    );
};

export default CartButton;