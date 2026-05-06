import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen md:h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663606349216/epWo8NJ5RLjmrJQkvqcuhb/hero-tech-dark-BE8dTSnhMsu5qAmx9MkTTE.webp"
          alt="Technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col gap-6 md:gap-8 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
        {/* Accent Line */}
        <div className="flex items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
          <div className="w-1 h-12 bg-accent rounded-full"></div>
          <span className="text-accent font-mono text-sm md:text-base">
            Ingénieur Informatique & Télécommunications
          </span>
        </div>

        {/* Main Heading */}
        <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Philipp Neri
            <br />
            <span className="text-accent">ADDA</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            Spécialisé en génie logiciel (Web & Mobile) et sécurité des systèmes d'information. Créateur de solutions numériques innovantes et robustes.
          </p>
        </div>

        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
          <Link href="/#projects" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-sm hover:opacity-90 transition-opacity font-semibold">
            Voir mes projets
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-accent text-accent rounded-sm hover:bg-accent/10 transition-colors font-semibold">
            Me contacter
          </Link>
        </div> */}

        {/* Scroll Indicator
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground">Défiler</span>
          <svg
            className="w-5 h-5 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div> */}
      </div>
    </section>
  );
}
