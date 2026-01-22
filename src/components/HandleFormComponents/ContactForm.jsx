"use client"; // এটি একটি ক্লায়েন্ট কম্পোনেন্ট

import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // আপনার API বা EmailJS লজিক এখানে দিন
        alert("Message Sent! We will get back to you soon.");
    };

    return (
        <div className="bg-base-100 rounded-3xl p-8 lg:p-10 shadow-xl border border-base-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h3>
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
                    <select className="select select-bordered w-full focus:select-primary focus:bg-primary/5 transition-all" defaultValue="General Inquiry">
                        <option>General Inquiry</option>
                        <option>Order Support</option>
                        <option>Wholesale</option>
                    </select>
                </div>

                <div className="form-control w-full">
                    <label className="label" htmlFor="message">
                        <span className="label-text font-semibold">Your Message</span>
                    </label>
                    <textarea 
                        id="message"
                        className="textarea textarea-bordered h-32 w-full focus:textarea-primary focus:bg-primary/5 transition-all text-base" 
                        placeholder="How can we help you today?"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full text-white text-lg gap-2 mt-4 hover:scale-[1.01] transition-transform">
                    <FaPaperPlane className="text-sm" /> Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;