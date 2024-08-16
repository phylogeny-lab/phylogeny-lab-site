"use client";

import Link from 'next/link';
import React from 'react'
import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <div className='border-t border-neutral-700/80 h-20 w-[100vw] py-12 px-40'>
        <div className='grid grid-cols-3 justify-center text-center'>
          <div>
            <h1 className='font-bold text-lg mb-2'>Docs</h1>
            <div><Link className='hover:text-blue-500 text-gray-400 opacity-90' href='#'>API</Link></div>
            <div><Link className='hover:text-blue-500 text-gray-400 opacity-90' href='#'>Installation guides</Link></div>
            <div><Link className='hover:text-blue-500 text-gray-400 opacity-90' href='#'>Tutorials</Link></div>
          </div>
          <div>
            <h1 className='font-bold text-lg mb-2'>Extras</h1>
            <div><Link className='hover:text-blue-500 text-gray-400 opacity-90' href='#'>About</Link></div>
          </div>
          <div className='text-center'>
            <h1 className='font-bold text-lg mb-2'>Get involved</h1>
            <div><Link className='hover:text-blue-500 text-gray-400 opacity-90' href='#'>Contributing</Link></div>
            <div><Link className='hover:text-blue-500 text-gray-400 opacity-90' href='https://discord.gg/ZmVn9Kzc9f'>Discord</Link></div>
            <div className='flex justify-center items-center gap-2 hover:text-blue-500 text-gray-400 opacity-90'>
              <Link  href='https://patreon.com/GenomeLab?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink'>Donate </Link>
              <FaHeart size={14}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer