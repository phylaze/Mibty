import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { findService, services } from "@/lib/content/services";
import { substrates } from "@/lib/site";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};
  return {
    title: service.label,
    description: service.outcome,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();

  const adjacent = service.adjacent
    .map((s) => findService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <PageShell>
      <PageHero
        eyebrow={substrates[service.substrate].label.toUpperCase()}
        title={service.label}
        description={service.outcome}
        substrate={service.substrate}
      >
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <Link href="/contact">
              Book a consultation
              <ArrowUpRight size={16} />
            </Link>
          </Button>
          <Tag substrate={service.substrate}>{service.oneLiner}</Tag>
        </div>
      </PageHero>

      <Container size="wide">
        <div className="grid gap-16 pb-32 lg:grid-cols-12 lg:gap-24">
          {/* Main column */}
          <div className="space-y-32 lg:col-span-8">
            <Reveal>
              <Section eyebrow="The problem">
                <div className="space-y-5">
                  {service.problem.map((p, i) => (
                    <p key={i} className="type-body-l text-(--color-fg-muted)">
                      {p}
                    </p>
                  ))}
                </div>
              </Section>
            </Reveal>

            <Section eyebrow="Workflow">
              <ol className="grid gap-px overflow-hidden rounded-lg bg-(--color-border) md:grid-cols-2">
                {service.workflow.map((w) => (
                  <li key={w.step} className="bg-(--color-bg) p-8">
                    <p className="type-mono-s text-violet-300">{w.step}</p>
                    <h3 className="type-headline mt-6 text-(--color-fg)">{w.title}</h3>
                    <p className="type-body mt-3 text-(--color-fg-muted)">{w.body}</p>
                  </li>
                ))}
              </ol>
            </Section>

            <Section eyebrow="Benefits">
              <ul className="space-y-6">
                {service.benefits.map((b) => (
                  <li key={b.title} className="hairline rounded-xl bg-(--color-surface) p-8">
                    <div className="flex items-start gap-4">
                      <Check className="mt-1 shrink-0 text-violet-300" size={18} />
                      <div>
                        <h3 className="type-headline text-(--color-fg)">{b.title}</h3>
                        <p className="type-body mt-3 text-(--color-fg-muted)">{b.body}</p>
                        {b.metric ? (
                          <p className="type-mono-s mt-4 text-violet-300">{b.metric}</p>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Section>

            <Section eyebrow="Technologies">
              <ul className="flex flex-wrap gap-2">
                {service.technologies.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
            </Section>

            <Section eyebrow="Industries served">
              <ul className="flex flex-wrap gap-2">
                {service.industries.map((i) => (
                  <li key={i}>
                    <Tag>{i}</Tag>
                  </li>
                ))}
              </ul>
            </Section>

            <Section eyebrow="Frequent questions">
              <ul className="divide-y divide-(--color-border)">
                {service.faq.map((f) => (
                  <li key={f.q} className="py-6">
                    <h3 className="type-headline text-(--color-fg)">{f.q}</h3>
                    <p className="type-body mt-3 text-(--color-fg-muted)">{f.a}</p>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Right rail */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="hairline rounded-xl bg-(--color-surface) p-6">
                <p className="type-eyebrow text-violet-300">Start a conversation</p>
                <p className="type-body mt-3 text-(--color-fg-muted)">
                  Two business days to first scope. References from adjacent work.
                </p>
                <Button asChild size="md" className="mt-6 w-full">
                  <Link href="/contact">Book a consultation</Link>
                </Button>
              </div>
              {adjacent.length > 0 ? (
                <div className="hairline rounded-xl bg-(--color-surface) p-6">
                  <p className="type-eyebrow text-(--color-fg-subtle)">Pairs with</p>
                  <ul className="mt-4 space-y-3">
                    {adjacent.map((a) => (
                      <li key={a.slug}>
                        <Link
                          href={`/services/${a.slug}`}
                          className="group flex items-start gap-3 text-(--color-fg-muted) hover:text-(--color-fg)"
                        >
                          <ArrowUpRight
                            size={16}
                            className="mt-1 shrink-0 transition-transform group-hover:translate-x-0.5"
                          />
                          <div>
                            <p className="type-body-s font-medium text-(--color-fg)">{a.label}</p>
                            <p className="type-body-s text-(--color-fg-subtle)">{a.oneLiner}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </Container>
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
