
import Image from 'next/image';
import CardContainer from './CardContainer';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SubstackPosts({ posts = [] }) {
  const latest = posts.slice(0, 3);

  return (
  <CardContainer>
    <>
      <div className="text-accent-orange font-bold text-2xl mb-6 font-mono tracking-wide" id="zine">
        FROM THE SUBSTACK
      </div>

      <motion.div
        className="flex flex-col md:flex-row items-center border border-accent-orange/30 rounded-2xl overflow-hidden shadow-md bg-background/40 backdrop-blur-md p-6 gap-6 group mb-8"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Image with glitch hover */}
        <Link href="https://parkbenchontology.substack.com/s/dispatch-from-the-simulation" target='_blank' className="shrink-0 w-full md:w-1/2 aspect-2/1 overflow-hidden rounded-xl relative group">
          <Image
            src="/images/dispatches-from-simulation-text.png"
            alt="Substack Banner"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 mix-blend-screen">
            <Image
              src="/images/dispatches-from-simulation-text.png"
              alt=""
              fill
              className="object-cover transform translate-x-1 -translate-y-1 opacity-70 blur-sm"
            />
            <Image
              src="/images/dispatches-from-simulation-text.png"
              alt=""
              fill
              className="object-cover transform -translate-x-1 translate-y-1 opacity-70 blur-sm"
            />
          </div>
        </Link>

        {/* Description */}
        <div className="w-full md:w-1/2 flex flex-col">
          <p className="text-white/80 font-mono">
            Cultural dispatches from the edges of comedy, ideology, and existential dread — essays and ephemera from Park Bench Ontology, decoding the simulation one post at a time.
          </p>
          <Link
            href="https://parkbenchontology.substack.com"
            target="_blank"
            className="mt-4 inline-block text-accent-orange font-semibold hover:underline"
          >
            Visit the Substack →
          </Link>
        </div>
      </motion.div>

      {latest.length > 0 ? (
        <div className="flex flex-col sm:flex-row gap-6">
          {latest.map((post) => (
            <motion.div
              key={post.link}
              className="flex-1 border border-accent-orange/30 rounded-2xl overflow-hidden shadow-md bg-background/40 backdrop-blur-md p-4 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Link href={post.link} target="_blank">
                <div className="overflow-hidden rounded-lg relative w-full aspect-video">
                  <Image
                    src={post.image || "/images/dispatches-from-simulation-text.png"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-accent-orange font-semibold text-lg mt-4 font-mono">
                  {post.title}
                </h3>
                {post.date && (
                  <p className="text-white/50 text-xs mt-1 font-mono">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                )}
                {post.excerpt && (
                  <p className="text-white/70 text-sm mt-2 line-clamp-3">{post.excerpt}</p>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-white/50 font-mono">No posts found — check back soon.</p>
      )}

    </>
  </CardContainer>
  );
}
