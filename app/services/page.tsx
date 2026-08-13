import Services from "@/components/Services";

export const metadata = {
  title: "Services | Himidi Graphics",
  description: "What I do at Himidi Graphics.",
};

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <Services />
    </main>
  );
}
