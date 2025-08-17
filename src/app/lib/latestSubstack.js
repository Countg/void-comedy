
let cachedPosts = null;
let lastFetchTime = 0;
const CACHE_TTL = 1000 * 60 * 5; // 5 minutes

export async function fetchSubstackPosts() {
  // In development, reuse cached data to avoid hammering the API
  if (process.env.NODE_ENV === 'development') {
    const now = Date.now();
    if (cachedPosts && now - lastFetchTime < CACHE_TTL) {
      return cachedPosts;
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'; 
  const res = await fetch(`${baseUrl}/api/substack`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const posts = await res.json();

  // Store in cache for dev mode
  if (process.env.NODE_ENV === 'development') {
    cachedPosts = posts;
    lastFetchTime = Date.now();
  }

  return posts;
}


