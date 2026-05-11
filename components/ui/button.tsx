import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium",
    "whitespace-nowrap transition-all",
    "duration-(--dur-fast) ease-(--ease-out-soft)",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500",
  ),
  {
    variants: {
      variant: {
        primary: cn(
          "bg-violet-500 text-white",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]",
          "hover:bg-violet-300 hover:shadow-[var(--shadow-haloviolet)]",
          "active:translate-y-[1px]",
        ),
        secondary: cn(
          "border border-(--color-border) bg-transparent text-(--color-fg)",
          "hover:bg-(--color-surface) hover:border-violet-500/40",
        ),
        ghost: "text-(--color-fg-muted) hover:text-(--color-fg) hover:bg-(--color-surface)",
        link: "text-violet-300 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3 text-[13px]",
        md: "h-10 px-5 text-[14px]",
        lg: "h-12 px-7 text-[15px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, asChild = false, ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
});

export { buttonVariants };
