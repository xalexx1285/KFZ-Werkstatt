import React from "react";
import { Phone, Smartphone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { BUSINESS } from "../lib/utils";
import { RevealText, FadeIn } from "./Reveal";

export default function Contact() {
  return (
    <section id="kontakt" data-testid="contact-section" className="relative scroll-mt-24 bg-void-900 px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 max-w-3xl">
          <FadeIn>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-ice md:text-sm">Kontakt & Termine</span>
          </FadeIn>
          <RevealText
            as="h2"
            text="Termin? Einfach anrufen."
            className="mt-6 font-display text-5xl font-black uppercase leading-[0.92] tracking-tighter text-white md:text-7xl"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Contact card */}
          <FadeIn>
            <div className="flex h-full flex-col justify-between border border-white/10 bg-void-800 p-8 md:p-12">
              <div>
                <div className="font-display text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                  {BUSINESS.name}
                </div>
                <div className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-ice">
                  Inhaber: {BUSINESS.owner}
                </div>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="mt-0.5 flex-shrink-0 text-ice" />
                    <div className="text-base font-medium text-zinc-300">
                      {BUSINESS.street}
                      <br />
                      {BUSINESS.city}
                    </div>
                  </div>
                  <a href={BUSINESS.phoneHref} data-testid="contact-phone" className="flex items-center gap-4 text-zinc-300 transition-colors hover:text-ice">
                    <Phone size={20} className="flex-shrink-0 text-ice" />
                    <span className="text-base font-bold">{BUSINESS.phoneDisplay}</span>
                  </a>
                  <a href={BUSINESS.mobileHref} data-testid="contact-mobile" className="flex items-center gap-4 text-zinc-300 transition-colors hover:text-ice">
                    <Smartphone size={20} className="flex-shrink-0 text-ice" />
                    <span className="text-base font-bold">{BUSINESS.mobileDisplay}</span>
                  </a>
                  <div className="flex items-start gap-4">
                    <Clock size={20} className="mt-0.5 flex-shrink-0 text-ice" />
                    <div className="text-base font-medium text-zinc-300">{BUSINESS.hoursShort}</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={BUSINESS.phoneHref}
                  data-testid="contact-call-button"
                  className="group inline-flex flex-1 items-center justify-center gap-2 bg-ice px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-black transition-all duration-300 hover:bg-white"
                >
                  <Phone size={18} /> Jetzt anrufen
                </a>
                <a
                  href={BUSINESS.mapsDir}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-route-button"
                  className="group inline-flex flex-1 items-center justify-center gap-2 border border-white/25 px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:border-ice hover:text-ice"
                >
                  Route planen <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Opening hours */}
          <FadeIn delay={0.1}>
            <div id="oeffnungszeiten" className="flex h-full scroll-mt-24 flex-col border border-white/10 bg-void-800 p-8 md:p-12">
              <div className="flex items-center gap-3">
                <Clock size={22} className="text-ice" />
                <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                  Öffnungszeiten
                </h3>
              </div>

              <ul className="mt-8 divide-y divide-white/10" data-testid="opening-hours-list">
                {BUSINESS.hours.map((row) => (
                  <li key={row.d} className="flex items-center justify-between py-4">
                    <span className="text-base font-medium text-zinc-300">{row.d}</span>
                    <span
                      className={
                        row.open
                          ? "font-display text-base font-bold tracking-tight text-white md:text-lg"
                          : "text-sm font-bold uppercase tracking-[0.18em] text-zinc-600"
                      }
                    >
                      {row.h}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm font-medium leading-relaxed text-zinc-500">
                Termine bitte telefonisch vereinbaren – wir nehmen uns gerne Zeit für Ihr Anliegen.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
