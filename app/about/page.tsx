import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/marketing/page-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { Reveal } from "@/components/motion/reveal";
import { people } from "@/lib/content/people";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "MIBTY NIG LTD — a Lagos-based engineering and research company building across software, AI & robotics, biotechnology, and nanotechnology.",
};

const philosophy = [
  {
    title: "Mission",
    body: "Build systems that translate frontier science and technology into infrastructure that endures — across software, AI & robotics, biotechnology, and nanotechnology.",
  },
  {
    title: "Vision",
    body: "A world where the boundary between research and deployable systems is measured in months, not decades — and where the next generation of African engineers and scientists works on the frontier from where they live.",
  },
  {
    title: "Innovation philosophy",
    body: "Evaluation-first, spine before width, open methodology where IP permits. We measure ourselves on the systems still running five years after handover, not the features shipped in week one.",
  },
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
        description="MIBTY NIG LTD is a young Lagos-based engineering and research company. We're chartered to work across software, AI & robotics, biotechnology, nanotechnology, data, e-commerce, and research consulting — and we're building the team to do exactly that."
      />

      <section className="hairline-t py-24">
        <Container size="wide">
          <Eyebrow>Company</Eyebrow>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-lg bg-(--color-border) md:grid-cols-3">
            <Reveal as="li" className="bg-(--color-bg) p-8">
              <p className="type-mono-s text-violet-300">Incorporated</p>
              <p className="type-headline mt-3 text-(--color-fg)">2 February 2024</p>
              <p className="type-body-s mt-3 text-(--color-fg-muted)">
                Registered under the Companies and Allied Matters Act, 2020 (CAMA).
              </p>
            </Reveal>
            <Reveal as="li" delay={0.05} className="bg-(--color-bg) p-8">
              <p className="type-mono-s text-violet-300">Headquarters</p>
              <p className="type-headline mt-3 text-(--color-fg)">Lagos, Nigeria</p>
              <p className="type-body-s mt-3 text-(--color-fg-muted)">
                Built in Lagos. Working globally.
              </p>
            </Reveal>
            <Reveal as="li" delay={0.1} className="bg-(--color-bg) p-8">
              <p className="type-mono-s text-violet-300">Structure</p>
              <p className="type-headline mt-3 text-(--color-fg)">Private, limited by shares</p>
              <p className="type-body-s mt-3 text-(--color-fg-muted)">
                Independently held; long-term horizon.
              </p>
            </Reveal>
          </ul>
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
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Leadership</Eyebrow>
              <h2 className="type-display-m mt-4 text-(--color-fg)">The people in the work.</h2>
              <p className="type-body-l mt-4 text-(--color-fg-muted)">
                Bios are being finalised with the team before publication.
              </p>
            </div>
            <Tag>Coming soon</Tag>
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
              <Eyebrow>Talk to us</Eyebrow>
              <h2 className="type-display-s mt-4 text-(--color-fg)">
                {site.name} is taking on new project, embedded, and research engagements.
              </h2>
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
