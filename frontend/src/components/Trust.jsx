import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, BadgeCheck, Clock } from "lucide-react";
import { IMAGES } from "../lib/utils";
import { RevealText, FadeIn } from "./Reveal";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Meisterbetrieb",
    desc: "Geprüfte Qualität vom KFZ-Meister – jede Arbeit fachgerecht und nach Vorschrift.",
  },
  {
    icon: HeartHandshake,
    title: "Persönlich",
    desc: "Direkter Draht zum Inhaber Andreas Isaak. Ehrliche Beratung ohne Umwege.",
  },
  {
    icon: BadgeCheck,
    title: "Faire Preise",
    desc: "Transparente Kosten – Sie wissen vorher, woran Sie sind. Kein Kleingedrucktes.",
  },
  {
    icon: Clock,
    title: "Schnelle Termine",
    desc: "Kurze Wartezeiten und flexible Termine direkt in Brakel-Erkeln.",
  },
];

export default function Trust() {
  return (
    <section data-testid="trust-section" className="relative overflow-hidden px-6 py-24 md:px-12 md:py-36">
      <div className="absolute inset-0 -z-10">
        <img src={IMAGES.carbon} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-void-900 via-void-900/85 to-void-900" />
      </div>

      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 max-w-3xl">
          <FadeIn>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-ice md:text-sm">Warum Isaak</span>
          </FadeIn>
          <RevealText
            as="h2"
            text="Vertrauen, das man merkt."
            className="mt-6 font-display text-5xl font-black uppercase leading-[0.92] tracking-tighter text-white md:text-7xl"
          />
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                data-testid={`trust-card-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group bg-void-900/90 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-void-800 md:p-10"
              >
                <Icon size={28} className="text-ice" />
                <div className="mt-6 h-px w-10 bg-ice transition-all duration-500 group-hover:w-20" />
                <h3 className="mt-6 font-display text-xl font-extrabold uppercase tracking-tight text-white md:text-2xl">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-400">{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
