import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpLeft, AlertCircle } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { findLegal, legalDocuments } from "@/lib/content/legal";
import { site } from "@/lib/site";

export async function generateStaticParams() {
  return legalDocuments.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = findLegal(slug);
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.intro.slice(0, 200),
    robots: { index: true, follow: true },
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = findLegal(slug);
  if (!doc) notFound();

  const effective = new Date(doc.effectiveDate).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <PageShell>
      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="field-backdrop" aria-hidden />
        <Container size="prose" className="relative">
          <Link
            href="/"
            className="type-mono-s inline-flex items-center gap-1 text-(--color-fg-subtle) hover:text-(--color-fg)"
          >
            <ArrowUpLeft size={14} /> Back home
          </Link>
          <Eyebrow className="mt-8">Legal</Eyebrow>
          <h1 className="type-display-l mt-6 font-serif text-(--color-fg)">{doc.title}</h1>
          <p className="type-mono-s mt-4 text-(--color-fg-subtle)">
            Effective: {effective} · {site.legalName}
          </p>
        </Container>
      </section>

      <Container size="prose">
        <article className="pb-32">
          {/* Disclaimer banner — visible, intentionally hard to miss. */}
          <aside
            role="note"
            className="hairline mt-4 flex items-start gap-3 rounded-xl bg-(--color-surface) p-5"
          >
            <AlertCircle size={18} className="mt-0.5 shrink-0 text-amber-300" aria-hidden />
            <div className="type-body-s text-(--color-fg-muted)">
              <strong className="text-(--color-fg)">Template, pending legal review.</strong>{" "}
              This document is a working template based on the Nigeria Data Protection Act 2023 and
              the Companies and Allied Matters Act 2020. It has not yet been reviewed by qualified
              counsel. Do not rely on it as legal advice. We will replace this notice with a
              counsel-reviewed version before treating these terms as final.
            </div>
          </aside>

          <p className="type-body-l mt-12 font-serif italic text-(--color-fg-muted)">
            {doc.intro}
          </p>

          <div className="mt-12 space-y-12">
            {doc.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="type-headline text-(--color-fg)">{s.heading}</h2>
                {s.paragraphs?.map((p, i) => (
                  <p key={i} className="type-body-l mt-4 text-(--color-fg) leading-relaxed">
                    {p}
                  </p>
                ))}
                {s.list ? (
                  <ul className="mt-4 space-y-3 list-disc pl-6 marker:text-violet-300">
                    {s.list.map((item, i) => (
                      <li key={i} className="type-body-l text-(--color-fg) leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="hairline-t mt-16 pt-8">
            <p className="type-mono-s text-(--color-fg-subtle)">
              Questions about this document? Email{" "}
              <a href={`mailto:${site.email}`} className="text-violet-300 hover:underline">
                {site.email}
              </a>
              .
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {legalDocuments
                .filter((d) => d.slug !== doc.slug)
                .map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={`/legal/${d.slug}`}
                      className="type-mono-s text-(--color-fg-muted) hover:text-(--color-fg)"
                    >
                      Read the {d.title} →
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </article>
      </Container>
    </PageShell>
  );
}
