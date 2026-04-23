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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "glass-morphism border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-1"
          : "bg-transparent py-4"
        }`}
    >
      {/* Active Stripe on top */}
      <div className={`h-1 institutional-stripe w-full absolute top-0 left-0 transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`} />

      <div className="container flex items-center justify-between h-16">
        {/* Logo institutional */}
        <div className="flex items-center gap-2">
          <a 
            href="https://ufpso.edu.co/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <img 
              src={logoUfps} 
              alt="UFPSO Logo" 
              className="h-11 md:h-12 w-auto object-contain"
            />
          </a>
          <div className="w-px h-8 bg-border/50 mx-1 hidden sm:block" />
          <a 
            href="#inicio" 
            className="relative transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <img 
              src={logoCedit} 
              alt="CEDIT Logo" 
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 bg-muted/30 p-1 rounded-full border border-border/20 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-muted-foreground hover:text-primary text-sm font-semibold transition-all duration-200 rounded-full hover:bg-white/80 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary/40 blur-[2px] transition-all duration-300 group-hover:w-2/3" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="default"
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-bold px-6 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
            asChild
          >
            <a href="#contacto">Contáctanos</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-full hover:bg-muted/50 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 glass-morphism border-b border-border shadow-xl transition-all duration-300 ease-in-out ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-primary hover:bg-primary/5 px-4 py-3 text-base font-semibold rounded-xl transition-all border-b border-border/20 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <Button
            className="mt-4 w-full bg-primary text-primary-foreground font-bold rounded-xl h-12"
            onClick={() => setOpen(false)}
            asChild
          >
            <a href="#contacto">Contáctanos</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
