import type { HTMLAttributes } from "react";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | "div" | "li";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "default" | "muted" | "subtle" | "teal";
}
