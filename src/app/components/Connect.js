import Link from "next/link";

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
    <main className="pbo-c-main">
      <div className="pbo-c-wrap">
        <p className="pbo-c-eyebrow">{CONFIG.eyebrow}</p>

        {/* ============ PRIMARY: headline + signup ============ */}
        <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1 className="pbo-c-head">{CONFIG.headline}</h1>

          <p className="pbo-c-reason">{CONFIG.reasonLine}</p>

          <form action={subscribeAction} method="post" className="pbo-c-form">
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              aria-label="Email address"
              autoComplete="email"
              inputMode="email"
              className="pbo-input"
              style={{ marginBottom: 0 }}
            />
            <button type="submit" className="pbo-btn">
              {CONFIG.buttonText}
            </button>
          </form>

          <p className="pbo-c-micro">{CONFIG.microcopy}</p>
        </section>

        {shows.length > 0 && (
          <>
            <hr className="pbo-c-rule" />
            <div>
              <p className="pbo-c-label">Live Shows</p>
              {shows.map((show, i) => (
                <div key={i} className="pbo-c-show">
                  <span>
                    <span className="when">
                      {show.datetime
                        ? new Date(show.datetime).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })
                        : "TBA"}
                    </span>{" "}
                    <span className="where">
                      — {show.venue.city}, {show.venue.name}
                    </span>
                  </span>
                  {show.url && (
                    <Link href={show.url} target="_blank" rel="noopener noreferrer">
                      Tickets
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        <hr className="pbo-c-rule" />

        {/* ============ SECONDARY: socials ============ */}
        <nav aria-label="Social links" className="pbo-c-socials">
          {CONFIG.socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
            </Link>
          ))}
        </nav>

        {/* ============ TERTIARY: bio ============ */}
        <p className="pbo-c-bio">{CONFIG.bio}</p>

        {/* ============ QUIET TAIL: booking, manifesto ============ */}
        <hr className="pbo-c-rule" />

        <div>
          <p className="pbo-c-label">Booking &amp; Collabs</p>
          <Link href={`mailto:${CONFIG.bookingEmail}`} className="pbo-c-mail">
            {CONFIG.bookingEmail}
          </Link>
        </div>

        <p className="pbo-c-manifesto">{CONFIG.manifesto}</p>

        <Link href="/" className="pbo-c-back">
          Return to the main site
        </Link>
      </div>

      {/* --- VHS overlays, same as the main site --- */}
      <div className="pbo-mvhs pbo-mscan" aria-hidden="true" />
      <div className="pbo-mvhs pbo-mstatic" aria-hidden="true" />
    </main>
  );
}
