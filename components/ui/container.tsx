import * as React from "react";
import { cn } from "@/lib/utils";

type Size = "prose" | "default" | "wide";

const sizeClass: Record<Size, string> = {
  prose: "max-w-(--container-prose)",
  default: "max-w-(--container-default)",
  wide: "max-w-(--container-wide)",
};

type ContainerProps = {
  children: React.ReactNode;
  size?: Size;
  className?: string;
  /** Element tag to render — defaults to `div`. */
  as?: keyof React.JSX.IntrinsicElements;
};

export function Container({ children, size = "default", className, as = "div" }: ContainerProps) {
  return React.createElement(
    as,
    { className: cn("mx-auto w-full px-5 md:px-10 xl:px-16", sizeClass[size], className) },
    children,
  );
}
