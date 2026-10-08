import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { WhatsAppIcon } from "@/components/BrandIcons";
import { whatsappLink } from "@/lib/site";
import styles from "./CtaBand.module.css";

type Props = {
  title?: string;
  text?: string;
};

export default function CtaBand({
  title = "Have a launch, event or campaign coming up?",
  text = "Send a short brief and your deadline, and let's make something people stop scrolling for.",
}: Props) {
  return (
    <section className="section--tight" aria-labelledby="cta-title">
      <div className="container">
        <div className={styles.band} data-reveal>
          <h2 id="cta-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.text}>{text}</p>
          <div className={styles.actions}>
            <a
              href={whatsappLink("Hello Himidi Graphics, I'd like to talk about a design project.")}
              className="btn btn--primary btn--lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={22} /> Chat on WhatsApp
            </a>
            <Link href="/contact" className={`btn btn--lg ${styles.secondary}`}>
              Send a brief <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
