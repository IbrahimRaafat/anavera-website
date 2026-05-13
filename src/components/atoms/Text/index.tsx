import { cn } from "@/lib/cn";
import type { TextProps } from "./types";

const sizeClasses = {
  xs:  "text-xs",
  sm:  "text-sm",
  md:  "text-base",
  lg:  "text-lg",
  xl:  "text-xl",
};

const colorClasses = {
  default: "text-text",
  muted:   "text-text-muted",
  subtle:  "text-text-subtle",
  teal:    "text-teal",
};

export function Text({ as: Tag = "p", size = "md", color = "muted", className, children }: TextProps) {
  return (
    <Tag
      className={cn(
        "font-body leading-relaxed",
        sizeClasses[size],
        colorClasses[color],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
