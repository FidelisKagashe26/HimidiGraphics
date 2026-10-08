import CtaBand from "@/components/CtaBand";
import PageIntro from "@/components/PageIntro";
import WorkIndex from "@/components/WorkIndex";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Selected graphic design work by Himidi Graphics: event posters, seasonal campaigns and brand visuals for hotels, lounges and real estate brands in Tanzania.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageIntro eyebrow="Work" title="Selected projects.">
        Campaigns, event artwork and brand visuals for hospitality, nightlife and real estate
        clients in Dar es Salaam, Dodoma, Arusha and beyond.
      </PageIntro>
      <section className="section--tight" aria-label="Projects">
        <div className="container">
          <WorkIndex />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
