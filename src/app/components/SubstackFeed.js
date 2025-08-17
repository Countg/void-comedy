
import Image from 'next/image';
import CardContainer from './CardContainer';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SubstackPosts() {
  

  return (
  <CardContainer>
    <>
      <h2 className="text-orange-500 font-bold text-xl mb-4" id="zine">
        FROM THE SUBSTACK
      </h2>
      <motion.div
        className="border border-accent-orange/30 rounded-2xl overflow-hidden shadow-md bg-background/40 backdrop-blur-md p-4 transition-all"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Link href="https://gavinbstephens.substack.com" target='_blank' className="block mb-4 text-lg">
          <div className="w-full max-w-4xl mx-auto mb-8">
            <Image
              src="/images/dispatches-from-simulation-text.png" // Replace with your image path
              alt="Substack Banner"
              width={1200}
              height={600}
              className="rounded-md  transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>
      </motion.div>
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
    </>
  </CardContainer>
  );
}
