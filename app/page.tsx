import { Header } from "@/components/marketing/header";
import { Footer } from "@/components/marketing/footer";
import { Hero } from "@/components/marketing/hero";
import { SubstrateGrid } from "@/components/marketing/substrate-grid";
import { MetricsBar } from "@/components/marketing/metrics-bar";
import { CtaSection } from "@/components/marketing/cta-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MetricsBar />
        <SubstrateGrid />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
