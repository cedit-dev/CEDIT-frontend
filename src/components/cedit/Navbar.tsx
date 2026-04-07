import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoCedit from "@/assets/LogoCedit.jpeg";
import logoUfps from "@/assets/logo_vertical.png";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre CEDIT", href: "#sobre" },
  { label: "Servicios", href: "#servicios" },
  { label: "Programas", href: "#programas" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm border-b border-border/50"
        }`}
    >
      {/* Banda institucional */}
      <div className="h-1 institutional-stripe w-full" />

      <div className="container flex items-center justify-between h-14">
        {/* Logo institucional */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <img 
            src={logoUfps} 
            alt="UFPSO Logo" 
            className="h-12 w-auto object-contain transition-transform duration-300"
          />
          <div className="w-px h-8 bg-border mx-1 hidden sm:block" />
          <img 
            src={logoCedit} 
            alt="CEDIT Logo" 
            className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground font-medium"
          >
            Contáctanos
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border px-4 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-primary py-2 text-sm font-medium border-b border-border/50 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
