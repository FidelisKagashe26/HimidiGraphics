export const site = {
  name: "Himidi Graphics",
  shortName: "Himidi",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://himidgraphix.pro",
  tagline: "Graphic design, branding & campaign visuals from Tanzania.",
  description:
    "Himidi Graphics is a Tanzanian design studio creating event posters, brand identities, social media campaigns and motion graphics for hospitality, nightlife and real estate brands.",
  location: "Tanzania",
  email: "hello@himidgraphix.pro",
  phoneDisplay: "+255 746 749 784",
  phoneE164: "+255746749784",
  whatsapp: "255746749784",
  instagram: {
    handle: "@himid_graphix",
    url: "https://instagram.com/himid_graphix",
  },
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
