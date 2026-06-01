import React from "react";
import { Phone, Navigation } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { BUSINESS } from "../lib/utils";

export default function MobileCallBar() {
  return (
    <div
      data-testid="mobile-call-bar"
      className="fixed bottom-0 left-0 right-0 z-[90] grid grid-cols-3 border-t border-white/10 glass lg:hidden"
    >
      <a
        href={BUSINESS.phoneHref}
        data-testid="mobilebar-call"
        className="flex items-center justify-center gap-2 bg-ice py-4 text-sm font-bold uppercase tracking-[0.08em] text-black"
      >
        <Phone size={17} /> Anrufen
      </a>
      <a
        href={BUSINESS.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="mobilebar-whatsapp"
        className="flex items-center justify-center gap-2 border-x border-white/10 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white"
      >
        <WhatsAppIcon size={17} className="text-[#25D366]" /> WhatsApp
      </a>
      <a
        href={BUSINESS.mapsDir}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="mobilebar-route"
        className="flex items-center justify-center gap-2 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white"
      >
        <Navigation size={17} className="text-ice" /> Route
      </a>
    </div>
  );
}
