import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { researchAreas } from "@/lib/content/research";
import { substrates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research focus areas at MIBTY — AI & robotics, data, biotechnology, nanotechnology, and software systems.",
};

export default function ResearchPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Lab"
        title={
          <span className="font-serif italic">
            Research focus areas —{" "}
            <span className="text-(--color-fg-muted)">where the next work is forming.</span>
          </span>
        }
        description="MIBTY's research practice sits between frontier science and deployable systems. Publications, projects, and open datasets will land here as they ship; below are the areas we're working in."
      />

      <section className="pb-24">
        <Container size="wide">
          <ul className="grid gap-px overflow-hidden rounded-lg bg-(--color-border) md:grid-cols-2">
            {researchAreas.map((area, i) => (
              <Reveal as="li" key={area.slug} delay={i * 0.05} className="bg-(--color-bg)">
                <article className="flex h-full flex-col gap-6 p-10">
                  <Tag substrate={area.substrate}>{substrates[area.substrate].label}</Tag>
                  <h2 className="type-headline font-serif text-(--color-fg)">{area.title}</h2>
                  <p className="type-body-l text-(--color-fg-muted)">{area.summary}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="hairline-t py-24">
        <Container size="wide">
          <div className="hairline flex flex-col items-start gap-8 rounded-xl bg-(--color-surface) p-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>Collaborate</Eyebrow>
              <h2 className="type-display-s mt-4 text-(--color-fg)">
                Working on something adjacent? Tell us.
              </h2>
              <p className="type-body-l mt-3 text-(--color-fg-muted)">
                Universities, ministries, foundations, and research groups — we&rsquo;d like to hear
                from you.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">
                Send a brief
                <ArrowUpRight size={16} />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
