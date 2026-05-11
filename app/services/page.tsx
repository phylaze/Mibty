import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/content/services";
import { substrates } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Engineering services across four substrates of intelligent matter — bits, data, cells, and atoms.",
};

const substrateBorderTop: Record<string, string> = {
  bits: "before:bg-cyan-400",
  data: "before:bg-violet-500",
  cells: "before:bg-mint-400",
  atoms: "before:bg-amber-300",
};

export default function ServicesIndexPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Engineering services across four substrates."
        description="Each substrate is a state of one underlying field of intelligent matter. Most engagements touch two or more."
      />

      <section className="pb-32">
        <Container size="wide">
          <ul className="grid gap-px overflow-hidden rounded-lg bg-(--color-border) md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal
                as="li"
                key={s.slug}
                delay={i * 0.04}
                className="bg-(--color-bg)"
              >
                <Link
                  href={`/services/${s.slug}`}
                  className={cn(
                    "group relative flex h-full flex-col p-8",
                    "transition-colors duration-(--dur-base) hover:bg-(--color-surface)",
                    "before:absolute before:inset-x-0 before:top-0 before:h-px",
                    substrateBorderTop[s.substrate],
                  )}
                >
                  <Tag substrate={s.substrate}>{substrates[s.substrate].label}</Tag>
                  <h2 className="type-headline mt-10 text-(--color-fg)">{s.label}</h2>
                  <p className="type-body-s mt-3 max-w-[36ch] text-(--color-fg-muted)">
                    {s.oneLiner}
                  </p>
                  <span className="type-mono-s mt-12 inline-flex items-center gap-1 text-violet-300 transition-transform duration-(--dur-base) group-hover:translate-x-1">
                    Explore <ArrowUpRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="hairline-t py-32">
        <Container size="wide">
          <div className="max-w-2xl">
            <Eyebrow>How we engage</Eyebrow>
            <h2 className="type-display-m mt-4 text-(--color-fg)">
              Three shapes for working together.
            </h2>
          </div>
          <ul className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              {
                kind: "Project",
                body: "Fixed-scope, fixed-outcome engagements. Six to sixteen weeks. Best when the problem is well-framed and the metric is known.",
              },
              {
                kind: "Embedded",
                body: "Senior engineers inside your team for three to twelve months. We work to the same standards we'd apply to our own systems.",
              },
              {
                kind: "Research partnership",
                body: "Multi-year collaborations with research institutions and ministries. Open methodology where IP permits.",
              },
            ].map((e, i) => (
              <Reveal key={e.kind} delay={i * 0.06}>
                <div className="hairline rounded-xl bg-(--color-surface) p-8">
                  <p className="type-eyebrow text-violet-300">{e.kind}</p>
                  <p className="type-body-l mt-6 text-(--color-fg-muted)">{e.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </PageShell>
  );
}
