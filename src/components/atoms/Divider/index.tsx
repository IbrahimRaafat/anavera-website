import { cn } from "@/lib/cn";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  glow?: boolean;
}

export function Divider({ orientation = "horizontal", glow = false, className }: DividerProps) {
  if (orientation === "vertical") {
    return (
      <span
        className={cn(
          "inline-block w-px self-stretch bg-border",
          glow && "shadow-[0_0_8px_rgba(0,168,181,0.4)]",
          className,
        )}
      />
    );
  }
  return (
    <hr
      className={cn(
        "border-none h-px bg-border",
        glow && "shadow-[0_0_8px_rgba(0,168,181,0.3)]",
        className,
      )}
    />
  );
}
