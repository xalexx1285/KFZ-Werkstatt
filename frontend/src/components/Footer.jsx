import React from "react";
import { Phone, ArrowUpRight } from "lucide-react";
import { BUSINESS } from "../lib/utils";

const NAVLINKS = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Öffnungszeiten", href: "#oeffnungszeiten" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Anfahrt", href: "#anfahrt" },
];

export default function Footer() {
  return (
    <footer data-testid="main-footer" className="relative overflow-hidden border-t border-white/10 bg-void-900 px-6 pt-20 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display text-2xl font-black uppercase tracking-tight text-white">
              ISA<span className="text-ice">A</span>K
            </div>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">KFZ-Meisterwerkstatt</p>
            <p className="mt-5 max-w-xs text-sm font-medium leading-relaxed text-zinc-500">
              Ihre zuverlässige Autowerkstatt für Reparatur, Inspektion und Reifenservice in Brakel-Erkeln.
            </p>
            <a
              href={BUSINESS.phoneHref}
              data-testid="footer-call"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-ice transition-colors hover:text-white"
            >
              <Phone size={16} /> {BUSINESS.phoneDisplay}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600">Navigation</div>
            <ul className="mt-5 space-y-3">
              {NAVLINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-ice">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600">Kontakt</div>
            <div className="mt-5 space-y-2 text-sm font-medium text-zinc-400">
              <div>{BUSINESS.street}</div>
              <div>{BUSINESS.city}</div>
              <a href={BUSINESS.phoneHref} className="block transition-colors hover:text-ice">Tel: {BUSINESS.phoneDisplay}</a>
              <a href={BUSINESS.mobileHref} className="block transition-colors hover:text-ice">Mobil: {BUSINESS.mobileDisplay}</a>
              <a href={BUSINESS.mapsDir} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 pt-2 text-ice transition-colors hover:text-white">
                Route planen <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Impressum */}
          <div id="impressum" className="scroll-mt-24">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600">Impressum</div>
            <div className="mt-5 space-y-1.5 text-sm font-medium leading-relaxed text-zinc-400">
              <div className="text-zinc-300">Angaben gemäß § 5 TMG</div>
              <div className="pt-2 font-semibold text-white">{BUSINESS.name}</div>
              <div>Inhaber: {BUSINESS.owner}</div>
              <div>{BUSINESS.street}</div>
              <div>{BUSINESS.city}</div>
              <div>Deutschland</div>
              <div className="pt-2">Telefon: {BUSINESS.phoneDisplay}</div>
              <div>Mobil: {BUSINESS.mobileDisplay}</div>
            </div>
          </div>
        </div>

        {/* Massive wordmark */}
        <div className="relative mt-16 select-none">
          <div className="font-display text-[26vw] font-black uppercase leading-[0.78] tracking-tighter text-white/[0.04]">
            ISAAK
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 pb-24 md:flex-row lg:pb-7">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-600">
            © 2026 {BUSINESS.name} · {BUSINESS.city}
          </span>
          <div className="flex gap-6">
            <a href="#impressum" className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-600 transition-colors hover:text-white">
              Impressum
            </a>
            <a href="#kontakt" className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-600 transition-colors hover:text-white">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
