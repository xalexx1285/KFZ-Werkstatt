import React from "react";
import { motion } from "framer-motion";
import { Wrench, ClipboardCheck, Disc, Disc3, Settings, ArrowUpRight } from "lucide-react";
import { cn, IMAGES } from "../lib/utils";
import { RevealText, FadeIn } from "./Reveal";

const SERVICES = [
  {
    id: "reparatur",
    icon: Wrench,
    title: "KFZ-Reparaturen",
    desc: "Zuverlässige Reparaturen aller Fahrzeugmarken – vom kleinen Defekt bis zur großen Instandsetzung.",
    span: "md:col-span-2",
    image: IMAGES.carbon,
  },
  {
    id: "inspektion",
    icon: ClipboardCheck,
    title: "Inspektion",
    desc: "Inspektion und Wartung nach Herstellervorgaben – für ein sicheres und zuverlässiges Fahrzeug.",
    span: "",
  },
  {
    id: "reifenservice",
    icon: Disc,
    title: "Reifenservice",
    desc: "Reifenmontage, Auswuchten, Reifenwechsel und Einlagerung – schnell und fachgerecht.",
    span: "",
    image: IMAGES.wheel,
  },
  {
    id: "felgenservice",
    icon: Disc3,
    title: "Felgenservice",
    desc: "Alufelgen und Felgenmontage für sicheren Halt und den perfekten Auftritt.",
    span: "",
  },
  {
    id: "werkstattservice",
    icon: Settings,
    title: "Werkstattservice",
    desc: "Rundum-Service rund ums Auto – kompetent und persönlich durch den Meisterbetrieb.",
    span: "",
  },
];

function ServiceCard({ s, index }) {
  const Icon = s.icon;
  const hasImage = Boolean(s.image);
  return (
    <motion.div
      data-testid={`service-card-${s.id}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative flex min-h-[260px] flex-col justify-between overflow-hidden border border-white/10 bg-void-800 p-7 transition-colors duration-500 hover:border-ice/40 md:min-h-[300px] md:p-9",
        s.span
      )}
    >
      {hasImage && (
        <>
          <img
            src={s.image}
            alt={s.title}
            className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void-900 via-void-900/70 to-void-900/30" />
        </>
      )}

      <div className="relative flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center border border-ice/40 bg-ice/5 text-ice transition-colors duration-500 group-hover:bg-ice group-hover:text-black">
          <Icon size={22} />
        </span>
        <ArrowUpRight size={22} className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ice" />
      </div>

      <div className="relative mt-8">
        <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-white md:text-3xl">
          {s.title}
        </h3>
        <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-zinc-400 md:text-base">
          {s.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="leistungen" data-testid="services-section" className="relative scroll-mt-24 bg-void-900 px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <FadeIn>
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-ice md:text-sm">Unsere Leistungen</span>
            </FadeIn>
            <RevealText
              as="h2"
              text="Alles rund ums Auto."
              className="mt-6 font-display text-5xl font-black uppercase leading-[0.92] tracking-tighter text-white md:text-7xl"
            />
          </div>
          <FadeIn delay={0.1}>
            <p className="max-w-sm text-base font-medium leading-relaxed text-zinc-400">
              Vom Reifenwechsel bis zur kompletten Inspektion – alle Leistungen aus einer Hand,
              fachgerecht durch den Meisterbetrieb.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
