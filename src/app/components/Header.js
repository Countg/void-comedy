'use client'
import formatDate from '../lib/formDate';
import abbreviateCountry from '../lib/country';
import { motion } from 'framer-motion';



export default function Header({showDates, feed, zine}){

  
  
  const latestShow = showDates.length > 0 ? showDates[0] : null;
  const latestPost = zine.length > 0 ? zine[0] : null;
   

  return(
<section
  className="relative w-full min-h-[80vh] bg-cover bg-center flex items-center px-4 sm:px-6"
  style={{ 
    backgroundImage: "url('/images/transparenBack.png')", 
    width: '100%',
    height: '100%',
    backgroundSize: 'cover', }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20 z-0" />
  

  {/* Content */}
  <div className="relative z-10 w-full max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="flex flex-col items-center text-center md:items-start md:text-left justify-center gap-6"
    >

    
<div className="flex flex-col items-start text-left justify-center gap-6 relative">
<div className="vhs-scanlines">
  <div className="vhs-distortion">
    <h1 className="text-6xl md:text-8xl text-left  sm:text-6xl md:text-[6rem] tracking-tight leading-[1.1] ml-2 sm:ml-4 max-w-[90vw] md:max-w-4xl font-bold  glitch-text">
      <span className="block" data-text="PARK">PARK</span>
      <span className="block" data-text="BENCH">BENCH</span>
      <span className="block" data-text="ONTOLOGY">ONTOLOGY</span>
    </h1>
  </div>
</div>




  <div className="mt-4 space-y-2 text-sm sm:text-base text-white/80 sm:ml-4 md:ml-12">
    <div>
      <span className="font-bold italic text-accent-orange">LATEST EPISODE:</span>
      {feed ? (<span className="ml-2 text-white font-extrabold sm:text-lg">{feed.title.replace(/^Episode\s*\d+\s*[:\-–]?\s*/i, '')}</span>) : (
        <span className="ml-2 text-white font-extrabold sm:text-lg">TBA</span>
      )}
    </div>
    <div>
      <span className="font-bold italic text-accent-orange">UPCOMING SHOWS:</span>
      {latestShow ? (
        <span className="ml-2 text-white font-extrabold sm:text-lg">
          {formatDate(latestShow.datetime)} — {latestShow.venue.city},{" "}
          {abbreviateCountry(latestShow.venue.country)}
        </span>
      ) : (
        <span className="ml-2 text-white font-extrabold sm:text-lg">TBA</span>
      )}
    </div>
        <div>
      <span className="font-bold italic text-accent-orange">ZINE DROP:</span>
      {latestPost ? (<span className="ml-2 text-white font-extrabold sm:text-lg">{latestPost.title}</span>) : (
        <span className="ml-2 text-white font-extrabold sm:text-lg">TBA</span>
      )}
    </div>
    
  </div>
</div>

    </motion.div>
  </div>
  
</section>


    
  )
}
