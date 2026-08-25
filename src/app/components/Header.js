'use client'
import formatDate from '../lib/formDate';
import abbreviateCountry from '../lib/country';
import { motion } from 'framer-motion';

export default function Header({showDates, feed, zine}){

  const latestShow = showDates.length > 0 ? showDates[0] : null;
  const latestPost = zine.length > 0 ? zine[0] : null;

  return(
<section className="relative w-full px-4 sm:px-6 py-20 border-b border-white/10">
  <div className="relative w-full max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex flex-col items-start text-left gap-6"
    >
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/50 border-l-2 border-accent-orange pl-2.5 font-mono">
        Home
      </div>

      <h1 className="font-black tracking-tight leading-[0.98] text-4xl sm:text-5xl md:text-6xl">
        Park Bench <span className="text-accent-orange">Ontology</span>
      </h1>

      <div className="space-y-2 text-xs sm:text-sm font-mono">
        <div>
          <span className="text-accent-orange uppercase tracking-wide">Latest Episode:</span>
          {feed ? (<span className="ml-2 text-white/80">{feed?.title?.replace(/^Episode\s*\d+\s*[:\-–]?\s*/i, '') ?? "Untitled Episode"}</span>) : (
            <span className="ml-2 text-white/80">TBA</span>
          )}
        </div>
        <div>
          <span className="text-accent-orange uppercase tracking-wide">Upcoming Shows:</span>
          {latestShow ? (
            <span className="ml-2 text-white/80">
              {formatDate(latestShow.datetime)} — {latestShow.venue.city},{" "}
              {abbreviateCountry(latestShow.venue.country)}
            </span>
          ) : (
            <span className="ml-2 text-white/80">TBA</span>
          )}
        </div>
        {latestPost && (
          <div>
            <span className="text-accent-orange uppercase tracking-wide">Zine Drop:</span>
            <span className="ml-2 text-white/80">{latestPost.title}</span>
          </div>
        )}
      </div>
    </motion.div>
  </div>
</section>
  )
}
