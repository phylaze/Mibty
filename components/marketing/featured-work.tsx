import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { caseStudies } from "@/lib/content/work";
import { substrates } from "@/lib/site";

export function FeaturedWork() {
  const [hero, ...rest] = caseStudies;
  if (!hero) return null;
  const secondaries = rest.slice(0, 2);

  return (
    <section className="py-32 md:py-40">
      <Container size="wide">
        <div className="flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Eyebrow>Featured work</Eyebrow>
            <h2 className="type-display-m mt-4 text-(--color-fg)">
              Systems shipped. Not slides.
            </h2>
          </div>
          <Link
            href="/work"
            className="type-mono-s hidden items-center gap-1 text-violet-300 hover:underline md:inline-flex"
          >
            All case studies <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-(--color-border) lg:grid-cols-3">
          <Reveal className="bg-(--color-bg) lg:col-span-2">
            <Link
              href={`/work/${hero.slug}`}
              className="group flex h-full flex-col justify-between gap-12 p-10 transition-colors hover:bg-(--color-surface)"
            >
              <div className="flex flex-wrap gap-2">
                {hero.substrates.map((s) => (
                  <Tag key={s} substrate={s}>
                    {substrates[s].label}
                  </Tag>
                ))}
              </div>
              <div>
                <h3 className="type-display-s text-(--color-fg) group-hover:text-violet-300">
                  {hero.title}
                </h3>
                <p className="type-body-l mt-6 max-w-2xl text-(--color-fg-muted)">
                  {hero.excerpt}
                </p>
                <span className="type-mono-s mt-8 inline-flex items-center gap-1 text-violet-300 transition-transform group-hover:translate-x-1">
                  Read case study <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="grid grid-rows-2 gap-px bg-(--color-border)">
            {secondaries.map((c, i) => (
              <Reveal key={c.slug} delay={(i + 1) * 0.08} className="bg-(--color-bg)">
                <Link
                  href={`/work/${c.slug}`}
                  className="group flex h-full flex-col justify-between gap-6 p-8 transition-colors hover:bg-(--color-surface)"
                >
                  <div className="flex flex-wrap gap-2">
                    {c.substrates.slice(0, 2).map((s) => (
                      <Tag key={s} substrate={s}>
                        {substrates[s].label}
                      </Tag>
                    ))}
                  </div>
                  <div>
                    <h3 className="type-headline text-(--color-fg) group-hover:text-violet-300">
                      {c.title}
                    </h3>
                    <p className="type-body-s mt-3 text-(--color-fg-muted) line-clamp-2">
                      {c.excerpt}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <Link
          href="/work"
          className="type-mono-s mt-8 inline-flex items-center gap-1 text-violet-300 hover:underline md:hidden"
        >
          All case studies <ArrowUpRight size={14} />
        </Link>
      </Container>
    </section>
  );
}
