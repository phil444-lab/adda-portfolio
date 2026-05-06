import { Download } from "lucide-react";

const publications = [
  {
    id: 1,
    title: "Conception et réalisation d'un système de gestion des transactions comptables et financières basé sur Hyperledger Fabric pour les Trésors Publics.",
    conference: "Mémoire de fin d'études",
    date: "Février 2026",
    description:
      "Conception et développement d'une solution blockchain permissionnée avec Hyperledger Fabric pour la gestion sécurisée et traçable des transactions comptables et financières au sein du Trésor Public.",
    link: "/Memoire_ADDA_Philipp.pdf",
  },
  // {
  //   id: 2,
  //   title: "Sécurité des Applications Web Modernes : Bonnes Pratiques 2024",
  //   conference: "DevSecOps Summit Europe",
  //   date: "Novembre 2024",
  //   description:
  //     "Présentation sur les vulnérabilités courantes et les stratégies de mitigation pour les applications web contemporaines.",
  //   link: "#",
  // },
  // {
  //   id: 3,
  //   title: "Architecture Microservices Résiliente et Sécurisée",
  //   conference: "CloudNative Conference",
  //   date: "Septembre 2024",
  //   description:
  //     "Étude de cas sur l'implémentation d'une architecture microservices avec orchestration Kubernetes et policies de sécurité.",
  //   link: "#",
  // },
  // {
  //   id: 4,
  //   title: "Chiffrement End-to-End pour Applications Mobiles",
  //   conference: "Mobile Security Workshop",
  //   date: "Juillet 2024",
  //   description:
  //     "Tutoriel technique sur l'implémentation du chiffrement E2E dans les applications mobiles cross-platform.",
  //   link: "#",
  // },
  // {
  //   id: 5,
  //   title: "Détection d'Anomalies avec Machine Learning",
  //   conference: "AI & Security Forum",
  //   date: "Mai 2024",
  //   description:
  //     "Recherche appliquée sur l'utilisation du machine learning pour détecter les comportements anormaux en sécurité informatique.",
  //   link: "#",
  // },
];

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent rounded-full"></div>
            <span className="text-accent font-mono text-sm md:text-base">
              Contributions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground max-w-3xl">
            Publications et Présentations
          </h2>
        </div>

        {/* Publications List */}
        <div className="space-y-6 md:space-y-8">
          {publications.map((pub) => (
            <article
              key={pub.id}
              className="group p-6 md:p-8 border border-border rounded-sm hover:border-accent transition-all duration-300 bg-background/50 hover:bg-background animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    {pub.date && (
                      <span className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-sm">
                        {pub.date}
                      </span>
                    )}
                    {pub.conference && (
                      <span className="text-xs font-mono text-muted-foreground">
                        {pub.conference}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {pub.description}
                  </p>
                </div>

                {/* Link Button */}
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 text-accent border border-accent rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors whitespace-nowrap font-semibold text-sm"
                >
                  Télécharger
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Publications */}
        <div className="flex justify-center mt-16 md:mt-24">
          <a
            href="#"
            className="px-8 py-3 border border-accent text-accent rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors font-semibold"
          >
            Voir toutes les publications
          </a>
        </div>
      </div>
    </section>
  );
}
