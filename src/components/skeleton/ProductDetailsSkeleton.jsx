"use client"
import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Column: Image Skeleton */}
        <div className="w-full">
          <div className="skeleton w-full pt-[100%] rounded-xl"></div>
        </div>

        {/* Right Column: Content Skeleton */}
        <div className="space-y-6">
          {/* Title & Stats */}
          <div className="space-y-2">
            <div className="skeleton h-8 w-3/4"></div>
            <div className="skeleton h-6 w-1/2"></div>
            <div className="flex gap-4 mt-2">
              <div className="skeleton h-4 w-24"></div>
              <div className="skeleton h-4 w-20"></div>
            </div>
          </div>

          {/* Price */}
          <div className="skeleton h-10 w-40"></div>

          {/* Highlights (Info Tags) */}
          <div className="space-y-2">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-2/3"></div>
          </div>

          {/* Actions Buttons */}
          <div className="flex gap-4 pt-4">
            <div className="skeleton h-12 flex-1 rounded-lg"></div>
            <div className="skeleton h-12 w-12 rounded-lg"></div>
          </div>

          {/* Description Block */}
          <div className="pt-6 space-y-2">
            <div className="skeleton h-6 w-32 mb-2"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;