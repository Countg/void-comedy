import ConnectPage from "@/components/Connect";

import showDates from "@/lib/showDates"
import { fetchLatestYoutubeVideo } from "../lib/latestYoutubeVideo";



export default async function Connect() {
let shows = []
let latestVideo = null

try {
  [shows, latestVideo] = await Promise.all([
    showDates().catch((err) => {
      console.error("Failed to fetch shows:", err);
      return [];
    }),
    fetchLatestYoutubeVideo().catch((err) => {
      console.error("Failed to fetch latest video:", err);
      return null;
    }),
]);
} catch (err) {
  console.error("Unexpected fetch error:", err);
}



    return (
        <ConnectPage shows={shows} latestVideo={latestVideo} />
    )
}