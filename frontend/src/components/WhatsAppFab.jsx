import React from "react";
import { motion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";
import { BUSINESS } from "../lib/utils";

export default function WhatsAppFab() {
  return (
    <motion.a
      href={BUSINESS.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-fab"
      aria-label="Per WhatsApp schreiben"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-7 right-7 z-[95] hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] lg:flex"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 group-hover:opacity-0" />
      <WhatsAppIcon size={26} className="relative" />
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-md bg-void-700 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
        WhatsApp
      </span>
    </motion.a>
  );
}
