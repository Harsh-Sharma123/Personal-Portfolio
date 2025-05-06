"use client";

import React from 'react';
import { motion } from 'framer-motion';

import cursor from '../assets/icon1.png';
import lightning from '../assets/icon2.png';
import Image from 'next/image';
import profilepicture from '../assets/profilepic.png';

export const Hero = () => {
  return (
    <div className='py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)] px-4'>

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

      <p className='text-center text-lg  md:text-2xl max-w-[500px] mx-auto mt-12 text-white/80 px-2'>
        I am a Software Developer
      </p>

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
