"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FindingsLink() {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const trigger = () => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 800);
    };

    const initial = setTimeout(trigger, 2000);
    const interval = setInterval(trigger, 6000);

    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes tv-glitch {
          0%   { 
            color: #ff5b3d;
            text-shadow: 2px 0 #ff003c, -2px 0 #00ffcc;
            transform: translateX(-3px) skewX(-1deg);
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          }
          10%  { 
            color: #ff5b3d;
            text-shadow: -3px 0 #ff003c, 3px 0 #00ffcc;
            transform: translateX(3px) skewX(1deg);
            clip-path: polygon(0 30%, 100% 30%, 100% 100%, 0 100%);
          }
          20%  { 
            color: #ff7a5f;
            text-shadow: 1px 0 #ff003c, -1px 0 #00ffcc;
            transform: translateX(-1px);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          30%  { 
            color: #ff5b3d;
            text-shadow: -4px 0 #ff003c, 4px 0 #00ffcc;
            transform: translateX(4px) skewX(-2deg);
            clip-path: polygon(0 55%, 100% 55%, 100% 75%, 0 75%);
          }
          40%  { 
            color: #ff5b3d;
            text-shadow: 3px 0 #ff003c, -3px 0 #00ffcc;
            transform: translateX(-2px);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          50%  { 
            color: #ff7a5f;
            text-shadow: -2px 0 #ff003c, 2px 0 #00ffcc;
            transform: translateX(2px) skewX(1deg);
            clip-path: polygon(0 10%, 100% 10%, 100% 60%, 0 60%);
          }
          60%  { 
            color: #ff5b3d;
            text-shadow: 4px 0 #ff003c, -4px 0 #00ffcc;
            transform: translateX(-4px);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          70%  { 
            color: #ff5b3d;
            text-shadow: -1px 0 #ff003c, 1px 0 #00ffcc;
            transform: translateX(1px) skewX(-1deg);
            clip-path: polygon(0 40%, 100% 40%, 100% 80%, 0 80%);
          }
          85%  { 
            color: #ff5b3d;
            text-shadow: 2px 0 #ff003c, -2px 0 #00ffcc;
            transform: translateX(-1px);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          100% { 
            color: inherit;
            text-shadow: none;
            transform: none;
            clip-path: none;
          }
        }

        .findings-link {
          color: inherit;
          text-decoration: none;
          display: inline-block;
          transition: color 0.15s;
        }

        .findings-link.is-glitching {
          animation: tv-glitch 0.8s steps(1) forwards;
        }
      `}</style>

      <Link
       href="/findings"
  className={`findings-link${glitching ? " is-glitching" : ""}`}
  style={{ 
    textDecorationLine: "underline",
    textDecorationStyle: "dotted",
    textDecorationColor: "#ff5b3d",
    textUnderlineOffset: "4px",
  }}
>
        Findings available upon request.
      </Link>
    </>
  );
}