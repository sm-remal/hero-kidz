"use client";
import React, { useTransition } from "react";
import Image from "next/image";
import { Minus, Plus, Trash2, Loader2 } from "lucide-react";
import { deleteItemFromCart, handleCart } from "@/actions/cart";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const CartItem = ({ item }) => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const isMin = item.quantity <= 0;
    const isMax = item.quantity >= 10;


    const updateQuantity = async (inc) => {
        startTransition(async () => {
            const result = await handleCart({
                product: { _id: item.productId },
                inc
            });
            if (result.success) {
                router.refresh();
            }
        });
    };

    const handleDeleteCart = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await deleteItemFromCart(item._id);
                if (result.success) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    router.refresh();
                } else {
                    Swal.fire({
                        title: "Opps!",
                        text: "Something went wrong.",
                        icon: "error"
                    });
                }
            }
        });
    }

    return (
        <div className={`relative flex flex-col sm:flex-row items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl transition-all ${isPending ? "opacity-50 pointer-events-none" : "opacity-100"}`}>

            {/* Loading Spinner */}
            {isPending && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <Loader2 className="animate-spin text-orange-500" />
                </div>
            )}

            {/* Product Image */}
            <div className="relative h-24 w-24 rounded-xl bg-gray-50 border overflow-hidden flex-shrink-0">
                <Image src={item.image} alt={item.title} fill className="object-contain p-2" />
            </div>

            {/* Title & Price */}
            <div className="flex-1 text-center sm:text-left">
                <h3 className="font-bold text-gray-800 text-sm md:text-base line-clamp-1">{item.title}</h3>
                <p className="text-orange-500 font-bold text-lg mt-1">৳{item.price.toLocaleString()}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
                <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 p-1">
                    <button
                        onClick={() => updateQuantity(false)}
                        disabled={isMin}
                        className={`p-1 transition-colors ${isMin ? "text-gray-300 cursor-not-allowed" : "hover:text-orange-500"}`}
                    >
                        <Minus size={18} />
                    </button>
                    <span className="w-8 text-center font-bold text-gray-700">{item.quantity}</span>
                    <button
                        onClick={() => updateQuantity(true)}
                        disabled={isMax}
                        className={`p-1 transition-colors ${isMax ? "text-gray-300 cursor-not-allowed" : "hover:text-orange-500"}`}
                    >
                        <Plus size={18} />
                    </button>
                </div>

                <button onClick={handleDeleteCart} className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full">
                    <Trash2 size={20} />
                </button>
            </div>
        </div>
    );
};

export default CartItem;