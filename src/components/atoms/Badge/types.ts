import type { HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "teal" | "sky" | "success" | "warning" | "danger" | "muted";
}
