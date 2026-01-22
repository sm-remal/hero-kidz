import Image from 'next/image';
import React from 'react';
import { FaBullseye, FaHeart, FaRocket, FaChild } from 'react-icons/fa';

const AboutPage = () => {
    return (
        <div className="bg-base-100">
            {/* 1. Hero / Header Section */}
            <section className="bg-primary/5 py-16">
                <div className="max-w-[1440px] mx-auto px-5 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Empowering the <span className="text-primary">Next Generation</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        At Hero Kidz, we believe every child has a superpower. Our mission is to provide the tools, toys, and inspiration to help them discover it.
                    </p>
                </div>
            </section>

            {/* 2. Our Story Section (Image & Text) */}
            <section className="max-w-[1440px] mx-auto px-5 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 relative group">
                        <div className="absolute -inset-4 rounded-2xl blur-lg transition duration-500"></div>
                        <Image 
                            src="https://i.pinimg.com/736x/e7/53/96/e7539688ff6528abc204d745b0ca1a87.jpg" 
                            alt="Kids playing" 
                            width={600} 
                            height={400} 
                            className="relative rounded-2xl object-cover"
                        />
                    </div>
                    <div className="flex-1 space-y-6">
                        <div className="badge badge-primary badge-outline px-4 py-3">Our Journey</div>
                        <h2 className="text-4xl font-bold">Why We Started <span className="text-primary">Hero Kidz</span></h2>
                        <p className="text-gray-600 leading-relaxed">
                            Founded in 2024, Hero Kidz began with a simple observation: children learn best when they are having fun. We saw a gap in the market for toys that weren't just "distractions," but catalysts for growth and confidence.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            What started as a small local passion project has grown into a community of parents and educators dedicated to building a brighter tomorrow, one small step at a time.
                        </p>
                        <div className="flex gap-8 pt-4">
                            <div>
                                <h4 className="text-3xl font-bold text-primary">10k+</h4>
                                <p className="text-sm text-gray-500">Happy Kids</p>
                            </div>
                            <div className="border-l border-gray-200 h-12"></div>
                            <div>
                                <h4 className="text-3xl font-bold text-primary">500+</h4>
                                <p className="text-sm text-gray-500">Safe Toys</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Values (Interactive Cards) */}
            <section className="">
                <div className="max-w-[1440px] mx-auto px-5">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Values That Guide Us</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((val, index) => (
                            <div key={index} className="card bg-base-100 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-base-200">
                                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-primary mb-6">
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Call to Action (CTA) */}
            <section className="max-w-[1440px] mx-auto px-5 py-24">
                <div className="bg-primary rounded-[2rem] p-10 lg:p-20 text-center text-white relative overflow-hidden group">
                    {/* Decorative Circles */}
                    <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to see your child shine?</h2>
                        <p className="text-primary-content/80 text-lg mb-10 max-w-xl mx-auto">
                            Join thousands of parents who trust Hero Kidz for safe, educational, and fun growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn btn-lg bg-white text-primary border-none hover:bg-gray-100">Shop Collection</button>
                            <button className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const values = [
    {
        icon: <FaHeart />,
        title: "Child Safety First",
        desc: "Every toy in our shop undergoes rigorous testing to ensure it is 100% non-toxic and child-safe."
    },
    {
        icon: <FaBullseye />,
        title: "Purposeful Play",
        desc: "We don't just sell toys; we sell experiences that foster cognitive and emotional development."
    },
    {
        icon: <FaChild />,
        title: "Growth Mindset",
        desc: "Our products are designed to challenge kids just enough to build their confidence."
    },
    {
        icon: <FaRocket />,
        title: "Future Ready",
        desc: "Preparing kids for a digital and creative future through STEAM-based learning tools."
    }
];

export default AboutPage;