"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href, children}) => {

    const pathName = usePathname();

    const isActive = href === pathName;

    return (
       <Link href={href} className={`${isActive ? "border-b-2" : ""}`}>
            {children}
       </Link>
    );
};

export default NavLinks;