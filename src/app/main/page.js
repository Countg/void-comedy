import ClientMain from "../components/clientMain";
import showDates from "@/lib/showDates";
import getLatestEpisodes from '@/lib/latestEpisode';

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
      images: [{ url: ogUrl, width: 1200, height: 630, alt: latestEpisode?.title || 'Park Bench Ontology' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Park Bench Ontology – Gavin Stephens',
      description: 'Ontological dread through comedy, memes, and collapse.',
      images: [ogUrl],
    },
  };
}

export const revalidate = 60; // ISR every 60 seconds

export default async function Main() {
  const [shows, latestEpisodesData] = await Promise.all([
    showDates(),
    getLatestEpisodes(),
  ]);

  return (
    <ClientMain
      shows={shows}
      latestEpisode={latestEpisodesData.episode}
      podcastImage={latestEpisodesData.image || "/images/PBOGraphic.png"}
      fetchPostsClientSide={true} // flag to trigger client fetch
    />
  );
}





