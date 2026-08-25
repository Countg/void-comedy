"use client";

import Image from "next/image";
import Link from "next/link";
import formatDate from "../lib/formDate";
import { useEffect, useState } from "react";
import FindingsLink from "./FindingsLink";

export default function ClientLanding({ shows: initialShows, latestEpisode, zine = [] }) {
  const [shows, setShows] = useState(initialShows || []);
  const latestShow = shows.length > 0 ? shows[0] : null;

  useEffect(() => {
    async function fetchShows() {
      try {
        const res = await fetch("/api/shows");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setShows(data);
      } catch (err) {
        console.error("Error fetching shows on client:", err);
      }
    }
    fetchShows();
  }, []);

  const cleanTitle = latestEpisode?.title?.replace(/^Episode\s*\d+\s*[:\-–]?\s*/i, "");
  const episodeText = cleanTitle
    ? `New Episode: "${cleanTitle}"`
    : "New Episode Coming Soon";

  const liveShowText =
    latestShow?.venue?.city && latestShow?.datetime
      ? `Live in ${latestShow.venue.city} ${formatDate(latestShow.datetime)}`
      : null;

  const latestPost = zine.length > 0 ? zine[0] : null;
  const zineText = latestPost?.title ? `Zine drop: "${latestPost.title}"` : null;

  const tickerItems = [episodeText, liveShowText, zineText]
    .filter(Boolean)
    .join("  ·  ");

  const TickerRun = () => (
    <>
      <span className="pbo-dot">&#9679;</span>
      &nbsp; {tickerItems} &nbsp;&nbsp;&nbsp;
    </>
  );

  return (
    <>
      <style>{`
        .pbo-landing {
          --pbo-bg:#0a0a0a;
          --pbo-line:#2a2a2a;
          --pbo-fg:#fdfbf6;
          --pbo-dim:#c9c4b8;
          --pbo-faint:#7a7568;
          --pbo-accent:#ff5b3d;

          /* --- VHS knobs: dial these --- */
          --pbo-scan-opacity: 0.16;
          --pbo-static-opacity: 0.045;

          position: relative;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: var(--pbo-bg);
          color: var(--pbo-fg);
        }

        .pbo-gate {
          flex: 1 1 auto;
          min-height: 0;
          position: relative;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .pbo-gate-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          filter: grayscale(1) contrast(1.08) brightness(0.85);
        }

        .pbo-gate::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10,10,10,0) 28%,
            rgba(10,10,10,0.75) 72%,
            rgba(10,10,10,0.97) 100%
          );
        }

        .pbo-gate-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 0 40px 40px;
          text-align: center;
        }

        .pbo-eyebrow {
          font-size: 13px;
          letter-spacing: 0.08em;
          color: var(--pbo-accent);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .pbo-word {
          font-family: 'Arial Black', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-weight: 900;
          font-size: clamp(30px, 6.5vw, 80px);
          line-height: 0.98;
          letter-spacing: -0.01em;
          margin: 0 0 16px;
          color: var(--pbo-fg);
        }

        .pbo-word .vhs { color: var(--pbo-accent); }

        .pbo-meta {
          color: var(--pbo-dim);
          font-size: 12px;
          line-height: 1.8;
          max-width: 480px;
          margin: 0 auto 22px;
        }

        .pbo-findings { font-size: 11px; }

        .pbo-enter {
          display: inline-block;
          margin-top: 18px;
          border: 1px solid var(--pbo-accent);
          color: var(--pbo-fg);
          text-decoration: none;
          padding: 13px 30px;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-family: 'Arial Black', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-weight: 900;
          transition: background-color 0.2s, color 0.2s;
        }

        .pbo-enter:hover {
          background: var(--pbo-accent);
          color: #0a0a0a;
        }

        .pbo-corner {
          position: absolute;
          z-index: 2;
          font-size: 9px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--pbo-faint);
          padding: 14px 18px;
          font-family: 'IBM Plex Mono', monospace;
          line-height: 1.5;
        }

        .pbo-corner.tl { top: 0; left: 0; }
        .pbo-corner.tr { top: 0; right: 0; text-align: right; }


        /* ---------- VHS OVERLAYS ---------- */

        .pbo-vhs {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 5;
        }

        /* horizontal scanlines, slowly drifting down */
        .pbo-scanlines {
          opacity: var(--pbo-scan-opacity);
          background: repeating-linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0px,
            rgba(0, 0, 0, 0) 2px,
            rgba(0, 0, 0, 0.55) 3px,
            rgba(0, 0, 0, 0.55) 4px
          );
          background-size: 100% 4px;
          animation: pboScanDrift 8s linear infinite;
        }

        /* analog static / grain */
        .pbo-static {
          opacity: var(--pbo-static-opacity);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 160px 160px;
          animation: pboStaticJitter 0.5s steps(1) infinite;
        }

        /* a single bright tracking bar that rolls through now and then */
        .pbo-tracking {
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.05) 45%,
            rgba(255, 255, 255, 0.09) 50%,
            rgba(255, 255, 255, 0.05) 55%,
            rgba(255, 255, 255, 0) 100%
          );
          height: 90px;
          top: -90px;
          bottom: auto;
          animation: pboTrackingRoll 19s linear infinite;
        }

        @keyframes pboScanDrift {
          0%   { background-position: 0 0; }
          100% { background-position: 0 64px; }
        }

        @keyframes pboStaticJitter {
          0%   { background-position: 0 0; }
          25%  { background-position: -40px 30px; }
          50%  { background-position: 30px -20px; }
          75%  { background-position: -25px -35px; }
          100% { background-position: 20px 25px; }
        }

        @keyframes pboTrackingRoll {
          0%       { transform: translateY(0); opacity: 0; }
          3%       { opacity: 0.55; }
          22%      { opacity: 0.55; }
          26%,100% { transform: translateY(115vh); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .pbo-scanlines, .pbo-static, .pbo-tracking { animation: none; }
          .pbo-tracking { display: none; }
        }

        .pbo-ticker {
          flex: 0 0 auto;
          background: var(--pbo-bg);
          color: var(--pbo-dim);
          font-size: 11px;
          padding: 10px 24px;
          border-top: 1px solid var(--pbo-line);
          letter-spacing: 0.04em;
          white-space: nowrap;
          overflow: hidden;
          font-family: 'IBM Plex Mono', monospace;
        }

        .pbo-track {
          display: inline-block;
          animation: pboMarquee 40s linear infinite;
        }

        .pbo-dot { color: var(--pbo-accent); }

        @keyframes pboMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 640px) {
          .pbo-gate-content { padding: 0 20px 28px; }
          .pbo-corner { font-size: 8px; padding: 10px 12px; }
        }
      `}</style>

      <div className="pbo-landing">
        {/* --- FULL-BLEED BENCH PHOTO GATE --- */}
        <div className="pbo-gate">
          <Image
            src="/images/benchLanding.jpg"
            alt="Gavin Stephens on the bench"
            fill
            priority
            sizes="100vw"
            className="pbo-gate-img"
          />

          <div className="pbo-corner tl">Park Bench Ontology</div>
          <div className="pbo-corner tr">
            Asset: Bench_Portrait_01
            <br />
            Color Profile: Grayscale
          </div>

          <div className="pbo-gate-content">
            <div className="pbo-eyebrow">Gavin Stephens</div>

            <h1 className="pbo-word">
              Park Bench <span className="vhs">Ontology</span>
            </h1>

            <div className="pbo-meta">
              Comedy for a dying interface. Lo-fi ontological satire, comedy of
              collapse, and meme-theory dread.
              <br />
              <br />
              <span className="pbo-findings">
                <FindingsLink />
              </span>
            </div>

            <Link href="/main" aria-label="Enter the main site" className="pbo-enter">
              Enter The Site &rarr;
            </Link>
          </div>
        </div>

        {/* --- TICKER TAPE --- */}
        {tickerItems && (
          <div className="pbo-ticker">
            <div className="pbo-track">
              <TickerRun />
              <TickerRun />
            </div>
          </div>
        )}

        {/* --- VHS OVERLAYS (sit above everything, ignore clicks) --- */}
        <div className="pbo-vhs pbo-scanlines" aria-hidden="true" />
        <div className="pbo-vhs pbo-static" aria-hidden="true" />
        <div className="pbo-vhs pbo-tracking" aria-hidden="true" />
      </div>
    </>
  );
}
