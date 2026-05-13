import { cn } from "@/lib/cn";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "none" | "teal" | "sky";
}

export function GlowCard({ children, className, hover = true, glow = "none" }: GlowCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card transition-all duration-300",
        hover && "hover:border-teal/40 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,149,163,0.15)]",
        glow === "teal" && "shadow-[0_0_24px_rgba(0,149,163,0.12)] border-teal/30",
        glow === "sky"  && "shadow-[0_0_24px_rgba(2,132,199,0.1)] border-sky/30",
        className,
      )}
    >
      {children}
    </div>
  );
}
