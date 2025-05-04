import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 px-6 md:px-0 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Harsh Sharma</h1>

        <div className='flex space-x-8 mt-4'>
            <a href="#" className='hover:text-gray-300'>
                <FaLinkedin size={24} />
            </a>
            <a href="#" className='hover:text-gray-300'>
                <FaTwitter size={24} />
            </a>
            <a href="#" className='hover:text-gray-300'>
                <FaInstagram size={24} />
            </a>
        </div>
    </div>
  )
}
