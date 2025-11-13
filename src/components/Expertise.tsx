import { Scale, Users, TrendingUp, FileCheck } from "lucide-react";

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
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
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
              className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow duration-300"
            >
              <area.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="mb-3 text-foreground">{area.title}</h3>
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
