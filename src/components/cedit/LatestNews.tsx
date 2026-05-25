import { ArrowRight, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NewsCard from "./NewsCard";
import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanity";

export default function LatestNews() {
  const { data: latestNews = [], isLoading } = useQuery({
    queryKey: ['latestNews'],
    queryFn: async () => {
      return await sanityClient.fetch(`*[_type == "news"] | order(date desc)[0...3] {
        _id,
        title,
        date,
        excerpt,
        image
      }`);
    }
  });

  return (
    <section id="noticias" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-2xl mb-6">
              <Newspaper className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 tracking-tight">
              Últimas <span className="text-gradient">Noticias</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Mantente al día con los últimos eventos, talleres y proyectos de investigación de nuestro centro de desarrollo e innovación.
            </p>
          </div>
          
          <Button 
            className="bg-primary text-primary-foreground font-bold rounded-2xl h-14 px-8 glow-primary transition-all hover:scale-105 active:scale-95 group hidden md:flex"
            asChild
          >
            <Link to="/noticias">
              Ver todas las noticias
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {isLoading ? (
            <div className="col-span-full text-center py-10 text-muted-foreground">Cargando noticias...</div>
          ) : (
            latestNews.map((news: any) => (
              <NewsCard key={news._id} news={news} />
            ))
          )}
        </div>

        <Button 
          className="bg-primary text-primary-foreground font-bold rounded-2xl h-14 px-8 glow-primary transition-all hover:scale-105 active:scale-95 group flex md:hidden mt-10 w-full justify-center"
          asChild
        >
          <Link to="/noticias">
            Ver todas las noticias
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
