"use client";

import { CheckCircle2 } from 'lucide-react';
import { BaseUrl, checklistItems } from "@/app/constants/consts"
import React from 'react'
import Reveal from '../Animations/Reveal';

function Features() {
  return (
    <div className='relative mb-20 mt-60' id='features'>
        <Reveal>
        <h1 className='text-4xl sm:text-4xl lg:text-5xl mt-6 tracking-wide text-center mb-10'>Features</h1>
        </Reveal>
        <div className='flex flex-wrap justify-center'>
          
          <div className='p-2 w-full lg:w-1/2'>
          <Reveal>
            <img height={500} width={700} src={BaseUrl + '/assets/code.png'} alt="img" />
            </Reveal>
            <Reveal>
            <p className='text-gray-400 font-light mx-20 text-center text-opacity-90'>
              Built with the NextJS framework for the frontend, and Python & Celery Backend for handling concurrent, long-running tasks.
            </p>
            </Reveal>
          </div>
          
          <div className='pt-12 w-full lg:w-1/2'>
          
            {checklistItems.map((item, index) => (
              <Reveal>
              <div key={index} className='flex mb-12'>
                <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                  <p className='text-md text-gray-400 font-light text-opacity-90'>{item.description}</p>
                </div>
              </div>
              </Reveal>
            ))}
            
          </div>
        </div>
    </div>
  )
}

export default Features