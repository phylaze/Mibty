"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    n: "01",
    title: "Frame",
    body: "We map the decision, the data, and the constraints. Models, vendors, and tools come after — not before.",
  },
  {
    n: "02",
    title: "Prototype",
    body: "Smallest end-to-end slice that touches every layer the eventual system will touch.",
  },
  {
    n: "03",
    title: "Validate",
    body: "Eval harnesses, audit trails, and observability. Built once, lasts through every model and vendor swap.",
  },
  {
    n: "04",
    title: "Scale",
    body: "Performance budgets, fallbacks, cost ceilings. The infrastructure that lets the interesting thing run for years.",
  },
];

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!sectionRef.current || !lineRef.current) return;

    let ctx: { revert: () => void } | null = null;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 0.6,
            },
          },
        );

        itemsRef.current.forEach((el, i) => {
          if (!el) return;
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "expo.out",
              delay: i * 0.08,
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      }, sectionRef);
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-40">
      <Container size="wide">
        <div className="max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="type-display-m mt-4 text-(--color-fg)">
            Four steps. The same four, every time.
          </h2>
          <p className="type-body-l mt-6 text-(--color-fg-muted)">
            We frame, prototype, validate, scale. Discipline at each step is what compounds —
            across substrates, across decades.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute top-[42px] right-0 left-0 h-px bg-(--color-border)" aria-hidden />
          <div
            ref={lineRef}
            className="bg-plasma absolute top-[42px] right-0 left-0 h-px"
            aria-hidden
          />

          <ol className="grid gap-10 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <li
                key={s.n}
                ref={(el) => {
                  itemsRef.current[i] = el;
                }}
                className="relative"
              >
                <div
                  className={cn(
                    "relative z-10 flex h-[84px] w-[84px] items-center justify-center",
                    "rounded-full border border-(--color-border) bg-(--color-bg)",
                    "type-mono-s text-violet-300",
                  )}
                >
                  {s.n}
                </div>
                <h3 className="type-headline mt-8 text-(--color-fg)">{s.title}</h3>
                <p className="type-body-s mt-3 max-w-[32ch] text-(--color-fg-muted)">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
