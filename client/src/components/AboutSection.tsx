import { CheckCircle2 } from "lucide-react";

const skills = [
  { category: "Frontend", items: ["React TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Laravel", "MySQL", "MongoDB"] },
  { category: "Mobile", items: ["Flutter", "Firebase"] },
  { category: "DevOps & Security", items: ["Docker", "Kubernetes"] },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-accent rounded-full"></div>
                <span className="text-accent font-mono text-sm md:text-base">
                  À propos
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Ingénieur Passionné par l'Innovation
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Je conçois et développe des solutions logicielles robustes, sécurisées et scalables. Ma spécialisation couvre le génie logiciel (Web & Mobile) et la sécurité des systèmes d'information.
              </p>
              <p>
                Je suis convaincu que la sécurité doit être intégrée dès les premières étapes du développement. Chaque projet que j'entreprends suit les meilleures pratiques de sécurité et les standards de l'industrie.
              </p>
              <p>
                Au-delà du code, j'aime partager mes connaissances à travers des publications, des conférences et du mentorat. Je crois en l'importance de la communauté technique et de l'apprentissage continu.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-sm hover:opacity-90 transition-opacity font-semibold"
              >
                Discutons de votre projet
              </a>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-accent rounded-full"></div>
              <span className="text-accent font-mono text-sm md:text-base">
                Compétences
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="space-y-4">
                  <h3 className="text-lg font-bold text-foreground">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-3">
                    {skillGroup.items.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
