import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ContactForm from '@/components/HandleFormComponents/ContactForm'; 

const ContactPage = () => {
    return (
        <div className="bg-base-100 min-h-screen">
            
            {/* 1. Header Section (Static) */}
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
                    
                    {/* Left Column: Static Contact Info & Map */}
                    <div className="space-y-8">
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.24240755913!2d90.4125!3d23.8128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ4JzQ2LjEiTiA5MMKwMjQnNDUuMCJF!5e0!3m2!1sen!2sbd!4v1625560000000" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy"
                                className="grayscale group-hover:grayscale-0 transition duration-500"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column: Client Form Component */}
                    <ContactForm />
                </div>
            </section>

            {/* 3. Bottom Bar (Static) */}
            <section className="bg-base-200 py-12 px-5 text-center">
                <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
                    <div className="bg-white p-4 rounded-full shadow-sm text-primary">
                        <FaClock size={24} />
                    </div>
                    <div className="text-left">
                        <h4 className="font-bold text-lg text-gray-800">Need a quicker answer?</h4>
                        <p className="text-gray-600">Check our FAQ page for instant answers to common questions.</p>
                    </div>
                    <button className="btn btn-outline btn-primary ml-0 md:ml-4">Visit FAQ</button>
                </div>
            </section>

        </div>
    );
};

// Helper Component (Server side optimized)
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