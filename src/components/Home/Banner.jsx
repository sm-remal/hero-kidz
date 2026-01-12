import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='flex flex-col-reverse lg:flex-row max-w-[1440px] mx-auto px-5 justify-between items-center gap-8 lg:gap-0'>

                {/* Text Section */}
                <div className='flex-1 space-y-4.5 text-center lg:text-left'>
                    <h2 className='text-6xl font-bold'>Build a beautiful future for <span className='text-primary'>your child</span></h2>
                    <p>Every small step you take now helps build a brighter, more confident tomorrow for your child</p>
                    <button className='btn btn-primary text-white'>Explore Toy</button>
                </div>

                {/* Image Section */}
                <div className='flex flex-1 justify-center lg:justify-end'>
                    <Image
                        src={"/assets/hero.png"}
                        alt='Hero Image'
                        width={520}
                        height={500}
                        className="w-full max-w-[400px] lg:max-w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;