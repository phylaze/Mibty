import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, withWordmark = true }: { className?: string; withWordmark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="MIBTY home"
      className={cn(
        "group inline-flex items-center gap-2.5",
        "text-(--color-fg)",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-md bg-white p-1",
          "ring-1 ring-(--color-border)",
          "transition-transform duration-(--dur-fast) ease-(--ease-out-soft)",
          "group-hover:scale-[1.04]",
        )}
      >
        <Image
          src="/logo.svg"
          alt=""
          width={24}
          height={24}
          priority
          className="h-full w-full"
        />
      </span>
      {withWordmark ? (
        <span className="font-sans text-[17px] font-semibold tracking-[-0.04em]">
          MIBTY
        </span>
      ) : null}
    </Link>
  );
}
