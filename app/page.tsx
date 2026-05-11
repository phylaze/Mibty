import { PageShell } from "@/components/marketing/page-shell";
import { Hero } from "@/components/marketing/hero";
import { SubstrateGrid } from "@/components/marketing/substrate-grid";
import { MetricsBar } from "@/components/marketing/metrics-bar";
import { FeaturedWork } from "@/components/marketing/featured-work";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { CtaSection } from "@/components/marketing/cta-section";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <MetricsBar />
      <SubstrateGrid />
      <FeaturedWork />
      <ProcessTimeline />
      <CtaSection />
    </PageShell>
  );
}
