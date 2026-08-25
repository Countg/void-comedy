import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section id="about" className="pbo-section">
      <div className="pbo-kicker">About Gavin</div>

      {/* --- row 1: photo + intro --- */}
      <div className="pbo-about">
        <Image
          src="/images/aboutPhoto.jpg"
          alt="Gavin Stephens on stage"
          width={1000}
          height={1000}
          className="pbo-aboutimg"
        />

        <div className="pbo-aboutcopy">
          <p>
            Gavin Stephens makes <em>Park Bench Ontology</em> — stand-up, video essays, and
            theatre that take apart the ideological scaffolding of ordinary life and
            doesn&apos;t reassemble it. Polite liberalism, market virtue, and nationalist
            performance art doesn&apos;t survive contact with the material.
          </p>

          <p>
            His art is informed by working-class Caribbean roots and his blue-collar read on
            the intellectual: Afro-Absurdism and Ontological Collapse, comedy that unpacks
            the symbol and implicates the room watching it.
          </p>

          <p>
            <em>Just for Laughs</em> once told him they wanted a Canadian Chris Rock. He said
            no. He wasn&apos;t asked back. He has the résumé anyway — a Juno nomination for{" "}
            <em>All Inclusive Coma</em>, a Canadian Screen Award for writing, <em>SXSW</em>,{" "}
            <em>the Hamilton Fringe</em>, <em>the South African Comedy Festival</em>, two
            network specials, two solo shows (<em>Spectacular, Spectacular</em> and{" "}
            <em>Object of Strangeness</em>), <em>CBC&apos;s LOL</em> and{" "}
            <em>The Debaters</em>, and <em>CTV&apos;s Comedy Inc.</em> He&apos;s a columnist
            for <em>CBC Hamilton</em>.
          </p>

          <div className="pbo-stat">
            <div>
              <b>1</b>
              <span>Bench</span>
            </div>
            <div>
              <b>0</b>
              <span>Reassembled</span>
            </div>
            <div>
              <b>1</b>
              <span>Refusal</span>
            </div>
            <div>
              <b>1</b>
              <span>Simulation</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- row 2: the rest of the bio, two columns --- */}
      <div className="pbo-bio2">
        <div className="pbo-aboutcopy">
          <p>
            His practice runs past the stage. The <em>Art Gallery of Hamilton</em>{" "}
            commissioned him to build comedy tours of its{" "}
            <em>Metamorphosis: Visions of Antiquity in the Modern Era</em> exhibit and its
            Black History Month programming. He made <em>hermit-cast</em>, a location-aware
            weather app that generates anti-capitalist reasons to stay home or quietly quit
            — functional software as ideological object.
          </p>
        </div>

        <div className="pbo-aboutcopy">
          <p>
            He&apos;s developing <em>The Geeks Shall Inherit the Earth</em>, a documentary on
            nerd culture as political identity: an escape from freedom, a community built
            equally on belonging and gatekeeping.
          </p>

          <p>
            Essays at{" "}
            <Link href="https://parkbenchontology.substack.com" target="_blank">
              parkbenchontology.substack.com
            </Link>
            .
          </p>
        </div>
      </div>

      <p className="pbo-pull">
        If it can&apos;t be questioned, <span className="accent">it can&apos;t be funny.</span>
      </p>

      <div className="pbo-press">
        <a
          href="../assets/Gavin_Stephens_Press_Kit_2026.pdf"
          download
          aria-label="Download Gavin Stephens Press Bio PDF"
        >
          Download PDF Bio
        </a>
        <a
          href="https://photos.app.goo.gl/ZRbBUWwYVn31Q7s99"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gavin Stephens Promo Photos"
        >
          Download Photos
        </a>
      </div>
    </section>
  );
}
