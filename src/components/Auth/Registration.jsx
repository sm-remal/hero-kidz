"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { 
  FaGoogle, 
  FaFacebookF, 
  FaEye, 
  FaEyeSlash, 
  FaEnvelope, 
  FaLock, 
  FaUser 
} from "react-icons/fa";
import { postUser } from "@/actions/auth";
import { useRouter } from "next/navigation";

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password", "");

  const onSubmit = async (data) => {
    try {
      const result = await postUser(data); 
      
      if(result?.acknowledged || result?.success){
        alert("Successful! Please login");
        router.push("/login");
      } else {
        alert(result?.message || "Registration failed. Try again.");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-base-100 font-sans">
      
      {/* --- LEFT SIDE --- */}
      <div className="hidden lg:flex w-1/2 bg-primary relative overflow-hidden items-center justify-center">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 text-center text-white px-10">
          <h1 className="text-5xl font-black mb-4 tracking-tight drop-shadow-md">Hero Kidz</h1>
          <p className="text-lg opacity-90 max-w-md mx-auto leading-relaxed">
            Start your child`&apos`s journey with us. Creating an account gives you access to premium resources.
          </p>
          <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-xl p-4 inline-block shadow-inner">
            <span className="text-sm font-semibold tracking-widest uppercase text-white">Join the Community</span>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 overflow-y-auto">
        <div className="w-full max-w-md space-y-6">
          
          <div className="lg:hidden text-center mb-4">
            <h1 className="text-3xl font-black text-primary">Hero Kidz</h1>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-base-content">Create Account</h2>
            <p className="text-gray-500 mt-2">Sign up to get started</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            {/* Full Name */}
            <div className="form-control">
              <label className="label py-1"><span className="label-text font-semibold text-gray-700">Full Name</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><FaUser className="text-gray-400" /></div>
                <input type="text" placeholder="Your full name" className={`input input-bordered w-full pl-10 h-11 ${errors.fullName ? "input-error" : ""}`} {...register("fullName", { required: "Name is required" })} />
              </div>
              {errors.fullName && <span className="text-error text-xs mt-1">{errors.fullName.message}</span>}
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label py-1"><span className="label-text font-semibold text-gray-700">Email Address</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><FaEnvelope className="text-gray-400" /></div>
                <input type="email" placeholder="parent@example.com" className={`input input-bordered w-full pl-10 h-11 ${errors.email ? "input-error" : ""}`} {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" }})} />
              </div>
              {errors.email && <span className="text-error text-xs mt-1">{errors.email.message}</span>}
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label py-1"><span className="label-text font-semibold text-gray-700">Password</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><FaLock className="text-gray-400" /></div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Min 6 characters"
                  className={`input input-bordered w-full pl-10 pr-10 h-11 ${errors.password ? "input-error" : ""}`}
                  {...register("password", { required: "Password is required", minLength: { value: 6, message: "Must be 6+ chars" }})}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && <span className="text-error text-xs mt-1">{errors.password.message}</span>}
            </div>

            {/* Confirm Password (Fixed with Eye Toggle) */}
            <div className="form-control">
              <label className="label py-1"><span className="label-text font-semibold text-gray-700">Confirm Password</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><FaLock className="text-gray-400" /></div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Repeat your password"
                  className={`input input-bordered w-full pl-10 pr-10 h-11 ${errors.confirmPassword ? "input-error" : ""}`}
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) => value === password || "Passwords do not match",
                  })}
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && <span className="text-error text-xs mt-1">{errors.confirmPassword.message}</span>}
            </div>

            <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full text-white font-bold text-lg mt-2">
              {isSubmitting ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </form>

          {/* Social and Link */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-400 text-xs uppercase">Or join with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="btn btn-outline border-gray-300 gap-2 h-11 min-h-0"><FaGoogle className="text-red-500" /> Google</button>
            <button className="btn btn-outline border-gray-300 gap-2 h-11 min-h-0"><FaFacebookF className="text-blue-600" /> Facebook</button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Already have an account? <Link href="/login" className="font-bold text-primary hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;