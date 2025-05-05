import Image from 'next/image';
import React from 'react';
import phone from '../assets/phone.png';
import email from '../assets/mail.png';

export const Contact = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id="contact">

      <div className='flex justify-center items-center'>
        <ul className='space-y-4'>
          <li className='flex items-center'>
            <Image src={phone} alt="phone" className='h-[110px] w-auto mr-6' />
            <p className='text-xl'>+91 9027117571</p>
          </li>
          <li className='flex items-center'>
            <Image src={email} alt="email" className='h-[110px] w-auto pr-6' />
            <p className='text-xl'>hs804506@gmail.com</p>
          </li>
        </ul>
      </div>

      <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
        <h2 className='text-5xl font-bold text-orange-400 mb-4'>Let's Connect</h2>
        <p className='text-white/70 mb-6'>Send me a message and lets schedule a call</p>
        <form action="https://getform.io/f/ajjmzpya" className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            <input name="name" type="text" className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus-ring-orange-400' placeholder='First Name'/>
            <input name="name" type="text" className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus-ring-orange-400' placeholder='Last Name'/>
            <input name="email" type="text" className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus-ring-orange-400' placeholder='Email'/>
            <input name="phone" type="phone" className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus-ring-orange-400' placeholder='Phone'/>
          </div>
          <textarea name="message" className='bg-black/70 w-full rounded-xl p-3 focus:outline-none focus-ring-2 focus-ring-orange-400' placeholder='Your Message' />
          <button className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full rounded-xl font-semibold text-xl'>Send Message</button>
        </form>
      </div>

    </div>
  )
}
