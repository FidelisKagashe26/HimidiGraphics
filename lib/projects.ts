import type { StaticImageData } from "next/image";

import himidServices from "@/public/images/image1.jpg";
import johnniesSaturday from "@/public/images/image2.webp";
import villaDahlEid from "@/public/images/image3.jpg";
import villaDahlValentine from "@/public/images/image4.jpg";
import esariSiteVisit from "@/public/images/image5.jpg";
import arenaKaraoke from "@/public/images/image6.webp";
import esariEid from "@/public/images/image7.jpg";
import arenaOpening from "@/public/images/image8.webp";
import villaDahlRamadhan from "@/public/images/image9.jpg";
import q2Karaoke from "@/public/images/image10.webp";

export const sectors = [
  "Hospitality",
  "Nightlife & Events",
  "Real Estate",
  "Studio",
] as const;

export type Sector = (typeof sectors)[number];

export type Piece = {
  image: StaticImageData;
  title: string;
  alt: string;
};

export type Project = {
  slug: string;
  client: string;
  headline: string;
  sector: Sector;
  location: string;
  summary: string;
  brief: string;
  approach: string[];
  deliverables: string[];
  pieces: Piece[];
};

export const projects: Project[] = [
  {
    slug: "villadahl-beach-resort",
    client: "VillaDahl Beach Resort",
    headline: "A seasonal campaign system for a beach resort",
    sector: "Hospitality",
    location: "Kigamboni, Dar es Salaam",
    summary:
      "Eid, Valentine's and Ramadhan campaigns that each carry their own mood while staying unmistakably VillaDahl.",
    brief:
      "The resort posts for every major holiday and needed each campaign to feel fresh while still building one recognisable brand, with booking details that are impossible to miss.",
    approach: [
      "A fixed booking bar along the bottom of every design: email, phone, hashtag and location always in the same place, in the resort's blue and gold.",
      "A distinct palette per occasion: deep blue for Eid and Ramadhan, warm red for Valentine's, so each campaign reads instantly in a busy feed.",
      "Clear menu and offer typography, so guests can read prices and inclusions without zooming.",
    ],
    deliverables: [
      "Eid celebration menu",
      "Valentine's offer",
      "Ramadhan greeting",
      "Social media formats",
    ],
    pieces: [
      {
        image: villaDahlEid,
        title: "Villa Eid Celebration menu",
        alt: "Blue Eid poster for VillaDahl Beach Resort with a crescent moon, a four-column menu (Kisinia, Sea Food, Family Special, Kisinia Special) and a yellow booking bar.",
      },
      {
        image: villaDahlValentine,
        title: "Valentine's offer",
        alt: "Red Valentine's poster for VillaDahl Beach Resort showing a couple with a gift, a couple-dinner menu at 120,000 TSh and a 13% room discount.",
      },
      {
        image: villaDahlRamadhan,
        title: "Ramadhan Kareem greeting",
        alt: "Night-blue Ramadhan Kareem greeting for VillaDahl Beach Resort with a mosque through an arched window, dates, nuts and a glowing lantern.",
      },
    ],
  },
  {
    slug: "arena-lounge",
    client: "Arena Lounge",
    headline: "Launching a lounge and keeping the weekends full",
    sector: "Nightlife & Events",
    location: "Nzuguni, Dodoma",
    summary:
      "A grand-opening poster and a recurring karaoke night, built on one shared information strip.",
    brief:
      "A new lounge in Dodoma needed a loud, celebratory launch on Nane Nane Day, then a weekly event series that people would come to recognise.",
    approach: [
      "Gold, dimensional headline type to give the opening the feeling of a premiere.",
      "One information strip (time, location, food, music and drinks) reused across every event, so regulars find the details instantly.",
      "Strong portrait photography and DJ name badges to sell the night's line-up.",
    ],
    deliverables: ["Grand opening poster", "Weekly event poster", "Event info system"],
    pieces: [
      {
        image: arenaOpening,
        title: "Grand Opening, 8/8 Nane Nane Day",
        alt: "Arena Lounge grand opening poster with red theatre curtains, two DJs, gold 'Grand Opening' lettering and event details for Nzuguni, Dodoma.",
      },
      {
        image: arenaKaraoke,
        title: "Sunday Karaoke",
        alt: "Arena Lounge Sunday Karaoke poster with a close-up portrait holding a diamond chain, gold 'Sunday' type and the 7 PM until late schedule.",
      },
    ],
  },
  {
    slug: "esari-real-estate",
    client: "Esari Real Estate",
    headline: "Swahili-first property marketing",
    sector: "Real Estate",
    location: "Dodoma",
    summary:
      "Site-visit and holiday campaigns that speak directly to buyers in their own language.",
    brief:
      "Esari wanted more people to visit its plots, and to show up warmly on social media between sales pushes.",
    approach: [
      "Direct Swahili headlines (\"Kwetu site ni kila siku!\") paired with the offer of free transport.",
      "The brand's green and orange used as large blocks, so the posts stay legible on small screens.",
      "A shared footer with office address, social handles and WhatsApp number across every post.",
    ],
    deliverables: ["Site-visit campaign", "Eid Mubarak greeting", "Social media templates"],
    pieces: [
      {
        image: esariSiteVisit,
        title: "Kwetu Site ni Kila Siku!",
        alt: "Esari Real Estate poster in green and orange reading 'Kwetu site ni kila siku!' with a site engineer, a Toyota Hilux and free transport from 4 PM.",
      },
      {
        image: esariEid,
        title: "Eid Mubarak",
        alt: "Esari Real Estate Eid Mubarak greeting with a gold arch, hanging lanterns, green calligraphic 'Eid' lettering and the Dodoma office address.",
      },
    ],
  },
  {
    slug: "johnnies-bar",
    client: "Johnnie's Bar & Restaurant",
    headline: "The Chill & Vibe Saturday",
    sector: "Nightlife & Events",
    location: "Arusha",
    summary:
      "A guest-DJ night poster that leads with the artist and lists everything on offer.",
    brief:
      "Promote a Saturday guest-DJ night and give people every reason to come: food, parking, security and atmosphere.",
    approach: [
      "Hero portrait of the guest DJ framed by a dark industrial backdrop.",
      "Heavy condensed 'SATURDAY' type for instant read at thumbnail size.",
      "An amenities list (parking, security, nyama choma, Swahili food) as a closing hook.",
    ],
    deliverables: ["Event poster", "Social media format"],
    pieces: [
      {
        image: johnniesSaturday,
        title: "The Chill & Vibe Saturday",
        alt: "Johnnie's Bar poster for 'The Chill & Vibe Saturday' with guest DJ Erzon, dated 24 May 2025, 8 PM, Levolosi Street, Arusha.",
      },
    ],
  },
  {
    slug: "q2-bar-masaki",
    client: "Q2 Bar Masaki",
    headline: "Karaoke Thursday",
    sector: "Nightlife & Events",
    location: "Masaki, Dar es Salaam",
    summary:
      "A weekly karaoke promotion with a featured host and a wine offer front and centre.",
    brief:
      "Drive midweek footfall with a karaoke night and a buy-one-get-one wine promotion.",
    approach: [
      "Live-event photography to show the real atmosphere of the venue.",
      "Bold yellow 'Karaoke' wordmark set against an elegant serif 'Thursday'.",
      "The offer and price in their own band so the deal is unmissable.",
    ],
    deliverables: ["Event poster", "Promotion layout"],
    pieces: [
      {
        image: q2Karaoke,
        title: "Karaoke Thursday",
        alt: "Q2 Bar Masaki 'Karaoke Thursday' poster featuring Rachel Malaika on stage, 7 PM until midnight, with a buy-one-get-one Spier wine offer for TZS 70,000.",
      },
    ],
  },
  {
    slug: "himid-graphix",
    client: "Himid Graphix",
    headline: "Self-promotion: what the studio does",
    sector: "Studio",
    location: "Tanzania",
    summary:
      "The studio's own services poster: a menu of everything from branding to lyric videos.",
    brief:
      "Show prospective clients, in one image, the full range of services, along with real examples of work.",
    approach: [
      "A design-tool frame (a nod to the craft) around a clear list of services.",
      "Real client work shown in the lower corner as proof.",
      "Phone and Instagram handle in a full-width contact bar.",
    ],
    deliverables: ["Services poster", "Studio branding"],
    pieces: [
      {
        image: himidServices,
        title: "Graphic design services",
        alt: "Himid Graphix services poster with large gold 'Graphic Design' type, a phone showing the HG logo and a list of services from branding to video editing.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featuredSlugs = [
  "villadahl-beach-resort",
  "arena-lounge",
  "esari-real-estate",
  "johnnies-bar",
] as const;
