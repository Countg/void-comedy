"use client"
import Image from "next/image"
import { FaTiktok, FaInstagram, FaYoutube,  } from 'react-icons/fa';
import { SiLinktree, SiSubstack, SiBluesky } from "react-icons/si";


export default function Footer(){
    return(
  <footer className="bg-black/75 text-white border-t border-accentOrange mt-20">
  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

    {/* Logo + Motto */}
    <div className="flex flex-col items-start gap-4">
      <Image
        src="/images/image-Bh3CIBq4Nlul53jbQSzYM3DN5mGWap.png"
        alt="Cartoon Face"
        width={500}
        height={500}
        className="w-14 h-14 rounded-full border-2 border-[#FF6719]"
      />
      <p className="text-sm text-white/70 font-mono">
        Broadcasting from the ruins of late capitalism.
      </p>
    </div>

    {/* Quick Links */}
    <div className="flex flex-col gap-2">
      <h3 className="text-accent-orange font-bold text-sm uppercase tracking-wider">Navigation</h3>
      <a href="#about" className="text-white hover:text-accent-orange text-sm font-mono">About</a>
      <a href="#projects" className="text-white hover:text-accent-orange text-sm font-mono">Projects</a>
      <a href="#podcast" className="text-white hover:text-accent-orange text-sm font-mono">Podcast</a>
      <a href="#shows" className="text-white hover:text-accent-orange text-sm font-mono">Tour Dates</a>
      <a href="#merch" className="text-white hover:text-accent-orange text-sm font-mono">Shop</a>
    </div>

    {/* Social / Contact */}
    <div className="flex flex-col gap-2">
      <h3 className="text-accent-orange font-bold text-sm uppercase tracking-wider">Connect</h3>
      <a href="mailto:info@gavinstephens.com" className="text-white hover:text-accentOrange text-sm font-mono">Email Me</a>

      <div className="flex flex-row gap-4 mt-2">
        <a
          href="https://bsky.app/profile/gavinbstephens.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="BlueSky"
          className="hover:text-accent-orange"
        >
          <SiBluesky size={24} />
        </a>
        <a
          href="https://instagram.com/countgavin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-accent-orange"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.youtube.com/@ParkBenchOntology"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="hover:text-accent-orange"
        >
          <FaYoutube size={24} />
        </a>
          <a
          href="https://linktr.ee/gavinstephens?ltsid=ff5d90b2-3a6c-472a-9ba6-91bcc8aedf2e"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linktr"
          className="hover:text-accent-orange"
        >
          <SiLinktree size={24} />
        </a>
          <a
          href="https://gavinbstephens.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Substack"
          className="hover:text-accent-orange"
        >
          <SiSubstack size={24} />
        </a>
          <a
          href="https://www.tiktok.com/@gavinstephens152"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="hover:text-accent-orange"
        >
          <FaTiktok size={24} />
        </a>
      </div>
    </div>

  </div>

  {/* Bottom Line */}
  <div className="text-center text-xs text-white/50 py-4 border-t border-accent-orange font-mono">
    © 2025 Gavin Stephens · Park Bench Ontology
  </div>
</footer>


    )
}