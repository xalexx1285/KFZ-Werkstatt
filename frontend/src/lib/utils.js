import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const IMAGES = {
  wheel:
    "https://customer-assets.emergentagent.com/job_b8b5a439-0f6d-4bc1-b94a-302854f72d70/artifacts/a5j625w9_ChatGPT%20Image%201.%20Juni%202026%2C%2012_04_10%20%281%29.png",
  cyanBleed:
    "https://static.prod-images.emergentagent.com/jobs/b8b5a439-0f6d-4bc1-b94a-302854f72d70/images/1baafe9007941feb37d4afa5266f4fc7e1de48016df754600f046eaa484a8223.png",
  carbon:
    "https://static.prod-images.emergentagent.com/jobs/b8b5a439-0f6d-4bc1-b94a-302854f72d70/images/b2638919f4be3346a82a0faa0e35eca9fc49bd111cd5c5df5acd826577518a20.png",
};

export const HERO_VIDEO = `${process.env.PUBLIC_URL || ""}/hero-scrub.mp4`;

const WA_MESSAGE = encodeURIComponent(
  "Hallo, ich möchte gerne einen Termin in der KFZ-Meisterwerkstatt Isaak anfragen."
);

export const BUSINESS = {
  name: "KFZ-Meisterwerkstatt Isaak",
  short: "Isaak",
  owner: "Andreas Isaak",
  street: "Anton-Fecke-Str. 6",
  city: "33034 Brakel-Erkeln",
  region: "Brakel, Erkeln und Umgebung",
  phoneDisplay: "0163 9755353",
  phoneHref: "tel:+491639755353",
  whatsappDisplay: "0163 9755353",
  whatsappHref: `https://wa.me/491639755353?text=${WA_MESSAGE}`,
  hours: [
    { d: "Montag", h: "14:30 – 20:00", open: true },
    { d: "Dienstag", h: "14:30 – 20:00", open: true },
    { d: "Mittwoch", h: "14:30 – 20:00", open: true },
    { d: "Donnerstag", h: "14:30 – 20:00", open: true },
    { d: "Freitag", h: "14:30 – 20:00", open: true },
    { d: "Samstag", h: "08:00 – 14:00", open: true },
    { d: "Sonntag", h: "Geschlossen", open: false },
  ],
  hoursShort: "Mo–Fr 14:30–20:00 · Sa 08:00–14:00",
  mapsEmbed:
    "https://maps.google.com/maps?q=Anton-Fecke-Str.%206,%2033034%20Brakel-Erkeln&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapsDir:
    "https://www.google.com/maps/dir/?api=1&destination=Anton-Fecke-Str.+6%2C+33034+Brakel-Erkeln",
};

// --- Live opening-hours status (Europe/Berlin) -----------------------------
// minutes-of-day ranges per weekday (0 = Sunday … 6 = Saturday)
const SCHEDULE = {
  0: [], // Sonntag geschlossen
  1: [[870, 1200]], // Mo 14:30–20:00
  2: [[870, 1200]],
  3: [[870, 1200]],
  4: [[870, 1200]],
  5: [[870, 1200]],
  6: [[480, 840]], // Sa 08:00–14:00
};
const DAY_NAMES = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

function fmtMinutes(m) {
  const h = Math.floor(m / 60);
  const mm = m % 60;
  return `${String(h).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}

export function getOpenStatus() {
  // Berlin wall-clock time regardless of the visitor's timezone
  const berlin = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Berlin" }));
  const dow = berlin.getDay();
  const mins = berlin.getHours() * 60 + berlin.getMinutes();
  const today = SCHEDULE[dow] || [];

  for (const [start, end] of today) {
    if (mins >= start && mins < end) {
      return { open: true, label: "Jetzt geöffnet", detail: `bis ${fmtMinutes(end)} Uhr` };
    }
    if (mins < start) {
      return { open: false, label: "Geschlossen", detail: `öffnet heute um ${fmtMinutes(start)} Uhr` };
    }
  }

  // closed for the rest of today → find the next opening day
  for (let i = 1; i <= 7; i++) {
    const d = (dow + i) % 7;
    const ranges = SCHEDULE[d];
    if (ranges && ranges.length) {
      const start = ranges[0][0];
      const dayLabel = i === 1 ? "morgen" : DAY_NAMES[d];
      return { open: false, label: "Geschlossen", detail: `öffnet ${dayLabel} um ${fmtMinutes(start)} Uhr` };
    }
  }
  return { open: false, label: "Geschlossen", detail: "" };
}
