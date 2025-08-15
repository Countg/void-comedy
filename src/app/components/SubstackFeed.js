
import Image from 'next/image';
import CardContainer from './CardContainer';

export default function SubstackPosts({ posts }) {
  if (!posts || posts.length === 0) return <p>No posts found.</p>;

  return (
    <CardContainer>
      <h2 className="text-orange-500 font-bold text-xl mb-4">
        FROM THE SUBSTACK
      </h2>

      <div className="w-full max-w-4xl mx-auto mb-8">
        <Image
          src="/images/dispatches-from-simulation-text.png" // Replace with your image path
          alt="Substack Banner"
          width={1200}
          height={600}
          className="rounded-md border border-white/10"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {posts.map(({ title, link, date, excerpt }, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-white/10 hover:border-accent-orange transition-colors rounded-md"
          >
            <div className="text-lg font-semibold text-accent-orange">{title}</div>
            <div className="text-sm text-white/70 mt-1">{date}</div>
            <p className="text-white/80 mt-2 line-clamp-3">{excerpt?.slice(0, 120)}...</p>
          </a>
        ))}
      </div>

      <div className="mt-8 max-w-4xl mx-auto px-4 relative before:content-[''] before:absolute before:inset-0 before:bg-[url('/glitch.png')] before:opacity-5">
        <iframe
          src="https://gavinbstephens.substack.com/embed"
          width="100%"
          height="150"
          className="border border-white/20 border-dashed bg-black/20 rounded-sm shadow-md backdrop-blur-sm"
          frameBorder="0"
          scrolling="no"
          title="Substack embed"
        />
      </div>
    </CardContainer>
  );
}
