import axios from "axios";

const BASE_ID = process.env.NEXT_PUBLIC_API_BASE_ID;
const ARTIST_NAME = "Gavin%20Stephens";

let cachedShows = null;
let lastFetchTime = 0;
const CACHE_TTL = 1000 * 60 * 5; // 5 minutes

const showDates = async () => {
  // Use cached result in development
  if (process.env.NODE_ENV === "development") {
    const now = Date.now();
    if (cachedShows && now - lastFetchTime < CACHE_TTL) {
      return cachedShows;
    }
  }

  try {
    const response = await axios.get(
      `https://rest.bandsintown.com/artists/${ARTIST_NAME}/events?app_id=${BASE_ID}`
    );

    const shows = response.data;

    // Cache only in dev
    if (process.env.NODE_ENV === "development") {
      cachedShows = shows;
      lastFetchTime = Date.now();
    }

    return shows;
  } catch (error) {
    console.error("Error fetching show dates:", error);
    return [];
  }
};

export default showDates;
