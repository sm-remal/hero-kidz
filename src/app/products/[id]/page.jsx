"use client";

import Image from "next/image";
import React, { useState } from "react";
import { 
  FaStar, 
  FaShoppingCart, 
  FaHeart, 
  FaShareAlt, 
  FaCheckCircle, 
  FaMinus, 
  FaPlus 
} from "react-icons/fa";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { 
    title, 
    bangla, 
    image, 
    price, 
    discount, 
    description, 
    qna, 
    ratings, 
    reviews, 
    sold, 
    info 
  } = product;

  // Calculate Price
  const discountedPrice = price - (price * discount) / 100;

  // Handle Quantity
  const handleQuantity = (type) => {
    if (type === "dec" && quantity > 1) setQuantity(prev => prev - 1);
    if (type === "inc") setQuantity(prev => prev + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* --- LEFT COLUMN: IMAGE --- */}
        <div className="relative group">
          <div className="overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow-sm">
            <Image 
              src={image} 
              alt={title} 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          {discount > 0 && (
            <div className="absolute top-4 left-4 badge badge-secondary badge-lg font-bold shadow-md">
              -{discount}% OFF
            </div>
          )}
        </div>

        {/* --- RIGHT COLUMN: INFO --- */}
        <div className="flex flex-col gap-5">
          
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-base-content leading-tight">
              {title}
            </h1>
            <h2 className="text-xl text-gray-500 mt-1 font-medium">
              {bangla}
            </h2>
            
            {/* Meta Data */}
            <div className="flex items-center gap-4 mt-3 text-sm">
              <div className="flex items-center text-yellow-400 gap-1">
                <span className="font-bold text-base-content">{ratings}</span>
                <FaStar />
              </div>
              <span className="text-gray-400">|</span>
              <span className="hover:underline cursor-pointer text-primary">
                {reviews} Reviews
              </span>
              <span className="text-gray-400">|</span>
              <span className="badge badge-ghost text-xs">{sold} Sold</span>
            </div>
          </div>

          {/* Price */}
          <div className="p-4 bg-base-200 rounded-lg flex items-center gap-4">
            <span className="text-4xl font-bold text-primary">
              ৳{discountedPrice.toLocaleString()}
            </span>
            {discount > 0 && (
              <div className="flex flex-col">
                <span className="text-gray-500 line-through text-sm">
                  ৳{price.toLocaleString()}
                </span>
                <span className="text-xs text-secondary font-bold">
                  Save ৳{(price - discountedPrice).toLocaleString()}
                </span>
              </div>
            )}
          </div>

          {/* Key Features (Info) */}
          <div className="space-y-2">
            <h3 className="font-semibold text-base-content">Key Highlights:</h3>
            <ul className="grid grid-cols-1 gap-2">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <FaCheckCircle className="text-success shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-base-300">
            {/* Quantity Selector */}
            <div className="join border border-base-300">
              <button 
                className="join-item btn btn-ghost btn-sm px-3"
                onClick={() => handleQuantity("dec")}
              >
                <FaMinus size={10} />
              </button>
              <span className="join-item btn btn-ghost btn-sm no-animation cursor-default w-12 text-lg">
                {quantity}
              </span>
              <button 
                className="join-item btn btn-ghost btn-sm px-3"
                onClick={() => handleQuantity("inc")}
              >
                <FaPlus size={10} />
              </button>
            </div>

            {/* Buttons */}
            <button className="btn btn-primary flex-1 gap-2 shadow-lg hover:shadow-xl">
              <FaShoppingCart /> Add to Cart
            </button>
            <button className="btn btn-circle btn-ghost border border-base-300 text-red-500 hover:bg-red-50 hover:border-red-200">
              <FaHeart />
            </button>
          </div>

          {/* Description & QnA Tabs/Sections */}
          <div className="divider"></div>

          {/* Description */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked /> 
            <div className="collapse-title text-lg font-medium">
              Product Description
            </div>
            <div className="collapse-content text-gray-600 leading-relaxed whitespace-pre-line">
              {description}
            </div>
          </div>

          {/* Q&A Section */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-200 mt-2">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-lg font-medium">
              Q&A ({qna.length})
            </div>
            <div className="collapse-content space-y-4">
              {qna.map((q, i) => (
                <div key={i} className="bg-base-200 p-3 rounded-lg text-sm">
                  <p className="font-bold text-gray-800 flex gap-2">
                    <span className="text-primary">Q:</span> {q.question}
                  </p>
                  <p className="mt-1 text-gray-600 flex gap-2">
                    <span className="text-success font-bold">A:</span> {q.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;