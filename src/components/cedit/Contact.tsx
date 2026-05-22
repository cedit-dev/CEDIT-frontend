import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import logoUfps from "@/assets/logo_vertical.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import Map from "./Map";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { ref: headerRef, inView: headerIn } = useInView({ threshold: 0.2 });
  const { ref: infoRef, inView: infoIn } = useInView({ threshold: 0.15 });
  const { ref: formRef, inView: formIn } = useInView({ threshold: 0.15 });
  const { ref: mapRef, inView: mapIn } = useInView({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(122 39% 49% / 0.3), transparent)" }} />
      <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(217 46% 45% / 0.3), transparent)" }} />

      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headerIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase mb-4">
            Escríbenos
          </div>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold">
            Hablemos de <span className="text-gradient">Innovación</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            ¿Tienes un proyecto, necesitas capacitación o quieres conocer más sobre lo que hacemos? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          {/* Info */}
          <div
            ref={infoRef}
            className={`flex flex-col gap-8 transition-all duration-700 ease-out ${
              infoIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div>
              <h3 className="font-grotesk text-3xl font-bold mb-4">Información de contacto</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                El CEDIT está ubicado en el campus Algodonal de la UFPSO.
                Visítanos para conocer más sobre nuestro ecosistema de innovación.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                {
                  icon: MapPin,
                  label: "Ubicación",
                  value: "Ocaña, Campus El Algodonal, Laboratorio 70",
                  color: "primary",
                },
                {
                  icon: Mail,
                  label: "E-mail Institucional",
                  value: "cedit@ufpso.edu.co",
                  color: "accent",
                },
                {
                  icon: Phone,
                  label: "Teléfono",
                  value: "5610550",
                  color: "primary",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                const isPrimary = item.color === "primary";
                return (
                  <div
                    key={item.label}
                    className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-500 hover:bg-muted/50 border border-transparent hover:border-border ${
                      infoIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                    }`}
                    style={{ transitionDelay: infoIn ? `${200 + i * 100}ms` : "0ms" }}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                        isPrimary ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-sm font-semibold text-foreground">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a 
              href="https://ufpso.edu.co/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 p-6 rounded-[2rem] glass-morphism border-primary/5 flex items-center gap-5 transition-all hover:bg-white/10 hover:border-primary/20 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-primary/10 flex items-center justify-center shrink-0 p-2 shadow-sm transition-transform group-hover:scale-105">
                <img src={logoUfps} alt="UFPS" className="h-full w-auto object-contain" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm font-bold font-grotesk leading-tight uppercase tracking-tight group-hover:text-primary transition-colors">UFPS Seccional Ocaña</div>
                <div className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Acreditada en Alta Calidad</div>
              </div>
            </a>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`card-glass rounded-[2rem] p-8 lg:p-10 flex flex-col gap-6 transition-all duration-700 ease-out delay-150 relative ${
              formIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-muted-foreground font-bold uppercase tracking-wider px-1">Nombre</label>
                <Input placeholder="Ej. Juan Pérez" required className="h-12 bg-muted/30 border-border/50 focus:bg-background focus:ring-2 focus:ring-primary/20 rounded-xl transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-muted-foreground font-bold uppercase tracking-wider px-1">Email</label>
                <Input type="email" placeholder="juan@ejemplo.com" required className="h-12 bg-muted/30 border-border/50 focus:bg-background focus:ring-2 focus:ring-primary/20 rounded-xl transition-all" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-muted-foreground font-bold uppercase tracking-wider px-1">Asunto</label>
              <Input placeholder="¿En qué te podemos ayudar?" required className="h-12 bg-muted/30 border-border/50 focus:bg-background focus:ring-2 focus:ring-primary/20 rounded-xl transition-all" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-muted-foreground font-bold uppercase tracking-wider px-1">Mensaje</label>
              <Textarea
                placeholder="Escribe tu consulta aquí..."
                rows={4}
                required
                className="bg-muted/30 border-border/50 focus:bg-background focus:ring-2 focus:ring-primary/20 rounded-xl transition-all resize-none p-4"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-xl glow-primary font-bold w-full transition-all hover:scale-[1.02] active:scale-[0.98] group"
              disabled={sent}
            >
              {sent ? (
                <span className="flex items-center gap-2">¡Enviado con éxito! <CheckCircle className="w-5 h-5 animate-in zoom-in" /></span>
              ) : (
                <span className="flex items-center gap-2">
                  Enviar Mensaje <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              )}
            </Button>
          </form>
        </div>

        {/* Map */}
        <div
          ref={mapRef}
          className={`transition-all duration-1000 ease-out delay-300 ${
            mapIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <Map className="mb-8" />
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Visítanos de Lunes a Viernes de 8:00 AM a 12:00 PM y de 2:00 PM a 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

