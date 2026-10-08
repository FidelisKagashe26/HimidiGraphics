import { Mail, MapPin, Phone } from "lucide-react";

import { InstagramIcon, WhatsAppIcon } from "@/components/BrandIcons";
import ContactForm from "@/components/ContactForm";
import PageIntro from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a design project with Himidi Graphics. Message on WhatsApp, call, email or send a brief through the form.",
  path: "/contact",
});

const channels = [
  {
    label: "WhatsApp",
    value: "Fastest way to reach me",
    href: whatsappLink("Hello Himidi Graphics, I'd like to talk about a design project."),
    icon: <WhatsAppIcon size={22} />,
    external: true,
  },
  {
    label: "Call",
    value: site.phoneDisplay,
    href: `tel:${site.phoneE164}`,
    icon: <Phone size={22} aria-hidden="true" />,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: <Mail size={22} aria-hidden="true" />,
  },
  {
    label: "Instagram",
    value: site.instagram.handle,
    href: site.instagram.url,
    icon: <InstagramIcon size={22} />,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let's make something people notice.">
        Tell me about your event, launch or brand. Pick whichever channel suits you best.
      </PageIntro>

      <section className="section--tight" aria-label="Contact options">
        <div className={`container ${styles.grid}`}>
          <div>
            <h2 className={styles.heading}>Reach me directly</h2>
            <ul role="list" className={styles.channels}>
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className={styles.channel}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span className={styles.icon}>{c.icon}</span>
                    <span>
                      <span className={styles.label}>{c.label}</span>
                      <span className={styles.value}>{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className={styles.location}>
              <MapPin size={18} aria-hidden="true" /> Based in {site.location}
            </p>
          </div>

          <div>
            <h2 className={styles.heading}>Or send a brief</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
