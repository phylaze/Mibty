import { Container } from "@/components/ui/container";
import { Counter } from "@/components/motion/counter";

const metrics = [
  { value: 12, suffix: "+", label: "Countries served" },
  { value: 40, suffix: "+", label: "Research & enterprise partners" },
  { value: 50, suffix: "+", label: "Systems shipped" },
  { value: 4, suffix: "", label: "Substrates of practice" },
];

export function MetricsBar() {
  return (
    <section className="py-24">
      <Container size="wide">
        <div className="hairline rounded-xl bg-(--color-surface) p-2">
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-(--color-border) md:grid-cols-4">
            {metrics.map((m) => (
              <li key={m.label} className="flex flex-col gap-2 bg-(--color-surface) p-8">
                <Counter
                  value={m.value}
                  suffix={m.suffix}
                  className="type-display-s text-plasma font-semibold"
                />
                <span className="type-body-s text-(--color-fg-muted)">{m.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
