import React from 'react';
import ProductCardSkeleton from '@/components/skeleton/ProductCardSkeleton';

const loading = () => {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                [...Array(8)].map((_, index) => (<ProductCardSkeleton key={index}></ProductCardSkeleton>))
            }
        </div>
    );
};

export default loading;