import { cn } from "@/lib/cn";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium",
        "bg-border text-text-muted border border-border-bright",
        className,
      )}
    >
      {children}
    </span>
  );
}
