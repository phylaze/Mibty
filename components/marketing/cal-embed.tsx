"use client";

import { useEffect, useState } from "react";

// Cal.com embed — lazy-mounted iframe so it never blocks first paint.
// When MIBTY's Cal.com link is provisioned, set NEXT_PUBLIC_CAL_LINK to e.g.
// "mibty/consultation". Falls back to a placeholder card until then.

export function CalEmbed() {
  const link = process.env.NEXT_PUBLIC_CAL_LINK;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = window.setTimeout(() => setShow(true), 300);
    return () => window.clearTimeout(id);
  }, []);

  if (!link) {
    return (
      <div className="hairline flex min-h-[420px] flex-col items-center justify-center gap-3 rounded-xl bg-(--color-surface) p-10 text-center">
        <p className="type-eyebrow text-(--color-fg-subtle)">Calendar booking</p>
        <p className="type-display-s text-(--color-fg)">Direct booking arriving soon.</p>
        <p className="type-body-l max-w-md text-(--color-fg-muted)">
          For now, send a message via the form above and we&rsquo;ll send a calendar invite within
          two business days.
        </p>
      </div>
    );
  }

  return (
    <div className="hairline overflow-hidden rounded-xl bg-(--color-surface)">
      {show ? (
        <iframe
          title="Book a consultation with MIBTY"
          src={`https://cal.com/${link}?theme=dark&hideEventTypeDetails=false`}
          className="h-[720px] w-full border-0"
          loading="lazy"
        />
      ) : (
        <div className="flex min-h-[420px] items-center justify-center">
          <p className="type-mono-s text-(--color-fg-subtle)">Loading calendar…</p>
        </div>
      )}
    </div>
  );
}
