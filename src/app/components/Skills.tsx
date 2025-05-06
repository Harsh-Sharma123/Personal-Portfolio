"use client"

import { motion } from 'framer-motion';
import React from 'react'
import { FaCss3, FaHtml5, FaJsfiddle, FaJsSquare, FaMdb, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { SiMongodb, SiNextdotjs } from 'react-icons/si';


export const Skills = () => {

    const skillIcons = [
        { icon : <FaHtml5 size={140} />, label: 'HTML' },
        { icon: <FaCss3 size={140} />, label: 'CSS' },
        { icon: <FaJsSquare size={140} />, label: 'Javascript' },
        { icon: <FaReact size={110} />, label: 'ReactJS'},
        { icon : <FaPython size={140} />, label: 'Python' },
        { icon: <SiNextdotjs size={140} />, label: 'NextJS' },
        { icon: <FaNodeJs size={140} />, label: 'NodeJS' },
        { icon: <SiMongodb size={110} />, label: 'MongoDB'}
    ]

  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-16 text-center'>
        <div className='text-white w-auto sm:w-[500px]  md:min-w-[650px] lg:min-w-[950px] mx-auto sm:p-8 text-center'>
            <h2 className='text-6xl sm:text-6xl font-bold mb-12'>What I do</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto'>
                {skillIcons.map((skill, index) => (
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        key={index}
                        className='h-[110px] w-[110px] sm:h-[160px] sm:w-[160px] lg:h-[220px] lg:w-[220px] flex flex-col justify-center items-center bg-white/10 p-4 rounded-xl mx-auto'>
                            {skill.icon}
                            <p className='mt-2'>{skill.label}</p>
                        </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}
