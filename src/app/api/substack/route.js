// app/api/substack/route.js
import Parser from 'rss-parser';

export async function GET() {
  const parser = new Parser();
  const feed = await parser.parseURL('https://gavinbstephens.substack.com/feed');

  const posts = feed.items.slice(0, 5).map(post => ({
    title: post.title,
    link: post.link,
    date: post.pubDate,
    excerpt: post.contentSnippet
  }));

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}


