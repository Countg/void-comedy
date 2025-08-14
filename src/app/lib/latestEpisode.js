import axios from 'axios';
import he from 'he';

let cachedEpisodeData = null;
let lastFetchTime = 0;
const CACHE_TTL = 1000 * 60 * 5; // 5 minutes

const getLatestEpisodes = async () => {
  // Use cached result in dev to prevent excessive fetching
  if (process.env.NODE_ENV === 'development') {
    const now = Date.now();
    if (cachedEpisodeData && now - lastFetchTime < CACHE_TTL) {
      return cachedEpisodeData;
    }
  }

  try {
    const res = await axios.get(process.env.BASE_URL);

    if (!res.data || !Array.isArray(res.data.items)) {
      console.error('API response does not contain a valid episodes array');
      return { image: null, episodes: [] };
    }

    let episodes = res.data.items;
    let podImage = res.data.feed?.thumbnail || null;

    const removeTags = (str) => {
      if (!str) return '';
      return he.decode(str.replace(/(<([^>]+)>)/gi, ''));
    };

    let latestEpisode = episodes[0];
    if (!latestEpisode) {
      return { image: podImage, episodes: null };
    }

    let cleanedEpisode = {
      ...latestEpisode,
      title: removeTags(latestEpisode.title),
      description: removeTags(latestEpisode.description),
      pubDate: new Date(latestEpisode.pubDate).toLocaleDateString(),
      link: latestEpisode.link || 'https://shows.acast.com/uncolonized',
    };

    const episodeData = { image: podImage, episode: cleanedEpisode };

    // Cache only in dev mode
    if (process.env.NODE_ENV === 'development') {
      cachedEpisodeData = episodeData;
      lastFetchTime = Date.now();
    }

    return episodeData;
  } catch (error) {
    console.error('Error fetching episodes:', error);
    return { image: null, episode: [] };
  }
};

export default getLatestEpisodes;
