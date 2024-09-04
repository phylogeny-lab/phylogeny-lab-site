"use client";

import React from 'react'
import { BaseUrl, DownloadData, GITHUB_REPO_CLONE, navItems } from "@/app/constants/consts"
import { Button } from '@nextui-org/button';
import { Button as MuiButton } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { FaArrowRight } from 'react-icons/fa';
import Box from '@mui/material/Box';
import { FaDownload } from 'react-icons/fa';
import Link from 'next/link';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Snippet, useDisclosure } from '@nextui-org/react';
import Reveal from '../Animations/Reveal';

function Downloads() {

  const steps = [
    {
      label: 'Install Docker',
      description: `Make sure Docker and Docker Compose is installed on your machine. Test installation with:`,
      snippet: 'docker -v'
    },
    {
      label: 'Download Repo',
      description:
        `Get the latest version from ${GITHUB_REPO_CLONE}. Or alternatively clone with git:`,
      snippet: `git clone ${GITHUB_REPO_CLONE}`
    },
    {
      label: 'Bring up containers',
      snippet: 'docker-compose up --build',
      description: `Bring up containers with the following command in your terminal:`,
    },
  ];

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>

      <div className='relative mb-20' id='downloads'>
        <Reveal>
          <h1 className='text-4xl sm:text-4xl lg:text-5xl mt-6 tracking-wide text-center mb-16'>Downloads</h1>
        </Reveal>
        <div className='flex gap-1 text-lg font-semibold text-gray-400 text-center justify-center mb-10'>
          <p>Select one or more download options depending on your hosting requirements.</p>
          <p>Not sure which is for you? See our</p>
          <Link className='text-blue-500' href='#'>guide</Link>
        </div>

        <div className='flex flex-wrap gap-10 mb-10'>
          {DownloadData.map((item: any) => (
            <Reveal>
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
                    <Button className='bg-green-600 z-30' variant='solid' onClick={() => { item.id === 3 && onOpen() }}><FaDownload />Download</Button>
                    <Button className='ml-auto text-sm hover:border-gray-100 z-30' variant='bordered'>Read more<FaArrowRight /></Button>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}

        </div>
      </div>

      <Modal size='2xl' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent >
          {(onClose) => (
            <>
              <ModalHeader className='text-xl text-gray-200 ml-1'>Run with Docker Compose</ModalHeader>
              <ModalBody className='text-gray-400'>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel
                        optional={
                          index === steps.length - 1 ? (
                            <Typography variant="caption">Last step</Typography>
                          ) : null
                        }
                      >
                        {step.label}
                      </StepLabel>
                      <StepContent>
                        <Typography>{step.description}</Typography>
                        {step.snippet && <Snippet className='mt-2 mb-2'>{step.snippet}</Snippet>}
                        <Box sx={{ mb: 2 }}>
                          <MuiButton
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                          </MuiButton>
                          <MuiButton
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Back
                          </MuiButton>
                        </Box>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed! Make sure to stop containers after you're finished!</Typography>
                    <Snippet className='mt-2'>docker-compose down</Snippet>
                    <Button size='sm' variant='light' onClick={handleReset}>
                      Return
                    </Button>
                  </Paper>

                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Downloads