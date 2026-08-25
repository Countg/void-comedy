'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import formatDate from "../lib/formDate";
import Image from "next/image";
import subtitles from "../lib/titleRotate";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ showDates = [], feed, zine = [] }) {
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

  const latestShow = showDates.length > 0 ? showDates[0] : null;
  const rawTitle = feed?.title || 'New Episode Coming Soon';
  const cleanTitle = rawTitle.replace(/^Episode\s*\d+\s*[:\-–]?\s*/i, '');
  const episodeText = `New Episode: "${cleanTitle}"`;

  const liveShowText =
    latestShow?.venue?.city && latestShow?.datetime
      ? `Live in ${latestShow.venue.city} ${formatDate(latestShow.datetime)}`
      : null;

  const latestPost = zine.length > 0 ? zine[0] : null;
  const zineText = latestPost?.title ? `Zine drop: "${latestPost.title}"` : null;

  const tickerItems = [episodeText, liveShowText, zineText].filter(Boolean).join("  ·  ");

  const TickerRun = () => (
    <>
      <span className="pbo-navdot">&#9679;</span>
      &nbsp; {tickerItems} &nbsp;&nbsp;&nbsp;
    </>
  );

  return (
    <nav className="pbo-nav">
      {tickerItems && (
        <div className="pbo-navticker">
          <div className="pbo-navtrack">
            <TickerRun />
            <TickerRun />
          </div>
        </div>
      )}

      <div className="pbo-navwrap">
        <Link href="/" className="pbo-brand" style={{ textDecoration: "none" }}>
          <Image
            src="/images/gavinHatSerious.png"
            alt="Gavin Stephens logo"
            width={300}
            height={300}
            priority
            className="animate-floatForever"
          />
          <span>
            <span className="pbo-brand-name" style={{ display: "block" }}>
              GAVIN STEPHENS
            </span>
            <span className="pbo-brand-sub" style={{ display: "block", height: "16px", overflow: "hidden" }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={index}
                  variants={glitchVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ display: "inline-block" }}
                >
                  {subtitles[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
        </Link>

        <div className="pbo-navlinks">
          <Link href="#podcast">Podcast</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#shows">Tour</Link>
          <Link href="#zine">Zine</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
