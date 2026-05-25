import imgRv1 from "@/assets/gallery-rv1.jpg";
import imgRv2 from "@/assets/gallery-rv2.jpg";
import imgWeb1 from "@/assets/gallery-web1.jpg";
import imgWeb2 from "@/assets/gallery-web2.jpg";
import imgCap1 from "@/assets/gallery-cap1.jpg";
import imgCap2 from "@/assets/gallery-cap2.jpg";

export type Category = "Todos" | "RV & 360°" | "Web" | "Capacitación";

export interface ProjectItem {
  id: number;
  category: Category;
  title: string;
  description: string;
  image: string;
  year: string;
  tags: string[];
}

export const categories: Category[] = ["Todos", "RV & 360°", "Web", "Capacitación"];

export const categoryStyles: Record<Category, { badge: string; dot: string }> = {
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

export const projects: ProjectItem[] = [
  {
    id: 1,
    category: "RV & 360°",
    title: "Laboratorio Virtual UFPSO",
    description:
      "Recorrido inmersivo en realidad virtual por los laboratorios de la UFPS Seccional Ocaña, permitiendo a futuros estudiantes conocer las instalaciones desde cualquier lugar.",
    image: imgRv1,
    year: "2024",
    tags: ["VR", "Educación", "UFPSO"],
  },
  {
    id: 2,
    category: "RV & 360°",
    title: "Tour 360° Ocaña Patrimonial",
    description:
      "Experiencia panorámica 360° del patrimonio histórico y cultural de Ocaña, desarrollada para promover el turismo regional con tecnología inmersiva.",
    image: imgRv2,
    year: "2023",
    tags: ["360°", "Turismo", "Cultura"],
  },
  {
    id: 3,
    category: "Web",
    title: "Tienda Digital — Artesanías Ocaña",
    description:
      "Plataforma de comercio electrónico para artesanos locales, con catálogo de productos, carrito de compras y pagos en línea. Parte del programa Tiendas Digitales.",
    image: imgWeb1,
    year: "2024",
    tags: ["E-Commerce", "Artesanías", "Pyme"],
  },
  {
    id: 4,
    category: "Web",
    title: "Portal Microempresarios Región",
    description:
      "Desarrollo de sitios web profesionales para más de 30 microempresarios de Ocaña, fortaleciendo su presencia digital y reactivación comercial post-pandemia.",
    image: imgWeb2,
    year: "2023",
    tags: ["Web", "Microempresas", "Reactivación"],
  },
  {
    id: 5,
    category: "Capacitación",
    title: "Bootcamp Programación Web",
    description:
      "Intensivo de 60 horas en HTML, CSS y JavaScript para estudiantes universitarios y jóvenes de la región, en alianza con el programa Punto Vive Lab.",
    image: imgCap1,
    year: "2024",
    tags: ["Programación", "Punto Vive Lab", "Jóvenes"],
  },
  {
    id: 6,
    category: "Capacitación",
    title: "Alfabetización Digital Comunitaria",
    description:
      "Talleres de uso de smartphones, redes sociales y herramientas ofimáticas dirigidos a adultos mayores y comunidades rurales del municipio de Ocaña.",
    image: imgCap2,
    year: "2023",
    tags: ["Inclusión", "Comunidad", "TIC"],
  },
];
