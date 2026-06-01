import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn, BUSINESS } from "../lib/utils";

const LINKS = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Öffnungszeiten", href: "#oeffnungszeiten" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Anfahrt", href: "#anfahrt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        data-testid="main-nav"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
          scrolled ? "glass border-b border-white/5 py-3" : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 md:px-12">
          <a href="#top" data-testid="nav-logo" className="flex flex-col leading-none">
            <span className="font-display text-xl font-black uppercase tracking-tight text-white md:text-2xl">
              ISA<span className="text-ice">A</span>K
            </span>
            <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 md:text-[10px]">
              KFZ-Meisterwerkstatt
            </span>
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.href.replace("#", "")}`}
                className="group relative text-sm font-medium uppercase tracking-[0.16em] text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-ice transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              data-testid="nav-call-button"
              className="group hidden items-center gap-2 bg-ice px-5 py-2.5 text-sm font-bold uppercase tracking-[0.1em] text-black transition-all duration-300 hover:bg-white md:inline-flex"
            >
              <Phone size={16} />
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={BUSINESS.phoneHref}
              aria-label="Jetzt anrufen"
              className="inline-flex h-10 w-10 items-center justify-center bg-ice text-black md:hidden"
              data-testid="nav-call-icon"
            >
              <Phone size={18} />
            </a>
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen(true)}
              className="text-white lg:hidden"
              aria-label="Menü öffnen"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] flex flex-col bg-void-900/98 px-6 py-5 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-black uppercase tracking-tight text-white">
                ISA<span className="text-ice">A</span>K
              </span>
              <button onClick={() => setOpen(false)} aria-label="Menü schließen" data-testid="mobile-menu-close" className="text-white">
                <X size={28} />
              </button>
            </div>
            <div className="mt-14 flex flex-col gap-1">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="font-display text-4xl font-extrabold uppercase tracking-tight text-white"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
            <a
              href={BUSINESS.phoneHref}
              onClick={() => setOpen(false)}
              className="mt-auto inline-flex items-center justify-center gap-2 bg-ice px-6 py-4 text-base font-bold uppercase tracking-[0.1em] text-black"
            >
              <Phone size={18} /> Jetzt anrufen
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
