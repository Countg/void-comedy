// app/api/youtube/route.js
import Parser from 'rss-parser';

const PLAYLIST_ID = 'PLOStPFwaNyn895S43bUk9HoaZdFEIXlQc';

export async function GET() {
  const parser = new Parser({
    customFields: {
      item: [
        ['media:group', 'mediaGroup'],
        ['yt:videoId', 'videoId'],
      ],
    },
  });

  const feed = await parser.parseURL(
    `https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`
  );

  const latest = feed.items?.find((item) => !item.link?.includes('/shorts/'));

  if (!latest) {
    return new Response(JSON.stringify(null), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const video = {
    title: latest.title,
    link: latest.link,
    videoId: latest.videoId,
    date: latest.pubDate,
    thumbnail: latest.videoId
      ? `https://i.ytimg.com/vi/${latest.videoId}/hqdefault.jpg`
      : null,
  };

  return new Response(JSON.stringify(video), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
