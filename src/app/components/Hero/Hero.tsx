"use client";

import React from 'react'
import { Button } from '@nextui-org/button';
import { backgroundURLs, BaseUrl } from '@/app/constants/consts';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import Carousel from '../Carousel/Carousel';

function Hero() {

    const router = useRouter()

  return (
    <div className={`flex flex-col items-center h-screen`} >
        {/* Photo by Nikolett Emmert on Unsplash
        https://unsplash.com/@niki_emmert?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash
        Original photo:
        https://unsplash.com/photos/a-close-up-of-a-small-lizard-on-a-black-background-JqqBpHDsLOU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash */}
        <img className='absolute w-screen h-screen top-0 z-10' src={`${BaseUrl}/assets/background.jpg`} />
        <h1 className='capitalize text4xl sm:text-6xl lg:text-6xl text-center tracking-wide z-20'>
            Your 
            <span className='bg-gradient-to-r from-green-400 to-green-600 capitalize text-transparent bg-clip-text'>
                {" "}all in one{" "}
            </span> 
            phylogenetics web portal
        </h1>
        <p className='mt-12 text-xl text-center text-neutral-300 max-w-4xl z-20'>
            An open-source UI tool for evolutionary biologists.
        </p>
        <p className='text-xl text-center text-neutral-300 max-w-5xl z-20'>
            Includes easy access to command-line tools like NCBI-BLAST, Clustalw,
            Muscle, MrBayes and more!
        </p>
        <div className="flex justify-center my-10 mt-36">
            <Button onClick={() => router.push(`${BaseUrl}#downloads`)} className='z-20 bg-gradient-to-r from-green-500 to-green-700 w-36 h-14 text-lg py-3 px-4 mx-3 rounded-md shadow-lg'>Download</Button>
            <Button onClick={() => router.push('/docs')} className='z-20 py-3 px-4 mx-3 rounded-md border bg-transparent w-36 h-14 text-lg hover:bg-white hover:text-gray-800'>See docs</Button>
        </div>
        <div className='flex mt-8 justify-center w-4/5'>
            <Carousel delay={10000} images={backgroundURLs} />
        </div>
    </div>
  )
}

export default Hero