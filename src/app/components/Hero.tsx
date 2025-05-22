"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import cursor from '../assets/icon1.png';
import lightning from '../assets/icon2.png';
import Image from 'next/image';
import profilepicture from '../assets/profilepic.png';
import { Typewriter } from 'react-simple-typewriter';
import { CloudDownload } from 'lucide-react';

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/files/sample.pdf";
    link.download = 'docu.pdf';
    link.click();
}


const titles = [' Software Developer', ' Full Stack Developer', ' Tech Enthusiast'];


function useTypingEffect(words: string[], speed = 100, pause = 1000) {
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const current = words[index % words.length];
  
      let typingTimeout = setTimeout(() => {
        if (isDeleting) {
          setDisplayedText((prev) => prev.slice(0, -1));
        } else {
          setDisplayedText((prev) => current.slice(0, prev.length + 1));
        }
  
        if (!isDeleting && displayedText === current) {
          setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && displayedText === '') {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }, isDeleting ? speed / 2 : speed);
  
      return () => clearTimeout(typingTimeout);
    }, [displayedText, isDeleting, index, words, speed, pause]);
  
    return displayedText;
  }  



export const Hero = () => {
    const text = useTypingEffect(titles, 100, 1500);
    return (
        <div className='py-12 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)] px-4'>

            <div className='absolute rounded-[50%] sm:w-[150vw] sm:h-[90vh] w-[3000px] h-[1300px] sm:w-auto sm:h-auto top-[400px] sm:top-[450px] md:top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]'></div>

            <div className='relative'>
                <div className='text-4xl sm:text-5xl md:text-8xl font-bold text-center'>
                    <h1 className='text-[#98B4CE]'>Hi, I am</h1>
                    <h1 className='text-[#E48A57]'>Harsh Sharma</h1>
                </div>


                <motion.div
                    className='absolute left-[20px] top-[170px] sm:left-[40px] sm:top-[120px] md:left-[100px] md:top-[200px] lg:left-[100px] lg:top-[200px]  xl:left-[240px]'
                    drag
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Image
                        src={cursor}
                        height={130}
                        width={130}
                        alt="Cursor Icon"
                        draggable={false}
                        className="w-[90px] sm:w-[130px] md:w-[190px] lg:w-[240px] h-auto"
                    />
                </motion.div>

                <motion.div
                    className='absolute right-[20px] top-[340px] sm:right-[20px] sm:top-[180px] xl:right-[120px] xl:top-[20px]'
                    drag
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Image
                        src={lightning}
                        height={130}
                        width={130}
                        alt="Lightning Icon"
                        draggable={false}
                        className="w-[80px] sm:w-[130px] md:w-[160px] lg:w-[180px] h-auto"
                    />
                </motion.div>

                <p className='text-center text-lg  md:text-2xl max-w-[500px] mx-auto mt-8 text-white/80 px-2'>
                    I am a
                    <span className='text-semibold'>

                        
                            
                            {text}
                        

                    {/* <Typewriter
                        words={[' Software Developer', ' Full Stack Developer', ' Tech Enthusiast']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        /> */}
                        </span>
                </p>
{/* 
                <div className='mx-auto mt-8 text-center'>
                    <div className='flex justify-center items-center'>
                        <button className='border-2 border-gray-500 hover:cursor-pointer text-white/80 px-4 py-2 rounded-lg flex justify-center items-center group'>Download Resume
                            <CloudDownload className='w-5 h-5 ml-2 text-white/80 group-hover:animate-bounce' />
                        </button>
                    </div>
                </div> */}

                {/* <div className='text-center mt-6'><span className='inline-block cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 mx-auto mt-6 border-2 rounded-xl text-xl font-semibold border-gray-700 px-12 py-2'>Download Resume</span></div> */}

                <div className="mt-12 flex justify-center">
                    <Image
                        src={profilepicture}
                        alt="Profile Picture"
                        className='w-[180px] sm:w-[240px] md:w-[320px] h-auto rounded-full object-cover'
                    />
                </div>

            </div>
        </div>
    );
};
