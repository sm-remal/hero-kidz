"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import CartButton from "../button/CartButton";

const ProductCard = ({ product }) => {
  const { _id, title, image, price, discount, ratings, reviews, sold } = product || {};

  // Calculate Discounted Price
  const safePrice = price || 0;
  const safeDiscount = discount || 0;
  const discountedPrice = safePrice - (safePrice * safeDiscount) / 100;

  const isLoading = false;
  const router = useRouter()
  const path = usePathname()

  // Function to render star rating dynamically
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-base-200 group">
      {/* Image Section */}
      <figure className="relative pt-[75%] overflow-hidden">
        <Image
          width={200}
          height={180}
          src={image && image.startsWith('http') ? image : "https://i.ibb.co/Txqm7j30/logo.png"}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-2 right-2 badge badge-secondary font-bold">
            -{discount}%
          </div>
        )}
      </figure>

      {/* Body Section */}
      <div className="card-body p-4">
        {/* Title */}
        <h2 className="card-title text-lg leading-tight line-clamp-2 h-12" title={title}>
          {title}
        </h2>

        {/* Ratings & Sold */}
        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex items-center gap-1">
            <div className="flex text-sm">{renderStars(ratings || 0)}</div>
            <span className="text-gray-500 text-xs">({reviews})</span>
          </div>
          <span className="badge badge-ghost badge-sm text-xs text-gray-500">
            {sold} Sold
          </span>
        </div>

        {/* Price Section */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">
            ৳{discountedPrice.toLocaleString()}
          </span>
          {discount > 0 && (
            <span className="text-sm text-gray-400 line-through decoration-red-500">
              ৳{price.toLocaleString()}
            </span>
          )}
        </div>

        {/* Action Button */}
        <div className="flex gap-2 mt-auto pt-4">

          {/* Client Button  */}
         <CartButton></CartButton>
         {/* Button */}
          <Link href={`/products/${_id}`} className="btn btn-primary btn-outline hover:text-white flex-1 gap-1 hover:scale-[1.02] transition-transform px-2">
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;