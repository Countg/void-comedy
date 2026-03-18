import Image from "next/image";
import CardContainer from "./CardContainer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <CardContainer>
      <div className="relative flex flex-col gap-10 md:gap-16" id="about">
        {/* Header */}
        <h1 className="text-4xl font-bold text-accent-orange font-mono tracking-wide text-left">
          ABOUT GAVIN
        </h1>
        {/* Background Glow */}
        <div className="absolute -inset-5 -z-10 animate-pulse bg-gradient-to-br from-accentOrange/15 via-darkIndigo to-transparent rounded-3xl blur-3xl opacity-40"></div>

        {/* Profile Image - Top Left */}
        <div className="flex justify-center md:justify-start">
          <div className="relative p-3 rounded-3xl bg-darkIndigo shadow-[0_0_80px_#ff671980] border-2 border-accent-orange transition-shadow duration-500 hover:shadow-[0_0_100px_#ff6719cc]">
            <Image
              src="/images/StandupColour.jpg"
              alt="Gavin Stephens Portrait"
              width={500}
              height={500}
              className="rounded-2xl grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-500 w-full h-auto"
            />
          </div>
        </div>

        {/* Full-Width Text Body Like a Newspaper */}
    <div className="max-w-5xl mx-auto text-left">
  <p className="text-lg leading-relaxed text-[#e6e6e6] font-mono mb-6">
    Juno-nominated comedian and Canadian Screen Award-winning writer Gavin
    Stephens draws on his working-class Caribbean roots to bring a sharp,
    unflinching perspective to the stage. His comedy doesn&apos;t chase the
    room — it&apos;s a live existential interrogation. Every show is a unique
    experiment: weird, risky, and uncomfortably honest, where absurdity,
    ideas, and uncomfortable truths collide.
  </p>

  <p className="text-lg leading-relaxed text-[#e6e6e6] font-mono mb-6">
    His Juno-nominated album{" "}
    <span className="italic text-accent-orange">All Inclusive Coma</span>{" "}
    proved that undeniable work speaks for itself. With{" "}
    <span className="italic text-accent-orange">Park Bench Ontology</span>,
    Gavin delivers blue-collar critiques wrapped in existential dread —
    where polite liberalism, market virtue, and nationalist performance art
    don&apos;t survive contact with the material.
  </p>

  <p className="text-lg leading-relaxed text-[#e6e6e6] font-mono mb-6">
    Gavin has performed at{" "}
    <span className="italic text-accent-orange">Just for Laughs</span>{" "}
    Montreal and Toronto,{" "}
    <span className="italic text-accent-orange">SXSW</span>,{" "}
    <span className="italic text-accent-orange">the Hamilton Fringe</span>,
    and{" "}
    <span className="italic text-accent-orange">
      the South African Comedy Festival
    </span>
    , with two network comedy specials and two solo shows (
    <span className="italic text-accent-orange">Spectacular, Spectacular</span>{" "}
    and{" "}
    <span className="italic text-accent-orange">Object of Strangeness</span>
    ), and has appeared on{" "}
    <span className="italic text-accent-orange">CBC&apos;s LOL</span>,{" "}
    <span className="italic text-accent-orange">The Debaters</span>, and{" "}
    <span className="italic text-accent-orange">CTV&apos;s Comedy Inc.</span>{" "}
    He&apos;s also a columnist for{" "}
    <span className="italic text-accent-orange">CBC Hamilton</span>.
  </p>

  <p className="text-lg leading-relaxed text-[#e6e6e6] font-mono mb-12">
    Commissioned by the{" "}
    <span className="italic text-accent-orange">Art Gallery of Hamilton</span>{" "}
    to create unique comedy tours of their{" "}
    <span className="italic text-accent-orange">
      Metamorphosis: Visions of Antiquity in the Modern Era
    </span>{" "}
    exhibit and Black History Month programming, his practice extends beyond
    the stage. He is also the creator of{" "}
    <span className="italic text-accent-orange">hermit-cast</span>, a
    location-aware weather app that generates anti-capitalist reasons to stay
    home or quietly quit — functional software as ideological object. He is
    currently developing{" "}
    <span className="italic text-accent-orange">
      The Geeks Shall Inherit the Earth
    </span>
    , a documentary examining nerd culture as a social and political identity
    — how it functions as an escape from freedom, a ready-made community
    built equally on belonging and gatekeeping.
  </p>

  {/* Philosophy & Method Section */}
  <h2 className="text-2xl font-bold text-accent-orange font-mono mb-4 tracking-wide">
    PHILOSOPHY &amp; METHOD
  </h2>

  <p className="text-base leading-relaxed text-white/80 font-mono mb-4">
    Gavin&apos;s comedy lives where collapse meets clarity. His work blends
    Afro-Absurdism with Ontological Collapse — a smart, critical,
    punk-philosophical style that asks not just &quot;What&apos;s funny?&quot; but
    &quot;What&apos;s real?&quot; It&apos;s comedy that unpacks symbols, implicates the
    audience, and refuses to let cultural performance pass for meaning.
  </p>

  <p className="text-base leading-relaxed text-white/80 font-mono">
    Whether in stand-up, podcasting, or longform essays, Gavin&apos;s not here
    to entertain passively — he&apos;s here to throw a philosophical wrench in
    the gears. If it can&apos;t be questioned, it can&apos;t be funny.
  </p>
</div>

        {/* Downloadable Bio */}
        <div className="mt-14 text-center md:text-left max-w-xl mx-auto md:mx-0">
          <h3 className="text-lg font-semibold text-accentOrange mb-1 font-mono">
            Downloadable Press
          </h3>
          <p className="text-sm text-white/70 mb-4 max-w-md mx-auto md:mx-0 font-mono">
            Press, festivals, or media? Grab a PDF bio & promo photos below.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <a
              href="../assets/Gavin_Stephens_Press_Kit_2026.pdf"
              download
              className="inline-block px-6 py-3 border-2 border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-dark-indigo transition-colors duration-200 rounded-lg font-mono text-sm tracking-wide"
              aria-label="Download Gavin Stephens Press Bio PDF"
            >
              Download PDF Bio
            </a>

            <Link
              href="https://photos.app.goo.gl/ZRbBUWwYVn31Q7s99"
              target="_blank"
              className="inline-block px-6 py-3 border-2 border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-dark-indigo transition-colors duration-200 rounded-lg font-mono text-sm tracking-wide"
              aria-label="Gavin Stephens Promo Photos"
            >
              Download Photos
            </Link>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}
