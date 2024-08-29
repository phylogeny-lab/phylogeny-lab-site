"use client";

import React from 'react'
import { BaseUrl, DownloadData, GITHUB_REPO_CLONE, navItems } from "@/app/constants/consts"
import { Button } from '@nextui-org/button';

import { FaArrowRight } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import Link from 'next/link';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Snippet, useDisclosure } from '@nextui-org/react';

function Downloads() {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className='relative mb-20' id='downloads'>
        <h1 className='text-4xl sm:text-4xl lg:text-5xl mt-6 tracking-wide text-center mb-16'>Downloads</h1>
        <div className='flex gap-1 text-lg font-semibold text-gray-400 text-center justify-center mb-10'>
          <p>Select one or more download options depending on your hosting requirements.</p>
          <p>Not sure which is for you? See our</p>
          <Link className='text-blue-500' href='#'>guide</Link>
        </div>

        <div className='flex flex-wrap gap-10 mb-10'>
          {DownloadData.map((item: any) => (
            <div
              style={{ backgroundImage: `url(${BaseUrl + item.background})` }}
              className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
              key={item.id}>
              <div className='relative flex flex-col min-h-[22rem] p-[2.4rem]'>
                <h5 className='h-2 mb-5 text-xl capitalize font-semibold'>{item.name}</h5>
                <p className='body-2 mb-6 text-n-3 mt-4 font-light text-opacity-90 text-gray-400'>
                  {item.description}
                </p>
                <div className='flex items-center mt-auto'>
                  <Button className='bg-green-600 z-30' variant='solid' onClick={onOpen}><FaDownload />Download</Button>
                  <Button className='ml-auto text-sm hover:border-gray-100 z-30' variant='bordered'>Read more<FaArrowRight /></Button>
                </div>
                
              </div>
            </div>
          ))}
          
        </div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Downloads