"use client";

import React, { useState } from 'react'
import { navItems } from "@/app/constants"
import Link from 'next/link';
import { Menu, X} from "lucide-react"
import { Button } from '@nextui-org/button';

function Navbar() {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    return (
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
            <div className=' px-6 relative text-sm'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className='h-10 w-10 mr-2' src={`${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`} alt="logo" />
                        <span className='text-xl tracking-tight'>Phylogeny Lab</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index) => (
                            <Link href={item.href} key={index} className='flex items-center gap-2'>
                                {item.icon}
                                <p>{item.label}</p>
                            </Link>
                        ))}
                    </ul>
                    <div className='lg:hidden md:flex flex-col justify-end'>
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4 flex items-center'>
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar