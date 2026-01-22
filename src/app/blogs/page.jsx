import React from 'react';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import BlogFilter from '@/components/HandleFormComponents/BlogFilter'; 

// Mock Data for Blogs (Real project-এ এটি API থেকে আসবে)
const blogs = [
    {
        id: 1,
        title: "Best Educational Toys for Toddlers in 2024",
        excerpt: "Discover which toys help in cognitive development and motor skills for children aged 1-3...",
        author: "Sarah Khan",
        date: "Jan 15, 2024",
        category: "Development",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=500"
    },
    {
        id: 2,
        title: "The Importance of Creative Play in Childhood",
        excerpt: "Why messy play and imagination are crucial for building a child's future problem-solving skills...",
        author: "Dr. Rakib",
        date: "Jan 12, 2024",
        category: "Parenting",
        image: "https://images.unsplash.com/photo-1566367576585-051277d52997?q=80&w=500"
    },
    {
        id: 3,
        title: "How to Keep Your Child's Toys Organized",
        excerpt: "Small tips and tricks to manage the toy mess in your living room without losing your mind...",
        author: "Mila Ahmed",
        date: "Jan 08, 2024",
        category: "Tips & Tricks",
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=500"
    }
];

const BlogPage = () => {
    return (
        <div className="bg-base-100 min-h-screen pb-20">
            
            {/* Hero Section */}
            <section className="bg-primary/10 py-20 text-center px-5">
                <div className="max-w-3xl mx-auto space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-800 tracking-tight">
                        Our <span className="text-primary">Kidz</span> Blog
                    </h1>
                    <p className="text-lg text-gray-600">
                        Insights, tips, and stories about building a fun and educational environment for your little heroes.
                    </p>
                </div>
            </section>

            {/* Filter & Search (Client Component) */}
            <BlogFilter />

            {/* Blog Grid */}
            <section className="max-w-[1440px] mx-auto px-5 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="group bg-white rounded-[2rem] overflow-hidden border border-base-200 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-md text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                                        {blog.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 space-y-4">
                                <div className="flex items-center gap-4 text-xs text-gray-400">
                                    <span className="flex items-center gap-1"><FaCalendarAlt /> {blog.date}</span>
                                    <span className="flex items-center gap-1"><FaUser /> {blog.author}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {blog.excerpt}
                                </p>
                                <div className="pt-4">
                                    <button className="flex items-center gap-2 text-primary font-bold group/btn">
                                        Read More 
                                        <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-16">
                    <div className="join shadow-md">
                        <button className="join-item btn bg-white border-base-200">1</button>
                        <button className="join-item btn btn-primary">2</button>
                        <button className="join-item btn bg-white border-base-200">3</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;