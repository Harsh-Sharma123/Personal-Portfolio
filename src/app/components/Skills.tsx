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
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-16'>
        <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
            <h2 className='text-6xl font-bold mb-4'>What I do</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {skillIcons.map((skill, index) => (
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        key={index}
                        className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                            {skill.icon}
                            <p className='mt-2'>{skill.label}</p>
                        </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}
