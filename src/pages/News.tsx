import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Newspaper } from "lucide-react";
import Navbar from "@/components/cedit/Navbar";
import Footer from "@/components/cedit/Footer";
import NewsCard from "@/components/cedit/NewsCard";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanity";

const News = () => {
  const { data: newsData = [], isLoading } = useQuery({
    queryKey: ['allNews'],
    queryFn: async () => {
      return await sanityClient.fetch(`*[_type == "news"] | order(date desc) {
        _id,
        title,
        date,
        excerpt,
        image
      }`);
    }
  });

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-32 pb-16 relative overflow-hidden bg-muted/30">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container relative z-10">
          <Button variant="ghost" className="mb-6 pl-0 hover:bg-transparent hover:text-primary group transition-colors" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Volver al inicio
            </Link>
          </Button>

          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-2xl mb-6">
            <Newspaper className="w-6 h-6 text-primary" />
          </div>
          
          <h1 className="font-grotesk text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 tracking-tight">
            Portal de <span className="text-gradient">Noticias</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
            Explora todos nuestros artículos, eventos y actualizaciones del Centro de Desarrollo e Innovación Tecnológica (CEDIT).
          </p>
        </div>
      </div>

      {/* News Grid */}
      <section className="py-16 md:py-24 flex-grow relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {isLoading ? (
              <div className="col-span-full text-center py-20 text-muted-foreground text-xl">Cargando noticias...</div>
            ) : (
              newsData.map((news: any) => (
                <NewsCard key={news._id} news={news} />
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
