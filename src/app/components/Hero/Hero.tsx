"use client";

import React from 'react'
import { Button } from '@nextui-org/button';

function Hero() {
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
            <Button className='bg-gradient-to-r from-green-500 to-green-700 w-32 h-12 text-lg py-3 px-4 mx-3 rounded-md'>Download</Button>
            <Button className='py-3 px-4 mx-3 rounded-md border bg-transparent w-32 h-12 text-lg '>See docs</Button>
        </div>
        <div className='flex mt-10 justify-center'>
            <video autoPlay loop muted className='rounded-lg w-1/2 border border-gray-400 shadow-md mx-2 my-4'>
                <source src={`${process.env.NEXT_PUBLIC_BASE_URL}/video1.mp4`} type="video/mp4"/>
                Your browser does not support the video tab
            </video>
            <video autoPlay loop muted className='rounded-lg w-1/2 border border-gray-400 shadow-md mx-2 my-4'>
                <source src={`${process.env.NEXT_PUBLIC_BASE_URL}/video1.mp4`} type="video/mp4"/>
                Your browser does not support the video tab
            </video>
        </div>
    </div>
  )
}

export default Hero