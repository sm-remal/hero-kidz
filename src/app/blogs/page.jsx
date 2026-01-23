import React from 'react';
import { FaCalendarAlt, FaArrowRight, FaPlayCircle, FaFire } from 'react-icons/fa';
import BlogFilter from '@/components/HandleFormComponents/BlogFilter';
import {Blogs} from '@/app/blogs/Blogs'
import Image from 'next/image';

const BlogPage = () => {
    return (
        <div className="pb-10 relative">
            
            {/* Header */}
            <section className="pt-10 pb-12 px-5 text-center">
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <FaFire className="text-orange-500 animate-pulse" />
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">The Hero Kidz Journal</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                        Our Latest <span className="text-primary">Stories</span>
                    </h1>
                </div>
            </section>

            <BlogFilter />

            {/* Main Bento Grid */}
            <section className="max-w-[1440px] mx-auto px-5 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px]">
                    {Blogs.map((blog) => (
                        <div 
                            key={blog.id} 
                            className={`relative group overflow-hidden rounded-[2.5rem] transition-all duration-500 border-4 border-white shadow-lg ${
                                blog.size === 'large' ? 'md:col-span-2 md:row-span-2' : 'md:col-span-2'
                            }`}
                        >
                            <Image
                            src={blog.image} 
                            alt={blog.title} 
                            fill
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-lg mb-3 inline-block uppercase tracking-wider">
                                    {blog.category}
                                </span>
                                <h3 className={`font-bold text-white leading-tight mb-3 ${blog.size === 'large' ? 'text-3xl' : 'text-2xl'}`}>
                                    {blog.title}
                                </h3>
                                <p className="text-white/70 text-sm line-clamp-2 mb-4">{blog.excerpt}</p>
                                <button className="text-white font-bold flex items-center gap-2 hover:text-primary transition-colors">
                                    Read Article <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Video Section */}
            <section className="max-w-[1440px] mx-auto px-5 mt-24">
                <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px]" />
                    <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Watch Our Toy Review Series!</h2>
                            <p className="text-gray-400 text-lg">Subscribe to our channel to see the latest toys in action. We unbox and test for quality and fun.</p>
                            <button className="btn btn-primary rounded-full px-8 text-white gap-2">
                                <FaPlayCircle /> Watch on YouTube
                            </button>
                        </div>
                        <div className="flex-1 w-full aspect-video bg-gray-800 rounded-3xl border-8 border-gray-700 shadow-2xl flex items-center justify-center cursor-pointer group">
                             <FaPlayCircle size={80} className="text-white/20 group-hover:text-primary group-hover:scale-110 transition-all" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="max-w-4xl mx-auto px-5 mt-24 text-center pb-10">
                <div className="bg-primary/5 rounded-[3rem] p-12 border border-primary/10">
                    <h3 className="text-3xl font-black text-gray-800 mb-4">Never Miss a Story</h3>
                    <p className="text-gray-500 mb-8">Join 5,000+ parents who get our best parenting tips and toy deals via email.</p>
                    <div className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
                        <input type="email" placeholder="Your email address" className="input input-bordered rounded-full flex-1 focus:ring-primary" />
                        <button className="btn btn-primary rounded-full px-10 text-white">Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;