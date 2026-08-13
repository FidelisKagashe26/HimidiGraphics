import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Work | Himidi Graphics",
  description: "Explore the premium portfolio of Himidi Graphics.",
};

export default function WorkPage() {
  return (
    <main style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      <Portfolio />
    </main>
  );
}
