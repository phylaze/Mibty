import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="MIBTY home"
      className={cn(
        "group inline-flex items-baseline gap-px font-sans font-semibold tracking-[-0.04em]",
        "text-[18px] text-(--color-fg)",
        className,
      )}
    >
      <span>M</span>
      <span
        aria-hidden
        className={cn(
          "relative mx-[2px] h-[14px] w-[2px] translate-y-[1px] bg-current",
          "transition-opacity duration-(--dur-base) ease-(--ease-in-out-soft)",
          "opacity-100 group-hover:opacity-30",
        )}
      />
      <span>BTY</span>
    </Link>
  );
}
