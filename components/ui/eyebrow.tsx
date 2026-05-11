import type { Substrate } from "@/lib/site";
import { cn } from "@/lib/utils";

const substrateColor: Record<Substrate, string> = {
  bits: "text-cyan-400",
  data: "text-violet-300",
  cells: "text-mint-400",
  atoms: "text-amber-300",
};

export function Eyebrow({
  children,
  substrate,
  className,
}: {
  children: React.ReactNode;
  substrate?: Substrate;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "type-eyebrow",
        "flex items-center gap-2",
        substrate ? substrateColor[substrate] : "text-violet-300",
        className,
      )}
    >
      <span aria-hidden className="inline-block h-px w-6 bg-current opacity-60" />
      {children}
    </p>
  );
}
