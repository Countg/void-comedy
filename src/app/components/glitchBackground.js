'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function GlitchBackground() {
  const pathname = usePathname();

  // Make sure pathname is defined before using it
  const isLandingPage = pathname === '/';

  return (
    <>
      {/* Background Video only on landing page */}
      {isLandingPage && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 z-0 w-full h-full object-cover opacity-20 pointer-events-none hidden sm:block"
        >
          <source src="/videos/Glitch Background.webm" type="video/mp4" />
        </video>
      )}

      {/* Global overlay layers (RGB noise, scanlines, grain) */}
      <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-full animate-parallax-rgb will-change-transform" />
        <div className="absolute w-full h-full vhs-scanlines opacity-30 mix-blend-overlay animate-parallax-slow" />
        <div className="absolute w-full h-full bg-[url('/textures/staticOverlay.png')] opacity-[0.03] " />
      </div>

      
    </>
  );
}






