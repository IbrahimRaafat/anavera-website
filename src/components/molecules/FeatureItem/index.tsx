import { cn } from "@/lib/cn";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
  layout?: "row" | "column";
}

export function FeatureItem({ icon, title, description, className, layout = "row" }: FeatureItemProps) {
  if (layout === "column") {
    return (
      <div className={cn("flex flex-col gap-3", className)}>
        <div className="size-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0">
          {icon}
        </div>
        <div>
          <p className="font-heading font-semibold text-text text-sm">{title}</p>
          {description && <p className="text-text-muted text-sm mt-1 leading-relaxed">{description}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex gap-3 items-start", className)}>
      <div className="size-8 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <p className="font-heading font-semibold text-text text-sm">{title}</p>
        {description && <p className="text-text-muted text-sm mt-0.5 leading-relaxed">{description}</p>}
      </div>
    </div>
  );
}
