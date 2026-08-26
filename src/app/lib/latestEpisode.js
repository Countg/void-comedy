import Parser from 'rss-parser';
import he from 'he';

// Substack publishes the podcast feed directly — no third-party proxy needed.
const FEED_URL =
  process.env.BASE_URL_DIRECT ||
  'https://api.substack.com/feed/podcast/3347012.rss';

let cachedEpisodeData = null;
let lastFetchTime = 0;
const CACHE_TTL = 1000 * 60 * 5; // 5 minutes

const parser = new Parser({
  timeout: 8000,
  customFields: {
    feed: [['itunes:image', 'itunesImage', { keepArray: false }]],
    item: [['itunes:duration', 'duration'], ['itunes:episode', 'episodeNumber']],
  },
});

const removeTags = (str) => {
  if (!str) return '';
  return he.decode(str.replace(/(<([^>]+)>)/gi, '')).trim();
};

const getLatestEpisodes = async () => {
  // Reuse cached result in dev to avoid refetching on every render
  if (process.env.NODE_ENV === 'development') {
    const now = Date.now();
    if (cachedEpisodeData && now - lastFetchTime < CACHE_TTL) {
      return cachedEpisodeData;
    }
  }

  try {
    const feed = await parser.parseURL(FEED_URL);

    if (!feed || !Array.isArray(feed.items)) {
      console.error('Podcast feed did not contain a valid items array');
      return { image: null, episode: null };
    }

    const podImage =
      feed.itunesImage?.$?.href ||
      feed.image?.url ||
      feed.itunes?.image ||
      null;

    const latest = feed.items[0];
    if (!latest) {
      return { image: podImage, episode: null };
    }

    const episode = {
      ...latest,
      title: removeTags(latest.title),
      description: removeTags(
        latest.content || latest['content:encoded'] || latest.contentSnippet
      ),
      pubDate: latest.pubDate
        ? new Date(latest.pubDate).toLocaleDateString()
        : 'TBD',
      link: latest.link || 'https://parkbenchontology.substack.com',
      // rss-parser exposes enclosure.url; the rest of the app reads enclosure.link
      enclosure: {
        ...latest.enclosure,
        link: latest.enclosure?.url || latest.enclosure?.link || null,
      },
    };

    const episodeData = { image: podImage, episode };

    if (process.env.NODE_ENV === 'development') {
      cachedEpisodeData = episodeData;
      lastFetchTime = Date.now();
    }

    return episodeData;
  } catch (error) {
    console.error('Error fetching episodes:', error?.message || error);
    return { image: null, episode: null };
  }
};

export default getLatestEpisodes;
