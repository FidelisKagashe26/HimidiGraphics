import { Check, Plus } from "lucide-react";

import CtaBand from "@/components/CtaBand";
import PageIntro from "@/components/PageIntro";
import { pageMetadata } from "@/lib/seo";
import { process, services } from "@/lib/services";
import styles from "./services.module.css";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Branding, social media campaigns, event and club posters, music cover art, motion graphics, lyric videos and video editing by Himidi Graphics in Tanzania.",
  path: "/services",
});

const faqs = [
  {
    q: "How do I start a project?",
    a: "Send a message on WhatsApp or use the contact form. Include what you need, where it will be used (Instagram, print, screens) and your deadline.",
  },
  {
    q: "What should I prepare?",
    a: "Your logo, any text that must appear (dates, prices, addresses, phone numbers), photos you want used and a few examples of styles you like. If you don't have everything yet, we can work it out together.",
  },
  {
    q: "Can you design for print and social media at the same time?",
    a: "Yes. Tell me every place the design will appear and it will be prepared in the right sizes, for example a printed poster plus Instagram post and story versions.",
  },
  {
    q: "Do you work with clients outside my city?",
    a: "Yes. Briefs, reviews and file delivery all happen online, so location is not a barrier.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title="Design for every screen and every street.">
        From a single event poster to a complete brand and its monthly content, here is what
        Himidi Graphics can make for you.
      </PageIntro>

      <section className="section--tight" aria-label="Services">
        <div className="container">
          <ol role="list" className={styles.list}>
            {services.map((s, i) => (
              <li key={s.id} id={s.id} className={styles.service} data-reveal>
                <span className={styles.index} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className={styles.title}>{s.title}</h2>
                  <p className={styles.summary}>{s.summary}</p>
                </div>
                <ul role="list" className={styles.items}>
                  {s.items.map((item) => (
                    <li key={item}>
                      <Check size={18} aria-hidden="true" className={styles.check} />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`section ${styles.processSection}`} aria-labelledby="process-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Process</p>
              <h2 id="process-title">Simple, clear and on deadline.</h2>
            </div>
          </div>
          <ol role="list" className={styles.steps}>
            {process.map((p, i) => (
              <li key={p.title} className={styles.step} data-reveal>
                <span className={styles.stepNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.stepTitle}>{p.title}</h3>
                <p className="muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className={`container ${styles.faqWrap}`}>
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title" className={styles.faqTitle}>
              Good to know
            </h2>
          </div>
          <div className={styles.faqs}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.faq}>
                <summary>
                  {f.q}
                  <Plus size={22} aria-hidden="true" className={styles.plus} />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
