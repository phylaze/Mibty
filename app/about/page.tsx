import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { people } from "@/lib/content/people";

export const metadata: Metadata = {
  title: "About",
  description:
    "MIBTY NIG LTD — engineering systems across software, AI, biotech, and nanotech for organizations operating at the frontier.",
};

const philosophy = [
  {
    title: "Mission",
    body: "Build systems that translate frontier science and technology into infrastructure that endures — across software, AI, biotech, and nanotech.",
  },
  {
    title: "Vision",
    body: "A world where the boundary between research and deployable systems is measured in months, not decades — and where the next generation of African engineers and scientists works on the frontier from where they live.",
  },
  {
    title: "Innovation philosophy",
    body: "Evaluation-first, spine before width, open methodology where IP permits. We measure ourselves on systems still running five years after handover, not features shipped in week one.",
  },
];

const milestones = [
  { year: "2022", note: "Founded as a multidisciplinary engineering practice." },
  { year: "2023", note: "First federated diagnostic system shipped across regional health network." },
  { year: "2024", note: "Ministry-scale data platform delivered in 100 days." },
  { year: "2025", note: "Open-source nanopore detection released; cited by three follow-up groups." },
  { year: "Today", note: "Engagements across 12+ countries, four substrates, one armature." },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title={
          <>
            We started with a question:{" "}
            <span className="text-(--color-fg-muted)">
              what becomes possible when no discipline has to win?
            </span>
          </>
        }
        description="MIBTY is a multidisciplinary engineering and research company. We build with researchers, ministries, healthcare leaders, and enterprises — across the substrates where the hardest problems actually live."
      />

      <section className="hairline-t py-24">
        <Container size="wide">
          <Eyebrow>Trajectory</Eyebrow>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-lg bg-(--color-border) md:grid-cols-5">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 0.05} className="bg-(--color-bg) p-6">
                <p className="type-mono-s text-violet-300">{m.year}</p>
                <p className="type-body-s mt-3 text-(--color-fg-muted)">{m.note}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-32">
        <Container size="wide">
          <div className="grid gap-12 md:grid-cols-3">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="hairline rounded-xl bg-(--color-surface) p-10">
                  <p className="type-eyebrow text-violet-300">{p.title}</p>
                  <p className="font-serif type-body-l mt-6 leading-relaxed text-(--color-fg)">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="hairline-t py-32">
        <Container size="wide">
          <div className="max-w-2xl">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="type-display-m mt-4 text-(--color-fg)">The people in the work.</h2>
          </div>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-lg bg-(--color-border) md:grid-cols-2 lg:grid-cols-4">
            {people.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 0.05} className="bg-(--color-bg) p-8">
                <div
                  aria-hidden
                  className="aspect-square w-full overflow-hidden rounded-lg bg-(--color-surface-raised)"
                  style={{
                    backgroundImage:
                      "radial-gradient(120% 80% at 30% 30%, rgba(124,92,255,0.18), transparent 60%), radial-gradient(120% 80% at 70% 70%, rgba(34,211,238,0.10), transparent 60%)",
                  }}
                />
                <h3 className="type-headline mt-6 text-(--color-fg)">{p.name}</h3>
                <p className="type-mono-s mt-1 text-(--color-fg-subtle)">{p.role}</p>
                <p className="type-body-s mt-4 text-(--color-fg-muted)">{p.bio}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-32">
        <Container size="wide">
          <div className="hairline flex flex-col items-start gap-8 rounded-xl bg-(--color-surface) p-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <Eyebrow>Capability deck</Eyebrow>
              <h2 className="type-display-s mt-4 text-(--color-fg)">
                A 16-page brief on what we do, how we work, and what we&rsquo;ve shipped.
              </h2>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">
                Request the deck
                <ArrowUpRight size={16} />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
