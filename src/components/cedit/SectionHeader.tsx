import { useInView } from "@/hooks/use-in-view";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  className = "",
}: SectionHeaderProps) {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`text-center mb-16 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase mb-4">
          {badge}
        </div>
      )}
      <h2 className="font-grotesk text-4xl md:text-5xl font-bold">
        {title}{" "}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-xl mx-auto mt-4">
          {description}
        </p>
      )}
    </div>
  );
}
