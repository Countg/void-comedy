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
            Gavin Stephens makes{" "}
            <span className="italic text-accent-orange">Park Bench Ontology</span> —
            stand-up, video essays, and theatre that take apart the ideological
            scaffolding of ordinary life and don&apos;t reassemble it. Polite
            liberalism, market virtue, and nationalist performance art don&apos;t
            survive contact with the material. He works from working-class Caribbean
            roots and a blue-collar read on the intellectual: Afro-Absurdism and
            Ontological Collapse, comedy that unpacks the symbol and implicates the
            room watching it.
          </p>
          <p className="text-lg leading-relaxed text-[#e6e6e6] font-mono mb-6">
            <span className="italic text-accent-orange">Just for Laughs</span> once
            told him they wanted a Canadian Chris Rock. He said no. He wasn&apos;t
            asked back. He has the résumé anyway — a Juno nomination for{" "}
            <span className="italic text-accent-orange">All Inclusive Coma</span>, a
            Canadian Screen Award for writing,{" "}
            <span className="italic text-accent-orange">SXSW</span>,{" "}
            <span className="italic text-accent-orange">the Hamilton Fringe</span>,{" "}
            <span className="italic text-accent-orange">
              the South African Comedy Festival
            </span>
            , two network specials, two solo shows (
            <span className="italic text-accent-orange">Spectacular, Spectacular</span>{" "}
            and{" "}
            <span className="italic text-accent-orange">Object of Strangeness</span>),{" "}
            <span className="italic text-accent-orange">CBC&apos;s LOL</span> and{" "}
            <span className="italic text-accent-orange">The Debaters</span>, and{" "}
            <span className="italic text-accent-orange">CTV&apos;s Comedy Inc.</span>{" "}
            He&apos;s a columnist for{" "}
            <span className="italic text-accent-orange">CBC Hamilton</span>.
          </p>
          <p className="text-lg leading-relaxed text-[#e6e6e6] font-mono mb-6">
            His practice runs past the stage. The{" "}
            <span className="italic text-accent-orange">Art Gallery of Hamilton</span>{" "}
            commissioned him to build comedy tours of its{" "}
            <span className="italic text-accent-orange">
              Metamorphosis: Visions of Antiquity in the Modern Era
            </span>{" "}
            exhibit and its Black History Month programming. He made{" "}
            <span className="italic text-accent-orange">hermit-cast</span>, a
            location-aware weather app that generates anti-capitalist reasons to stay
            home or quietly quit — functional software as ideological object. He&apos;s
            developing{" "}
            <span className="italic text-accent-orange">
              The Geeks Shall Inherit the Earth
            </span>
            , a documentary on nerd culture as political identity: an escape from
            freedom, a community built equally on belonging and gatekeeping.
          </p>
          <p className="text-lg leading-relaxed text-[#e6e6e6] font-mono mb-6">
            Essays at{" "}
            <Link
              href="https://parkbenchontology.substack.com"
              className="italic text-accent-orange underline"
            >
              parkbenchontology.substack.com
            </Link>
            .
          </p>

          <p className="text-lg leading-relaxed text-[#e6e6e6] font-mono mb-12">
            If it can&apos;t be questioned, it can&apos;t be funny.
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
