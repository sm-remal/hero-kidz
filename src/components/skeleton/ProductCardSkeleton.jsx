import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-xl h-full border border-base-200">
      {/* Image Skeleton */}
      <figure className="relative pt-[75%] bg-base-200">
        <div className="skeleton absolute top-0 left-0 w-full h-full rounded-none"></div>
      </figure>

      <div className="card-body p-4">
        {/* Title Skeleton */}
        <div className="skeleton h-6 w-full mb-2"></div>
        <div className="skeleton h-6 w-2/3 mb-4"></div>

        {/* Rating & Sold Skeleton */}
        <div className="flex justify-between items-center mb-4">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-12"></div>
        </div>

        {/* Price Skeleton */}
        <div className="flex items-end gap-2 mb-6">
          <div className="skeleton h-8 w-24"></div>
          <div className="skeleton h-4 w-16"></div>
        </div>

        {/* Button Skeleton */}
        <div className="card-actions mt-auto">
          <div className="skeleton h-12 w-full rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;