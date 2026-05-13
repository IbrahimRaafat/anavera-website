import { cn } from "@/lib/cn";
import type { BadgeProps } from "./types";

const variantClasses = {
  teal:    "bg-teal/15 text-teal border border-teal/30",
  sky:     "bg-sky/15 text-sky border border-sky/30",
  success: "bg-success/15 text-success border border-success/30",
  warning: "bg-warning/15 text-warning border border-warning/30",
  danger:  "bg-danger/15 text-danger border border-danger/30",
  muted:   "bg-border text-text-muted border border-border-bright",
};

export function Badge({ variant = "teal", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold font-heading tracking-wide uppercase",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
