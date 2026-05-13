import { cn } from "@/lib/cn";
import type { HeadingProps } from "./types";

const levelClasses = {
  h1: "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight",
  h2: "text-3xl sm:text-4xl font-bold leading-tight tracking-tight",
  h3: "text-2xl font-semibold leading-snug",
  h4: "text-xl font-semibold leading-snug",
  h5: "text-lg font-semibold",
  h6: "text-base font-semibold",
};

const colorClasses = {
  default: "text-text",
  muted:   "text-text-muted",
  teal:    "text-teal",
  gradient: "text-gradient-teal",
};

export function Heading({ as: Tag = "h2", color = "default", className, children }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-heading",
        levelClasses[Tag as keyof typeof levelClasses],
        colorClasses[color],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
