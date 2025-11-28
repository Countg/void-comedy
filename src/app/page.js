export const dynamic = "force-dynamic";
import ClientLanding from './components/clientLanding';
import showDates from './lib/showDates';
import getLatestEpisodes from './lib/latestEpisode';
import SocialSidebar from './components/sidebar';

// Async metadata function
export async function generateMetadata() {
  const latestEpisodesData = await getLatestEpisodes();
  const latestEpisode = latestEpisodesData.episode;

  const ogUrl = latestEpisode
    ? `/api/og?title=${encodeURIComponent(latestEpisode.title)}&episode=${encodeURIComponent(latestEpisode.number || '')}&guest=${encodeURIComponent(latestEpisode.guest || '')}`
    : '/api/og';

  return {
    title: 'PARK BENCH // ONTOLOGY',
    description: 'Gavin Stephens: lo-fi ontological satire, comedy of collapse, and meme-theory dread.',
    openGraph: {
      title: 'Park Bench Ontology – Gavin Stephens',
      description: 'Gavin Stephens: lo-fi ontological satire, comedy of collapse, and meme-theory dread.',
      url: 'https://gavinstephens.ca',
      type: 'website',
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: latestEpisode?.title || 'Park Bench Ontology – Gavin Stephens',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Park Bench Ontology – Gavin Stephens',
      description: 'Gavin Stephens: lo-fi ontological satire, comedy of collapse, and meme-theory dread.',
      images: [ogUrl],
    },
  };
}

export default async function LandingPage() {
    let shows = [];
let latestEpisodesData = { episode: null, image: null };



try {
  [shows, latestEpisodesData] = await Promise.all([
    showDates().catch((err) => {
      console.error("Failed to fetch shows:", err);
      return [];
    }),
    getLatestEpisodes().catch((err) => {
      console.error("Failed to fetch latest episode:", err);
      return { episode: null, image: null };
    }),
    
   
  ]);
} catch (err) {
  console.error("Unexpected fetch error:", err);
}
 

  return (
    <>
    <SocialSidebar/>
      <ClientLanding shows={shows} latestEpisode={latestEpisodesData.episode} />
    </>
  );
}



