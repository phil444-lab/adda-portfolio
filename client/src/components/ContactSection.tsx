import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link with form data
    const subject = encodeURIComponent(`Message de ${formState.name}`);
    const body = encodeURIComponent(
      `Nom: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    const mailtoLink = `mailto:philippadda9@gmail.com?subject=${subject}&body=${body}`;
    
    // Open user's email client
    window.location.href = mailtoLink;
    
    // Show confirmation
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-1 h-8 bg-accent rounded-full"></div>
              <span className="text-accent font-mono text-sm md:text-base">
                Contactez-moi
              </span>
              <div className="w-1 h-8 bg-accent rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Parlons de votre projet
            </h2>
            <p className="text-lg text-muted-foreground">
              Que vous ayez une idée, un projet en cours ou une question, je serais ravi de vous aider.
            </p>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Décrivez votre projet ou votre question..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-accent text-accent-foreground rounded-sm hover:opacity-90 transition-opacity font-semibold"
              >
                {submitted ? "Message envoyé ✓" : "Envoyer le message"}
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:philippadda9@gmail.com"
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      philippadda9@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/philipp-neri-adda-502921283/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
                    >
                      Profil LinkedIn
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Github className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
                    <a
                      href="https://github.com/phil444-lab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
                    >
                      Profil Github
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 bg-background border border-accent/30 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-accent">Disponible</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Je suis actuellement disponible pour des projets freelance et des opportunités de collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
