import CardContainer from "./CardContainer"
import Image from "next/image"

export default function ShopCard(){





    return(
      <CardContainer>
<section id="merch" className="px-6 py-12  bg-[#131427]/40 text-[#e6e6e6] font-mono">
  <div className="max-w-6xl mx-auto border border-white/20 p-6 sm:p-10 bg-white/5 rounded-lg grid md:grid-cols-3 gap-8 items-center animate-fadeIn hover:animate-floatForever relative">

    {/* LEFT: Text */}
    <div className="md:col-span-2 space-y-4">
      <h2 className="text- text-4xl sm:text-5xl font-bold glitch-text uppercase tracking-tight">
        COMEDY BOUTIQUE
      </h2>

      <p className="text-sm text-white/60 uppercase tracking-widest">
        Failed Futures. Wearable Theories.
      </p>

      <p className="text-white/80 text-base sm:text-lg leading-snug">
        Lo-fi streetwear. Philosophy merch. <br />
        Glitchy fashion from the metaphysical underground.
      </p>

      <a
        href="https://comedy-boutique.square.site"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 border border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-dark-indigo transition-colors duration-300 rounded-lg text-sm font-semibold tracking-wide uppercase"
      >
        Visit The Store
      </a>
    </div>

    {/* RIGHT: Placeholder Graphic */}
    <div className="relative flex justify-center items-center">
      <div className="w-full h-64 bg-white/10 border border-dashed border-white/30 rounded-lg flex items-center justify-center text-white/40 text-sm italic tracking-wide text-center px-4">
     <Image src='/images/product.jpg' height={500} width={500} alt='latest product'/>
      </div>

      <span className="absolute top-2 left-2 text-xs bg-accent-orange text-darkIndigo px-2 py-0.5 rounded-sm uppercase font-bold tracking-wider">
        NEW DROP
      </span>
    </div>

  </div>

  {/* Optional footer tagline */}
  <p className="mt-6 text-center text-xs text-white/40 tracking-widest italic">
    As seen on nobody. Made for everyone.
  </p>
</section>





      </CardContainer>

    )
}