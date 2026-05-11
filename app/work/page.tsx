import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/marketing/page-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { Reveal } from "@/components/motion/reveal";
import { caseStudies } from "@/lib/content/work";
import { substrates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from MIBTY engagements across software, AI, biotech, and nanotech.",
};

export default function WorkPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Work" title="What we've shipped." description="A selection of recent engagements. Naming and metrics under NDA in some cases; specifics on request." />

      <section className="pb-32">
        <Container size="wide">
          <ul className="grid gap-px overflow-hidden rounded-lg bg-(--color-border) md:grid-cols-2">
            {caseStudies.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={i * 0.05} className="bg-(--color-bg)">
                <Link
                  href={`/work/${c.slug}`}
                  className="group flex h-full flex-col p-10 transition-colors hover:bg-(--color-surface)"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {c.substrates.map((s) => (
                      <Tag key={s} substrate={s}>
                        {substrates[s].label}
                      </Tag>
                    ))}
                  </div>
                  <h2 className="type-display-s mt-10 text-(--color-fg) group-hover:text-violet-300">
                    {c.title}
                  </h2>
                  <p className="type-body mt-4 text-(--color-fg-muted)">{c.excerpt}</p>
                  <p className="type-mono-s mt-10 text-(--color-fg-subtle)">
                    {c.industry} · {c.year}
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </PageShell>
  );
}
