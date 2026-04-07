import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import imgRv1 from "@/assets/gallery-rv1.jpg";
import imgRv2 from "@/assets/gallery-rv2.jpg";
import imgWeb1 from "@/assets/gallery-web1.jpg";
import imgWeb2 from "@/assets/gallery-web2.jpg";
import imgCap1 from "@/assets/gallery-cap1.jpg";
import imgCap2 from "@/assets/gallery-cap2.jpg";

type Category = "Todos" | "RV & 360°" | "Web" | "Capacitación";

const categories: Category[] = ["Todos", "RV & 360°", "Web", "Capacitación"];

const categoryStyles: Record<Category, { badge: string; dot: string }> = {
  "Todos": { badge: "", dot: "" },
  "RV & 360°": {
    badge: "border-primary/30 text-primary bg-primary/8",
    dot: "bg-primary",
  },
  "Web": {
    badge: "border-accent/30 text-accent bg-accent/8",
    dot: "bg-accent",
  },
  "Capacitación": {
    badge: "border-destructive/30 text-destructive bg-destructive/8",
    dot: "bg-destructive",
  },
};

const projects = [
  {
    id: 1,
    category: "RV & 360°" as Category,
    title: "Laboratorio Virtual UFPSO",
    description:
      "Recorrido inmersivo en realidad virtual por los laboratorios de la UFPS Seccional Ocaña, permitiendo a futuros estudiantes conocer las instalaciones desde cualquier lugar.",
    image: imgRv1,
    year: "2024",
    tags: ["VR", "Educación", "UFPSO"],
  },
  {
    id: 2,
    category: "RV & 360°" as Category,
    title: "Tour 360° Ocaña Patrimonial",
    description:
      "Experiencia panorámica 360° del patrimonio histórico y cultural de Ocaña, desarrollada para promover el turismo regional con tecnología inmersiva.",
    image: imgRv2,
    year: "2023",
    tags: ["360°", "Turismo", "Cultura"],
  },
  {
    id: 3,
    category: "Web" as Category,
    title: "Tienda Digital — Artesanías Ocaña",
    description:
      "Plataforma de comercio electrónico para artesanos locales, con catálogo de productos, carrito de compras y pagos en línea. Parte del programa Tiendas Digitales.",
    image: imgWeb1,
    year: "2024",
    tags: ["E-Commerce", "Artesanías", "Pyme"],
  },
  {
    id: 4,
    category: "Web" as Category,
    title: "Portal Microempresarios Región",
    description:
      "Desarrollo de sitios web profesionales para más de 30 microempresarios de Ocaña, fortaleciendo su presencia digital y reactivación comercial post-pandemia.",
    image: imgWeb2,
    year: "2023",
    tags: ["Web", "Microempresas", "Reactivación"],
  },
  {
    id: 5,
    category: "Capacitación" as Category,
    title: "Bootcamp Programación Web",
    description:
      "Intensivo de 60 horas en HTML, CSS y JavaScript para estudiantes universitarios y jóvenes de la región, en alianza con el programa Punto Vive Lab.",
    image: imgCap1,
    year: "2024",
    tags: ["Programación", "Punto Vive Lab", "Jóvenes"],
  },
  {
    id: 6,
    category: "Capacitación" as Category,
    title: "Alfabetización Digital Comunitaria",
    description:
      "Talleres de uso de smartphones, redes sociales y herramientas ofimáticas dirigidos a adultos mayores y comunidades rurales del municipio de Ocaña.",
    image: imgCap2,
    year: "2023",
    tags: ["Inclusión", "Comunidad", "TIC"],
  },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Category>("Todos");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const { ref: headerRef, inView: headerIn } = useInView({ threshold: 0.2 });
  const { ref: filtersRef, inView: filtersIn } = useInView({ threshold: 0.3 });
  const { ref: gridRef, inView: gridIn } = useInView({ threshold: 0.05 });

  const filtered =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="galeria" className="py-24 relative overflow-hidden">
      {/* Decorative top line */}
      <div
        className="absolute left-0 top-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(217 46% 45% / 0.3), transparent)",
        }}
      />

      {/* Subtle grid bg */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-10 transition-all duration-700 ease-out ${
            headerIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase mb-4">
            Nuestro trabajo
          </div>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold">
            Galería de <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Iniciativas reales que demuestran cómo el CEDIT transforma la
            tecnología en impacto para Ocaña y su región.
          </p>
        </div>

        {/* Filter pills */}
        <div
          ref={filtersRef}
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ease-out delay-100 ${
            filtersIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeFilter === cat
                  ? cat === "Todos"
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : cat === "RV & 360°"
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : cat === "Web"
                    ? "bg-accent text-accent-foreground border-accent shadow-md"
                    : "bg-destructive text-destructive-foreground border-destructive shadow-md"
                  : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat === "Todos" && (
                <span className="mr-1.5">✦</span>
              )}
              {cat}
              {activeFilter === cat && cat !== "Todos" && (
                <span className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full bg-white/25 text-[10px] font-bold">
                  {filtered.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => {
            const catStyle = categoryStyles[project.category];
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group rounded-2xl overflow-hidden card-glass border transition-all duration-500 cursor-pointer ${
                  hoveredId === project.id
                    ? "shadow-lg -translate-y-1 border-primary/30"
                    : "border-border"
                } ${
                  gridIn
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: gridIn ? `${i * 90}ms` : "0ms",
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={800}
                    height={520}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredId === project.id ? "scale-105" : "scale-100"
                    }`}
                  />
                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      hoveredId === project.id ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background:
                        "linear-gradient(to top, hsl(217 46% 18% / 0.7), transparent)",
                    }}
                  />
                  {/* Year badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-semibold text-white"
                    style={{ background: "hsl(217 46% 45% / 0.85)", backdropFilter: "blur(4px)" }}
                  >
                    {project.year}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col gap-3">
                  {/* Category badge */}
                  <span
                    className={`inline-flex w-fit items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${catStyle.badge}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${catStyle.dot}`} />
                    {project.category}
                  </span>

                  <h3 className="font-grotesk text-base font-bold leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No hay proyectos en esta categoría aún.
          </div>
        )}
      </div>
    </section>
  );
}
