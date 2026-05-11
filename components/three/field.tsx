"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FieldCanvas = dynamic(() => import("./field-canvas"), {
  ssr: false,
  loading: () => null,
});

// Lazy-loaded R3F field, gated by:
//   1. Client-only mount
//   2. prefers-reduced-motion → never load
//   3. Slow connection (saveData / effective-2g) → never load
// Falls back to the CSS field-backdrop, which is always rendered underneath.

export function Field({ className = "" }: { className?: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    type Conn = { saveData?: boolean; effectiveType?: string };
    const conn: Conn | undefined = (navigator as unknown as { connection?: Conn }).connection;
    if (conn?.saveData) return;
    if (conn?.effectiveType && /(^|-)2g$/.test(conn.effectiveType)) return;

    const id = window.setTimeout(() => setEnabled(true), 120);
    return () => window.clearTimeout(id);
  }, []);

  if (!enabled) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <FieldCanvas />
    </div>
  );
}
