import { cn } from "@/lib/cn";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 p-5 rounded-xl",
        "bg-card border border-border",
        "hover:border-teal/40 transition-colors duration-300",
        className,
      )}
    >
      <span className="font-heading font-bold text-2xl sm:text-3xl text-gradient-teal">{value}</span>
      <span className="text-text-muted text-sm leading-tight">{label}</span>
    </div>
  );
}
