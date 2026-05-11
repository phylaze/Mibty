import type { Metadata } from "next";
import { PageShell } from "@/components/marketing/page-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ContactForm } from "@/components/marketing/contact-form";
import { CalEmbed } from "@/components/marketing/cal-embed";
import { LocalTime } from "@/components/marketing/local-time";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to MIBTY about a project, research collaboration, or partnership.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={<>Let&rsquo;s talk.</>}
        description="Tell us what you're building. Project work, research collaboration, press — all welcome. We reply within two business days."
      />

      <section className="pb-24">
        <Container size="wide">
          <ContactForm />
        </Container>
      </section>

      <section className="hairline-t py-24">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>Or book directly</Eyebrow>
              <h2 className="type-display-s mt-4 text-(--color-fg)">
                Thirty minutes on the calendar.
              </h2>
              <p className="type-body-l mt-4 text-(--color-fg-muted)">
                If your timeline is tight, skip the form. We&rsquo;ll come prepared.
              </p>
              <dl className="type-mono-s mt-10 space-y-3 text-(--color-fg-subtle)">
                <div className="flex justify-between gap-3">
                  <dt>HQ</dt>
                  <dd className="text-(--color-fg)">{site.hq}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Local</dt>
                  <dd className="text-(--color-fg)">
                    <LocalTime />
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Email</dt>
                  <dd className="text-(--color-fg)">{site.email}</dd>
                </div>
              </dl>
            </div>
            <div className="lg:col-span-8">
              <CalEmbed />
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
