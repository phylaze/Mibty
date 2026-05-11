import { cn } from "@/lib/utils";
import type { Substrate } from "@/lib/site";

const substrateClass: Record<Substrate, string> = {
  bits: "text-cyan-400 border-cyan-400/30 bg-cyan-400/5",
  data: "text-violet-300 border-violet-500/30 bg-violet-500/5",
  cells: "text-mint-400 border-mint-400/30 bg-mint-400/5",
  atoms: "text-amber-300 border-amber-300/30 bg-amber-300/5",
};

export function Tag({
  children,
  substrate,
  className,
}: {
  children: React.ReactNode;
  substrate?: Substrate;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1",
        "type-mono-s tracking-tight",
        substrate
          ? substrateClass[substrate]
          : "border-(--color-border) bg-(--color-surface) text-(--color-fg-muted)",
        className,
      )}
    >
      {children}
    </span>
  );
}
