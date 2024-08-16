"use client";

import React from 'react'
import { Button } from '@nextui-org/button';
import { BaseUrl } from '@/app/constants/consts';
import { useRouter } from 'next/navigation'

function Hero() {

    const router = useRouter()

  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='capitalize text4xl sm:text-6xl lg:text-6xl text-center tracking-wide'>
            Your 
            <span className='bg-gradient-to-r from-green-400 to-green-600 capitalize text-transparent bg-clip-text'>
                {" "}all in one{" "}
            </span> 
            phylogenetics web portal
        </h1>
        <p className='mt-10 text-xl text-center text-neutral-400 max-w-4xl'>
            An open-source UI tool for evolutionary biologists.
        </p>
        <p className='text-xl text-center text-neutral-400 max-w-4xl'>
            Includes easy access to command-line tools like NCBI-BLAST, Clustalw,
            Muscle, MrBayes and more!
        </p>
        <div className="flex justify-center my-10">
            <Button onClick={() => router.push(`${BaseUrl}#downloads`)} className='bg-gradient-to-r from-green-500 to-green-700 w-32 h-12 text-lg py-3 px-4 mx-3 rounded-md'>Download</Button>
            <Button className='py-3 px-4 mx-3 rounded-md border bg-transparent w-32 h-12 text-lg '>See docs</Button>
        </div>
        <div className='flex mt-10 justify-center'>
            <img 
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/blast_screenshot.png`} 
            className='rounded-lg w-4/5 border-1 border-neutral-700/80 shadow-lg mx-2 my-4'>
            </img>
        </div>
    </div>
  )
}

export default Hero