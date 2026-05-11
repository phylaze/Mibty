import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/marketing/page-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { Reveal } from "@/components/motion/reveal";
import { research } from "@/lib/content/research";
import { substrates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research",
  description:
    "The MIBTY Lab — work in progress, in public. Papers, preprints, projects, talks, and open datasets across the four substrates.",
};

const KIND_LABEL: Record<string, string> = {
  paper: "Paper",
  preprint: "Preprint",
  project: "Project",
  talk: "Talk",
  dataset: "Open dataset",
};

export default function ResearchPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Lab"
        title={
          <span className="font-serif italic">
            The MIBTY Lab — <span className="text-(--color-fg-muted)">work in progress, in public.</span>
          </span>
        }
        description="Papers, preprints, projects, talks, and open datasets across our four substrates. We publish methodology where IP permits — the compounding effect is real."
      />

      <section className="pb-32">
        <Container size="wide">
          <ul className="grid gap-px overflow-hidden rounded-lg bg-(--color-border) md:grid-cols-2">
            {research.map((entry, i) => (
              <Reveal as="li" key={entry.slug} delay={i * 0.04} className="bg-(--color-bg)">
                <Link
                  href={`/research/${entry.slug}`}
                  className="group flex h-full flex-col p-8 transition-colors hover:bg-(--color-surface)"
                >
                  <div className="flex items-center gap-2">
                    <Tag substrate={entry.substrate}>{substrates[entry.substrate].label}</Tag>
                    <Tag>{KIND_LABEL[entry.kind]}</Tag>
                  </div>
                  <h2 className="type-headline mt-8 font-serif text-(--color-fg) group-hover:text-violet-300">
                    {entry.title}
                  </h2>
                  <p className="type-body-s mt-4 text-(--color-fg-muted) line-clamp-3">
                    {entry.abstract}
                  </p>
                  <p className="type-mono-s mt-8 text-(--color-fg-subtle)">
                    {entry.authors.join(" · ")} ·{" "}
                    {new Date(entry.date).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "short",
                    })}
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
