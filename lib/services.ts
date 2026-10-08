export type Service = {
  id: string;
  title: string;
  summary: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "brand-identity",
    title: "Brand identity",
    summary:
      "Logos and visual systems that make a business recognisable on a signboard, a shirt or a phone screen.",
    items: ["Logo design", "Brand colours & typography", "Packaging design", "Brand templates"],
  },
  {
    id: "campaigns-social",
    title: "Campaigns & social media",
    summary:
      "Posts, menus and seasonal campaigns that stop the scroll and carry the details people need to act.",
    items: [
      "Social media design",
      "Holiday & seasonal campaigns",
      "Menus & offers",
      "Content strategy",
      "Social media management",
    ],
  },
  {
    id: "events-music",
    title: "Events & music",
    summary:
      "Artwork for club nights, launches and releases, designed to sell the night or the song at a glance.",
    items: ["Club & event posters", "Music cover art", "Artist promo graphics"],
  },
  {
    id: "motion-video",
    title: "Motion & video",
    summary:
      "Moving graphics for feeds, screens and music, from short promos to full lyric videos.",
    items: ["Motion graphics", "Lyric videos", "Audio visualisers", "Video editing"],
  },
];

export const process = [
  {
    title: "Brief",
    text: "Tell us what you need, the deadline and where it will be used, on WhatsApp or through the contact form.",
  },
  {
    title: "Concept",
    text: "We agree on direction, content and sizes before design starts, so there are no surprises.",
  },
  {
    title: "Design & refine",
    text: "You receive the design to review, and we refine it together until it is right.",
  },
  {
    title: "Deliver",
    text: "Final files are prepared in the formats you need for print, social media or screens.",
  },
];
