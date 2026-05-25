import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import SectionHeader from "./SectionHeader";
import {
  projects,
  categories,
  categoryStyles,
  type Category,
} from "@/data/projects";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Category>("Todos");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
        <SectionHeader
          badge="Nuestro trabajo"
          title="Galería de"
          highlight="Proyectos"
          description="Iniciativas reales que demuestran cómo el CEDIT transforma la tecnología en impacto para Ocaña y su región."
          className="mb-10"
        />

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
