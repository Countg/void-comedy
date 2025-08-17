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
    Gavin Stephens is a Caribbean-Canadian comic, writer, and cultural irritant. Born working class and raised by contradiction, he makes comedy that can’t be branded, bought, or packaged — the kind that forces a system built on surface and spectacle to reckon with substance.</p>
      <p className="text-lg leading-relaxed text-[#e6e6e6] font-mono mb-6">
        His Juno-nominated album <span className="italic text-accent-orange">All Inclusive Coma</span> proved that even when the industry doesn’t know what to do with you, undeniable work speaks for itself. With <span className="italic text-accent-orange">Park Bench Ontology</span> Gavin delivers blue-collar critiques wrapped in existential dread, calling bullshit on polite liberalism, market virtue, and nationalist performance art.
      </p>

      <p className="text-lg leading-relaxed text-[#e6e6e6] font-mono mb-12">
        Gavin isn’t here to kill — he’s here to confront. His comedy doesn’t flatter its audience; it implicates them. And in a scene built on market value and middle-class myth, his voice is hard to brand, harder to ignore.
      </p>

      {/* Philosophy & Method Section */}
      <h2 className="text-2xl font-bold text-accent-orange font-mono mb-4 tracking-wide">
        PHILOSOPHY & METHOD
      </h2>

      <p className="text-base leading-relaxed text-white/80 font-mono mb-4">
        Gavin’s comedy lives where collapse meets clarity. His work blends Afro-Absurdism with Ontological Collapse — a smart, critical, punk-philosophical style that asks not just “What’s funny?” but “What’s real?” It’s comedy that unpacks symbols, implicates the audience, and refuses to let cultural performance pass for meaning.
      </p>

      <p className="text-base leading-relaxed text-white/80 font-mono mb-4">
        He calls the method: <span className="text-accentOrange font-semibold">Lo-Fi Ontological Satire</span> — zine-brained, theory-laced, and low-gloss. It pulls from cultural studies, conspiracy logic, and the poetry of working-class life. It’s cartoonish but brutal, political without sermonizing, and built to push back on every soft lie that holds up a dying system.
      </p>

      <p className="text-base leading-relaxed text-white/80 font-mono">
        Whether in stand-up, podcasting, or longform essays, Gavin’s not here to entertain passively — he’s here to throw a philosophical wrench in the gears. If it can’t be questioned, it can’t be funny.
      </p>
    </div>

    {/* Downloadable Bio */}
    <div className="mt-14 text-center md:text-left max-w-xl mx-auto md:mx-0">
      <h3 className="text-lg font-semibold text-accentOrange mb-1 font-mono">Downloadable Press</h3>
      <p className="text-sm text-white/70 mb-4 max-w-md mx-auto md:mx-0 font-mono">
        Press, festivals, or media? Grab a PDF bio & promo photos below.
      </p>
<div className="flex flex-col sm:flex-row sm:items-center gap-2">
  <a
    href="/assets/Gavin_Stephens_Press_Kit.pdf"
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



  )
}
