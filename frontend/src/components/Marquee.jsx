import React from "react";
import Marquee from "react-fast-marquee";

const WORDS = [
  "KFZ-REPARATUR",
  "INSPEKTION",
  "REIFENSERVICE",
  "FELGENSERVICE",
  "REIFENMONTAGE",
  "WERKSTATTSERVICE",
];

export default function BrandMarquee() {
  return (
    <section data-testid="brand-marquee" className="relative border-y border-white/10 bg-void-900 py-7 md:py-9" aria-hidden="true">
      <Marquee speed={55} gradient={false} autoFill>
        {WORDS.map((w, i) => (
          <div key={`${w}-${i}`} className="flex items-center">
            <span className="font-display text-4xl font-black uppercase tracking-tight text-stroke md:text-6xl">{w}</span>
            <span className="mx-7 inline-block h-2.5 w-2.5 rounded-full bg-ice md:mx-11 md:h-3.5 md:w-3.5" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
