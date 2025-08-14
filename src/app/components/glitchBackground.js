
'use client';

import React from 'react';

export default function GlitchBackground() {
  return (
    <>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 z-0 w-full h-full object-cover opacity-20 pointer-events-none hidden sm:block"
      >
        <source src="./videos/glitch-background.mp4" type="video/mp4" />
      </video>
         <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        {/* RGB Noise Layer */}
        <div className="absolute w-full h-full animate-parallax-rgb will-change-transform" />

        {/* Scanlines Layer */}
        <div className="absolute w-full h-full bg-[url('/textures/scanlines.png')] opacity-10 mix-blend-overlay animate-parallax-slow" />

        {/* Grain Flicker */}
        <div className="absolute w-full h-full bg-[url('/textures/grain.jpg')] opacity-[0.03] animate-flicker" />
      </div>

     
    </>
  );
}



