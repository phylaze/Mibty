import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { substrates, type Substrate } from "@/lib/site";
import { cn } from "@/lib/utils";

const order: Substrate[] = ["bits", "data", "cells", "atoms"];

const substrateBorderTop: Record<Substrate, string> = {
  bits: "before:bg-cyan-400",
  data: "before:bg-violet-500",
  cells: "before:bg-mint-400",
  atoms: "before:bg-amber-300",
};

export function SubstrateGrid() {
  return (
    <section className="py-32 md:py-40">
      <Container size="wide">
        <div className="max-w-2xl">
          <Eyebrow>What we build</Eyebrow>
          <h2 className="type-display-m mt-4 text-(--color-fg)">
            Across four substrates of intelligent matter.
          </h2>
          <p className="type-body-l mt-6 text-(--color-fg-muted)">
            The hardest problems no longer respect the boundaries between disciplines. Neither do
            we.
          </p>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-lg bg-(--color-border) md:grid-cols-2 lg:grid-cols-4">
          {order.map((key) => {
            const s = substrates[key];
            return (
              <li key={key} className="bg-(--color-bg)">
                <Link
                  href={`/services?substrate=${key}`}
                  className={cn(
                    "group relative flex h-full flex-col p-8",
                    "transition-colors duration-(--dur-base) ease-(--ease-out-soft)",
                    "hover:bg-(--color-surface)",
                    "before:absolute before:inset-x-0 before:top-0 before:h-px",
                    substrateBorderTop[key],
                  )}
                >
                  <p className={cn("type-mono-s tracking-tight", s.accent)}>
                    {String(order.indexOf(key) + 1).padStart(2, "0")}
                  </p>

                  <h3 className="type-headline mt-12 text-(--color-fg)">{s.label}</h3>
                  <p className="type-body-s mt-3 max-w-[28ch] text-(--color-fg-muted)">
                    {s.description}
                  </p>

                  <span
                    className={cn(
                      "mt-12 inline-flex items-center gap-1 text-[13px]",
                      s.accent,
                      "transition-transform duration-(--dur-base)",
                      "group-hover:translate-x-1",
                    )}
                  >
                    Explore <ArrowUpRight size={14} />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
