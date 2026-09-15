import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useParallaxScale } from "@/hooks/useParallax";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  fit?: "cover" | "contain";
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  fit = "cover",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useParallaxScale({ start: "top 90%", end: "top 50%" });

  return (
    <div
      ref={cardRef}
      className="group relative h-80 md:h-96 rounded-sm overflow-hidden border border-border hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-accent/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image (cover) ou Icône du projet (contain, centrée) */}
      {fit === "contain" ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/10 via-background/60 to-background">
          <img
            src={image}
            alt={title}
            className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-2xl shadow-lg shadow-accent/20 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>

      {/* Couche de flou au survol : améliore la lisibilité des textes */}
      <div
        className={`absolute inset-0 backdrop-blur-md bg-background/20 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
        {/* Top Section - Initially Hidden, Shows on Hover */}
        <div
          className={`transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-accent/20 text-accent text-xs font-mono rounded-sm border border-accent/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {title}
            </h3>
            <p
              className={`grid transition-all duration-300 ${
                isHovered
                  ? "grid-rows-[1fr] opacity-100 translate-y-0"
                  : "grid-rows-[0fr] opacity-0 -translate-y-2"
              }`}
            >
              <span className="min-h-0 overflow-hidden text-muted-foreground text-sm md:text-base">
                {description}
              </span>
            </p>
          </div>

          {/* Link Button */}
          {link && (
            <a
              href={link}
              className={`inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-all duration-300 ${
                isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              <span className="font-semibold text-sm">Voir le projet</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
