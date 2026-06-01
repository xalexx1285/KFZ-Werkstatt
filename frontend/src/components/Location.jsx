import React from "react";
import { MapPin, ArrowUpRight, Navigation } from "lucide-react";
import { BUSINESS } from "../lib/utils";
import { RevealText, FadeIn } from "./Reveal";

export default function Location() {
  return (
    <section id="anfahrt" data-testid="location-section" className="relative scroll-mt-24 bg-void-800 px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-ice md:text-sm">Anfahrt</span>
            </FadeIn>
            <RevealText
              as="h2"
              text="So finden Sie uns."
              className="mt-6 font-display text-5xl font-black uppercase leading-[0.92] tracking-tighter text-white md:text-7xl"
            />
            <FadeIn delay={0.1}>
              <div className="mt-6 flex items-start gap-3 text-zinc-300">
                <MapPin size={22} className="mt-1 flex-shrink-0 text-ice" />
                <span className="text-lg font-medium md:text-xl">
                  {BUSINESS.street}, {BUSINESS.city}
                </span>
              </div>
              <p className="mt-3 text-base font-medium text-zinc-500">
                Wir sind für Sie da in {BUSINESS.region}.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <a
              href={BUSINESS.mapsDir}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="location-route-button"
              className="group inline-flex items-center justify-center gap-2 bg-ice px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-black transition-all duration-300 hover:bg-white"
            >
              <Navigation size={18} /> Route planen
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="relative overflow-hidden border border-white/10">
            <iframe
              title="Standort KFZ-Meisterwerkstatt Isaak"
              src={BUSINESS.mapsEmbed}
              data-testid="location-map"
              width="100%"
              height="460"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                border: 0,
                filter: "invert(0.9) hue-rotate(180deg) contrast(0.86) brightness(0.85) grayscale(0.2)",
              }}
              className="block w-full"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ice/10" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
