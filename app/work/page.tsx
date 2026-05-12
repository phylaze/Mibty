import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Products } from "@/components/marketing/products";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { capabilities } from "@/lib/content/capabilities";
import { substrates } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Capabilities & products",
  description:
    "MIBTY's products and the capabilities we engineer across software, AI & robotics, biotechnology, and nanotechnology.",
};

const substrateBorderTop: Record<string, string> = {
  bits: "before:bg-cyan-400",
  data: "before:bg-violet-500",
  cells: "before:bg-mint-400",
  atoms: "before:bg-amber-300",
};

export default function CapabilitiesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="What we build"
        title="Products and capabilities."
        description="A young company writing its first chapter in public. Our own products live here alongside the kinds of engagements we're chartered and equipped to take on."
      />

      <Products
        eyebrow="Our products"
        heading="What we ship under our own roof."
        subhead="Software MIBTY owns and operates."
      />

      <section className="hairline-t pt-32 pb-24">
        <Container size="wide">
          <div className="max-w-2xl pb-12">
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="type-display-m mt-4 text-(--color-fg)">
              What we engineer for partners.
            </h2>
            <p className="type-body-l mt-6 text-(--color-fg-muted)">
              The kinds of problems we&rsquo;re built to take on. Selected client engagements will
              land here as they ship.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container size="wide">
          <ul className="grid gap-px overflow-hidden rounded-lg bg-(--color-border) md:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 0.04} className="bg-(--color-bg)">
                <article
                  className={cn(
                    "relative flex h-full flex-col gap-6 p-10",
                    "before:absolute before:inset-x-0 before:top-0 before:h-px",
                    substrateBorderTop[c.substrate],
                  )}
                >
                  <Tag substrate={c.substrate}>{substrates[c.substrate].label}</Tag>
                  <h2 className="type-display-s text-(--color-fg)">{c.title}</h2>
                  <p className="type-body-l text-(--color-fg-muted)">{c.body}</p>
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
              <Eyebrow>Working with us</Eyebrow>
              <h2 className="type-display-s mt-4 text-(--color-fg)">
                Be among the first engagements on the record.
              </h2>
              <p className="type-body-l mt-3 text-(--color-fg-muted)">
                We&rsquo;re actively taking on project work, embedded engagements, and research
                partnerships. Tell us what you&rsquo;re building.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">
                Start a conversation
                <ArrowUpRight size={16} />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
