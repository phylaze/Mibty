"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md",
        "border border-(--color-border) text-(--color-fg-muted)",
        "transition-colors duration-(--dur-fast) ease-(--ease-out-soft)",
        "hover:text-(--color-fg) hover:border-violet-500/40",
        className,
      )}
    >
      {mounted && (isDark ? <Sun size={16} /> : <Moon size={16} />)}
    </button>
  );
}
