import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='mt-12 text-white/70 py-8 max-w-[1000px]  mx-auto border-t border-gray-700 pt-4 px-6 md:px-0 flex justify-between flex-col sm:flex-row items-center'>
        <h1 className='mt-2 sm:mt-0 text-xl lg:text-2xl font-bold'>Harsh Sharma</h1>

        <div className='mt-2 sm:mt-0 font-bold'>Made with Love❤️</div>

        <div className=' mt-2 sm:mt-0 flex space-x-8 items-center justify-center'>
            <a href="https://www.linkedin.com/in/harsh-sharma-a67254195/" className='hover:text-gray-300'>
                <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/HarshSharma7" className='hover:text-gray-300'>
                <FaTwitter size={24} />
            </a>
            <a href="#" className='hover:text-gray-300'>
                <FaInstagram size={24} />
            </a>
        </div>
    </div>
  )
}
