// components/SocialSidebar.tsx
'use client';

import { FaTiktok, FaInstagram, FaYoutube,  } from 'react-icons/fa';
import { SiLinktree, SiSubstack, SiBluesky } from "react-icons/si";

import Link from 'next/link';

export default function SocialSidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4">
      {[
        {
          href: 'https://www.tiktok.com/@parkbenchontology',
          icon: <FaTiktok />,
          label: 'TikTok',
        },
        {
          href: 'https://instagram.com/countgavin',
          icon: <FaInstagram />,
          label: 'Instagram',
        },
        {
          href: 'https://www.youtube.com/@ParkBenchOntology',
          icon: <FaYoutube />,
          label: 'YouTube',
        },
        {
          href: 'https://linktr.ee/gavinstephens?ltsid=ff5d90b2-3a6c-472a-9ba6-91bcc8aedf2e',
          icon: <SiLinktree />,
          label: 'LinkTree',
        },
            {
          href: 'https://gavinbstephens.substack.com/',
          icon: <SiSubstack />,
          label: 'Dispatch From The Simulation',
        },
        {
          href: 'https://bsky.app/profile/gavinbstephens.substack.com',
          icon: <SiBluesky />,
          label: 'BlueSky',
        },
      ].map(({ href, icon, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-accent-orange text-2xl hover-glitch hover:text-white transition duration-200 order-none shadow-none outline-none"
        >
          {icon}
        </Link>
      ))}
     
    </div>
  );
}
