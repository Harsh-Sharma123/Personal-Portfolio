"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import profilepicture from "../assets/profilepic.png";
import { CloudDownload } from "lucide-react";

// Typing effect hook
const titles = [
  " Software Developer",
  " Full Stack Developer",
  " Tech Enthusiast",
];

function useTypingEffect(words: string[], speed = 100, pause = 1000) {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayedText((prev) => prev.slice(0, -1));
        } else {
          setDisplayedText((prev) => current.slice(0, prev.length + 1));
        }

        if (!isDeleting && displayedText === current) {
          setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && displayedText === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, words, speed, pause]);

  return displayedText;
}

export const Hero = () => {
  const text = useTypingEffect(titles, 100, 1500);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Harsh_Sharma_2025.pdf"; // Make sure this path is correct
    link.download = "Harsh_Sharma_Resume.pdf";
    link.click();
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black via-[#2B1942] to-[#DBAF6E] py-12 px-4">
      {/* Radial Background */}
      <div
        className="
          absolute
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[250vw] h-[200vh]
          sm:w-[180vw] sm:h-[150vh]
          md:w-[130vw] md:h-[100vh]
          rounded-full
          bg-[radial-gradient(closest-side,#000_80%,#2B1942)]
          pointer-events-none
          -z-10
        "
      ></div>

      {/* Content */}
      <div className="mt-20 sm:mt-0 relative z-10">
        <div className="text-4xl sm:text-5xl md:text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Harsh Sharma</h1>
        </div>

        {/* Animated Icons */}
        <motion.div
          className="hidden sm:block absolute left-[20px] top-[220px] sm:left-[40px] sm:top-[120px] md:left-[100px] md:top-[200px] lg:left-[100px] lg:top-[200px] xl:left-[240px]"
          drag
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
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
          className="hidden sm:block absolute right-[20px] top-[280px] sm:right-[20px] sm:top-[180px] xl:right-[120px] xl:top-[20px]"
          drag
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={lightning}
            height={130}
            width={130}
            alt="Lightning Icon"
            draggable={false}
            className="w-[70px] sm:w-[130px] md:w-[160px] lg:w-[180px] h-auto"
          />
        </motion.div>

        {/* Typing Effect */}
        <p className="text-center text-lg md:text-2xl max-w-[500px] mx-auto mt-8 text-white/80 px-2 font-mono">
          I am a<span className="text-blue-400 font-semibold"> {text}</span>
          <span className="animate-pulse">|</span>
        </p>

        <div className="">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="mx-auto mt-6 relative group flex items-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-[#8F5C55] to-[#DBAF6E] text-white font-semibold transition-all duration-300 hover:shadow-xl"
          >
            Download Resume
            {/* Download Resume */}
            <CloudDownload className="w-5 h-5 group-hover:animate-bounce transition-all" />
            {/* Shine Effect */}
            <span className="absolute inset-0 rounded-lg bg-white opacity-10 group-hover:animate-shine pointer-events-none"></span>
          </motion.button>
        </div>

        {/* Profile Picture */}
        <div className="mt-12 flex justify-center">
          <Image
            src={profilepicture}
            alt="Profile Picture"
            className="w-[180px] sm:w-[240px] md:w-[320px] h-auto rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
