import { Facebook, Instagram, ExternalLink } from "lucide-react";
import logoCedit from "@/assets/LogoCedit.jpeg";
import logoUfps from "@/assets/logo_vertical.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card/30 pt-16 pb-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <a href="https://ufpso.edu.co/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
                <img src={logoUfps} alt="UFPSO" className="h-12 w-auto object-contain" />
              </a>
              <div className="w-px h-8 bg-border/50" />
              <a href="#inicio" className="hover:scale-105 transition-transform">
                <img src={logoCedit} alt="CEDIT" className="h-12 w-auto object-contain" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Centro de Desarrollo e Innovación Tecnológica de la UFPS Seccional Ocaña. 
              Transformando la región a través de la tecnología y el conocimiento.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/cedit.ufpso.edu.co" },
                { Icon: Instagram, href: "https://www.instagram.com/cedit_ufpso/" },
                { Icon: () => (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                ), href: "https://www.tiktok.com/@cedit19?_r=1&_t=ZS-95maByySkD9" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <social.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col gap-6">
            <h4 className="font-grotesk font-bold text-base uppercase tracking-wider">Explorar</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Sobre Nosotros", href: "#sobre" },
                { label: "Servicios Tech", href: "#servicios" },
                { label: "Programas", href: "#programas" },
                { label: "Galería de Proyectos", href: "#galeria" },
              ].map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-muted-foreground hover:text-primary text-sm transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-grotesk font-bold text-base uppercase tracking-wider">Recursos</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "UFPS Seccional Ocaña", href: "https://ufpso.edu.co" },
                { label: "Punto Vive Lab Ocaña", href: "#" },
                { label: "Trámites y Servicios", href: "#" },
                { label: "Preguntas Frecuentes", href: "#" },
                { label: "Políticas de Privacidad", href: "#" },
              ].map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center gap-1.5 w-fit"
                >
                  {link.label} <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-grotesk font-bold text-base uppercase tracking-wider">Contacto Directo</h4>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-2xl bg-muted/30 border border-border/50">
                <p className="text-xs text-muted-foreground mb-1 uppercase font-bold tracking-tighter">Soporte y Consultas</p>
                <a href="mailto:cedit@ufpso.edu.co" className="text-sm font-semibold hover:text-primary transition-colors">
                  cedit@ufpso.edu.co
                </a>
              </div>
              <div className="flex flex-col gap-1 px-1">
                <p className="text-xs text-muted-foreground">Ocaña, Norte de Santander</p>
                <p className="text-xs text-muted-foreground">Campus El Algodonal, Lab 70</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-xs font-medium">
            © {currentYear} CEDIT · Universidad Francisco de Paula Santander Seccional Ocaña
          </p>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground/60">
            <span>Tradición e Innovación</span>
            <div className="w-1 h-1 rounded-full bg-primary/40" />
            <span>Región del Catatumbo</span>
          </div>
        </div>
      </div>
      
      {/* Decorative stripe at very bottom */}
      <div className="h-1 institutional-stripe w-full absolute bottom-0" />
    </footer>
  );
}
