// app/layout.tsx (server)
import "./globals.css";
import { ReactNode } from 'react';
import LayoutClient from './components/LayoutClient';




export const metadata = {
 
  title: 'PARK BENCH // ONTOLOGY',
    description: 'Gavin Stephens: lo-fi ontological satire, comedy of collapse, and meme-theory dread.',
    openGraph: {
      title: 'Park Bench Ontology – Gavin Stephens',
      description: 'Gavin Stephens: lo-fi ontological satire, comedy of collapse, and meme-theory dread.',
      url: 'https://gavinstephens.ca',
      type: 'website',
    },
   keywords: ['comedy', 'glitch', 'identity', 'standup', 'absurdism', 'philosophy'],
  authors: [{ name: 'Gavin Stephens', url: 'https://gavinstephens.ca' }],
  creator: 'Gavin Stephens',
  publisher: 'Void Comedy',
  metadataBase: new URL('https://gavinstephens.ca'),
  alternates: { canonical: '/' },

  openGraph: {
    title: 'Void Comedy',
    description: 'Glitching identity, one punchline at a time.',
    url: 'https://gavinstephens.ca',
    siteName: 'Void Comedy',
    images: [
      {
        url: 'https://gavinstephens.ca/api/og', // dynamic OG image API
        width: 1200,
        height: 630,
        alt: 'Void Comedy - Glitching identity, one punchline at a time',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Void Comedy',
    description: 'Glitching identity, one punchline at a time.',
    creator: '@GavinbStephens',
    images: ['https://gavinstephens.ca/api/og'], // dynamic OG image
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
<body className="overflow-x-hidden overscroll-auto">
  
    
           <LayoutClient>
      
          {children}
        </LayoutClient>

      </body>
    </html>
  );
}



