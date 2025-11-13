import { Scale, Users, TrendingUp, FileCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const expertiseAreas = [
  {
    icon: Scale,
    title: "Regelinsolvenzverfahren",
    description: "Strukturierte Abwicklung mit Blick auf maximale Gläubigerbefriedigung"
  },
  {
    icon: Users,
    title: "Verbraucherinsolvenz",
    description: "Begleitung zum wirtschaftlichen Neustart mit Würde und Weitsicht"
  },
  {
    icon: TrendingUp,
    title: "Sanierung & Fortführung",
    description: "Erhalt von Arbeitsplätzen und Unternehmenswert wo möglich"
  },
  {
    icon: FileCheck,
    title: "Forderungsprüfung",
    description: "Gewissenhafte Prüfung und gerechte Verteilung verfügbarer Mittel"
  }
];

export function Expertise() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4 text-foreground">Leistungsspektrum</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Von der ersten Analyse bis zum erfolgreichen Abschluss – 
            kompetente Begleitung durch alle Phasen der Insolvenz
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-lg border border-border bg-card hover:shadow-xl hover:border-primary/50 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <area.icon className="h-10 w-10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="mb-3 text-foreground transition-colors duration-300 group-hover:text-primary">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
