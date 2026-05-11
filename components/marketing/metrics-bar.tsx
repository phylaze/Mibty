import { Container } from "@/components/ui/container";

// Four substrate "anchors" replace the fabricated metrics. Each is a
// truthful capability statement, not a count. When the company has
// verifiable numbers it wants to publish, restore Counter and pass
// real values in.

const pillars = [
  { label: "Bits", body: "Software, web, and cloud platforms." },
  { label: "Data", body: "AI, robotics, data mining and analytics." },
  { label: "Cells", body: "Biotechnology for human and animal health." },
  { label: "Atoms", body: "Nanotechnology, materials, sensing." },
];

export function MetricsBar() {
  return (
    <section className="py-24">
      <Container size="wide">
        <div className="hairline rounded-xl bg-(--color-surface) p-2">
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-(--color-border) md:grid-cols-4">
            {pillars.map((p) => (
              <li key={p.label} className="flex flex-col gap-2 bg-(--color-surface) p-8">
                <span className="type-eyebrow text-violet-300">{p.label}</span>
                <span className="type-headline text-(--color-fg)">{p.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
