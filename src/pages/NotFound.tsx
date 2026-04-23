import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        <div className="card-glass rounded-[2.5rem] p-12 lg:p-16 max-w-lg mx-auto">
          <h1 className="font-grotesk text-8xl md:text-9xl font-black text-gradient drop-shadow-sm mb-4">404</h1>
          <h2 className="font-grotesk text-2xl md:text-3xl font-bold mb-6 text-foreground tracking-tight">Página no encontrada</h2>
          
          <div className="w-12 h-1 bg-accent/30 mx-auto rounded-full mb-8" />
          
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10 max-w-xs mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida a otra ubicación.
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground font-bold rounded-2xl h-14 px-10 glow-primary transition-all hover:scale-105 active:scale-95 group"
            asChild
          >
            <a href="/">
              <MoveLeft className="w-5 h-5 mr-3 transition-transform group-hover:-translate-x-1" />
              Volver al inicio
            </a>
          </Button>
        </div>
        
        <p className="mt-8 text-xs text-muted-foreground font-medium uppercase tracking-[0.2em] opacity-50">
          CEDIT · Innovación Tecnológica
        </p>
      </div>
    </div>
  );
};

export default NotFound;
