import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact | Himidi Graphics",
  description: "Get in touch with Himidi Graphics.",
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <Contact />
    </main>
  );
}
