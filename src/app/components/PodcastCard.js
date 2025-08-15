import { motion } from "framer-motion";
import Image from "next/image";
import CardContainer from "./CardContainer";
import { platforms } from "../lib/projectInfo"; // Adjust the import path as needed
import PlayerWrapper from "./Audio";



export default function PodcastCard({ title, subtitle, description, imageSrc, acastLink, date, spotifyLink, appleLink, youtubeLink, episode, audioSrc }) {

const shouldGlitch = /ontology|voids|meme|Existential/i.test(title);
return (
 <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <CardContainer>
    <section id="podcast" className="mb-16">
  {/* Subtitle / Tagline */}
  <div className="text-accent-orange font-bold text-lg sm:text-xl mb-3 font-mono tracking-wider uppercase">
    Now Streaming
  </div>

  {/* Podcast Title (with optional glitch) */}

  <div className="relative max-w-full overflow-hidden">
 <h2
    className={`text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 font-mono ${
      shouldGlitch ? 'glitch' : ''
    }`}
    style={{ minHeight: '3rem' }} 
  >
    <span data-text='Park Bench Ontology'>Park Bench Ontology</span>
  </h2>
</div>
  

  {/* Cover + Description Layout */}
  <div className="flex flex-col md:flex-row md:items-start gap-8 mb-10">
    {/* Podcast Image */}
    <div className="flex-shrink-0">
      <Image
        src={imageSrc}
        alt="Podcast Cover"
        width={300}
        height={300}
        as='image'
        className="rounded-xl shadow-lg"
      />
    </div>

    {/* /* Description */} 
      <div className="text-base sm:text-lg text-white/90 leading-relaxed font-mono">
        <p className="mb-4">
        <strong className="text-white">Park Bench Ontology</strong> is a low-stakes existential crisis disguised as a comedy podcast for people quietly losing faith in the script of modern life. Each week, comedian and writer Gavin Stephens dissects the absurd machinery of capitalism and culture — from sitcoms to wealth inequality, Baudrillard to people who park in bike lanes — exposing the broken myths, invisible rules, and slow-motion collapse we all pretend isn’t happening.
        </p>
        <strong className="text-accent-orange">{title.replace(/^Episode\s*\d+\s*[:\-–]?\s*/i, '')}</strong>
        
        <br />
        <p>
        {description
          ? description.replace(/Hosted on Acast\. See acast\.com\/privacy for more information\./gi, '')
          : "Explore the essence of meme life, symbolic drift, and collective dread through a Black absurdist lens."}
        </p>
      </div>
      </div>

      {/* Episode Info */}
  <div className="flex items-center gap-3 text-accent-orange font-mono mb-8">
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="11" stroke="#FF6719" strokeWidth="2" />
      <polygon points="10,8 16,12 10,16" fill="#FF6719" />
    </svg>
    <span className="text-white text-sm tracking-wide">
      {date}
    </span>
  </div>
 

  {/* Listen On Platforms */}
  <div className="mb-10">
    <h3 className="text-white font-bold text-base mb-3 font-mono uppercase tracking-wider">
      Listen on:
    </h3>
    <div className="flex flex-wrap gap-4">
      {platforms.map(({ name, url, icon: Icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white hover:bg-white/20 transition text-sm font-semibold"
        >
          <Icon className="text-accent-orange text-xl" />
          {name}
        </a>
      ))}
    </div>
  </div>
     {/* Spotify Embed */}
  <div className="mt-6">
<PlayerWrapper
        audioUrl={audioSrc}
      
      />
  </div>


</section>

  </CardContainer>
</motion.div>


      
  );
}


