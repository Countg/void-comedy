'use client';

import Navbar from "./Navbar";
import ShowDates from "./ShowDates";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import PodcastCard from "./PodcastCard";
import AboutPage from "./About";
import SignupForm from "./emailSignup";
import SubstackPosts from "./SubstackFeed";

import { useEffect } from "react";

export default function ClientMain({ shows, latestFeed, latestEpisode, podcastImage, audioSrc }) {

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }
      }
    }
  }, []);

  return (
    <div id="home" style={{ background: "var(--pbo-bg)", minHeight: "100vh" }}>
      <Navbar showDates={shows} feed={latestEpisode} zine={latestFeed} />

      <div className="pbo-page">
        <PodcastCard
          title={latestEpisode?.title}
          description={latestEpisode?.description}
          imageSrc={podcastImage}
          date={latestEpisode?.pubDate || "TBD"}
          audioSrc={latestEpisode?.enclosure?.link || audioSrc}
        />

        <ShowDates comedy={shows} />

        <ProjectCard />

        <SubstackPosts posts={latestFeed} />

        <AboutPage />

        <SignupForm />
      </div>

      <Footer />

      {/* --- VHS overlays: fixed to the viewport, ignore clicks --- */}
      <div className="pbo-mvhs pbo-mscan" aria-hidden="true" />
      <div className="pbo-mvhs pbo-mstatic" aria-hidden="true" />
      <div className="pbo-mvhs pbo-mtrack" aria-hidden="true" />
    </div>
  );
}
