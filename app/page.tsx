import { PageShell } from "@/components/marketing/page-shell";
import { Hero } from "@/components/marketing/hero";
import { SubstrateGrid } from "@/components/marketing/substrate-grid";
import { MetricsBar } from "@/components/marketing/metrics-bar";
import { Products } from "@/components/marketing/products";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { CtaSection } from "@/components/marketing/cta-section";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <MetricsBar />
      <SubstrateGrid />
      <Products />
      <ProcessTimeline />
      <CtaSection />
    </PageShell>
  );
}
