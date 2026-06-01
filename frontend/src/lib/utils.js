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

export const BUSINESS = {
  name: "KFZ-Meisterwerkstatt Isaak",
  short: "Isaak",
  owner: "Andreas Isaak",
  street: "Anton-Fecke-Str. 6",
  city: "33034 Brakel-Erkeln",
  region: "Brakel, Erkeln und Umgebung",
  phoneDisplay: "05272 390854",
  phoneHref: "tel:+495272390854",
  mobileDisplay: "0163 9755353",
  mobileHref: "tel:+491639755353",
  hours: [
    { d: "Montag", h: "08:00 – 18:30", open: true },
    { d: "Dienstag", h: "08:00 – 18:30", open: true },
    { d: "Mittwoch", h: "08:00 – 18:30", open: true },
    { d: "Donnerstag", h: "08:00 – 18:30", open: true },
    { d: "Freitag", h: "08:00 – 18:30", open: true },
    { d: "Samstag", h: "08:30 – 14:00", open: true },
    { d: "Sonntag", h: "Geschlossen", open: false },
  ],
  hoursShort: "Mo–Fr 08:00–18:30 · Sa 08:30–14:00",
  mapsEmbed:
    "https://maps.google.com/maps?q=Anton-Fecke-Str.%206,%2033034%20Brakel-Erkeln&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapsDir:
    "https://www.google.com/maps/dir/?api=1&destination=Anton-Fecke-Str.+6%2C+33034+Brakel-Erkeln",
};
