"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";
import { handleCart } from "@/actions/cart";

const CartButton = ({ product }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const path = usePathname();

  const isLogin = !!session;

  const add2cart = async () => {
    if (status === "loading") return;

    if (!isLogin) {
      Swal.fire({
        title: "Sign In Required",
        text: "Please login to add items to your cart.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Login Now",
        cancelButtonText: "Later",
        confirmButtonColor: "#f97316",
        cancelButtonColor: "#9ca3af",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push(`/login?callbackUrl=${path}`);
        }
      });
      return;
    }

    try {
      const res = await handleCart({ product });

      if (!res?.success) {
        throw new Error("Failed");
      }

      Swal.fire({
        title: "Added to Cart!",
        text: `${product.title} has been added successfully.`,
        icon: "success",
        confirmButtonColor: "#f97316",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong.",
        icon: "error",
        confirmButtonColor: "#f97316",
      });
    }
  };

  return (
    <button
      onClick={add2cart}
      disabled={status === "loading"}
      className="btn bg-orange-500 hover:bg-orange-600 border-none text-white flex-1 gap-2 shadow-lg"
    >
      {status === "loading" ? (
        <span className="loading loading-spinner loading-sm"></span>
      ) : (
        <>
          <FaShoppingCart /> Add to Cart
        </>
      )}
    </button>
  );
};

export default CartButton;
