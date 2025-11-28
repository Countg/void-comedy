export const dynamic = "force-dynamic";
import ClientMain from "../components/clientMain";
import showDates from "@/lib/showDates";
import getLatestEpisodes from '@/lib/latestEpisode';
import { fetchSubstackPosts } from "@/lib/latestSubstack";
import SocialSidebar from "@/components/sidebar";


export async function generateMetadata() {
  const latestEpisodesData = await getLatestEpisodes();
  const latestEpisode = latestEpisodesData.episode;

  const ogUrl = latestEpisode
    ? `/api/og?title=${encodeURIComponent(latestEpisode.title)}&episode=${encodeURIComponent(latestEpisode.number || '')}&guest=${encodeURIComponent(latestEpisode.guest || '')}`
    : '/api/og';

  return {
    title: 'PARK BENCH // ONTOLOGY - HOME',
    description: 'Gavin Stephens: lo-fi ontological satire, comedy of collapse, and meme-theory dread.',
    openGraph: {
      title: 'Park Bench Ontology – Gavin Stephens',
      description: 'Gavin Stephens: lo-fi ontological satire, comedy of collapse, and meme-theory dread.',
      url: 'https://gavinstephens.ca',
      type: 'website',
      images: [{ url: ogUrl, width: 1200, height: 630, alt: latestEpisode?.title || 'Park Bench Ontology' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Park Bench Ontology – Gavin Stephens',
      description: 'Gavin Stephens: lo-fi ontological satire, comedy of collapse, and meme-theory dread.',
      images: [ogUrl],
    },
  };
}

export const revalidate = 60; // ISR every 60 seconds

export default async function Main() {
  let shows = [];
let latestEpisodesData = { episode: null, image: null };
let latestFeed = [];


try {
  [shows, latestEpisodesData, latestFeed] = await Promise.all([
    showDates().catch((err) => {
      console.error("Failed to fetch shows:", err);
      return [];
    }),
    getLatestEpisodes().catch((err) => {
      console.error("Failed to fetch latest episode:", err);
      return { episode: null, image: null };
    }),
    fetchSubstackPosts().catch((err) => {
      console.error("Failed to fetch Substack posts:", err);
      return [];
    }),
   
  ]);
} catch (err) {
  console.error("Unexpected fetch error:", err);
}

  return (
   <>
     <SocialSidebar />
       <ClientMain
      shows={shows}
      latestEpisode={latestEpisodesData.episode}
      podcastImage={latestEpisodesData.image || "/images/PBOGraphic.png"}
      audioSrc={latestEpisodesData.audioSrc}
      latestFeed={latestFeed}
    

    
    />
   </>
  
  );
}





