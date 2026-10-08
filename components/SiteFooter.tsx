import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { InstagramIcon, WhatsAppIcon } from "@/components/BrandIcons";
import { nav, site, whatsappLink } from "@/lib/site";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <p className={styles.wordmark}>
            Himidi<span aria-hidden="true">.</span>
          </p>
          <p className={styles.tagline}>{site.tagline}</p>
        </div>

        <nav aria-label="Footer" className={styles.col}>
          <h2 className={styles.heading}>Explore</h2>
          <ul role="list" className={styles.list}>
            <li>
              <Link href="/">Home</Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <h2 className={styles.heading}>Get in touch</h2>
          <ul role="list" className={styles.list}>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:${site.phoneE164}`}>
                <Phone size={18} aria-hidden="true" /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>
                <Mail size={18} aria-hidden="true" /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={18} /> {site.instagram.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <div className={styles.legal}>
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Website by{" "}
            <a href="https://fiplex.tech/" target="_blank" rel="noopener" className={styles.credit}>
              Fiplex
            </a>
          </p>
        </div>
        <p className={styles.location}>
          <MapPin size={16} aria-hidden="true" /> Based in {site.location}
        </p>
      </div>
    </footer>
  );
}
