import Link from "next/link";
import GlitchBackground from "./glitchBackground";

// ============================================================================
// EDIT ME — everything you'll ever want to change lives in this one object.
// Save the file when you're done; the live site updates on next deploy.
// ============================================================================
const CONFIG = {
  // Your Substack address (no "https://", no trailing slash).
  // This powers the signup box below — get it exactly right or signups won't work.
  substackDomain: "parkbenchontology.substack.com",

  // The big headline. This is the first and biggest thing anyone sees.
  // Keep it to one short line — it has to work on a phone screen.
  headline: "The algorithm doesn't work for you.",

  // The reason to sign up, right under the headline. This is the line that
  // actually convinces someone to hand over their email.
  reasonLine:
    "Instagram and TikTok flip a coin on whether you ever see the next thing. Skip the coin flip — get it straight in your inbox.",

  // Text on the signup button.
  buttonText: "Subscribe free →",

  // Small trust line under the button. This is what talks someone down from
  // being wary about handing over their email.
  microcopy:
    "No spam, no sales funnel — just an email when there's something new. Unsubscribe in one click.",

  // Your name / show name, shown tiny at the very top.
  eyebrow: "Park Bench Ontology",

  // Socials — small and secondary on purpose. Add, remove, or reorder freely;
  // the layout adjusts automatically. Order here is left-to-right, top-to-bottom.
  socials: [
    { label: "TikTok", href: "https://www.tiktok.com/@parkbenchontology" },
    { label: "Instagram", href: "https://instagram.com/countgavin" },
    { label: "Bluesky", href: "https://bsky.app/profile/parkbenchontology.substack.com" },
    { label: "YouTube", href: "https://www.youtube.com/@parkbenchontology" },
  ],

  // One or two sentences about who you are. Shown small, near the bottom.
  bio: "Existential comedian. Afro-absurdist. I make comedy for people who hate propaganda and still want to laugh.",

  // Booking / collab contact email, shown small at the very bottom.
  bookingEmail: "info@gavinstephens.com",

  // Manifesto blurb — shown smallest, last thing on the page.
  manifesto:
    "I don't sell comfort. I make comedy for people who hate propaganda and still want to laugh. The world is absurd; my job is to point at it before we all go extinct.",
};
// ============================================================================
// END EDIT SECTION — page code below. No need to touch anything past here.
// ============================================================================

export default function ConnectPage({ shows = [] }) {
  const subscribeAction = `https://${CONFIG.substackDomain}/api/v1/free?nojs=true`;

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
      <div className="fixed inset-0 z-20 pointer-events-none backdrop-blur-xl backdrop-brightness-50 opacity-20" />

      {/* --- CONTENT --- */}
      <div className="relative mx-auto flex w-full max-w-sm flex-col gap-8 px-5 py-12 sm:py-16">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400/80">
          {CONFIG.eyebrow}
        </p>

        {/* ============ PRIMARY: headline + signup ============ */}
        <section className="flex flex-col gap-4">
          <h1 className="text-[32px] font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl">
            {CONFIG.headline}
          </h1>

          <p className="max-w-[34ch] text-[15px] leading-relaxed text-slate-300">
            {CONFIG.reasonLine}
          </p>

          <form
            action={subscribeAction}
            method="post"
            className="
              mt-1 flex flex-col gap-3 rounded-2xl border border-[#FF6719]/45
              bg-gradient-to-b from-[#FF6719]/10 to-[#FF6719]/[0.02]
              p-3.5 shadow-[0_20px_45px_rgba(255,103,25,0.12)]
            "
          >
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              aria-label="Email address"
              autoComplete="email"
              inputMode="email"
              className="
                w-full rounded-xl border border-slate-500/40 bg-[#050510]/70
                px-4 py-3.5 text-[15px] text-slate-50 placeholder:text-slate-500
                outline-none transition focus-visible:border-[#FF6719]
                focus-visible:ring-2 focus-visible:ring-[#FF6719]/50
              "
            />
            <button
              type="submit"
              className="
                w-full rounded-xl bg-[#FF6719] px-4 py-3.5 text-[15px] font-bold
                tracking-wide text-[#1a0d00] transition hover:bg-[#ff7e3c]
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-[#FF6719]
              "
            >
              {CONFIG.buttonText}
            </button>
          </form>

          <p className="text-center text-xs text-slate-500">{CONFIG.microcopy}</p>
        </section>

        {shows.length > 0 && (
          <>
            <hr className="border-slate-700/50" />
            <div className="flex flex-col gap-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                Live shows
              </p>
              <ul className="flex flex-col gap-4">
                {shows.map((show, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between gap-3 text-xs text-slate-500"
                  >
                    <span>
                      <span className="font-medium text-[#FFB583]">
                        {show.datetime
                          ? new Date(show.datetime).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })
                          : "TBA"}
                      </span>{" "}
                      — {show.venue.city}, {show.venue.name}
                    </span>
                    {show.url && (
                      <Link
                        href={show.url}
                        className="shrink-0 rounded-full border border-[#FF6719]/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-[#FFB583] transition hover:border-[#FF6719] hover:bg-[#FF6719]/10"
                      >
                        Tickets
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <hr className="border-slate-700/50" />

        {/* ============ SECONDARY: socials ============ */}
        <nav
          aria-label="Social links"
          className="flex flex-wrap gap-x-5 gap-y-2 text-[13px]"
        >
          {CONFIG.socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 underline decoration-slate-600 underline-offset-4 transition hover:text-[#FF9A5E] hover:decoration-[#FF9A5E]"
            >
              {social.label}
            </Link>
          ))}
        </nav>

        <hr className="border-slate-700/50" />

        {/* ============ TERTIARY: bio ============ */}
        <p className="text-xs leading-relaxed text-slate-500">{CONFIG.bio}</p>

        {/* ============ QUIET TAIL: booking, manifesto ============ */}
        <hr className="border-slate-800/60" />

        <div className="flex flex-col gap-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
            Booking &amp; collabs
          </p>
          <Link
            href={`mailto:${CONFIG.bookingEmail}`}
            className="text-xs text-[#FF9A5E] underline decoration-slate-700 underline-offset-2 hover:text-[#ff7e3c]"
          >
            {CONFIG.bookingEmail}
          </Link>
        </div>

        <p className="text-[11px] italic leading-relaxed text-slate-600">
          {CONFIG.manifesto}
        </p>

        <p className="text-center text-[11px] text-slate-600">
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-[#FF6719]"
          >
            Return to the main site
          </Link>
        </p>
      </div>
    </main>
  );
}
