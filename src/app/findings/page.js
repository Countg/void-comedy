"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Cursor() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setVisible((v) => !v), 550);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: "8px",
        height: "13px",
        background: "#e85d04",
        marginLeft: "2px",
        verticalAlign: "middle",
        opacity: visible ? 0.9 : 0,
        transition: "opacity 0.05s",
      }}
    />
  );
}

function Divider() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid #3a3a2e",
        margin: "2rem 0",
      }}
    />
  );
}

function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontSize: "10px",
        letterSpacing: "0.3em",
        color: "#e85d04",
        textTransform: "uppercase",
        margin: "2rem 0 0.75rem",
        opacity: 0.9,
      }}
    >
      {children}
    </p>
  );
}

function Badge({ children }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "9px",
        letterSpacing: "0.2em",
        background: "transparent",
        border: "1px solid #e85d04",
        color: "#e85d04",
        padding: "1px 6px",
        marginLeft: "8px",
        verticalAlign: "middle",
        opacity: 0.85,
      }}
    >
      {children}
    </span>
  );
}

export default function PBOEasterEgg() {
  const router = useRouter();

  return (
    <>
      <style>{`
        @keyframes scanline-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(8px); }
        }

        @keyframes glitch-1 {
          0%, 90%, 100% { clip-path: none; transform: none; opacity: 1; }
          91% { clip-path: polygon(0 15%, 100% 15%, 100% 30%, 0 30%); transform: translateX(-4px); opacity: 0.8; }
          93% { clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%); transform: translateX(4px); opacity: 0.8; }
          95% { clip-path: polygon(0 40%, 100% 40%, 100% 55%, 0 55%); transform: translateX(-2px); opacity: 0.9; }
          97% { clip-path: none; transform: none; }
        }

        @keyframes glitch-2 {
          0%, 88%, 100% { opacity: 0; transform: none; }
          89% { opacity: 0.4; transform: translateX(3px); clip-path: polygon(0 20%, 100% 20%, 100% 35%, 0 35%); color: #00ffcc; }
          91% { opacity: 0.3; transform: translateX(-3px); clip-path: polygon(0 55%, 100% 55%, 100% 65%, 0 65%); color: #ff003c; }
          93% { opacity: 0; }
        }

        @keyframes flicker {
          0%, 95%, 100% { opacity: 1; }
          96% { opacity: 0.85; }
          97% { opacity: 1; }
          98% { opacity: 0.9; }
        }

        @keyframes noise {
          0% { background-position: 0 0; }
          10% { background-position: -5% -10%; }
          20% { background-position: -15% 5%; }
          30% { background-position: 7% -25%; }
          40% { background-position: 20% 25%; }
          50% { background-position: -25% 10%; }
          60% { background-position: 15% 5%; }
          70% { background-position: 0% 15%; }
          80% { background-position: 25% 35%; }
          90% { background-position: -10% 10%; }
          100% { background-position: 0 0; }
        }

        .pbo-page {
          animation: flicker 8s infinite;
        }

        .pbo-scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.18) 0px,
            rgba(0, 0, 0, 0.18) 1px,
            transparent 1px,
            transparent 4px
          );
          pointer-events: none;
          z-index: 1;
          animation: scanline-move 0.1s steps(1) infinite;
        }

        .pbo-noise {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          pointer-events: none;
          z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          animation: noise 0.5s steps(1) infinite;
        }

        .pbo-title-wrap {
          position: relative;
          display: inline-block;
          animation: glitch-1 6s infinite;
        }

        .pbo-title-ghost {
          position: absolute;
          top: 0; left: 0;
          color: #e85d04;
          font-size: 22px;
          font-weight: normal;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          white-space: nowrap;
          animation: glitch-2 6s infinite;
          pointer-events: none;
        }

        .pbo-body p {
          font-size: 13.5px;
          line-height: 1.85;
          color: #d4cfb8;
          margin: 0 0 1.4rem;
        }

        .pbo-findings p {
          margin: 0 0 0.6rem;
          font-size: 13px;
          color: #d4cfb8;
          line-height: 1.85;
        }

        .pbo-return-btn:hover {
          color: #e85d04 !important;
        }

        .pbo-stamp {
          display: inline-block;
          border: 2px solid #e85d04;
          color: #e85d04;
          font-size: 10px;
          letter-spacing: 0.25em;
          padding: 3px 10px;
          margin-bottom: 2rem;
          opacity: 0.9;
          box-shadow: 0 0 8px rgba(232, 93, 4, 0.25), inset 0 0 8px rgba(232, 93, 4, 0.05);
        }

        .pbo-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem 2rem;
          margin-bottom: 2.5rem;
          font-size: 11px;
          color: #7a7860;
        }
      `}</style>

      <div
        className="pbo-page"
        style={{
          background: "#13140f",
          minHeight: "100vh",
          padding: "3rem 1.5rem 5rem",
          color: "#d4cfb8",
          position: "relative",
          overflow: "hidden",
          fontFamily: "var(--font-ibm-plex-mono), monospace",
        }}
      >
        <div className="pbo-scanlines" />
        <div className="pbo-noise" />

        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div className="pbo-stamp">
            FORM PBO-001 &nbsp;/&nbsp; INTERNAL USE ONLY
          </div>

          <h1
            style={{
              fontSize: "22px",
              fontWeight: "normal",
              color: "#e85d04",
              letterSpacing: "0.12em",
              margin: "0 0 0.25rem",
              textTransform: "uppercase",
            }}
          >
            <span className="pbo-title-wrap">
              Park Bench Ontology
              <span className="pbo-title-ghost" aria-hidden="true">
                Park Bench Ontology
              </span>
            </span>
            <Cursor />
          </h1>

          <p
            style={{
              fontSize: "12px",
              color: "#7a7860",
              fontStyle: "italic",
              margin: "0 0 2.5rem",
              letterSpacing: "0.05em",
            }}
          >
            An Ongoing Inquiry — Est. Whenever This Started Feeling Necessary
          </p>

          <div className="pbo-meta-grid">
            {[
              ["FILING DATE", "UNSPECIFIED"],
              ["STATUS", "ACTIVE / UNRESOLVED"],
              ["JURISDICTION", "THE GAP BETWEEN WHAT IS SAID AND WHAT IS MEANT"],
              ["COMPLIANCE", "PENDING. HAS ALWAYS BEEN PENDING."],
            ].map(([label, value]) => (
              <div key={label}>
                {label}: <span style={{ color: "#a8a48a" }}>{value}</span>
              </div>
            ))}
          </div>

          <Divider />
          <SectionLabel>Mandate</SectionLabel>

          <div className="pbo-body">
            <p>
              Park Bench Ontology is a registered* creative practice operating at
              the intersection of existential comedy, Afro-Absurdism, and
              unsanctioned philosophical infrastructure.
            </p>
            <p>
              This office produces live performances, conceptual artifacts,
              anti-productivity software, and other materials deemed inadvisable
              by the relevant authorities.
            </p>

            <SectionLabel>Core Findings</SectionLabel>

            <div
              className="pbo-findings"
              style={{
                borderLeft: "2px solid #e85d04",
                paddingLeft: "1.25rem",
                margin: "1.5rem 0",
              }}
            >
              <p>Polite liberalism is a performance.</p>
              <p>Market virtue is a costume.</p>
              <p>Nationalist identity is a group project nobody agreed to join.</p>
            </div>

            <p>
              These conclusions are non-negotiable and have been peer-reviewed
              by nobody.
            </p>
          </div>

          <Divider />
          <SectionLabel>Principal Investigator</SectionLabel>

          <div className="pbo-body">
            <p>
              Park Bench Ontology was founded by{" "}
              <span
                style={{
                  color: "#e8e0c8",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  textDecorationColor: "#e85d04",
                  textDecorationThickness: "1px",
                }}
              >
                Gavin Stephens
              </span>{" "}
              — JUNO-nominated comedian, Canadian Screen Award-winning writer,
              and person who has not yet been asked to stop. His work has been
              tolerated at Just for Laughs, SXSW, the Hamilton Fringe, and the
              South African Comedy Festival. The Art Gallery of Hamilton
              commissioned him anyway.
            </p>
          </div>

          <Divider />
          <SectionLabel>Active Inquiries</SectionLabel>

          <div className="pbo-body">
            <p>
              <em style={{ color: "#a8a48a" }}>hermit-cast</em>
              <Badge>OPERATIONAL</Badge>
              <br />
              Location-aware anti-productivity software. Generates weather-based
              ideological reasons to stay home or quietly quit.
            </p>
            <p>
              <em style={{ color: "#a8a48a" }}>
                The Geeks Shall Inherit the Earth
              </em>
              <Badge>IN DEVELOPMENT</Badge>
              <br />
              Documentary examining nerd culture as social and political
              identity. Explores escape from freedom, manufactured belonging,
              and gatekeeping as community infrastructure. The market did not
              request this.
            </p>
            <p>
              Additional inquiries at various stages of completion. Further
              notice will not be provided.
            </p>
          </div>

          <Divider />
          <SectionLabel>Terms of Engagement</SectionLabel>

          <div className="pbo-body">
            <p>
              Park Bench Ontology does not offer refunds. It does not require
              your agreement. It only asks that you sit with the question long
              enough to notice it&apos;s sitting with you.
            </p>
            <p>Failure to notice is also data.</p>
          </div>

          <div
            style={{
              marginTop: "3rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid #252520",
              fontSize: "11px",
              color: "#4a4a3a",
              fontStyle: "italic",
              lineHeight: 1.7,
            }}
          >
            <p style={{ margin: "0 0 0.4rem" }}>
              *Registration pending. The form was confusing. This is intentional
              on someone&apos;s part.¹
            </p>
            <p style={{ margin: "0 0 0.4rem" }}>
              ¹ That someone has not been identified. The inquiry continues.
            </p>
            <p style={{ margin: 0 }}>
              © Park Bench Ontology — All Rights Reserved, All Rights Questioned
            </p>
          </div>

          <button
            className="pbo-return-btn"
            onClick={() => router.push("/")}
            style={{
              display: "inline-block",
              marginTop: "3.5rem",
              fontSize: "11px",
              color: "#4a4a3a",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "color 0.2s",
              background: "none",
              border: "none",
              padding: 0,
              fontFamily: "inherit",
            }}
          >
            ↩ Return to Surface
          </button>
        </div>
      </div>
    </>
  );
}