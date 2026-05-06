import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663606349216/epWo8NJ5RLjmrJQkvqcuhb/abstract-pattern-dark-3byMEw4JPm2LzF2SjifigH.webp"
          alt="pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12 md:mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">AN</span>
              </div>
              <span className="font-bold text-lg text-foreground">ADDA</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ingénieur informatique spécialisé en génie logiciel et sécurité des systèmes d'information.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#projects" className="text-muted-foreground hover:text-accent transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="/#publications" className="text-muted-foreground hover:text-accent transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="/#about" className="text-muted-foreground hover:text-accent transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@addaphilipp.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  philippadda9@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/philipp-neri-adda-502921283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/phil44-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Philipp Neri ADDA. Tous droits réservés.
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-sm hover:border-accent hover:text-accent transition-colors text-sm font-semibold"
          >
            Retour en haut
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
