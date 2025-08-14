import ClientMain from "../components/clientMain";
import showDates from "@/lib/showDates";
import getLatestEpisodes from '@/lib/latestEpisode';
import { fetchSubstackPosts } from "@/lib/latestSubstack";

export async function generateMetadata() {
  const latestEpisodesData = await getLatestEpisodes();
  const latestEpisode = latestEpisodesData.episode;

  const ogUrl = latestEpisode
    ? `/api/og?title=${encodeURIComponent(latestEpisode.title)}&episode=${encodeURIComponent(latestEpisode.number || '')}&guest=${encodeURIComponent(latestEpisode.guest || '')}`
    : '/api/og';

  return {
    title: 'PARK BENCH // ONTOLOGY - HOME',
    description: 'Ontological dread through comedy, memes, and collapse.',
    openGraph: {
      title: 'Park Bench Ontology – Gavin Stephens',
      description: 'Ontological dread through comedy, memes, and collapse.',
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
      description: 'Ontological dread through comedy, memes, and collapse.',
      images: [ogUrl],
    },
  };
}

export default async function Main() {
  // Fetch server-side data
  const [shows, latestEpisodesData] = await Promise.all([
    showDates(),
    getLatestEpisodes(),
  ]);

  // Substack posts with error handling
  let posts = [];
  try {
    posts = await fetchSubstackPosts();
  } catch (err) {
    console.error('Failed to fetch Substack posts:', err);
  }

  // Return client component
  return (
    <ClientMain
      shows={shows}
      latestFeed={posts}
      latestEpisode={latestEpisodesData.episode}
      podcastImage={latestEpisodesData.image || "/images/PBOGraphic.png"}
    />
  );
}





