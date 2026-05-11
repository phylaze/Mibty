import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Field } from "@/components/three/field";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
      <div className="field-backdrop" aria-hidden />
      <Field />

      <Container size="wide" className="relative">
        <div className="max-w-4xl">
          <Eyebrow>MIBTY · Multidisciplinary innovation</Eyebrow>

          <h1 className="type-display-xl mt-6 text-(--color-fg)">
            Engineering the next layer of{" "}
            <span className="text-plasma">reality.</span>
          </h1>

          <p className="type-body-l mt-8 max-w-2xl text-(--color-fg-muted)">
            MIBTY builds AI, software, biotechnology, and nanotechnology systems for organizations
            operating at the frontier — across code, cells, and atoms.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Book a consultation
                <ArrowUpRight size={16} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/work">See our work</Link>
            </Button>
          </div>

          <p className="type-mono-s mt-12 text-(--color-fg-subtle)">
            Trusted by research institutions, healthcare leaders, and enterprises across multiple
            countries.
          </p>
        </div>
      </Container>
    </section>
  );
}
