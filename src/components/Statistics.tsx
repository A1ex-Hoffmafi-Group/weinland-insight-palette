import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Users, Briefcase, Clock } from "lucide-react";

const stats = [
  {
    icon: Award,
    number: "15+",
    label: "Jahre Erfahrung",
  },
  {
    icon: Briefcase,
    number: "500+",
    label: "Erfolgreich abgeschlossene Verfahren",
  },
  {
    icon: Users,
    number: "1000+",
    label: "Beratene Mandanten",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Erreichbarkeit im Notfall",
  },
];

export function Statistics() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4 text-foreground">Zahlen, die sprechen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vertrauen wird durch Erfahrung geschaffen – Exzellenz durch Hingabe bewiesen
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center space-y-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
