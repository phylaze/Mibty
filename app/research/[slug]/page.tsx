import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { Eyebrow } from "@/components/ui/eyebrow";
import { findResearch, research } from "@/lib/content/research";
import { substrates } from "@/lib/site";

export async function generateStaticParams() {
  return research.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = findResearch(slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.abstract };
}

const KIND_LABEL: Record<string, string> = {
  paper: "Paper",
  preprint: "Preprint",
  project: "Project",
  talk: "Talk",
  dataset: "Open dataset",
};

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = findResearch(slug);
  if (!entry) notFound();

  return (
    <PageShell>
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="field-backdrop" aria-hidden />
        <Container size="default" className="relative">
          <Link
            href="/research"
            className="type-mono-s inline-flex items-center gap-1 text-(--color-fg-subtle) hover:text-(--color-fg)"
          >
            <ArrowUpLeft size={14} /> Back to research
          </Link>

          <div className="mt-8 flex items-center gap-2">
            <Tag substrate={entry.substrate}>{substrates[entry.substrate].label}</Tag>
            <Tag>{KIND_LABEL[entry.kind]}</Tag>
          </div>

          <h1 className="type-display-l mt-6 max-w-4xl font-serif text-(--color-fg)">
            {entry.title}
          </h1>

          <p className="type-mono-s mt-6 text-(--color-fg-subtle)">
            {entry.authors.join(" · ")} ·{" "}
            {new Date(entry.date).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <p className="type-mono-s text-(--color-fg-subtle)">
            {entry.affiliations.join(" · ")}
          </p>
        </Container>
      </section>

      <Container size="default">
        <article className="grid gap-16 pb-32 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-8">
            <p className="font-serif type-body-l text-(--color-fg) leading-relaxed">
              {entry.abstract}
            </p>
            <div className="mt-12 space-y-6 text-(--color-fg-muted)">
              {entry.body.split("\n\n").map((p, i) => (
                <p key={i} className="type-body-l leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {entry.links?.length ? (
                <div className="hairline rounded-xl bg-(--color-surface) p-6">
                  <Eyebrow>Resources</Eyebrow>
                  <ul className="mt-4 space-y-2">
                    {entry.links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="type-body-s text-violet-300 hover:underline"
                        >
                          {l.label} →
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {entry.citation ? (
                <div className="hairline rounded-xl bg-(--color-surface) p-6">
                  <Eyebrow>Cite</Eyebrow>
                  <pre className="type-mono-s mt-4 overflow-x-auto text-(--color-fg-muted)">
                    {entry.citation}
                  </pre>
                </div>
              ) : null}
            </div>
          </aside>
        </article>
      </Container>
    </PageShell>
  );
}
