export interface ProgramItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  color: "primary" | "accent";
}

export const programs: ProgramItem[] = [
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
