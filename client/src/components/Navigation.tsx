import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string, onDone?: () => void) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
  onDone?.();
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">AN</span>
          </div>
          <span className="hidden sm:inline font-bold text-lg text-foreground group-hover:text-accent transition-colors">
            ADDA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="text-foreground hover:text-accent transition-colors">
            Projets
          </a>
          <a href="#publications" onClick={(e) => scrollToSection(e, "publications")} className="text-foreground hover:text-accent transition-colors">
            Publications
          </a>
          <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="text-foreground hover:text-accent transition-colors">
            À propos
          </a>
          <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="px-6 py-2 bg-accent text-accent-foreground rounded-sm hover:opacity-90 transition-opacity font-medium">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-secondary rounded-sm transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects", () => setIsOpen(false))}
              className="text-foreground hover:text-accent transition-colors"
            >
              Projets
            </a>
            <a
              href="#publications"
              onClick={(e) => scrollToSection(e, "publications", () => setIsOpen(false))}
              className="text-foreground hover:text-accent transition-colors"
            >
              Publications
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about", () => setIsOpen(false))}
              className="text-foreground hover:text-accent transition-colors"
            >
              À propos
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact", () => setIsOpen(false))}
              className="px-6 py-2 bg-accent text-accent-foreground rounded-sm hover:opacity-90 transition-opacity font-medium inline-block"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
