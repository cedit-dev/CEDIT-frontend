import { CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const highlights = [
  "Proyectos de innovación en realidad virtual y herramientas 360°",
  "Colaboración con programas como Punto Vive Lab",
  "Capacitación tecnológica para la comunidad de Ocaña",
  "Apoyo integral a microempresarios y emprendedores",
  "Vínculo directo con la academia de la UFPS Seccional Ocaña",
  "Fomento del comercio electrónico regional",
];

export default function About() {
  const { ref: leftRef, inView: leftIn } = useInView({ threshold: 0.15 });
  const { ref: rightRef, inView: rightIn } = useInView({ threshold: 0.15 });

  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-card/40">
      <div className="absolute left-0 top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(217 46% 45% / 0.3), transparent)" }} />

      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: visual */}
          <div
            ref={leftRef}
            className={`relative transition-all duration-700 ease-out ${
              leftIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden card-glass p-8 border border-primary/15">
              <div className="absolute top-4 right-4 w-20 h-20 opacity-15">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 0v20M40 20h20v20M60 40h20M40 20v-0M0 40h20M20 40v20M20 60h20" stroke="hsl(217 46% 45%)" strokeWidth="2"/>
                  <circle cx="40" cy="20" r="3" fill="hsl(217 46% 45%)"/>
                  <circle cx="60" cy="40" r="3" fill="hsl(6 59% 43%)"/>
                  <circle cx="20" cy="40" r="3" fill="hsl(208 60% 65%)"/>
                  <circle cx="20" cy="60" r="3" fill="hsl(6 59% 43%)"/>
                </svg>
              </div>

              <div className="text-center mb-6">
                <div className="mb-6 flex flex-col items-center">
                  <img 
                    src="/src/assets/LogoCedit.jpeg" 
                    alt="CEDIT Logo" 
                    className="h-32 w-auto object-contain glow-primary rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🔬", label: "Innovación" },
                  { icon: "🥽", label: "Realidad Virtual" },
                  { icon: "🌐", label: "Comercio Digital" },
                  { icon: "🎓", label: "Capacitación" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background border border-border hover:border-primary/40 transition-colors"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://ufpso.edu.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-4 -right-4 bg-white p-2 rounded-xl shadow-lg border border-border transition-all hover:scale-110 active:scale-95 group z-20"
            >
              <img 
                src="/src/assets/logo_vertical.png" 
                alt="UFPS Ocaña" 
                className="h-20 w-auto object-contain"
              />
            </a>
          </div>

          {/* Right: text */}
          <div
            ref={rightRef}
            className={`flex flex-col gap-6 transition-all duration-700 ease-out delay-150 ${
              rightIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium tracking-wider uppercase">
              Quiénes somos
            </div>

            <h2 className="font-grotesk text-4xl md:text-5xl font-bold leading-tight">
              Tecnología al servicio de{" "}
              <span className="text-gradient">la comunidad</span>
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              El CEDIT es la unidad de innovación tecnológica de la UFPS Seccional Ocaña,
              dedicada a impulsar la transformación digital de la región. Actuamos como
              puente entre el conocimiento científico universitario y las necesidades reales
              del sector productivo y social de Ocaña.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              Nuestra misión es convertir la tecnología en una herramienta asequible y
              contemporánea, tanto para la comunidad estudiantil como para el sector empresarial.
            </p>

            <ul className="flex flex-col gap-3 mt-2">
              {highlights.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-start gap-3 text-sm text-muted-foreground transition-all duration-500 ease-out ${
                    rightIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: rightIn ? `${300 + i * 60}ms` : "0ms" }}
                >
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
