import React from 'react';
import ProductCard from '../cards/ProductCard';
import { getProducts } from '@/actions/products';


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