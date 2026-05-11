import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { caseStudies, findCaseStudy } from "@/lib/content/work";
import { substrates } from "@/lib/site";

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = findCaseStudy(slug);
  if (!c) return {};
  return { title: c.title, description: c.excerpt };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = findCaseStudy(slug);
  if (!c) notFound();

  const next = caseStudies[(caseStudies.findIndex((x) => x.slug === slug) + 1) % caseStudies.length];

  return (
    <PageShell>
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="field-backdrop" aria-hidden />
        <Container size="wide" className="relative">
          <Link
            href="/work"
            className="type-mono-s inline-flex items-center gap-1 text-(--color-fg-subtle) hover:text-(--color-fg)"
          >
            <ArrowUpLeft size={14} /> Back to work
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {c.substrates.map((s) => (
              <Tag key={s} substrate={s}>
                {substrates[s].label}
              </Tag>
            ))}
          </div>
          <h1 className="type-display-l mt-6 max-w-5xl text-(--color-fg)">{c.title}</h1>
          <p className="type-body-l mt-6 max-w-2xl text-(--color-fg-muted)">{c.excerpt}</p>
        </Container>
      </section>

      <Container size="wide">
        <div className="grid gap-16 pb-32 lg:grid-cols-12 lg:gap-24">
          <div className="space-y-24 lg:col-span-8">
            <Reveal>
              <Section eyebrow="The challenge">
                <p className="type-body-l text-(--color-fg-muted)">{c.challenge}</p>
              </Section>
            </Reveal>

            <Section eyebrow="Approach">
              <ol className="space-y-6">
                {c.approach.map((step, i) => (
                  <li key={i} className="flex gap-6">
                    <span className="type-mono-s shrink-0 text-violet-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="type-body-l text-(--color-fg-muted)">{step}</p>
                  </li>
                ))}
              </ol>
            </Section>

            <Section eyebrow="Outcome">
              <p className="type-body-l text-(--color-fg-muted)">{c.outcome}</p>
              <ul className="mt-10 grid gap-px overflow-hidden rounded-lg bg-(--color-border) md:grid-cols-2">
                {c.metrics.map((m) => (
                  <li key={m.label} className="bg-(--color-bg) p-6">
                    <p className="type-display-s text-plasma font-semibold">{m.value}</p>
                    <p className="type-body-s mt-2 text-(--color-fg-muted)">{m.label}</p>
                  </li>
                ))}
              </ul>
            </Section>

            {c.testimonial ? (
              <section>
                <blockquote className="hairline rounded-xl bg-(--color-surface) p-10">
                  <p className="font-serif text-[26px] leading-snug text-(--color-fg)">
                    &ldquo;{c.testimonial.quote}&rdquo;
                  </p>
                  <footer className="type-mono-s mt-6 text-(--color-fg-subtle)">
                    {c.testimonial.name} · {c.testimonial.role}
                  </footer>
                </blockquote>
              </section>
            ) : null}

            <Section eyebrow="Tech stack">
              <ul className="flex flex-wrap gap-2">
                {c.techStack.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          <aside className="lg:col-span-4">
            <div className="hairline sticky top-24 space-y-5 rounded-xl bg-(--color-surface) p-6">
              <Eyebrow>Engagement</Eyebrow>
              <dl className="space-y-3 type-body-s">
                <Row label="Client" value={c.client} />
                <Row label="Industry" value={c.industry} />
                <Row label="Year" value={String(c.year)} />
                <Row label="Services" value={c.services.join(", ")} />
              </dl>
              <Button asChild size="md" className="w-full">
                <Link href="/contact">
                  Start your engagement
                  <ArrowUpRight size={14} />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </Container>

      {next ? (
        <section className="hairline-t py-24">
          <Container size="wide">
            <Eyebrow>Next case study</Eyebrow>
            <Link
              href={`/work/${next.slug}`}
              className="group mt-6 flex items-end justify-between gap-8"
            >
              <h2 className="type-display-m text-(--color-fg) group-hover:text-violet-300">
                {next.title}
              </h2>
              <ArrowUpRight
                size={28}
                className="shrink-0 text-(--color-fg-muted) transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </Container>
        </section>
      ) : null}
    </PageShell>
  );
}

function Section({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <section>
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="type-mono-s text-(--color-fg-subtle)">{label}</dt>
      <dd className="text-right text-(--color-fg)">{value}</dd>
    </div>
  );
}
