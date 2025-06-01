"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import project1 from "../assets/Onnrent.png";
import project2 from "../assets/E-Commerce.png";
import project3 from "../assets/Portfolio.png";
import Summarize from "../assets/Summarize.png";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Summarize - Transform your PDFs into Summaries",
    description:
      "AI-driven platform to help tranform your lengthy PDFs into reel animated concise summaries",
    tectstack:
      "NextJS, ReactJS, Shadcn, Gemini-AI, Clerk, Stripe, Langchain, UploadThing",
    link: "https://summarize-three.vercel.app/",
    git: "https://github.com/Harsh-Sharma123/Summarize",
    src: Summarize,
  },
  {
    title: "ONNRent - Online Vehicle Rental Platform",
    description:
      "Online Platform to rent two wheelers from different rentals around the city helping you save time",
    tectstack: "Javascript, ReactJS, NodeJS, MongoDB",
    link: "http://onnrent.in/",
    git: "",
    src: project1,
  },
  {
    title: "ECommerce Platform",
    description: "An E-Commerce Static Website",
    tectstack: "HTML, CSS",
    link: "https://harsh-sharma123.github.io/E-Commerce-Website-FrontEnd-Template/",
    git: "https://github.com/Harsh-Sharma123/E-Commerce-Website-FrontEnd-Template.git",
    src: project2,
  },
  {
    title: "Portfolio Website",
    description: "",
    tectstack: "ReactJS, NextJS, TailwindCSS, Typescript",
    link: "https://personal-portfolio-lovat-delta.vercel.app/",
    git: "https://github.com/Harsh-Sharma123/Personal-Portfolio",
    src: project3,
  },
];

export const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
        Selected <span className="text-orange-400">Projects</span>
      </h1>

      <div className="max-w-[1200px] mx-auto mt-40 space-y-24 px-6 md:px-0">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col md:flex-row gap-12  justify-between`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.description}
              </p>
              <p className="font-semibold text-xl text-orange-500">
                {project.tectstack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-2"></div>
              <div className="">
                <a
                  href={project.link}
                  className="flex items-center mr-6 font-semibold"
                >
                  Link <ExternalLink className="ml-2 w-4 h-4" />
                </a>
                {/* <a href={project.git} className="">
                  GIT
                </a> */}
              </div>
            </div>
            <div className="flex items-center justify-center mt-10 md:mt-0">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[350px] w-[500px] object-fill border rounded border-gray-700"
              ></Image>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    // <div className=" ">
    //   <div className="mx-auto max-w-[1200px]">
    //     <h2 className="text-center text-4xl font-bold">Selected Projects</h2>
    //     <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
    //       {projects.map((project, index) => (
    //         <>
    //           <div className="bg-green-700 m-8 rounded-lg relative">
    //             <h1 className="absolute top-[-30px] left-[-20px] text-7xl font-bold text-white/80 tracking-wider">
    //               0{index}
    //             </h1>
    //             <div>
    //               <div className="" id="left"></div>
    //               <div className="" id="right">
    //                 <Image src={project.src} className="w-50 h-50" />
    //               </div>
    //             </div>
    //           </div>
    //         </>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};
