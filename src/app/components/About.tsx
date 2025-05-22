import Image from "next/image";
import React from "react";
import book from "../assets/book.png";
import finance from "../assets/finance.png";
import card from "../assets/card.png";
import pc from "../assets/pc.png";

const About = () => {

    
        const platforms = [
            {
              name: 'LeetCode',
              url: 'https://leetcode.com/u/HarshSharma_01/',
              icon: 'https://img.icons8.com/?size=160&id=wDGo581Ea5Nf&format=png'
            },
            {
              name: 'GitHub',
              url: 'https://github.com/Harsh-Sharma123',
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
            },
            {
              name: 'GeeksforGeeks',
              url: 'https://www.geeksforgeeks.org/user/hs804506/',
              icon: 'https://img.icons8.com/?size=100&id=AbQBhN9v62Ob&format=png&color=000000'
            }
          ];


  return (
    <div className="max-w-[1200px] mx-auto mt-20" id="about">
      <h1 className="text-white text-6xl text-center max-w-[320px] mx-auto font-semibold p-4 mb-4">
        About <span className="text-orange-400">Me</span>
      </h1>
      {/* 
    <div className='px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center'>

        <div className='w-full md:col-span-5 relative bg-white/10 background-blue-lg border border-white/20 rounded-xl overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
            <div className='flex flex-row p-6 items-center'>
                <Image
                    src={book}
                    alt="book"
                    className='w-auto h-[130px]'
                />
                <div className='flex flex-col mt-4'>
                    <h2 className='text-2xl font-bold text-white/80'>Education</h2>
                    <p className='text-lg text-white/70 mt-2'>I hold a degree in Computer Science and I enjoy learning new technologies.</p>
                </div>
            </div>
        </div>

        <div className='w-full md:col-span-3 relative bg-white/10 background-blue-lg border border-white/20 rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
            <div className='flex flex-row p-6 items-center'>
                <Image
                    src={pc}
                    alt="pc"
                    className='w-auto h-[130px]'
                />
                <div className='flex flex-col mt-4'>
                    <h2 className='text-2xl font-bold text-white/80'>Problem Solving</h2>
                    <p className='text-lg text-white/70 mt-2'>I approach challenges with a logical and systematic mindset.</p>
                </div>
            </div>
        </div>

        <div className='w-full md:col-span-3 relative bg-white/10 background-blue-lg border border-white/20 rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
            <div className='flex flex-row p-6 items-center'>
                <Image
                    src={card}
                    alt="card"
                    className='w-auto h-[130px]'
                />
                <div className='flex flex-col mt-4'>
                    <h2 className='font-bold text-2xl text-white/80'>Experience</h2>
                    <p className='text-lg text-white/70 mt-2'>I have experience of over 1.5 years working in tier-1 company.</p>
                </div>
            </div>
        </div>

        <div className='w-full md:col-span-5 relative bg-white/10 background-blue-lg border border-white/20 rounded-xl overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
            <div className='flex flex-row p-6 items-center'>
                <Image
                    src={finance}
                    alt="skills"
                    className='w-auto h-[130px]'
                />
                <div className='flex flex-col mt-4'>
                    <h2 className='text-2xl font-bold text-white/80'>Technical Skills</h2>
                    <p className='text-white/70 mt-2 text-lg'>As a Software Developer, I specialise in Problem Solving, ReactJS, NextJS, NodeJS, Javascript, Python and other technologies.</p>
                </div>
            </div>
        </div>

        </div> */}

      <div className="max-w-[1200px] p-8">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Section */}
          <div className="bg-white/10 rounded-xl backdrop-blur-md p-6 border border-white/20 hover:shadow-orange-400/30 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <Image src={book} alt="book" height={60} width={60} />
              <h4 className="text-white text-center text-2xl font-semibold">
                Education
              </h4>
            </div>

            <p className="text-white/80 text-lg">
              Completed Bachelor's of Technology in Computer Science &
              Engineering from Graphic Era Hill University, Dehradun.
            </p>
          </div>

          <div className="rounded-xl backdrop-blue-md bg-white/10 p-6 hover:shadow-xl hover:shadow-orange-400/30 border border-white/20 transition">
            <div className="flex items-center gap-4 mb-4">
              <Image src={finance} alt="book" width={60} height={60} />
              <h4 className="text-2xl text-center text-white font-semibold">
                Skills
              </h4>
            </div>
            <p className="text-white/80 text-xl"> Proficient in JavaScript, TypeScript, React, Next.js, Node.js, Python, PostgreSQLand System Design. Passionate about Software Development.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20  hover:shadow-orange-400/30 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <Image src={pc} alt="pc" width={60} height={60} />
              <h4 className="text-2xl font-semibold text-white">Problem Solving</h4>
            </div>
            <p className="text-xl text-white/80"> I actively solve coding problems and participate in contests to keep my skills sharp and up to date.
            </p>

        <div className="flex flex-wrap gap-4 items-center my-4">
            
            {
                platforms.map((platform, index) => (
                    
                        <>
                            <a key={index} href={platform.url} target="_blank" className="flex gap-2 hover:cursor-pointer hover:bg-white/20 transition text-white px-3 py-2 bg-white/10 backdrop-blur rounded-xl ">
                                <img src={platform.icon} className="w-6 h-6" />
                                {platform.name}
                            </a>
                        </>
                    
                ))
            }
            </div>
          
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:shadow-xl hover:shadow-orange-400/30 p-6 transition">
            <div className="flex items-center gap-4 mb-4">
              <Image src={card} alt="card" width={60} height={60} />
              <h4 className="text-2xl font-semibold text-white">
                Experience 
              </h4>
            </div>
            <p className="text-white/80 text-xl">Over 1.5 years of hands-on experience in a Tier-1 tech company. Worked on designing and developing data intensive applications and backend systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
