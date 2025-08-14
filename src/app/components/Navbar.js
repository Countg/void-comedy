'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import formatDate from "../lib/formDate";
import Image from "next/image";
import subtitles from "../lib/titleRotate"; // Assuming you have a subtitles.js file with the array
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ showDates = [], feed, zine }) {
  const [index, setIndex] = useState(0);

  
 
    useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % subtitles.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const glitchVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };


  // Your ticker stuff unchanged here...
  const latestShow = showDates.length > 0 ? showDates[0] : null;
  const rawTitle = feed?.title || 'New Episode Coming Soon';
const cleanTitle = rawTitle.replace(/^Episode\s*\d+\s*[:\-–]?\s*/i, '');
const episodeText = `🎙️ New Episode: "${cleanTitle}"`;



  const liveShowText =
    latestShow?.venue?.city && latestShow?.datetime
      ? `📍 Live in ${latestShow.venue.city} ${formatDate(latestShow.datetime)}`
      : null;

  const latestPost = zine.length > 0 ? zine[0] : null;
  const zineTitle = latestPost?.title || 'New Post Coming Soon';
  const zineText = zineTitle ? `🧠 Zine drop: "${zineTitle}"` : null;

  const tickerItems = [episodeText, liveShowText, zineText].filter(Boolean).join(" • ");

  return (
   <nav className="sticky top-0 z-50">
      {tickerItems && (
        <div className="overflow-hidden whitespace-nowrap bg-accent-orange text-dark-indigo text-sm font-mono">
          <div className="animate-marquee py-1 px-4">{tickerItems}</div>
        </div>
      )}

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Text */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/images/image-Bh3CIBq4Nlul53jbQSzYM3DN5mGWap.png"
                alt="Gavin Stephens logo"
                width={300}
                height={300}
              priority
              as='image'
                className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 animate-fadeInOnce animate-floatForever"
              />
            </Link>

            <div className="flex flex-col leading-tight select-none">
              <span className="text-accent-orange font-bold tracking-wider text-lg sm:text-xl">
                GAVIN STEPHENS
              </span>

              {/* Glitch container */}
    <div className="relative italic text-sm sm:text-lg font-mono font-semibold  tracking-wide h-6 sm:h-7 overflow-visible select-none">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          variants={glitchVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ position: "relative", display: "inline-block" }}
        >
          <div className="vhs-scanlines">
  <div className="vhs-distortion">
             <span>{subtitles[index]}</span>
  </div>
</div>


          {/* RGB split overlays without clip */}
       
        </motion.span>
      </AnimatePresence>
    </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-6 items-center ml-8 lg:ml-16">
            <Link href="#podcast" className="text-white hover:text-accent-orange font-mono">
              Podcast
            </Link>
            <Link href="#projects" className="text-white hover:text-accent-orange font-mono">
              Projects
            </Link>
            <Link href="#shows" className="text-white hover:text-accent-orange font-mono">
              Tour
            </Link>
            <Link href="#merch" className="text-white hover:text-accent-orange font-mono">
              Shop
            </Link>
            <Link href="#about" className="text-white hover:text-accent-orange font-mono">
              About
            </Link>
            <Link href="#contact" className="text-white hover:text-accent-orange font-mono">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Icon Placeholder */}
          <div className="md:hidden">{/* hamburger menu here */}</div>
        </div>
      </div>
    </nav>
  );
}
