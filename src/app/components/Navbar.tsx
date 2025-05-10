"use client";

import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'motion/react';
import { ImInsertTemplate } from 'react-icons/im';

const navLinks = [
    {title: "About", path: "#about"},
    {title: "Contact", path: "#contact"}
];


export const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [active, setActive] = useState(0);
    
    const toggleNav = () => {
        setNav(!nav);
    }

    const closeNav = () => {
        setNav(false);
    }

  const menuVariants = {
    open: {
        x: 0,
        transition: {
            stiffness: 20,
            damping: 15
        }
    },
    closed: {
        x: '-100%',
        transition: {
            stiffness: 20,
            damping: 15
        }
    }
  }

    return (
        <div className='text-white/70 pt-6 sticky top-0 z-50 backdrop-blur bg-black/70'>
            <div className='hidden md:flex justify-center items-center px-4 py-2 mx-auto max-w-[400px]'>
                <ul className='flex flex-row space-x-8 p-4 font-semibold'>
                    {navLinks.map((item, index) => (
                        <Link href={item.path} key={index} className='group'>
                            <p>{item.title}</p>
                            {active === index ? <div className='relative'>
                                <div className='absolute w-2/3 h-2 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full'></div> 
                            </div> : <></> }
                        </Link>
                    ))}        
                </ul>

            </div>


            <div onClick={toggleNav}  className='md:hidden absolute top-[40px] right-5 border rounded border-white/70 p-2 z-50'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            
            <motion.div 
                initial={false}
                animate={nav ? 'open': 'closed'}
                variants={menuVariants}
                className='md:hidden fixed left-0 top-0 w-full z-40 bg-black/90'
            >
                <ul className='text-2xl text-center font-semibold my-24 space-y-8'>
                    {navLinks.map((link, index) => (
                        <li className='' key={index}>
                            <Link href={link.path} onClick={closeNav}>{link.title}</Link>
                        </li>
                    ))}
                </ul>

            </motion.div>

        </div>
  )
}
