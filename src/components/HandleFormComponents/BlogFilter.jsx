"use client";
import React, { useState } from 'react';

const BlogFilter = () => {
    const [active, setActive] = useState("All");
    const categories = ["All", "Learning", "Parenting", "Safety", "Toys", "Activities"];

    return (
        <div className="max-w-[1440px] mx-auto px-5 sticky top-24 z-30">
            <div className="flex flex-wrap items-center justify-center gap-3 bg-white/70 backdrop-blur-xl p-3 rounded-[2rem] shadow-xl border border-white/50">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`px-8 py-3 rounded-full text-xs font-black transition-all uppercase tracking-widest ${
                            active === cat 
                            ? "bg-primary text-white shadow-lg shadow-primary/30" 
                            : "hover:bg-primary/10 text-gray-500"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogFilter;