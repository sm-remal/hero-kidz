"use client"
import React from "react"; 

const Loading = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6">
      {/* --- Main Spinner Animation --- */}
      <div className="relative flex items-center justify-center mb-10">
        {/* Outer Ring */}
        <div className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        {/* Inner Ring */}
        <div className="absolute w-16 h-16 border-4 border-secondary/20 border-b-secondary rounded-full animate-spin-reverse"></div>
        {/* Center Pulse */}
        <div className="absolute w-6 h-6 bg-accent rounded-full animate-pulse shadow-[0_0_15px_rgba(var(--accent),0.5)]"></div>
      </div>

      {/* --- Text Content --- */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
          Loading Content...
        </h2>
        <p className="text-gray-400 text-sm tracking-widest uppercase">
          Please wait a moment
        </p>
      </div>

      {/* --- Skeleton Placeholder (Optional Design Element) --- */}
      <div className="mt-12 w-full max-w-md space-y-3 opacity-40">
        <div className="h-4 bg-base-300 rounded-full w-3/4 mx-auto animate-pulse"></div>
        <div className="h-4 bg-base-300 rounded-full w-1/2 mx-auto animate-pulse"></div>
      </div>

      {/* --- Custom CSS for Reverse Spin --- */}
      <style jsx>{`
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;