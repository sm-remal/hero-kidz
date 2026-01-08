import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href={"/"} className='flex justify-center items-center gap-2'>
                <Image alt='Logo-hero-Kidz' src={"/assets/logo.png"} width={40} height={30}></Image>
                <h2 className='text-xl font-bold'>Hero <span className='text-primary'>Kidz</span></h2>
            </Link>
        </div>
    );
};

export default Logo;