'use client';

import Header from "./Header";
import Navbar from "./Navbar";
import ShowDates from "./ShowDates";

import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import PodcastCard from "./PodcastCard";
import ShopCard from "./ShopCard";
import AboutPage from "./About";
import SignupForm from "./emailSignup";
import GlitchBackground from "./glitchBackground";
import SubstackPosts from "./SubstackFeed";


import { usePathname } from 'next/navigation';


import { useEffect, useState } from "react";





export default function ClientMain({ shows, fetchPostsClientSide, latestFeed, products, latestEpisode, podcastImage, audioSrc }) {

  const pathname = usePathname();
  const isLandingPage = pathname === '/'; // or whatever your route is
   const [posts, setPosts] = useState([]);

  // Fetch posts client-side if flag is set
  useEffect(() => {
    if (!fetchPostsClientSide) return;

    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/substack'); // or your Supabase API route
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Failed to fetch posts client-side:', err);
        setPosts([]);
      }
    };

    fetchPosts();
  }, [fetchPostsClientSide]);



  

  useEffect(() => {
  if (typeof window !== "undefined") {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 300); // Delay to wait for transition
      }
    }
  }
}, []);

  return (

    
   <div className="relative min-h-screen font-mono text-[#e6e6e6] bg-black overflow-x-hidden" id="home">
      <div className="glitch-bg fixed inset-0 z-0 pointer-events-none" />
  <div className="scanlines fixed inset-0 z-0 pointer-events-none" />
  <GlitchBackground />

 


  <div className={`fixed inset-0 z-20 pointer-events-none backdrop-blur-xl backdrop-brightness-50 ${
    isLandingPage ? "opacity-40" : "opacity-10"
  }`} />

  {/* All your content — now layered above glitch */}
  <div className="relative z-10 ">
    <Navbar showDates={shows} feed={latestEpisode} zine={posts} />

    <div className="w-full max-w-7xl mx-auto px-6 pt-16 pb-10 text-2xl sm:text-3xl">
      <Header showDates={shows} feed={latestEpisode} zine={posts} />
    </div>

    <div className="max-w-5xl mx-auto px-4 ">
      <PodcastCard
        title={latestEpisode?.title || "THE ONTOLOGY OF MEMES"}
        subtitle="NOW STREAMING"
        description={latestEpisode?.description || "Explore the semiotics and essence of internet culture and mapping collective anxieties."}
        imageSrc={podcastImage}
        acastLink={latestEpisode?.link || "https://shows.acast.com/uncolonized"}
        date={latestEpisode?.pubDate || "TBD"}
        spotifyLink="https://open.spotify.com/show/4VXk56ZMQABGFxlu6aBuUv"
        appleLink="https://podcasts.apple.com/us/podcast/uncolonized/id698940847"
        youtubeLink="https://www.youtube.com/@GavinStephens"
        audioSrc={latestEpisode?.enclosure?.link || "https://example.com/audio.mp3"}
      />

      <ProjectCard />

      <section className="mt-10 space-y-8 md:space-y-0 md:grid md:grid-cols-1 gap-8">
        <ShowDates comedy={shows} />

        <div>
        {posts.length === 0 ? (
  <p className="text-sm text-white/70 font-mono">Loading posts...</p>
) : (
  posts.map(post => <SubstackPost key={post.id} post={post} />)
)}
           
        </div>
      </section>

      <AboutPage />
      <ShopCard productData={products} />
      <SignupForm/>
      </div>
    


    <Footer />
  </div>
</div>

  );
}


