import { Cpu, Store, Users, GraduationCap } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const services = [
  {
    icon: Cpu,
    title: "Fomento Tecnológico",
    description:
      "Desarrollamos proyectos de innovación que incluyen realidad virtual, experiencias 360° y herramientas digitales avanzadas para mejorar la educación y el sector productivo de la región.",
    tags: ["Realidad Virtual", "360°", "Innovación"],
    color: "primary",
  },
  {
    icon: Store,
    title: "Apoyo Empresarial",
    description:
      "Acompañamos a microempresarios en la creación de páginas web y el fortalecimiento de sus habilidades digitales para la reactivación y el crecimiento comercial.",
    tags: ["Diseño Web", "E-Commerce", "Microempresas"],
    color: "accent",
  },
  {
    icon: Users,
    title: "Talento Tech",
    description:
      "Trabajamos en la capacitación y apropiación tecnológica de la comunidad, en colaboración con el programa 'Punto Vive Lab' y otras iniciativas de inclusión digital.",
    tags: ["Punto Vive Lab", "Capacitación", "TIC"],
    color: "primary",
  },
  {
    icon: GraduationCap,
    title: "Vínculo Académico",
    description:
      "Actuamos como el brazo tecnológico de la UFPS Seccional Ocaña para aplicar conocimientos científicos y técnicos en el entorno social y económico de la región.",
    tags: ["UFPSO", "Investigación", "Academia"],
    color: "accent",
  },
];

export default function Services() {
  const { ref: headerRef, inView: headerIn } = useInView({ threshold: 0.2 });
  const { ref: gridRef, inView: gridIn } = useInView({ threshold: 0.1 });

  return (
    <section id="servicios" className="py-24 relative">
      <div className="absolute left-0 top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(122 39% 49% / 0.3), transparent)" }} />
      <div className="absolute inset-0 bg-grid opacity-40" />

      <div className="container relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase mb-4">
            Áreas de acción
          </div>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Cuatro pilares que sostienen nuestra misión de transformar digitalmente la región de Ocaña.
          </p>
        </div>

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
