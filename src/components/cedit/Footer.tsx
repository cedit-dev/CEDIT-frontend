import { Zap } from "lucide-react";
import logoCedit from "@/assets/LogoCedit.jpeg";
import logoUfps from "@/assets/logo_vertical.png";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 bg-card/60">
      {/* Banda institucional inferior */}
      <div className="h-1 institutional-stripe w-full mb-10" />

      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img 
            src={logoUfps} 
            alt="UFPSO Logo" 
            className="h-14 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
          <div className="w-px h-6 bg-border mx-1" />
          <img 
            src={logoCedit} 
            alt="CEDIT Logo" 
            className="h-14 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#inicio" className="hover:text-primary transition-colors">Inicio</a>
          <a href="#sobre" className="hover:text-primary transition-colors">Nosotros</a>
          <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
          <a href="#programas" className="hover:text-primary transition-colors">Programas</a>
          <a href="#galeria" className="hover:text-primary transition-colors">Galería</a>
          <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
        </div>

        <p className="text-muted-foreground text-xs text-center">
          © 2025 CEDIT UFPSO · Ocaña, Norte de Santander
        </p>
      </div>
    </footer>
  );
}
