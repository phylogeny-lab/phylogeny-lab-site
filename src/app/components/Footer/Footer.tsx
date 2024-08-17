"use client";

import { CommunityLinks, DocsLinks, PlatformLinks } from '@/app/constants/consts';
import Link from 'next/link';
import React from 'react'
import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <div className='border-t border-neutral-700/80 h-20 w-[100vw] py-6 px-40'>
        <div className='grid grid-cols-3 justify-center text-center'>
          <div>
            <h1 className='font-bold text-lg mb-2'>Docs</h1>
            {DocsLinks.map((item, index) => (
              <div key={index}><Link className='hover:text-blue-500 text-gray-400 opacity-90' href={item.href}>{item.text}</Link></div>
            ))}
          </div>
          <div>
            <h1 className='font-bold text-lg mb-2'>Platform</h1>
            {PlatformLinks.map((item, index) => (
              <div key={index}><Link className='hover:text-blue-500 text-gray-400 opacity-90' href={item.href}>{item.text}</Link></div>
            ))}
          </div>
          <div className='text-center'>
            <h1 className='font-bold text-lg mb-2'>Get involved</h1>
            {CommunityLinks.map((item, index) => (
              <div key={index}><Link className='hover:text-blue-500 text-gray-400 opacity-90' href={item.href}>{item.text}</Link></div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Footer