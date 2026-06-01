# PRD — KFZ-Meisterwerkstatt Isaak · Landing Page

## Original Problem Statement
Build a landing page. References: **Oryzo.ai** and **landonorris.com**.
Assets provided: a cinematic dark studio photo of a premium alloy wheel/tire, and a "Scroll Video Hero Prompt" (scroll-controlled hero idea).

## User Choices (verbatim)
- Style: lean towards **landonorris.com** (bold typography, accent color, parallax/scroll sections, dark theme)
- Accent color: **Eisblau/Cyan**
- Hero: scroll-controlled effect built **from the wheel image** (zoom/parallax/rotation) — no real video
- Backend: **pure static landing page (no backend)**
- Content language: **German**

## Real Business (final content brief)
- **KFZ-Meisterwerkstatt Isaak**, Inhaber **Andreas Isaak**
- Address: **Anton-Fecke-Str. 6, 33034 Brakel-Erkeln**, Deutschland
- Phone: **05272 390854** (tel:+495272390854) · Mobil: **0163 9755353** (tel:+491639755353)
- Hours: Mo–Fr 08:00–18:30, Sa 08:30–14:00, So geschlossen
- Region: Brakel, Erkeln und Umgebung
- Services: KFZ-Reparaturen, Inspektion, Reifenservice, Felgenservice, Werkstattservice
- Goal: drive local customers to **call / request appointment / plan route**

> NOTE: Phone numbers + opening hours were marked "vor Veröffentlichung prüfen" by the client — verify before going live.

## Architecture / Tech Stack
- **Frontend:** React 18 (CRA / react-scripts 5) + Tailwind CSS v3 + Framer Motion + react-fast-marquee + lucide-react
- **Backend:** minimal FastAPI stub only (`/api/health`) to keep supervisor healthy — NO business logic
- **Fonts:** Cabinet Grotesk (display) + Satoshi (body) via Fontshare
- **Theme:** Void black (#030303) + Ice/Cyan accent (#00F0FF), film grain overlay, glass nav
- Served on port 3000 (supervisor `frontend`); REACT_APP_BACKEND_URL from env.

## What's Implemented (2026-06-01)
- **Scroll-scrubbed cinematic hero** (HeroScroll.jsx, 320vh): wheel image scales/rotates on scroll with 4 synchronized text phases. Phase A (resting) shows brand, subheadline + CTAs "Jetzt anrufen" / "Termin anfragen". Phase D shows the big phone number as a call link.
- **Sticky glass Navbar** with cyan phone CTA + mobile menu.
- **Marquee** of service keywords.
- **About** section (Über uns) + 3 fact cards (Inhaber/Standort/Betrieb).
- **Services** bento grid — all 5 services with icons (wheel image on Reifenservice, carbon texture on Reparaturen).
- **Trust** section ("Warum Isaak") — 4 qualitative cards.
- **Contact** section — full contact card (phone/mobile/address/hours + Anrufen/Route buttons) and full Öffnungszeiten table.
- **Location/Anfahrt** — keyless Google Maps embed (dark-filtered) + "Route planen" button.
- **Footer/Impressum** — § 5 TMG block + big ISAAK wordmark.
- **Mobile sticky call bar** (Anrufen / Route) for conversion.
- Editorial word-by-word reveal animations (Reveal.jsx, variants-based observer on stable parent).

## Testing Status
- testing_agent_v3 iteration_1: **Frontend 100% pass**, 0 console/page errors. All data-testids, tel:/maps links, nav scrolling, mobile menu, mobile call bar, map iframe and Impressum verified on desktop + mobile.
- Known non-blocking: 2 framer-motion `useScroll` position warnings (cosmetic, functionality confirmed).

## Prioritized Backlog
- **P1:** Replace placeholder/stock imagery with real photos of the workshop & team (boosts trust/conversion). Add real customer reviews/Google rating badge.
- **P1:** Verify & finalize phone numbers + opening hours before publishing; add legal Datenschutz/Impressum full text.
- **P2:** Optional appointment request form (needs backend or email service e.g. SendGrid/Resend) — currently appointments via phone only.
- **P2:** SEO: structured data (LocalBusiness JSON-LD), Open Graph image, sitemap.
- **P2:** WhatsApp click-to-chat button; "heute geöffnet/geschlossen" live status indicator.
- **P3:** Multi-language (EN) toggle.

## Next Tasks
1. Confirm contact details with client, then publish.
2. Source real workshop photos for hero/services/gallery.
3. Add Google reviews / trust badges.
