"use client"
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartButton = ({product}) => {

    const isLogin = false;  
    const router = useRouter();
    const path = usePathname();

    const add2cart = async() => {
        if(isLogin){
          const result = await handleCart({ product, inc: true})
          if(result.success){
            alert("Added to cart", product.title, "success")
          }else{
            alert("Opps", "Something wrong happened", "error")
          }
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