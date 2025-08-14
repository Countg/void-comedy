import ClientLanding from './components/clientLanding';
import showDates from './lib/showDates';
import getLatestEpisodes from './lib/latestEpisode';

// Async metadata function
export async function generateMetadata() {
  const latestEpisodesData = await getLatestEpisodes();
  const latestEpisode = latestEpisodesData.episode;

  const ogUrl = latestEpisode
    ? `/api/og?title=${encodeURIComponent(latestEpisode.title)}&episode=${encodeURIComponent(latestEpisode.number || '')}&guest=${encodeURIComponent(latestEpisode.guest || '')}`
    : '/api/og';

  return {
    title: 'PARK BENCH // ONTOLOGY',
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

export default async function LandingPage() {
  const shows = await showDates();
  const latestEpisodesData = await getLatestEpisodes();

  return (
    <>
      <ClientLanding shows={shows} latestEpisode={latestEpisodesData.episode} />
    </>
  );
}



