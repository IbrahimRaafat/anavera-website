import { cn } from "@/lib/cn";
import { Badge } from "@/components/atoms";

interface SectionLabelProps {
  eyebrow?: string;
  heading: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionLabel({ eyebrow, heading, description, align = "left", className }: SectionLabelProps) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" && "items-center text-center", className)}>
      {eyebrow && <Badge variant="teal">{eyebrow}</Badge>}
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text leading-tight tracking-tight">
        {heading}
      </h2>
      {description && (
        <p className={cn("text-text-muted leading-relaxed", align === "center" ? "max-w-2xl" : "max-w-xl")}>
          {description}
        </p>
      )}
    </div>
  );
}
