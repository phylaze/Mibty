import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      <div className="field-backdrop" aria-hidden />
      <Container size="wide" className="relative">
        <div className="max-w-3xl">
          <h2 className="type-display-l text-(--color-fg)">
            Working on something interesting?{" "}
            <span className="text-(--color-fg-muted)">Let&rsquo;s talk.</span>
          </h2>
          <p className="type-body-l mt-6 max-w-2xl text-(--color-fg-muted)">
            Tell us what you&rsquo;re building. Project work, embedded engagements, and research
            partnerships — all welcome. We reply within two business days.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Book a consultation
                <ArrowUpRight size={16} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/research">Read our research</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
