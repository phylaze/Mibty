"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "@/components/marketing/logo";
import { nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-(--z-sticky) w-full",
        "transition-all duration-(--dur-base) ease-(--ease-out-soft)",
        scrolled ? "surface-glass" : "bg-transparent",
      )}
    >
      <Container size="wide">
        <div
          className={cn(
            "flex items-center justify-between",
            "transition-[height] duration-(--dur-base) ease-(--ease-out-soft)",
            scrolled ? "h-14" : "h-18",
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-[14px]",
                  "text-(--color-fg-muted) transition-colors duration-(--dur-fast)",
                  "hover:text-(--color-fg)",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Button asChild size="sm">
              <Link href="/contact">Book a call</Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden",
              "text-(--color-fg) hover:bg-(--color-surface)",
            )}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {/* Mobile sheet */}
      <div
        className={cn(
          "md:hidden",
          "fixed inset-x-0 top-14 bottom-0 z-(--z-overlay)",
          "transition-opacity duration-(--dur-base) ease-(--ease-out-soft)",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="surface-glass h-full w-full overflow-y-auto">
          <Container size="wide" className="py-8">
            <ul className="space-y-1">
              {nav.primary.map((item, i) => (
                <li
                  key={item.href}
                  style={{ transitionDelay: `${i * 40}ms` }}
                  className={cn(
                    "translate-y-2 opacity-0 transition-all",
                    "duration-(--dur-base) ease-(--ease-out-soft)",
                    open && "translate-y-0 opacity-100",
                  )}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-[18px] text-(--color-fg) hover:bg-(--color-surface)"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <Button asChild size="lg" className="flex-1">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Book a call
                </Link>
              </Button>
              <ThemeToggle />
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
