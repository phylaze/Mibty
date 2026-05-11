import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/marketing/page-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { Reveal } from "@/components/motion/reveal";
import { insights } from "@/lib/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Essays and field notes from MIBTY on engineering, science, and what we ship.",
};

export default function InsightsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title="Notes from the field."
        description="Essays and short field notes. Long-form on systems and methodology; field notes on what we keep relearning."
      />

      <section className="pb-32">
        <Container size="default">
          <ul className="divide-y divide-(--color-border)">
            {insights.map((post, i) => (
              <Reveal as="li" key={post.slug} delay={i * 0.05}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group flex flex-col gap-3 py-10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Tag>{post.kind === "essay" ? "Essay" : "Field note"}</Tag>
                    <span className="type-mono-s text-(--color-fg-subtle)">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      · {post.readingTime}
                    </span>
                  </div>
                  <h2 className="type-display-s font-serif text-(--color-fg) transition-colors group-hover:text-violet-300">
                    {post.title}
                  </h2>
                  <p className="type-body-l max-w-3xl text-(--color-fg-muted)">{post.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </PageShell>
  );
}
