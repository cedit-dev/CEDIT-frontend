import heroBg from "@/assets/hero-cedit.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

export default function Hero() {
  const { ref: badgeRef, inView: badgeIn } = useInView({ threshold: 0.2 });
  const { ref: titleRef, inView: titleIn } = useInView({ threshold: 0.2 });
  const { ref: descRef, inView: descIn } = useInView({ threshold: 0.2 });
  const { ref: btnsRef, inView: btnsIn } = useInView({ threshold: 0.2 });
  const { ref: statsRef, inView: statsIn } = useInView({ threshold: 0.2 });

  const fadeUp = (inView: boolean, delay = 0) =>
    `transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }` + (delay ? ` delay-[${delay}ms]` : "");

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid"
    >
      {/* Banda institucional superior */}
      <div className="absolute top-0 left-0 right-0 h-1 institutional-stripe z-20" />

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="CEDIT hero background"
          className="w-full h-full object-cover opacity-10"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl animate-glow-pulse pointer-events-none" style={{ background: "hsl(217 46% 45% / 0.07)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl animate-glow-pulse pointer-events-none" style={{ animationDelay: "1.5s", background: "hsl(122 39% 49% / 0.07)" }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full blur-3xl animate-glow-pulse pointer-events-none" style={{ animationDelay: "3s", background: "hsl(6 59% 43% / 0.05)" }} />

      {/* Content */}
      <div className="relative z-10 container text-center flex flex-col items-center gap-6 pt-20">
        <div
          ref={badgeRef}
          className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8 text-primary text-xs font-medium tracking-wider uppercase transition-all duration-700 ease-out ${badgeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <img
            src="/src/assets/logo_vertical.png"
            alt="UFPSO"
            className="h-10 w-auto object-contain"
          />
          UFPS Seccional Ocaña
        </div>

        <h1
          ref={titleRef}
          className={`font-grotesk text-5xl md:text-7xl font-bold leading-tight transition-all duration-700 ease-out delay-100 ${titleIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="text-gradient">Centro de Desarrollo</span>
          <br />
          <span className="text-foreground">e Innovación</span>
          <br />
          <span className="text-gradient">Tecnológica</span>
        </h1>

        <p
          ref={descRef}
          className={`text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed transition-all duration-700 ease-out delay-200 ${descIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Impulsamos la tecnología, la innovación y la transformación digital en la región de Ocaña.
          Conectamos el conocimiento académico con el sector empresarial.
        </p>

        <div
          ref={btnsRef}
          className={`flex flex-col sm:flex-row gap-4 mt-2 transition-all duration-700 ease-out delay-300 ${btnsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-grotesk font-semibold px-8"
            asChild
          >
            <a href="#servicios">
              Nuestros Servicios <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground font-grotesk font-semibold px-8"
            asChild
          >
            <a href="#sobre">Conocer más</a>
          </Button>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={`grid grid-cols-3 gap-8 mt-12 transition-all duration-700 ease-out delay-500 ${statsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {[
            { value: "100+", label: "Empresas apoyadas" },
            { value: "5+", label: "Años de innovación" },
            { value: "1000+", label: "Personas capacitadas" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-grotesk font-bold text-gradient">{stat.value}</div>
              <div className="text-muted-foreground text-xs md:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
