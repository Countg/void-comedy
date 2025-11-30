"use client";
import ShowDates from "./ShowDates";
import { usePathname } from "next/navigation";
import GlitchBackground from "./glitchBackground";

import Link from "next/link";

export default function ConnectPage({shows}) {
  // TEMP: replace with your real shows or wire to your API later
    const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (

    <main
      className="
        min-h-screen
        bg-[#131427]
        bg-[radial-gradient(circle_at_top,_#1e1b4b_0%,_#131427_45%,_#050510_100%)]
        text-slate-50
      "
    >
   {/* --- FIXED BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 glitch-bg" />
        <div className="absolute inset-0 scanlines" />
        <GlitchBackground />
      </div>

      {/* --- BACKDROP FILTER --- */}
      <div
        className={`fixed inset-0 z-20 pointer-events-none backdrop-blur-xl backdrop-brightness-50 transition-opacity ${
          isLandingPage ? "opacity-15" : "opacity-20"
        }`}
      />

      {/* --- SCROLLABLE CONTENT --- */}

        
      {/* Optional noise overlay if you add /noise.png */}
      {/* <div
        className="pointer-events-none fixed inset-0 opacity-[0.07] mix-blend-soft-light"
        style={{ backgroundImage: "url(/noise.png)" }}
      /> */}

      <div className="relative mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 py-10 md:px-6 md:py-16">
        {/* HEADER */}
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400/80">
            connect
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Gavin Stephens
          </h1>
          <p className="max-w-xl text-sm text-slate-300 md:text-base">
            Existential comedian • Afro-absurdist • lo-fi ontological satirist.
            I make comedy for people who hate propaganda and still want to
            laugh.
          </p>
        </header>

            {/* PARK BENCH ONTOLOGY */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
            Park Bench Ontology
          </h2>

          <div
            className="
              rounded-2xl border border-slate-700/70
              bg-gradient-to-br from-[#25245b]/90 via-[#131427]/95 to-[#050510]
              px-4 py-5
              shadow-[0_22px_45px_rgba(0,0,0,0.9)]
              md:px-6 md:py-6
            "
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <p className="text-base font-semibold text-slate-50 md:text-lg">
                  Comedy of collapse. Anti-corporate. Anti-comfort.
                </p>
                <p className="text-sm text-slate-300">
                  A philosophy-meets-comedy project about identity,
                  capitalism, and existential dread. It&apos;s not crowd work;
                  it&apos;s interrogation.
                </p>
              </div>

              <div className="flex flex-col gap-2 md:items-end">
       
                <Link
                  href="https://www.youtube.com/playlist?list=PLOStPFwaNyn895S43bUk9HoaZdFEIXlQc"
                  className= "inline-flex items-center justify-center rounded-full border border-[#FF6719]/80 bg-[#FF6719] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950shadow-[0_16px_35px_rgba(0,0,0,0.85)] transition hover:bg-[#ff7e3c]"
                >
                  Park Bench playlist
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE SHOWS */}
        <section className="space-y-4">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
              Live Shows
            </h2>
            <span className="rounded-full bg-[#2b2c4a]/80 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
              current
            </span>
          </div>

          {shows.length === 0 ? (
            <p className="text-sm text-slate-400">
              No dates posted yet. Check back soon or follow on Instagram.
            </p>
          ) : (
            <ul className="space-y-3">
              {shows.map((show, i) => (
                <li
                  key={i}
                  className="
                    rounded-xl border border-slate-700/60
                    bg-[#231f5a]/70
                    backdrop-blur-sm
                    px-4 py-3 text-sm
                    shadow-[0_18px_35px_rgba(0,0,0,0.65)]
                    md:px-5 md:py-4
                  "
                >
                  <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300/90">
                        {show.datetime ? new Date(show.datetime).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }) : "Date TBA"}{" "}
                      </p>
                      <p className="text-sm font-medium text-slate-50 md:text-base">
                        {show.venue.city} — {show.venue.name}
                      </p>
                    
                    </div>

                    {show.url && (
                      <Link
                        href={show.url}
                        className="
                          mt-2 inline-flex items-center justify-center
                          rounded-full border border-[#FF6719]/80
                          bg-[#FF6719]
                          px-4 py-1.5 text-xs font-semibold uppercase
                          tracking-[0.18em] text-slate-950
                          shadow-[0_12px_25px_rgba(0,0,0,0.75)]
                          transition
                          hover:bg-[#ff7e3c]
                          md:mt-0
                        "
                      >
                        Tickets
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

    

        {/* SOCIALS */}
        {/* SOCIALS */}
<section className="space-y-3">
  <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
    Social / Channels
  </h2>

  <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
    <SocialButton
      label="Instagram"
      sublabel="Clips + tour updates"
      href="https://instagram.com/countgavin"
      platform="instagram"
    />
    <SocialButton
      label="YouTube"
      sublabel="Episodes + bits"
      href="https://www.youtube.com/@parkbenchontology"
      platform="youtube"
    />
    <SocialButton
      label="Substack"
      sublabel="Essays + notes"
      href="https://gavinbstephens.substack.com"
      platform="substack"
    />
    <SocialButton
      label="TikTok"
      sublabel="Shorts + chaos"
      href="https://www.tiktok.com/@parkbenchontology"
      platform="tiktok"
    />
  </div>
</section>


        {/* CONTACT */}
        <section className="space-y-2">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
            Booking & Collabs
          </h2>
          <p className="text-sm text-slate-300">
            For shows, festivals, galleries, podcasts, or experiments:
          </p>
          <p className="text-sm font-medium text-[#FF9A5E]">
             <Link href="mailto:info@gavinstephens.com">
    info@gavinstephens.com
  </Link>
          </p>
        </section>

        {/* MANIFESTO */}
        <section className="mt-2 border-t border-slate-700/70 pt-6 text-sm text-slate-300">
          <p>
            I don&apos;t sell comfort. I make comedy for people who hate
            propaganda and still want to laugh. The world is absurd; my job is
            to point at it before we all go extinct.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.22em] text-slate-400">
            You found the bench. Stay curious.
          </p>
        </section>

        {/* MAIN SITE LINK — VOID AESTHETIC (Version 2) */}
        <p className="mt-12 text-center text-[11px] tracking-wide text-slate-500/80">
          <Link
            href="/"
            className="text-slate-300 hover:text-[#FF6719] transition-colors duration-200"
          >
            Return to the main site
          </Link>
        </p>
      </div>
    </main>
  );
}

function SocialButton({ label, sublabel, href, platform }) {

    function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-[#E1306C]"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        ry="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-[#FF0000]"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="6"
        width="18"
        height="12"
        rx="3"
        ry="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <polygon
        points="10,9 16,12 10,15"
        fill="currentColor"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-[#25F4EE]"
      aria-hidden="true"
    >
      <path
        d="M14.5 5.5c.5 1.3 1.5 2.3 2.8 2.8l1.2.4v2.4a5 5 0 0 1-3-1v3.4a5.2 5.2 0 1 1-5-5.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SubstackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 text-[#FF6719]"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="5"
        width="16"
        height="3"
        fill="currentColor"
      />
      <rect
        x="4"
        y="9"
        width="16"
        height="3"
        fill="currentColor"
      />
      <path
        d="M6 13h12v6l-6-3-6 3z"
        fill="currentColor"
      />
    </svg>
  );
}

  // per-platform accent colours
  let accentBorder = "border-slate-700/70";
  let accentHoverBorder = "hover:border-[#FF6719]/90";
  let accentGlow = "group-hover:shadow-[0_0_25px_rgba(255,103,25,0.5)]";

  if (platform === "instagram") {
    accentBorder = "border-[#E1306C]/50";
    accentHoverBorder = "hover:border-[#E1306C]/90";
    accentGlow = "group-hover:shadow-[0_0_25px_rgba(225,48,108,0.55)]";
  } else if (platform === "youtube") {
    accentBorder = "border-[#FF0000]/45";
    accentHoverBorder = "hover:border-[#FF0000]/90";
    accentGlow = "group-hover:shadow-[0_0_25px_rgba(255,0,0,0.5)]";
  } else if (platform === "tiktok") {
    accentBorder = "border-[#25F4EE]/40";
    accentHoverBorder = "hover:border-[#25F4EE]/90";
    accentGlow = "group-hover:shadow-[0_0_25px_rgba(37,244,238,0.5)]";
  } else if (platform === "substack") {
    accentBorder = "border-[#FF6719]/40";
    accentHoverBorder = "hover:border-[#FF6719]/90";
    accentGlow = "group-hover:shadow-[0_0_25px_rgba(255,103,25,0.45)]";
  }

  return (
    <Link
      href={href}
      className={`
        group relative flex min-h-[120px] flex-col justify-between
        overflow-hidden rounded-xl border
        bg-[#231f5a]/75 p-3 text-left
        shadow-[0_14px_30px_rgba(0,0,0,0.8)]
        backdrop-blur-sm
        transition
        hover:-translate-y-0.5 hover:translate-x-0.5
        ${accentBorder} ${accentHoverBorder} ${accentGlow}
      `}
    >
      {/* glitch border layer */}
      <span
        className="
          pointer-events-none absolute inset-0 rounded-xl
          border border-[#FF6719]/0
          opacity-0
          transition
          duration-200
          group-hover:border-[#FF6719]/40
          group-hover:opacity-100
          group-hover:translate-x-[2px]
          group-hover:translate-y-[2px]
        "
      />

      {/* top row: icon + label */}
      <div className="relative flex items-center gap-2">
        <span className="flex h-5 w-5 items-center justify-center">
          {platform === "instagram" && <InstagramIcon />}
          {platform === "youtube" && <YouTubeIcon />}
          {platform === "tiktok" && <TikTokIcon />}
          {platform === "substack" && <SubstackIcon />}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
          {label}
        </span>
      </div>

      {/* sublabel */}
      <span className="relative mt-2 text-[11px] text-slate-400">
        {sublabel}
      </span>

      {/* bottom tag */}
      <span className="relative mt-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#FF9A5E] opacity-80 group-hover:opacity-100">
        Open
      </span>
    </Link>
  );
}

  


