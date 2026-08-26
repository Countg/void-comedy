'use client';

import Image from "next/image";
import { useRef, useState } from "react";

const HOSTS = [
  { label: "Spotify", url: "https://open.spotify.com/show/4VXk56ZMQABGFxlu6aBuUv" },
  { label: "Apple",   url: "https://podcasts.apple.com/us/podcast/uncolonized/id698940847" },
  { label: "YouTube", url: "https://www.youtube.com/@ParkBenchOntology" },
  { label: "RSS",     url: "https://api.substack.com/feed/podcast/3347012.rss" },
];

export default function PodcastCard({ title, imageSrc, audioSrc }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(null);

  // "Episode 47: Foo" -> 47
  const epNumber = title?.match(/^Episode\s*(\d+)/i)?.[1] ?? null;
  const epTitle = title?.replace(/^Episode\s*\d+\s*[:\-–]?\s*/i, "") ?? null;

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  const metaTop = [
    epNumber ? `Ep. ${epNumber}` : epTitle,
    duration ? `${duration} min` : null,
  ]
    .filter(Boolean)
    .join(" — ");

  return (
    <section id="podcast" className="pbo-section">
      <div className="pbo-kicker">Now Streaming</div>

      <div className="pbo-hero">
        <div>
          <h1>
            Park Bench <span className="accent">Ontology</span>
          </h1>

          <p>
            Lo-fi ontological satire, comedy of collapse, and meme-theory dread — recorded
            live, edited barely. New episode out now on every host site.
          </p>

          <div className="pbo-playrow">
            <button
              type="button"
              onClick={toggle}
              disabled={!audioSrc}
              className="pbo-playbtn"
              aria-label={playing ? "Pause episode" : "Play episode"}
            >
              {playing ? "❚❚" : "▶"}
            </button>

            <div className="pbo-playmeta">
              <b>{metaTop || "New Episode"}</b>
              listen on your host of choice below
            </div>
          </div>

          <div className="pbo-hosts">
            {HOSTS.map(({ label, url }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ))}
          </div>

          {audioSrc && (
            <audio
              ref={audioRef}
              src={audioSrc}
              preload="metadata"
              onLoadedMetadata={(e) => {
                const d = e.currentTarget.duration;
                if (d && isFinite(d)) setDuration(Math.round(d / 60));
              }}
              onEnded={() => setPlaying(false)}
              onPause={() => setPlaying(false)}
              onPlay={() => setPlaying(true)}
            />
          )}
        </div>

        <div className="pbo-frame">
          <Image
            src="/images/podcastBanner.jpg"
            alt="Park Bench Ontology"
            width={1672}
            height={941}
            priority
          />
          <div className="pbo-frame-tag">
            Park Bench Ontology — Waveform / Bench, no text overlay
          </div>
        </div>
      </div>
    </section>
  );
}
