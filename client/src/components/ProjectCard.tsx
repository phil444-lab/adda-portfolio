import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-80 md:h-96 rounded-sm overflow-hidden border border-border hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-accent/20 animate-in fade-in slide-in-from-bottom-4 duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>

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
              className={`text-muted-foreground text-sm md:text-base transition-all duration-300 ${
                isHovered
                  ? "opacity-100 max-h-20 translate-y-0"
                  : "opacity-0 max-h-0 -translate-y-2"
              }`}
            >
              {description}
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
