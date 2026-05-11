import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { findInsight, insights } from "@/lib/content/insights";

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = findInsight(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = findInsight(slug);
  if (!post) notFound();

  return (
    <PageShell>
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="field-backdrop" aria-hidden />
        <Container size="prose" className="relative">
          <Link
            href="/insights"
            className="type-mono-s inline-flex items-center gap-1 text-(--color-fg-subtle) hover:text-(--color-fg)"
          >
            <ArrowUpLeft size={14} /> Back to insights
          </Link>
          <div className="mt-8 flex items-center gap-3">
            <Tag>{post.kind === "essay" ? "Essay" : "Field note"}</Tag>
            <span className="type-mono-s text-(--color-fg-subtle)">
              {new Date(post.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}{" "}
              · {post.readingTime} · {post.author}
            </span>
          </div>
          <h1 className="type-display-l mt-6 font-serif text-(--color-fg)">{post.title}</h1>
        </Container>
      </section>

      <Container size="prose">
        <article className="pb-32">
          <p className="type-body-l font-serif italic text-(--color-fg-muted)">{post.excerpt}</p>
          <div className="mt-12 space-y-7">
            {post.body.map((p, i) => (
              <p key={i} className="type-body-l text-(--color-fg) leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </article>
      </Container>
    </PageShell>
  );
}
