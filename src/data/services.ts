import { Cpu, Store, Users, GraduationCap, LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  color: "primary" | "accent";
}

export const services: ServiceItem[] = [
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
