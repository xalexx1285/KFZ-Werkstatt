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
- Phone (single, mobile only): **0163 9755353** (tel:+491639755353) — also used for WhatsApp
- Hours: **Mo–Fr 14:30–20:00, Sa 08:00–14:00, So geschlossen**
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
### Iteration 3 — client revisions
- **Phone:** removed the landline; the single contact number everywhere is the mobile **0163 9755353** (tel:+491639755353). Removed duplicate "Mobil" rows in Contact + Footer.
- **Opening hours updated:** Mo–Fr **14:30–20:00**, Sa **08:00–14:00**, So geschlossen — reflected in the table, hoursShort and the live open-status logic (SCHEDULE in utils.js).
- **Smooth scroll-video:** re-encoded the hero clip to `public/hero-scrub.mp4` (1280×720, H.264 **all-intra — every one of 193 frames is a keyframe**) so seeking is instant. Scrub logic rewritten as a single rAF loop that eases `currentTime` toward the scroll target with a `!video.seeking` guard (prevents seek pile-up = the stutter cause). Original kept as `hero-reifen.mp4` fallback.

### Iteration 2 — Hero video + WhatsApp + live open-status
- **Scroll-scrubbed hero VIDEO** (HeroScroll.jsx): replaced the still wheel image with the client's MP4 (`/public/hero-reifen.mp4`, H.264/avc1). Desktop scrubs `video.currentTime` from scroll progress (useScroll + useMotionValueEvent); mobile/reduced-motion autoplays a muted loop. Poster = wheel image fallback (graceful when codec unavailable). Server serves it with HTTP 206 range requests.
- **Live "Heute geöffnet / geschlossen" indicator** (OpenStatus.jsx + getOpenStatus in utils.js): computes status from Europe/Berlin time vs the schedule; green pulsing dot + "Jetzt geöffnet · bis HH:MM Uhr" or "Geschlossen · öffnet …". Shown in hero Phase A and in the Contact opening-hours card; refreshes every 60s.
- **WhatsApp click-to-chat** (WhatsAppFab.jsx desktop floating button, MobileCallBar 3-col incl. WhatsApp, Contact card button) → `wa.me/491639755353` with pre-filled German message. Uses mobile number 0163 9755353.

### Iteration 1 — base site
- Scroll-scrub hero, sticky glass Navbar, Marquee, About, Services (5), Trust (4), Contact + Öffnungszeiten, Location/Anfahrt (Google Maps embed + route), Footer/Impressum (§5 TMG), mobile sticky call bar, editorial reveal animations.

## Testing Status
- testing_agent_v3 iteration_1: **Frontend 100% pass**, 0 console/page errors. All data-testids, tel:/maps links, nav scrolling, mobile menu, mobile call bar, map iframe and Impressum verified on desktop + mobile.
- Known non-blocking: 2 framer-motion `useScroll` position warnings (cosmetic, functionality confirmed).

## Prioritized Backlog
- **P1:** Replace remaining placeholder imagery with real workshop/team photos. Add real Google reviews/rating badge.
- **P1:** Verify & finalize phone numbers + opening hours before publishing; confirm the WhatsApp number (currently mobile 0163 9755353); add full Datenschutz/Impressum text.
- **P2:** Optional appointment request form (needs backend or email service e.g. SendGrid/Resend) — currently appointments via phone/WhatsApp only.
- **P2:** SEO: structured data (LocalBusiness JSON-LD with openingHours), Open Graph image, sitemap.
- **P3:** Multi-language (EN) toggle.

## Next Tasks
1. Confirm contact details with client, then publish.
2. Source real workshop photos for hero/services/gallery.
3. Add Google reviews / trust badges.
