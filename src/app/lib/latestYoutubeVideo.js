let cachedVideo = null;
let lastFetchTime = 0;
const CACHE_TTL = 1000 * 60 * 5; // 5 minutes

export async function fetchLatestYoutubeVideo() {
  if (process.env.NODE_ENV === 'development') {
    const now = Date.now();
    if (cachedVideo && now - lastFetchTime < CACHE_TTL) {
      return cachedVideo;
    }
  }

  const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/youtube`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch latest video');
  }

  const video = await res.json();

  if (process.env.NODE_ENV === 'development') {
    cachedVideo = video;
    lastFetchTime = Date.now();
  }

  return video;
}
