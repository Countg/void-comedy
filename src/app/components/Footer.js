"use client"
import Image from "next/image"

export default function Footer(){
  return (
    <footer className="pbo-footer">
      <div className="pbo-page">
        <div className="pbo-footgrid">
          <div>
            <Image
              src="/images/gavinHatSerious.png"
              alt="Gavin Stephens"
              width={500}
              height={500}
            />
            <p>Broadcasting from the ruins of late capitalism.</p>
          </div>

          <div className="pbo-footcol">
            <h4>Navigation</h4>
            <a href="#podcast">Podcast</a>
            <a href="#projects">Projects</a>
            <a href="#shows">Tour Dates</a>
            <a href="#zine">Zine</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="pbo-footcol">
            <h4>Connect</h4>
            <a href="mailto:info@gavinstephens.com">Email Me</a>
            <a href="https://linktr.ee/gavinstephens" target="_blank" rel="noopener noreferrer">Linktree</a>
          </div>
        </div>
      </div>

      <div className="pbo-social">
        <a href="https://bsky.app/profile/gavinbstephens.substack.com" target="_blank" rel="noopener noreferrer">Bluesky</a>
        <a href="https://www.tiktok.com/@parkbenchontology" target="_blank" rel="noopener noreferrer">TikTok</a>
        <a href="https://instagram.com/countgavin" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://gavinbstephens.substack.com/" target="_blank" rel="noopener noreferrer">Substack</a>
        <a href="https://www.youtube.com/@ParkBenchOntology" target="_blank" rel="noopener noreferrer">YouTube</a>
      </div>

      <div className="pbo-page">
        <div className="pbo-footbottom">
          © 2026 Gavin Stephens · Park Bench Ontology
        </div>
      </div>
    </footer>
  )
}
