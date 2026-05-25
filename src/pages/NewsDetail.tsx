import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Calendar } from "lucide-react";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/cedit/Navbar";
import Footer from "@/components/cedit/Footer";
import { Button } from "@/components/ui/button";
import { sanityClient, urlFor } from "@/lib/sanity";

const NewsDetail = () => {
  const { id } = useParams();

  const { data: news, isLoading } = useQuery({
    queryKey: ['newsDetail', id],
    queryFn: async () => {
      const result = await sanityClient.fetch(`*[_type == "news" && _id == $id][0] {
        _id,
        title,
        date,
        excerpt,
        content,
        image
      }`, { id });
      return result;
    },
    enabled: !!id,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl text-muted-foreground">Cargando noticia...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center gap-6">
          <h2 className="text-3xl font-bold">Noticia no encontrada</h2>
          <Button asChild>
            <Link to="/noticias">Volver a noticias</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const imageUrl = news.image 
    ? urlFor(news.image).width(1920).format('webp').quality(100).url() 
    : "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1920&q=100";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container max-w-4xl">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary group transition-colors" asChild>
            <Link to="/noticias">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Volver a noticias
            </Link>
          </Button>

          <article>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary mb-6">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-semibold">{news.date}</span>
              </div>
              <h1 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                {news.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {news.excerpt}
              </p>
            </div>

            <div className="rounded-[2rem] overflow-hidden mb-12 shadow-xl">
              <img 
                src={imageUrl} 
                alt={news.title}
                className="w-full h-auto animate-in fade-in duration-700"
                fetchpriority="high"
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-grotesk prose-headings:font-bold prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80">
              {news.content ? (
                <PortableText value={news.content} />
              ) : (
                <p>No hay contenido adicional para esta noticia.</p>
              )}
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetail;
