import { ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const programs = [
  {
    number: "01",
    title: "Punto Vive Lab",
    subtitle: "Apropiación Digital Comunitaria",
    description:
      "Programa de capacitación tecnológica para la comunidad, que busca reducir la brecha digital y fortalecer las competencias TIC de la población de Ocaña.",
    color: "primary",
  },
  {
    number: "02",
    title: "RV & Metaverso",
    subtitle: "Experiencias Inmersivas",
    description:
      "Desarrollo de experiencias de realidad virtual y recorridos 360° aplicados a la educación, el turismo y el sector productivo regional.",
    color: "accent",
  },
  {
    number: "03",
    title: "Tiendas Digitales",
    subtitle: "Reactivación Comercial",
    description:
      "Apoyo integral para que microempresarios y emprendedores de Ocaña tengan presencia digital con páginas web profesionales y tiendas en línea.",
    color: "primary",
  },
  {
    number: "04",
    title: "Habilidades TIC",
    subtitle: "Formación y Capacitación",
    description:
      "Talleres y cursos en herramientas digitales, marketing digital, ofimática, programación básica y alfabetización tecnológica para todos los niveles.",
    color: "accent",
  },
  {
    number: "05",
    title: "Innovación Educativa",
    subtitle: "Tecnología en el Aula",
    description:
      "Integración de herramientas tecnológicas en los procesos educativos de la UFPSO y las instituciones de la región para enriquecer la experiencia de aprendizaje.",
    color: "primary",
  },
  {
    number: "06",
    title: "I+D Tecnológico",
    subtitle: "Investigación y Desarrollo",
    description:
      "Proyectos de investigación aplicada que vinculan docentes, estudiantes y el sector productivo para desarrollar soluciones tecnológicas innovadoras.",
    color: "accent",
  },
];

export default function Programs() {
  const { ref: headerRef, inView: headerIn } = useInView({ threshold: 0.2 });
  const { ref: gridRef, inView: gridIn } = useInView({ threshold: 0.05 });

  return (
    <section id="programas" className="py-24 relative bg-card/40">
      <div className="absolute left-0 top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(217 46% 45% / 0.3), transparent)" }} />

      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium tracking-wider uppercase mb-4">
            Lo que hacemos
          </div>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold">
            Nuestros <span className="text-gradient">Programas</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Iniciativas y proyectos que materializan nuestra visión de transformación digital para Ocaña.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, i) => {
            const isPrimary = prog.color === "primary";
            return (
              <div
                key={prog.number}
                className={`card-glass rounded-3xl p-8 group hover:border-primary/40 transition-all duration-500 cursor-pointer overflow-hidden relative ${
                  gridIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: gridIn ? `${i * 80}ms` : "0ms" }}
              >
                {/* Number Watermark */}
                <div 
                  className={`absolute -right-4 -top-4 font-grotesk text-8xl font-black opacity-[0.03] group-hover:opacity-[0.08] group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-700 pointer-events-none select-none ${
                    isPrimary ? "text-primary" : "text-accent"
                  }`}
                >
                  {prog.number}
                </div>

                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                    isPrimary ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                  }`}>
                    Proyecto {prog.number}
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-muted/50 transition-all duration-300 group-hover:bg-primary group-hover:text-white`}>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="font-grotesk text-xl font-extrabold mb-1 group-hover:text-primary transition-colors duration-300">{prog.title}</h3>
                  <p className={`text-xs font-bold mb-4 uppercase tracking-[0.1em] ${isPrimary ? "text-primary/70" : "text-accent/70"}`}>
                    {prog.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{prog.description}</p>
                </div>

                {/* Interactive bottom indicator */}
                <div className="mt-2 flex items-center gap-2">
                  <div
                    className={`h-1.5 w-8 group-hover:w-16 transition-all duration-500 rounded-full ${
                      isPrimary ? "bg-primary" : "bg-accent"
                    }`}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-muted-foreground">Explorar</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
