import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, CalendarClock, ChevronRight, MoveDown } from "lucide-react";
import { IMAGES, BUSINESS } from "../lib/utils";

export default function HeroScroll() {
  const wrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Wheel transforms
  const wheelScale = useTransform(scrollYProgress, [0, 0.55, 1], [0.85, 1.4, 2.6]);
  const wheelRotate = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const wheelY = useTransform(scrollYProgress, [0, 1], ["2%", "-5%"]);
  const wheelOpacity = useTransform(scrollYProgress, [0, 0.86, 1], [1, 1, 0.2]);

  // Background parallax
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
  const bleedY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  // Phase windows
  const a = useTransform(scrollYProgress, [0, 0.16, 0.22], [1, 1, 0]);
  const aY = useTransform(scrollYProgress, [0, 0.22], ["0px", "-50px"]);

  const b = useTransform(scrollYProgress, [0.28, 0.34, 0.48, 0.54], [0, 1, 1, 0]);
  const bY = useTransform(scrollYProgress, [0.28, 0.54], ["40px", "-40px"]);

  const c = useTransform(scrollYProgress, [0.58, 0.64, 0.74, 0.8], [0, 1, 1, 0]);
  const cY = useTransform(scrollYProgress, [0.58, 0.8], ["40px", "-40px"]);

  const d = useTransform(scrollYProgress, [0.84, 0.9, 1], [0, 1, 1]);
  const dY = useTransform(scrollYProgress, [0.84, 0.94], ["50px", "0px"]);

  const hint = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div id="top" ref={wrapperRef} data-testid="hero-scroll-container" className="relative h-[320vh] bg-void-900">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            style={{ scale: glowScale }}
            className="absolute left-[60%] top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ice/10 blur-[120px]"
          />
          <motion.img
            src={IMAGES.cyanBleed}
            alt=""
            style={{ y: bleedY }}
            className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void-900/40 via-transparent to-void-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-void-900 via-void-900/40 to-transparent md:via-void-900/20" />
        </div>

        {/* The wheel */}
        <motion.img
          src={IMAGES.wheel}
          alt="Reifen und Alufelge – KFZ-Meisterwerkstatt Isaak"
          data-testid="hero-wheel-image"
          style={{
            scale: wheelScale,
            rotate: wheelRotate,
            y: wheelY,
            opacity: wheelOpacity,
            WebkitMaskImage: "radial-gradient(ellipse 66% 70% at 54% 50%, #000 54%, transparent 100%)",
            maskImage: "radial-gradient(ellipse 66% 70% at 54% 50%, #000 54%, transparent 100%)",
          }}
          className="relative z-10 ml-[20%] h-[72vh] max-h-[760px] w-auto select-none object-contain will-change-transform md:ml-[30%]"
          draggable={false}
        />

        {/* Text overlays */}
        <div className="pointer-events-none absolute inset-0 z-20">
          {/* Phase A — resting hero */}
          <motion.div style={{ opacity: a, y: aY }} className="absolute inset-0 flex items-center justify-start px-6 md:px-12 lg:px-20">
            <div className="max-w-2xl">
              <span className="mb-5 block text-xs font-bold uppercase tracking-[0.32em] text-ice md:text-sm">
                Meisterbetrieb · Brakel-Erkeln
              </span>
              <h1
                data-testid="hero-headline"
                className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-7xl lg:text-8xl"
              >
                Meister­werkstatt<br />
                <span className="text-ice">Isaak</span>
              </h1>
              <p className="mt-6 max-w-lg text-base font-medium leading-relaxed text-zinc-300 md:text-lg">
                Ihre zuverlässige Autowerkstatt für Reparatur, Inspektion und Reifenservice in Brakel-Erkeln.
              </p>
              <div className="pointer-events-auto mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={BUSINESS.phoneHref}
                  data-testid="hero-cta-call"
                  className="group inline-flex items-center justify-center gap-2 bg-ice px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-black transition-all duration-300 hover:bg-white"
                >
                  <Phone size={18} />
                  Jetzt anrufen
                </a>
                <a
                  href="#kontakt"
                  data-testid="hero-cta-appointment"
                  className="group inline-flex items-center justify-center gap-2 border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:border-ice hover:text-ice"
                >
                  <CalendarClock size={18} />
                  Termin anfragen
                </a>
              </div>
            </div>
          </motion.div>

          {/* Phase B */}
          <motion.div style={{ opacity: b, y: bY }} className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <h2 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white md:text-7xl lg:text-8xl">
              Reparatur. Inspektion.<br /><span className="text-stroke-ice">Reifenservice.</span>
            </h2>
          </motion.div>

          {/* Phase C */}
          <motion.div style={{ opacity: c, y: cY }} className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <span className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-ice md:text-sm">Meisterqualität</span>
            <h2 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tighter text-white md:text-7xl lg:text-[6.5vw]">
              Alles aus einer Hand
            </h2>
            <p className="mt-5 max-w-xl text-base font-medium text-zinc-400 md:text-lg">
              Vom kleinen Defekt bis zur großen Instandsetzung — fachgerecht, fair und zuverlässig.
            </p>
          </motion.div>

          {/* Phase D */}
          <motion.div style={{ opacity: d, y: dY }} className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <span className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-ice md:text-sm">Termin vereinbaren</span>
            <a
              href={BUSINESS.phoneHref}
              data-testid="hero-phone-big"
              className="pointer-events-auto font-display text-5xl font-black tracking-tighter text-white transition-colors duration-300 hover:text-ice md:text-8xl"
            >
              {BUSINESS.phoneDisplay}
            </a>
            <div className="pointer-events-auto mt-9">
              <a
                href={BUSINESS.phoneHref}
                className="group inline-flex items-center justify-center gap-2 bg-ice px-9 py-4 text-sm font-bold uppercase tracking-[0.1em] text-black transition-all duration-300 hover:bg-white"
              >
                <Phone size={18} /> Jetzt anrufen
                <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div style={{ opacity: hint }} className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-500">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Mehr entdecken</span>
          <MoveDown size={18} className="animate-bounce text-ice" />
        </motion.div>

        {/* Vertical progress */}
        <div className="absolute right-6 top-1/2 hidden h-40 w-px -translate-y-1/2 bg-white/10 md:block">
          <motion.div style={{ scaleY: progressScale }} className="h-full w-full origin-top bg-ice" />
        </div>
      </div>
    </div>
  );
}
