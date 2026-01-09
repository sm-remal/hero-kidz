import React from 'react';
import products from "@/data/toys.json"
import ProductCard from '../cards/ProductCard';

const Products = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mb-12'>Products</h2>
            <div className='grid md:grid-cols-4 gap-4'>
                {
                    products.map((product, index) => <ProductCard key={index} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;