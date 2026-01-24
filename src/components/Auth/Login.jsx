"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
  //  Add res variable
  const res = await signIn("credentials", {
    email: data.email,
    password: data.password,
    redirect: false,      
    callbackUrl: callbackUrl, 
  });

  if (res?.error) {
    alert("Invalid email or password");
    return;
  }

  router.push(res?.url || callbackUrl); 
};

  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl });
  };

  return (
    <div className="min-h-screen w-full flex bg-base-100 font-sans">
      {/* LEFT SIDE: Branding / Image */}
      <div className="hidden lg:flex w-1/2 bg-primary relative overflow-hidden items-center justify-center">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center text-white px-10">
          <h1 className="text-5xl font-black mb-4 tracking-tight drop-shadow-md">Hero Kidz</h1>
          <p className="text-lg opacity-90 max-w-md mx-auto leading-relaxed">
            Empowering the next generation of superheroes. Join us to unlock your child's potential.
          </p>
          <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-xl p-4 inline-block shadow-inner">
            <span className="text-sm font-semibold tracking-widest uppercase">Welcome Back</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden text-center mb-6">
            <h1 className="text-3xl font-black text-primary">Hero Kidz</h1>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-base-content">Sign In</h2>
            <p className="text-gray-500 mt-2">Enter your details to access your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="user@example.com"
                  className={`input input-bordered w-full pl-10 transition-all focus:border-primary focus:ring-1 focus:ring-primary ${errors.email ? "input-error" : ""
                    }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <span className="text-error text-xs mt-1 block">{errors.email.message}</span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••••••"
                  className={`input input-bordered w-full pl-10 pr-10 transition-all focus:border-primary focus:ring-1 focus:ring-primary ${errors.password ? "input-error" : ""
                    }`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="flex justify-between items-center mt-2">
                {errors.password ? (
                  <span className="text-error text-xs">{errors.password.message}</span>
                ) : (
                  <span></span>
                )}
                <Link
                  href="/forgot-password"
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full text-white font-bold text-lg shadow-lg hover:shadow-primary/40 disabled:bg-gray-300 disabled:text-gray-500"
            >
              {isSubmitting ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Log In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">Or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-700 gap-2"
            >
              <FaGoogle className="text-red-500" /> Google
            </button>
            <button className="btn btn-outline border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-700 gap-2">
              <FaFacebookF className="text-blue-600" /> Facebook
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Do not have an account yet?{" "}
            <Link href="/registration" className="font-bold text-primary hover:underline">
              Sign Up Free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
