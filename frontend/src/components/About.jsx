import React from "react";
import { MapPin, User, Wrench } from "lucide-react";
import { BUSINESS } from "../lib/utils";
import { RevealText, FadeIn } from "./Reveal";

const FACTS = [
  { icon: User, k: "Inhaber", v: "Andreas Isaak" },
  { icon: MapPin, k: "Standort", v: "Brakel-Erkeln" },
  { icon: Wrench, k: "Betrieb", v: "KFZ-Meisterbetrieb" },
];

export default function About() {
  return (
    <section data-testid="about-section" className="relative overflow-hidden bg-void-900 px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <span className="mb-8 inline-block text-xs font-bold uppercase tracking-[0.4em] text-ice md:text-sm">
            Über uns
          </span>
        </FadeIn>

        <RevealText
          as="h2"
          text="Ihre Meisterwerkstatt in Brakel-Erkeln."
          className="max-w-5xl font-display text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white md:text-6xl lg:text-7xl"
        />

        <FadeIn delay={0.1}>
          <p className="mt-8 max-w-3xl text-lg font-medium leading-relaxed text-zinc-400 md:text-2xl md:leading-relaxed">
            Ob Reparatur, Inspektion oder Reifenservice: Die {BUSINESS.name} ist Ihr Ansprechpartner für
            zuverlässigen Werkstattservice in {BUSINESS.region}.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {FACTS.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.k} className="bg-void-900 p-8 md:p-10">
                <Icon size={24} className="text-ice" />
                <div className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-zinc-600">{f.k}</div>
                <div className="mt-2 font-display text-xl font-bold uppercase tracking-tight text-white md:text-2xl">
                  {f.v}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
