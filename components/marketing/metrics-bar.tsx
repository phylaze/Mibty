import { Container } from "@/components/ui/container";

const metrics = [
  { value: "12+", label: "Countries served" },
  { value: "40+", label: "Research & enterprise partners" },
  { value: "50+", label: "Systems shipped" },
  { value: "4", label: "Substrates of practice" },
];

export function MetricsBar() {
  return (
    <section className="py-24">
      <Container size="wide">
        <div className="hairline rounded-xl bg-(--color-surface) p-2">
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-(--color-border) md:grid-cols-4">
            {metrics.map((m) => (
              <li key={m.label} className="flex flex-col gap-2 bg-(--color-surface) p-8">
                <span className="type-display-s text-plasma font-semibold">{m.value}</span>
                <span className="type-body-s text-(--color-fg-muted)">{m.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
