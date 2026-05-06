import ProjectCard from "./ProjectCard";

const projects = [
  // {
  //   id: 1,
  //   title: "Plateforme E-Commerce Sécurisée",
  //   description:
  //     "Application web full-stack avec authentification OAuth2, paiement Stripe et chiffrement des données sensibles.",
  //   tags: ["React", "Node.js", "Security", "Web"],
  //   image:
  //     "https://d2xsxph8kpxj0f.cloudfront.net/310519663606349216/epWo8NJ5RLjmrJQkvqcuhb/web-mobile-dev-RwqbveceZHmZWomdC6nGYy.webp",
  //   link: "/projects/ecommerce",
  // },
  {
    id: 2,
    title: "Application Mobile Spodoptera Detection",
    description:
      "Application Android pour analyser des images pour détecter la présence de Spodoptera frugiperda, un ravageur agricole.",
    tags: ["Flutter", "Mobile", "IA"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663606349216/epWo8NJ5RLjmrJQkvqcuhb/web-mobile-dev-RwqbveceZHmZWomdC6nGYy.webp",
    link: "https://play.google.com/store/apps/details?id=com.fpfservices.vermiscan&hl=fr",
  },
  // {
  //   id: 3,
  //   title: "Système de Gestion de Sécurité",
  //   description:
  //     "Plateforme de monitoring et audit de sécurité informatique avec détection d'anomalies en temps réel.",
  //   tags: ["Python", "Security", "Monitoring", "Backend"],
  //   image:
  //     "https://d2xsxph8kpxj0f.cloudfront.net/310519663606349216/epWo8NJ5RLjmrJQkvqcuhb/security-tech-visual-TE64Bq8cN6gegRVcqqxXq6.webp",
  //   link: "/projects/security-system",
  // },
  // {
  //   id: 4,
  //   title: "API RESTful Haute Performance",
  //   description:
  //     "Backend scalable avec caching distribué, rate limiting et documentation OpenAPI complète.",
  //   tags: ["Node.js", "API", "Performance", "DevOps"],
  //   image:
  //     "https://d2xsxph8kpxj0f.cloudfront.net/310519663606349216/epWo8NJ5RLjmrJQkvqcuhb/project-card-bg-ngWXks7RWU3WBC4szLmfNq.webp",
  //   link: "/projects/api-backend",
  // },
  // {
  //   id: 5,
  //   title: "Dashboard Analytics Temps Réel",
  //   description:
  //     "Interface de visualisation de données avec graphiques interactifs et mise à jour en direct via WebSockets.",
  //   tags: ["React", "D3.js", "WebSocket", "Frontend"],
  //   image:
  //     "https://d2xsxph8kpxj0f.cloudfront.net/310519663606349216/epWo8NJ5RLjmrJQkvqcuhb/web-mobile-dev-RwqbveceZHmZWomdC6nGYy.webp",
  //   link: "/projects/analytics-dashboard",
  // },
  // {
  //   id: 6,
  //   title: "Infrastructure Cloud Sécurisée",
  //   description:
  //     "Architecture multi-région avec load balancing, auto-scaling et compliance RGPD/ISO 27001.",
  //   tags: ["AWS", "Infrastructure", "Security", "DevOps"],
  //   image:
  //     "https://d2xsxph8kpxj0f.cloudfront.net/310519663606349216/epWo8NJ5RLjmrJQkvqcuhb/project-card-bg-ngWXks7RWU3WBC4szLmfNq.webp",
  //   link: "/projects/cloud-infrastructure",
  // },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent rounded-full"></div>
            <span className="text-accent font-mono text-sm md:text-base">
              Projets Sélectionnés
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-3xl">
            Réalisations en génie logiciel et sécurité
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16 md:mt-24">
          <a
            href="#"
            className="px-8 py-3 border border-accent text-accent rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors font-semibold"
          >
            Voir tous les projets
          </a>
        </div>
      </div>
    </section>
  );
}
