import { cn } from "@/lib/utils";

type Size = "prose" | "default" | "wide";

const sizeClass: Record<Size, string> = {
  prose: "max-w-(--container-prose)",
  default: "max-w-(--container-default)",
  wide: "max-w-(--container-wide)",
};

export function Container({
  children,
  size = "default",
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  size?: Size;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag className={cn("mx-auto w-full px-5 md:px-10 xl:px-16", sizeClass[size], className)}>
      {children}
    </Tag>
  );
}
