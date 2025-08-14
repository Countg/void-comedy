// src/components/LayoutClient.js
'use client';

import { useRouter } from 'next/navigation'; // ← correct for App Router
import { AnimatePresence, motion } from 'framer-motion';


export default function LayoutClient({ children }) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router?.asPath ?? Math.random()} // fallback to force animation
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="min-h-screen bg-black/30 text-white"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
