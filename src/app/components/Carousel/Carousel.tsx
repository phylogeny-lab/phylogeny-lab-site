"use client";

import React, { useEffect, useMemo } from 'react'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
    images: string[];
    delay: number;
}

function Carousel({ images, delay = 5000 }: Props) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const [direction, setDirection] = useState('left');

    const increment = () => {
        setDirection("right"); 
        setCurrentIndex(prev => (prev + 1) % images.length)
    }

    useEffect(() => {
        const interval = setInterval(increment, delay);

      return () => clearInterval(interval);
    }, [])

    const slideVariants = {
        hiddenRight: {
            x: "10%",
            opacity: 0,
        },
        hiddenLeft: {
            x: "-10%",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
        exit: {
            opacity: 1,
            transition: {
                duration: 0.4,
            },
        },
    };

    const handleDotClick = (index: any) => {
        setDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
    };

    return (
        <div className='z-20'>
            <AnimatePresence>
                <motion.img
                    className='rounded-lg border-1 border-neutral-700/80 shadow-lg mx-2 my-4 z-20'
                    key={currentIndex}
                    src={images[currentIndex]}
                    variants={slideVariants}
                    fetchPriority='high'
                    initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                    animate="visible"
                    exit="exit"
                />
            </AnimatePresence>

            <div className="z-20 flex gap-4 justify-center">
                {images.map((_, index) => (
                    <motion.div
                        key={index}
                        className={`dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                        whileHover="hover"
                    ></motion.div>

                ))}
            </div>
        </div>
    )
}

export default Carousel