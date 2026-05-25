import { useQuery } from "@tanstack/react-query";
import { InstagramEmbed, FacebookEmbed, YouTubeEmbed, TikTokEmbed } from 'react-social-media-embed';
import { sanityClient } from "@/lib/sanity";
import { PlayCircle, Instagram, Facebook, Youtube, Video, ExternalLink } from "lucide-react";

interface SocialVideo {
  _id: string;
  title: string;
  platform: 'instagram' | 'facebook' | 'youtube' | 'tiktok';
  url: string;
}

export default function SocialVideos() {
  const { data: videos, isLoading } = useQuery({
    queryKey: ['socialVideos'],
    queryFn: async () => {
      return await sanityClient.fetch(`*[_type == "socialVideo"] | order(publishedAt desc)[0...4]`);
    }
  });

  if (isLoading) {
    return (
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold font-grotesk mb-4 flex items-center gap-3">
                <PlayCircle className="w-8 h-8 text-primary animate-pulse" />
                Videos Destacados
              </h2>
              <p className="text-lg text-muted-foreground">
                Mantente al día con nuestros últimos contenidos en redes sociales.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="w-full max-w-[328px] flex flex-col gap-4"
              >
                <div className="flex items-center gap-2 px-1">
                  <div className="w-7 h-7 rounded-lg bg-foreground/10 animate-pulse" />
                  <div className="h-3.5 w-24 bg-foreground/10 rounded animate-pulse" />
                </div>
                <div className="h-6 w-3/4 bg-foreground/10 rounded animate-pulse" />
                <div className="w-full aspect-[9/16] bg-foreground/5 rounded-[20px] border border-border/30 animate-pulse flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-muted-foreground/30 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!videos || videos.length === 0) return null;

  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-grotesk mb-4 flex items-center gap-3">
              <PlayCircle className="w-8 h-8 text-primary" />
              Videos Destacados
            </h2>
            <p className="text-lg text-muted-foreground">
              Mantente al día con nuestros últimos contenidos en redes sociales.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {videos.map((video: SocialVideo) => (
            <div 
              key={video._id} 
              className="w-full max-w-[328px] flex flex-col gap-4 group hover:-translate-y-1.5 transition-all duration-300 relative"
            >
              {/* Platform and Action Header */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg text-white ${
                    video.platform === 'instagram' ? 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' :
                    video.platform === 'youtube' ? 'bg-[#ff0000]' :
                    video.platform === 'facebook' ? 'bg-[#1877f2]' :
                    'bg-[#010101]'
                  }`}>
                    {video.platform === 'instagram' && <Instagram className="w-3.5 h-3.5" />}
                    {video.platform === 'facebook' && <Facebook className="w-3.5 h-3.5" />}
                    {video.platform === 'youtube' && <Youtube className="w-3.5 h-3.5" />}
                    {video.platform === 'tiktok' && <Video className="w-3.5 h-3.5" />}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/75">
                    {video.platform === 'instagram' ? 'Instagram Reel' :
                     video.platform === 'facebook' ? 'Facebook Video' :
                     video.platform === 'youtube' ? 'YouTube Short' :
                     'TikTok Video'}
                  </span>
                </div>
                
                <a 
                  href={video.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-1 rounded-md hover:bg-foreground/5"
                  title="Ver en plataforma original"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Video Title */}
              <h3 className="font-grotesk font-bold text-lg line-clamp-2 text-foreground group-hover:text-primary transition-colors leading-tight px-1 min-h-[2.5rem] flex items-center">
                {video.title}
              </h3>

              {/* Embed Wrapper with native size and no double margins */}
              <div className="w-full flex justify-center overflow-hidden rounded-[20px] shadow-sm group-hover:shadow-md transition-shadow">
                {video.platform === 'instagram' && <InstagramEmbed url={video.url} width="100%" />}
                {video.platform === 'facebook' && <FacebookEmbed url={video.url} width="100%" />}
                {video.platform === 'youtube' && <YouTubeEmbed url={video.url} width="100%" />}
                {video.platform === 'tiktok' && <TikTokEmbed url={video.url} width="100%" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
