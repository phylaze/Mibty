import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Tag } from "@/components/ui/tag";
import { Reveal } from "@/components/motion/reveal";
import { products } from "@/lib/content/products";
import { substrates } from "@/lib/site";
import { cn } from "@/lib/utils";

const statusLabel: Record<string, string> = {
  live: "Live",
  beta: "Beta",
  "in-development": "In development",
};

const statusDot: Record<string, string> = {
  live: "bg-success",
  beta: "bg-amber-300",
  "in-development": "bg-violet-300",
};

const substrateBorderTop: Record<string, string> = {
  bits: "before:bg-cyan-400",
  data: "before:bg-violet-500",
  cells: "before:bg-mint-400",
  atoms: "before:bg-amber-300",
};

export function Products({
  eyebrow = "Products",
  heading = "What we ship under our own roof.",
  subhead = "Software MIBTY owns and operates — alongside the work we do for partners.",
}: {
  eyebrow?: string;
  heading?: React.ReactNode;
  subhead?: React.ReactNode;
}) {
  if (products.length === 0) return null;

  return (
    <section className="py-32 md:py-40">
      <Container size="wide">
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="type-display-m mt-4 text-(--color-fg)">{heading}</h2>
          <p className="type-body-l mt-6 text-(--color-fg-muted)">{subhead}</p>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-lg bg-(--color-border) md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 0.05} className="bg-(--color-bg)">
              <a
                href={p.url}
                target="_blank"
                rel="noopener"
                className={cn(
                  "group relative flex h-full flex-col gap-6 p-10",
                  "transition-colors duration-(--dur-base) hover:bg-(--color-surface)",
                  "before:absolute before:inset-x-0 before:top-0 before:h-px",
                  substrateBorderTop[p.substrate],
                )}
              >
                <div className="flex items-center justify-between">
                  <Tag substrate={p.substrate}>{substrates[p.substrate].label}</Tag>
                  <span className="inline-flex items-center gap-1.5 type-mono-s text-(--color-fg-muted)">
                    <span
                      aria-hidden
                      className={cn("inline-block h-1.5 w-1.5 rounded-full", statusDot[p.status])}
                    />
                    {statusLabel[p.status]}
                  </span>
                </div>

                <div>
                  <h3 className="type-display-s text-(--color-fg) group-hover:text-violet-300">
                    {p.name}
                  </h3>
                  <p className="type-body-l mt-4 text-(--color-fg-muted)">{p.oneLiner}</p>
                </div>

                <p className="type-body text-(--color-fg-muted)">{p.description}</p>

                <span className="type-mono-s mt-auto inline-flex items-center gap-1 text-violet-300 transition-transform group-hover:translate-x-1">
                  Visit {new URL(p.url).host.replace(/^www\./, "")}
                  <ExternalLink size={13} />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

// Compact one-line strip — for use on the homepage where the full
// Products section would compete with the substrate grid.
export function ProductsStrip() {
  if (products.length === 0) return null;
  return (
    <section className="pt-8 pb-8">
      <Container size="wide">
        <div className="hairline flex flex-col items-start gap-6 rounded-xl bg-(--color-surface) p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Eyebrow>Our products</Eyebrow>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {products.map((p) => (
                <li key={p.slug}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener"
                    className="group inline-flex items-center gap-2 text-(--color-fg)"
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "inline-block h-1.5 w-1.5 rounded-full",
                        statusDot[p.status],
                      )}
                    />
                    <span className="type-title group-hover:text-violet-300">{p.name}</span>
                    <ArrowUpRight
                      size={14}
                      className="text-(--color-fg-subtle) transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="/work"
            className="type-mono-s text-(--color-fg-muted) hover:text-(--color-fg)"
          >
            See all →
          </a>
        </div>
      </Container>
    </section>
  );
}
