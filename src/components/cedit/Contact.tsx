import { Mail, MapPin, Phone, Send } from "lucide-react";
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

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Info */}
          <div
            ref={infoRef}
            className={`flex flex-col gap-6 transition-all duration-700 ease-out ${
              infoIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="font-grotesk text-2xl font-bold">Información de contacto</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              El CEDIT está ubicado en las instalaciones de la UFPS Seccional Ocaña.
              Visítanos o comunícate con nosotros para conocer cómo podemos apoyar tu empresa,
              proyecto o proceso de aprendizaje.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {[
                {
                  icon: MapPin,
                  label: "Dirección",
                  value: "Ocaña, Norte de Santander — Campus El Algodonal (70)",
                  color: "primary",
                },
                {
                  icon: Mail,
                  label: "Correo Electrónico",
                  value: "cedit@ufpso.edu.co",
                  color: "accent",
                },
                {
                  icon: Phone,
                  label: "Teléfono",
                  value: "(607) 562 0100",
                  color: "primary",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                const isPrimary = item.color === "primary";
                return (
                  <div
                    key={item.label}
                    className={`flex items-start gap-4 group transition-all duration-500 ease-out ${
                      infoIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                    }`}
                    style={{ transitionDelay: infoIn ? `${200 + i * 100}ms` : "0ms" }}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isPrimary ? "bg-primary/10 border border-primary/20" : "bg-accent/10 border border-accent/20"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isPrimary ? "text-primary" : "text-accent"}`} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium mb-0.5">{item.label}</p>
                      <p className="text-sm text-foreground">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 p-4 rounded-xl card-glass border-primary/20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-primary/20 flex items-center justify-center shrink-0 p-1">
                <img src={logoUfps} alt="UFPS" className="h-full w-auto object-contain" />
              </div>
              <div>
                <div className="text-sm font-semibold font-grotesk">Universidad Francisco de Paula Santander</div>
                <div className="text-xs text-muted-foreground">Seccional Ocaña — Norte de Santander, Colombia</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`card-glass rounded-2xl p-8 flex flex-col gap-5 transition-all duration-700 ease-out delay-150 ${
              formIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-muted-foreground font-medium">Nombre</label>
                <Input placeholder="Tu nombre" required className="bg-muted/50 border-border focus:border-primary" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-muted-foreground font-medium">Correo electrónico</label>
                <Input type="email" placeholder="tu@correo.com" required className="bg-muted/50 border-border focus:border-primary" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-muted-foreground font-medium">Asunto</label>
              <Input placeholder="¿En qué podemos ayudarte?" required className="bg-muted/50 border-border focus:border-primary" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-muted-foreground font-medium">Mensaje</label>
              <Textarea
                placeholder="Cuéntanos sobre tu proyecto, necesidad o consulta..."
                rows={5}
                required
                className="bg-muted/50 border-border focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-grotesk font-semibold w-full mt-1"
              disabled={sent}
            >
              {sent ? (
                "¡Mensaje enviado! ✓"
              ) : (
                <>
                  Enviar mensaje <Send className="w-4 h-4 ml-2" />
                </>
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

