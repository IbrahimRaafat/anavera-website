import { cn } from "@/lib/cn";

interface GlowDotProps {
  color?: "teal" | "success" | "warning" | "danger";
  size?: "sm" | "md";
  className?: string;
}

const colorMap = {
  teal:    { dot: "bg-teal",    ring: "bg-teal/40" },
  success: { dot: "bg-success", ring: "bg-success/40" },
  warning: { dot: "bg-warning", ring: "bg-warning/40" },
  danger:  { dot: "bg-danger",  ring: "bg-danger/40" },
};

export function GlowDot({ color = "success", size = "md", className }: GlowDotProps) {
  const { dot, ring } = colorMap[color];
  const dotSize  = size === "sm" ? "size-1.5" : "size-2";
  const ringSize = size === "sm" ? "size-3"   : "size-4";

  return (
    <span className={cn("relative inline-flex items-center justify-center", className)}>
      <span
        className={cn("absolute rounded-full animate-ping opacity-70", ringSize, ring)}
        style={{ animationDuration: "2s" }}
      />
      <span className={cn("relative rounded-full", dotSize, dot)} />
    </span>
  );
}
