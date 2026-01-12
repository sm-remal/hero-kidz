import GoBack from "@/components/button/GoBack";
import Link from "next/link";
import React from "react";
import { FaHome, FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";

const Error404 = () => {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-6 py-12">
      <div className="text-center">
        {/* --- Top Illustration / Icon --- */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <h1 className="text-[150px] md:text-[200px] font-black text-base-200 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <FaExclamationTriangle className="text-warning text-6xl md:text-8xl animate-bounce" />
            </div>
          </div>
        </div>

        {/* --- Text Content --- */}
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable. Let's get you back on track!
          </p>

          {/* --- Action Buttons --- */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="btn btn-primary btn-lg gap-2 shadow-lg hover:shadow-primary/30 transition-all"
            >
              <FaHome size={20} /> 
              Back to Home
            </Link>
            
            <GoBack></GoBack>

          </div>
        </div>

        {/* --- Decoration --- */}
        <div className="mt-16 grid grid-cols-3 gap-4 opacity-20">
          <div className="h-1 bg-primary rounded-full"></div>
          <div className="h-1 bg-secondary rounded-full"></div>
          <div className="h-1 bg-accent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Error404;