import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";

export interface NewsItem {
  _id: string;
  title: string;
  date: string;
  excerpt: string;
  content?: any;
  image?: any;
}

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  // Fallback genérico si no han subido imagen en Sanity
  const imageUrl = news.image 
    ? urlFor(news.image).width(800).height(600).url() 
    : "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80";

  return (
    <div className="card-glass group rounded-[2rem] overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      {/* Image Container */}
      <Link to={`/noticias/${news._id}`} className="relative h-56 w-full overflow-hidden block cursor-pointer">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
        <img 
          src={imageUrl} 
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Date badge */}
        <div className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/10 shadow-sm">
          <Calendar className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-semibold text-foreground">{news.date}</span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="font-grotesk text-xl md:text-2xl font-bold mb-3 text-foreground line-clamp-2 leading-tight group-hover:text-primary transition-colors">
          {news.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
          {news.excerpt}
        </p>

        {/* Read More button */}
        <Button 
          variant="ghost" 
          className="self-start p-0 h-auto font-bold text-primary hover:text-primary/80 hover:bg-transparent group/btn flex items-center gap-2 transition-colors"
          asChild
        >
          <Link to={`/noticias/${news._id}`}>
            Leer noticia completa
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
