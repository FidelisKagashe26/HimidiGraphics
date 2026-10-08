import Image from "next/image";

import CtaBand from "@/components/CtaBand";
import PageIntro from "@/components/PageIntro";
import { getProject } from "@/lib/projects";
import { pageMetadata } from "@/lib/seo";
import styles from "./about.module.css";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Himidi Graphics is a Tanzanian graphic designer, content strategist and social media manager creating visual identities that stand out and connect with audiences.",
  path: "/about",
});

const principles = [
  {
    title: "Clarity first",
    text: "A poster has a second to work. The date, the place and the offer must read instantly, even on a small phone screen.",
  },
  {
    title: "Made for the feed",
    text: "Most designs are seen on Instagram and WhatsApp before anywhere else, so they are composed to stop the scroll at thumbnail size.",
  },
  {
    title: "A local voice",
    text: "English, Swahili or both: the message is written for the people who will actually read it.",
  },
  {
    title: "Consistent brands",
    text: "Recurring layouts, colours and info bars turn one-off posts into a brand people recognise.",
  },
];

export default function AboutPage() {
  const studio = getProject("himid-graphix")!.pieces[0];

  return (
    <>
      <PageIntro eyebrow="About" title="Design that connects with people.">
        Himidi Graphics is the studio of a Tanzanian graphic designer, content strategist and
        social media manager.
      </PageIntro>

      <section className="section--tight" aria-labelledby="story-title">
        <div className={`container ${styles.grid}`}>
          <div className={styles.copy}>
            <h2 id="story-title" className={styles.heading}>
              The story
            </h2>
            <p>
              I am a passionate graphic designer dedicated to crafting visual identities that stand
              out and connect with audiences. My work helps hotels, lounges, restaurants and growing
              businesses look as good online as they are in person.
            </p>
            <p>
              Clients range from beach resorts in Kigamboni and real estate developers in Dodoma to
              bars and event venues in Dar es Salaam, Arusha and Zanzibar. Every project gets the
              same care: understand the audience, make the message clear, then make it impossible
              to ignore.
            </p>
            <p>
              Beyond single designs, I help brands plan their content and manage their social media,
              so what goes out each week looks and sounds like one brand.
            </p>
          </div>
          <figure className={styles.figure} data-reveal>
            <Image
              src={studio.image}
              alt={studio.alt}
              sizes="(min-width: 900px) 40vw, 100vw"
              className={styles.image}
            />
            <figcaption className={styles.caption}>{studio.title}</figcaption>
          </figure>
        </div>
      </section>

      <section className={`section ${styles.principlesSection}`} aria-labelledby="principles-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Principles</p>
              <h2 id="principles-title">How the work is made.</h2>
            </div>
          </div>
          <ul role="list" className={styles.principles}>
            {principles.map((p) => (
              <li key={p.title} className={styles.principle} data-reveal>
                <h3 className={styles.principleTitle}>{p.title}</h3>
                <p className="muted">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Let's make your next post the one people share." />
    </>
  );
}
