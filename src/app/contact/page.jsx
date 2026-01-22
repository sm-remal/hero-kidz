"use client";
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert("Message Sent! We will get back to you soon.");
    };

    return (
        <div className="bg-base-100 min-h-screen">
            
            {/* 1. Header Section */}
            <section className="bg-primary/5 py-16 text-center px-5">
                <div className="max-w-2xl mx-auto space-y-3">
                    <h5 className="text-primary font-bold tracking-wide uppercase">Get in touch</h5>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">We'd Love to Hear From You</h1>
                    <p className="text-gray-600">
                        Have a question about a toy? Need help with an order? Or just want to say hi? 
                        We are here to help you build a beautiful future.
                    </p>
                </div>
            </section>

            {/* 2. Main Content Section */}
            <section className="max-w-[1440px] mx-auto px-5 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    
                    {/* Left Column: Contact Info & Map */}
                    <div className="space-y-8">
                        {/* Info Cards */}
                        <div className="space-y-6">
                            <ContactInfoCard 
                                icon={<FaPhoneAlt />} 
                                title="Phone Number" 
                                text="+880 123 456 7890" 
                                subText="Mon-Fri, 9am - 6pm"
                            />
                            <ContactInfoCard 
                                icon={<FaEnvelope />} 
                                title="Email Address" 
                                text="support@herokidz.com" 
                                subText="We reply within 24 hours"
                            />
                            <ContactInfoCard 
                                icon={<FaMapMarkerAlt />} 
                                title="Office Location" 
                                text="123 Kids Avenue, Dhaka" 
                                subText="Bangladesh"
                            />
                        </div>

                        {/* Embedded Map */}
                        <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner border border-base-200 relative group">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902307527632!2d90.39103631536268!3d23.75086298458908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b888ad3b91bf%3A0xbcb44ad6b0f54070!2sDhaka!5e0!3m2!1sen!2sbd!4v1689625345678!5m2!1sen!2sbd" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy"
                                className="grayscale group-hover:grayscale-0 transition duration-500"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column: Interactive Form */}
                    <div className="bg-base-100 rounded-3xl p-8 lg:p-10 shadow-xl border border-base-200">
                        <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">First Name</span>
                                    </label>
                                    <input type="text" placeholder="John" className="input input-bordered w-full focus:input-primary focus:bg-primary/5 transition-all" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="Doe" className="input input-bordered w-full focus:input-primary focus:bg-primary/5 transition-all" />
                                </div>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Email Address</span>
                                </label>
                                <input type="email" placeholder="john@example.com" className="input input-bordered w-full focus:input-primary focus:bg-primary/5 transition-all" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Subject</span>
                                </label>
                                <select className="select select-bordered w-full focus:select-primary focus:bg-primary/5 transition-all">
                                    <option disabled defaultValue>Select an option</option>
                                    <option>General Inquiry</option>
                                    <option>Order Support</option>
                                    <option>Wholesale</option>
                                </select>
                            </div>

                            {/* FIXED TEXTAREA SECTION */}
                            <div className="form-control w-full">
                                <label className="label" htmlFor="message">
                                    <span className="label-text font-semibold">Your Message</span>
                                </label>
                                <textarea 
                                    id="message"
                                    className="textarea textarea-bordered h-32 w-full focus:textarea-primary focus:bg-primary/5 transition-all text-base" 
                                    placeholder="How can we help you today?"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full text-white text-lg gap-2 mt-4 hover:scale-[1.01] transition-transform">
                                <FaPaperPlane className="text-sm" /> Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* 3. FAQ Teaser / Bottom Bar */}
            <section className="bg-base-200 py-12 px-5 text-center">
                <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="bg-white p-4 rounded-full shadow-sm text-primary">
                        <FaClock size={24} />
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold text-lg">Need a quicker answer?</h4>
                        <p className="text-gray-600">Check our FAQ page for instant answers to common questions.</p>
                    </div>
                    <button className="btn btn-outline btn-primary ml-0 md:ml-4">Visit FAQ</button>
                </div>
            </section>

        </div>
    );
};

// Helper Component for the Left Column Items
const ContactInfoCard = ({ icon, title, text, subText }) => {
    return (
        <div className="flex items-center gap-5 p-5 bg-white rounded-xl shadow-sm border border-base-200 hover:shadow-md hover:border-primary/30 transition-all duration-300 group cursor-default">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-gray-800 text-lg">{title}</h4>
                <p className="text-primary font-semibold">{text}</p>
                <p className="text-xs text-gray-400 mt-0.5">{subText}</p>
            </div>
        </div>
    );
};

export default ContactPage;