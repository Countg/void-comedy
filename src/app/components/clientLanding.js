'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import formatDate from '../lib/formDate';
import abbreviateCountry from '../lib/country';
import GlitchBackground from './glitchBackground';



export default function ClientLanding({shows, latestEpisode} ) {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';
  const latestShow = shows.length > 0 ? shows[0] : null;

  return (
    <>
      {/* --- FIXED BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 glitch-bg" />
        <div className="absolute inset-0 scanlines" />
        <GlitchBackground />
      </div>

      {/* --- BACKDROP FILTER --- */}
      <div
        className={`fixed inset-0 z-20 pointer-events-none backdrop-blur-xl backdrop-brightness-50 transition-opacity ${
          isLandingPage ? 'opacity-40' : 'opacity-15'
        }`}
      />

      {/* --- SCROLLABLE CONTENT --- */}
      <div className="relative z-10 overflow-auto min-h-screen">
        {/* --- MAIN HERO SECTION --- */}
        <section className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-sunset-orange-500 mb-4">
            Gavin Stephens
          </h2>

          <div className="vhs-scanlines">
            <div className="vhs-distortion">
              <h1 className="text-6xl md:text-8xl font-bold leading-none text-center glitch-text">
                <span className="block" data-text="PARK">
                  PARK
                </span>
                <span className="block" data-text="BENCH">
                  BENCH
                </span>
                <span className="block" data-text="ONTOLOGY">
                  ONTOLOGY
                </span>
              </h1>
            </div>
          </div>

          <p className="mt-6 text-white/80 text-lg md:text-xl leading-relaxed">
            Latest Episode:{' '}
            {latestEpisode ? (
              <span className="text-sunset-orange-500">
                {latestEpisode.title.replace(/^Episode\s*\d+\s*[:\-–]?\s*/i, '')}
              </span>
            ) : (
              <span className="text-accentOrange">TBA</span>
            )}
            <br />
            Upcoming Show:{' '}
            {latestShow ? (
              <span className="text-sunset-orange-500">
                {formatDate(latestShow.datetime)} — {latestShow.venue.city},{' '}
                {abbreviateCountry(latestShow.venue.country)}
              </span>
            ) : (
              <span className="text-sunset-orange-500">TBA</span>
            )}
          </p>

          <div className="mt-10 flex justify-center">
            <Image
              src="/images/image-Bh3CIBq4Nlul53jbQSzYM3DN5mGWap.png"
              alt="Gavin"
              width={500}
              height={500}
              priority
              className="animate-floatForever glow rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* --- SECOND SECTION --- */}
        <section className="pt-2 pb-12 text-center max-w-3xl mx-auto relative">
          <h2 className="text-3xl text-white/70 font-semibold">Welcome to the Collapse</h2>
          <p className="mt-4 text-lg text-white/70">
            Listen to the latest episode, get live show updates, or subscribe to the zine.
            This is where laughter meets dread.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/main"
              aria-label="Enter the main site"
              className="px-6 py-3 bg-sunset-orange-500 text-dark-indigo font-bold rounded hover:bg-orange-400 transition"
            >
              Enter The Site
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

