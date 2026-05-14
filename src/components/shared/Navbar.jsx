import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import userPic from "@/assets/user.png";
import NavLinks from './NavLinks';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto items-center mt-6 mb-16'>
            <div></div>
            <ul className='flex justify-between gap-4'>
                <li><NavLinks href="/">Home</NavLinks></li>
                <li><NavLinks href="/about">About</NavLinks></li>
                <li><NavLinks href="/career">Career</NavLinks></li>
            </ul>

            <div className='flex items-center gap-2.5'>
                <Image src={userPic} alt='user pic' width={60} height={60} ></Image>
                <button className='btn bg-[#403F3F] text-white'>
                    <Link href={"/login"}>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;

