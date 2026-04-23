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

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background with Grid and Orbs */}
      <div className="absolute inset-0 z-0 bg-grid opacity-50" />
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="CEDIT hero background"
          className="w-full h-full object-cover opacity-[0.03] scale-105 animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Dynamic Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[120px] animate-glow-pulse pointer-events-none opacity-40" style={{ background: "hsl(217 46% 45% / 0.15)" }} />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full blur-[150px] animate-glow-pulse pointer-events-none opacity-30" style={{ animationDelay: "2s", background: "hsl(122 39% 49% / 0.1)" }} />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full blur-[100px] animate-glow-pulse pointer-events-none opacity-20" style={{ animationDelay: "4s", background: "hsl(6 59% 43% / 0.1)" }} />

      {/* Content Container */}
      <div className="relative z-10 container text-center flex flex-col items-center gap-8 pt-32 pb-20">
        <a 
          href="https://ufpso.edu.co/" 
          target="_blank" 
          rel="noopener noreferrer"
          ref={badgeRef}
          className={`group flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl transition-all duration-1000 ease-out hover:border-primary/40 hover:bg-primary/10 ${badgeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <img
            src="/src/assets/logo_vertical.png"
            alt="UFPSO"
            className="h-8 w-auto object-contain transition-all duration-500"
          />
          <span className="text-primary/70 text-[10px] font-bold tracking-[0.2em] uppercase">UFPS Seccional Ocaña</span>
        </a>

        <h1
          ref={titleRef}
          className={`font-grotesk text-5xl md:text-8xl font-bold leading-[1.1] transition-all duration-1000 ease-out delay-100 ${titleIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          <span className="text-gradient drop-shadow-sm">Centro de Desarrollo</span>
          <br />
          <span className="text-foreground relative">
            e Innovación
            {/* Subrayado decorativo */}
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1.5 bg-accent/20 rounded-full blur-[1px]" />
          </span>
          <br />
          <span className="text-gradient drop-shadow-sm">Tecnológica</span>
        </h1>

        <p
          ref={descRef}
          className={`text-muted-foreground text-lg md:text-2xl max-w-3xl leading-relaxed transition-all duration-1000 ease-out delay-200 ${descIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          Transformamos ideas en soluciones digitales. Somos el motor de la 
          <span className="text-primary font-semibold"> transformación tecnológica</span> del Catatumbo y la región.
        </p>

        <div
          ref={btnsRef}
          className={`flex flex-col sm:flex-row gap-5 mt-4 transition-all duration-1000 ease-out delay-300 ${btnsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-2xl shadow-xl shadow-primary/20 glow-primary font-bold px-10 text-lg transition-all hover:scale-105 active:scale-95 group"
            asChild
          >
            <a href="#servicios">
              Nuestros Servicios 
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent/40 text-accent hover:bg-accent/5 hover:text-accent h-14 rounded-2xl font-bold px-10 text-lg transition-all hover:scale-105 active:scale-95"
            asChild
          >
            <a href="#sobre">Sobre el CEDIT</a>
          </Button>
        </div>

        {/* Stats Section Refined */}
        <div
          ref={statsRef}
          className={`grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 mt-20 p-8 rounded-[2rem] glass-morphism border border-primary/10 transition-all duration-1000 ease-out delay-500 scale-95 hover:scale-100 ${statsIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          {[
            { value: "100+", label: "Empresas impulsadas", icon: "🚀" },
            { value: "5+", label: "Años innovando", icon: "✨" },
            { value: "1000+", label: "Egresados capacitados", icon: "🎓" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2 group cursor-default">
              <div className="text-4xl md:text-5xl font-grotesk font-black text-gradient group-hover:scale-110 transition-transform duration-300 tracking-tighter">
                {stat.value}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs opacity-70">{stat.icon}</span>
                <div className="text-muted-foreground font-semibold text-xs md:text-sm uppercase tracking-widest">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator with better styling */}
      <a
        href="#sobre"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 opacity-60 hover:opacity-100"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Explorar</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1 relative">
          <div className="w-1 h-2 bg-primary/40 rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
}
