import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import processImage from "@/assets/process-image.png";
import { FileSearch, Scale, TrendingUp, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Analyse & Prüfung",
    description: "Sorgfältige Bewertung der Ausgangslage und aller relevanten Unterlagen",
  },
  {
    icon: Scale,
    title: "Strategieentwicklung",
    description: "Maßgeschneiderte Lösungsansätze für optimale Ergebnisse",
  },
  {
    icon: TrendingUp,
    title: "Umsetzung",
    description: "Professionelle Durchführung mit transparenter Kommunikation",
  },
  {
    icon: CheckCircle,
    title: "Erfolgreicher Abschluss",
    description: "Maximierung der Gläubigerbefriedigung und fairer Ausgleich",
  },
];

export function Process() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4 text-foreground">Der Weg zur Lösung</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strukturiert, transparent, erfolgreich – Ihr Weg durch die Insolvenz
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-10 blur-md'
            }`}
          >
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src={processImage}
                alt="Professioneller Prozess"
                className="w-full h-auto object-cover image-blend"
              />
            </div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
