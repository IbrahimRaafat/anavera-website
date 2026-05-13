"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import type { ButtonProps } from "./types";

const variantClasses = {
  primary:
    "bg-teal text-bg hover:bg-teal-light active:scale-[0.98] shadow-[0_0_20px_rgba(0,168,181,0.4)] hover:shadow-[0_0_28px_rgba(0,168,181,0.55)]",
  secondary:
    "border border-teal text-teal hover:bg-teal/10 active:scale-[0.98]",
  ghost:
    "text-text-muted hover:text-teal hover:bg-teal/8 active:scale-[0.98]",
  danger:
    "bg-danger text-white hover:bg-danger/90 active:scale-[0.98]",
};

const sizeClasses = {
  sm: "h-8 px-4 text-sm gap-1.5",
  md: "h-10 px-5 text-sm gap-2",
  lg: "h-12 px-7 text-base gap-2.5",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, icon, iconRight, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-heading font-semibold rounded-full",
          "transition-all duration-200 cursor-pointer select-none",
          "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button };
