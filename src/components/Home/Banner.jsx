import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
           <div className='flex-1 space-y-4.5'>
            <h2 className='text-4xl font-bold'>Build a beautiful future for <span className='text-primary'>your child</span></h2>
            <p>Every small step you take now helps build a brighter, more confident tomorrow for your child</p>
            <button className='btn btn-primary text-white'>Explore Toy</button>
           </div>
           <div className='flex flex-1 justify-end'>
            <Image src={"/assets/hero.png"} alt='Hero Image' width={520} height={500}></Image>
           </div>
        </div>
    );
};

export default Banner;