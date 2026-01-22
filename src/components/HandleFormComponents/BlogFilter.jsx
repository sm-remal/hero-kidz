"use client";

import React, { useState } from 'react';

const BlogFilter = () => {
    const [activeTab, setActiveTab] = useState("All");
    const categories = ["All", "Development", "Parenting", "Tips & Tricks", "New Toys"];

    return (
        <section className="max-w-[1440px] mx-auto px-5 -mt-8 relative z-20">
            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-xl border border-base-100 flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`btn btn-sm rounded-full px-6 normal-case transition-all ${
                                activeTab === cat 
                                ? "btn-primary text-white shadow-lg shadow-primary/30" 
                                : "btn-ghost text-gray-500 hover:bg-primary/10"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="form-control w-full md:w-80">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search articles..." 
                            className="input input-bordered w-full rounded-full pl-12 focus:border-primary focus:ring-0"
                        />
                        <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogFilter;