import { useInView } from "@/hooks/use-in-view";
import SectionHeader from "./SectionHeader";
import { services } from "@/data/services";

export default function Services() {
  const { ref: gridRef, inView: gridIn } = useInView({ threshold: 0.1 });

  return (
    <section id="servicios" className="py-24 relative">
      <div className="absolute left-0 top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(122 39% 49% / 0.3), transparent)" }} />
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="container relative z-10">
        {/* Header */}
        <SectionHeader
          badge="Áreas de acción"
          title="Nuestros"
          highlight="Servicios"
          description="Cuatro pilares que sostienen nuestra misión de transformar digitalmente la región de Ocaña."
        />

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isPrimary = service.color === "primary";
            return (
              <div
                key={service.title}
                className={`card-glass rounded-2xl p-8 group hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 ${
                  gridIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: gridIn ? `${i * 100}ms` : "0ms" }}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                    isPrimary
                      ? "bg-primary/10 border border-primary/20 group-hover:bg-primary/20"
                      : "bg-accent/10 border border-accent/20 group-hover:bg-accent/20"
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isPrimary ? "text-primary" : "text-accent"}`} />
                </div>

                <h3 className="font-grotesk text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full border font-medium ${
                        isPrimary
                          ? "border-primary/30 text-primary bg-primary/5"
                          : "border-accent/30 text-accent bg-accent/5"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
