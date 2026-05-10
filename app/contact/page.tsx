import type { Metadata } from "next";
import { Header } from "@/components/marketing/header";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to MIBTY about a project, research collaboration, or partnership.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pt-32 pb-24">
          <div className="field-backdrop" aria-hidden />
          <Container size="wide" className="relative">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="type-display-l mt-6 max-w-3xl text-(--color-fg)">
              Let&rsquo;s talk.
            </h1>
            <p className="type-body-l mt-6 max-w-2xl text-(--color-fg-muted)">
              Tell us what you&rsquo;re building. Project work, research collaboration, press —
              all welcome. The forms and Cal.com booking flow ship in Phase 2.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
