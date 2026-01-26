"use client"
import Image from 'next/image';
import React from 'react';
import { FaShieldAlt, FaCreditCard, FaTruck, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser } from 'react-icons/fa';

const CheckOut = ({ cartItems = [] }) => {
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 50 : 0;
    const total = subtotal + shipping;

    return (
        <div className="min-h-screen pb-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
                <header className="mb-10">
                    <h1 className="text-3xl font-black text-slate-800">Secure <span className='text-orange-500'>Checkout</span></h1>
                    <p className="text-slate-500 mt-2">Please provide your delivery details below.</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* LEFT SIDE: Information Form */}
                    <form className="lg:col-span-7 space-y-6">
                        
                        {/* Section 1: Contact Information */}
                        <div className="card bg-white shadow-sm border border-slate-200">
                            <div className="card-body p-6">
                                <h2 className="text-lg font-bold flex items-center gap-2 mb-4 text-slate-700">
                                    <FaEnvelope className="text-primary" /> Contact Information
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control w-full">
                                        <label className="label"><span className="label-text font-semibold">Email Address</span></label>
                                        <input type="email" placeholder="example@mail.com" className="input input-bordered w-full focus:outline-primary" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label"><span className="label-text font-semibold">Phone Number</span></label>
                                        <input type="tel" placeholder="01XXXXXXXXX" className="input input-bordered w-full focus:outline-primary" required />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Shipping Details */}
                        <div className="card bg-white shadow-sm border border-slate-200">
                            <div className="card-body p-6">
                                <h2 className="text-lg font-bold flex items-center gap-2 mb-4 text-slate-700">
                                    <FaMapMarkerAlt className="text-primary" /> Shipping Address
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="form-control w-full md:col-span-2">
                                        <label className="label"><span className="label-text font-semibold">Full Name</span></label>
                                        <input type="text" placeholder="Enter your full name" className="input input-bordered w-full focus:outline-primary" required />
                                    </div>
                                    <div className="form-control w-full md:col-span-2">
                                        <label className="label"><span className="label-text font-semibold">Street Address</span></label>
                                        <input type="text" placeholder="House #, Road #, Area" className="input input-bordered w-full focus:outline-primary" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label"><span className="label-text font-semibold">City / District</span></label>
                                        <select className="select select-bordered w-full focus:outline-primary">
                                            <option disabled selected>Select City</option>
                                            <option>Dhaka</option>
                                            <option>Chittagong</option>
                                            <option>Sylhet</option>
                                        </select>
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label"><span className="label-text font-semibold">Postal Code</span></label>
                                        <input type="text" placeholder="1212" className="input input-bordered w-full focus:outline-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Payment Method */}
                        <div className="card bg-white shadow-sm border border-slate-200">
                            <div className="card-body p-6">
                                <h2 className="text-lg font-bold flex items-center gap-2 mb-4 text-slate-700">
                                    <FaCreditCard className="text-primary" /> Payment Method
                                </h2>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:bg-slate-50 transition-all border-primary bg-primary/5">
                                        <input type="radio" name="payment" className="radio radio-primary radio-sm" checked readOnly />
                                        <div className="flex-1">
                                            <p className="font-bold text-slate-700">Cash on Delivery</p>
                                            <p className="text-xs text-slate-500">Pay with cash when your order is delivered.</p>
                                        </div>
                                    </label>
                                    <label className="flex items-center gap-3 p-4 border rounded-xl cursor-not-allowed opacity-60 bg-slate-50">
                                        <input type="radio" name="payment" className="radio radio-sm" disabled />
                                        <div className="flex-1">
                                            <p className="font-bold text-slate-700">Online Payment</p>
                                            <p className="text-xs text-slate-500">SSL Commerz / Bkash / Rocket (Coming Soon)</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* RIGHT SIDE: Order Summary */}
                    <div className="lg:col-span-5">
                        <div className="card bg-white shadow-lg border border-slate-200 sticky top-10">
                            <div className="card-body p-6">
                                <h2 className="text-xl font-black text-slate-800 border-b pb-4 mb-4 flex justify-between items-center">
                                    Order Summary
                                    <span className="badge badge-primary badge-md">{cartItems.length} Items</span>
                                </h2>

                                {/* Product List */}
                                <div className="max-h-64 overflow-y-auto space-y-4 mb-6 pr-2 custom-scrollbar">
                                    {cartItems.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <div className="relative h-14 w-14 shrink-0 bg-slate-100 rounded-lg overflow-hidden border border-slate-100">
                                                <Image 
                                                    src={item.image} 
                                                    alt={item.title} 
                                                    fill 
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-bold text-slate-700 truncate">{item.title}</p>
                                                <p className="text-xs text-slate-500">Quantity: {item.quantity}</p>
                                            </div>
                                            <p className="text-sm font-bold text-slate-800">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Pricing Breakdown */}
                                <div className="space-y-3 border-t pt-4">
                                    <div className="flex justify-between text-slate-600">
                                        <span>Subtotal</span>
                                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-600">
                                        <span>Shipping Fee</span>
                                        <span className="font-medium">${shipping.toFixed(2)}</span>
                                    </div>
                                    <div className="divider my-1"></div>
                                    <div className="flex justify-between text-xl font-black text-slate-900">
                                        <span>Total Amount</span>
                                        <span className="text-primary">${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mt-8 text-lg h-14 shadow-md">
                                    Place Order Now
                                </button>

                                <div className="mt-6 p-4 bg-slate-50 rounded-lg flex items-start gap-3">
                                    <FaShieldAlt className="text-green-600 mt-1 shrink-0" />
                                    <p className="text-[11px] text-slate-500 leading-relaxed">
                                        Your personal data will be used to process your order and support your experience throughout this website.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Custom Scrollbar Styling */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #d1d5db;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};

export default CheckOut;