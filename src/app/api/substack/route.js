// app/api/substack/route.js
import Parser from 'rss-parser';

export async function GET() {
  const parser = new Parser();
  const feed = await parser.parseURL('https://parkbenchontology.substack.com/feed');

  const posts = feed.items
    .filter(post => !post.enclosure?.type?.startsWith('audio/'))
    .slice(0, 5)
    .map(post => {
      const enclosureImage = post.enclosure?.type?.startsWith('image/') ? post.enclosure.url : null;
      const contentImageMatch = (post['content:encoded'] || '').match(/<img[^>]+src="([^"]+)"/);

      return {
        title: post.title,
        link: post.link,
        date: post.pubDate,
        excerpt: post.contentSnippet,
        image: enclosureImage || contentImageMatch?.[1] || null,
      };
    });

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
