import Image from 'next/image';
import Link from 'next/link';

export default function SubstackPosts({ posts = [] }) {
  const latest = posts.slice(0, 3);

  return (
    <section id="zine" className="pbo-section">
      <div className="pbo-kicker">From The Substack</div>

      <div className="pbo-feature">
        <Link
          href="https://parkbenchontology.substack.com/s/dispatch-from-the-simulation"
          target="_blank"
          className="pbo-featureimg"
        >
          <Image
            src="/images/dispatches-from-simulation-text.png"
            alt="Dispatch From The Simulation"
            fill
            sizes="(max-width: 860px) 100vw, 50vw"
          />
        </Link>

        <div>
          <h2>Dispatch From The Simulation</h2>
          <p>
            Cultural dispatches from the edges of comedy, ideology, and existential dread —
            essays and ephemera from Park Bench Ontology, decoding the simulation one post
            at a time.
          </p>
          <Link href="https://parkbenchontology.substack.com" target="_blank" className="pbo-link">
            Visit the Substack →
          </Link>
        </div>
      </div>

      {latest.length > 0 ? (
        <div className="pbo-grid">
          {latest.map((post) => (
            <Link key={post.link} href={post.link} target="_blank" className="pbo-card">
              <div className="pbo-thumb">
                <Image
                  src={post.image || "/images/dispatches-from-simulation-text.png"}
                  alt={post.title}
                  fill
                  sizes="(max-width: 520px) 100vw, (max-width: 860px) 50vw, 33vw"
                />
              </div>
              {post.date && (
                <span className="cat">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              )}
              <h3>{post.title}</h3>
              {post.excerpt && <p>{post.excerpt}</p>}
              <span className="more">Read on Substack ↗</span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="pbo-empty">No posts found — check back soon.</p>
      )}
    </section>
  );
}
