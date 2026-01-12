"use client";

import React, { useEffect } from "react";
import { FaSync, FaHome, FaBug } from "react-icons/fa";
import Link from "next/link";

const Error = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12 bg-base-100">
      <div className="max-w-xl w-full text-center">
        {/* --- Error Icon & Illustration --- */}
        <div className="relative flex justify-center mb-8">
          <div className="w-24 h-24 bg-error/10 rounded-full flex items-center justify-center animate-pulse">
            <FaBug className="text-error text-5xl" />
          </div>
          <div className="absolute top-0 right-1/3 w-4 h-4 bg-error rounded-full animate-ping"></div>
        </div>

        {/* --- Message --- */}
        <h1 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
          Something went wrong!
        </h1>
        <p className="text-gray-500 mb-8 text-lg">
          We apologize for the inconvenience. An unexpected error occurred while 
          processing your request. Our team has been notified.
        </p>

        {/* --- Error Details (Only for Dev or Debugging) --- */}
        <div className="bg-base-200 p-4 rounded-lg mb-8 text-left border-l-4 border-error overflow-auto max-h-32">
          <p className="text-sm font-mono text-error">
            {error?.message || "Internal Server Error"}
          </p>
        </div>

        {/* --- Action Buttons --- */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="btn btn-primary btn-lg gap-2 shadow-lg hover:scale-105 transition-transform"
          >
            <FaSync size={18} />
            Try Again
          </button>
          
          <Link 
            href="/" 
            className="btn btn-outline btn-lg gap-2 hover:bg-base-300"
          >
            <FaHome size={20} />
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;