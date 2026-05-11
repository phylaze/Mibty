import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Field } from "@/components/three/field";
import type { Substrate } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  substrate,
  field = true,
  children,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  substrate?: Substrate;
  field?: boolean;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24", className)}>
      <div className="field-backdrop" aria-hidden />
      {field ? <Field /> : null}

      <Container size="wide" className="relative">
        <Eyebrow substrate={substrate}>{eyebrow}</Eyebrow>
        <h1 className="type-display-l mt-6 max-w-4xl text-(--color-fg)">{title}</h1>
        {description ? (
          <p className="type-body-l mt-6 max-w-2xl text-(--color-fg-muted)">{description}</p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
