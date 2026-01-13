import React from 'react';
import ProductCard from '../cards/ProductCard';
import { getProducts } from '@/actions/products';

export const metadata = {
    title: "Our Programs & Details",
    description:
        "Explore Hero Kidz programs designed to support children's learning, creativity, and overall development.",

    openGraph: {
        title: "Hero Kidz Programs & Details",
        description:
            "Discover how Hero Kidz helps children grow through structured learning and care.",
        images: [
            {
                url: "https://i.ibb.co/zTbL48y1/image.png",
                width: 1200,
                height: 630,
                alt: "Hero Kidz Details Page",
            },
        ],
    },
};


const Products = async () => {
    const products = await getProducts()
    console.log(products)
    return (
        <div className='max-w-[1440px] mx-auto px-5'>
            <h2 className='text-4xl font-bold text-center mb-12'>Products</h2>
            <div className='grid md:grid-cols-4 gap-4'>
                {
                    products?.map((product, index) => <ProductCard key={index} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;