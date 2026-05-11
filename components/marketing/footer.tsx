import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/marketing/logo";
import { LocalTime } from "@/components/marketing/local-time";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="hairline-t mt-32 bg-(--color-bg)">
      <Container size="wide" className="py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-6 max-w-xs type-body-s text-(--color-fg-muted)">
              {site.legalName}. Building systems across software, AI &amp; robotics, biotechnology,
              and nanotechnology — out of Lagos.
            </p>
            <p className="mt-6 type-mono-s text-(--color-fg-subtle)">
              {site.hq} · <LocalTime />
            </p>
            <p className="mt-2 type-mono-s text-(--color-fg-subtle)">
              {site.registrationNote}
            </p>
          </div>

          <FooterColumn title="Services" links={nav.footer.services} className="md:col-span-3" />
          <FooterColumn title="Company" links={nav.footer.company} className="md:col-span-2" />

          <div className="md:col-span-3">
            <h4 className="type-eyebrow text-(--color-fg-subtle)">The MIBTY Field</h4>
            <p className="mt-3 type-body-s text-(--color-fg-muted)">
              A monthly research dispatch. No fluff.
            </p>
            <form className="mt-4 flex h-10 overflow-hidden rounded-md border border-(--color-border) bg-(--color-surface) focus-within:border-violet-500/60">
              <input
                type="email"
                required
                placeholder="you@domain.com"
                aria-label="Email address"
                className="flex-1 bg-transparent px-3 text-[14px] text-(--color-fg) placeholder:text-(--color-fg-subtle) focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 text-[13px] font-medium text-violet-300 hover:bg-violet-500/10"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="hairline-t mt-16 flex flex-col items-start justify-between gap-4 pt-8 md:flex-row md:items-center">
          <p className="type-mono-s text-(--color-fg-subtle)">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {nav.footer.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="type-mono-s text-(--color-fg-subtle) hover:text-(--color-fg)"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  className,
}: {
  title: string;
  links: ReadonlyArray<{ href: string; label: string }>;
  className?: string;
}) {
  return (
    <div className={className}>
      <h4 className="type-eyebrow text-(--color-fg-subtle)">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="type-body-s text-(--color-fg-muted) transition-colors duration-(--dur-fast) hover:text-(--color-fg)"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
