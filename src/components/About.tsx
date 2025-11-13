import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 bg-card">
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-center mb-12 text-foreground">Über mich</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            In der Welt der Insolvenz ist Vertrauen die Währung, die zählt. Mit jahrelanger Erfahrung 
            als Insolvenzverwalter stehe ich für Klarheit in komplexen Situationen, für Struktur im Chaos 
            und für Lösungen, die Substanz bewahren.
          </p>
          <p className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            Krisen kommen wie Gewitter – unerwartet und erschütternd. Doch aus jeder Krise erwächst auch 
            eine Chance für einen Neuanfang. Meine Aufgabe ist es, diese Chancen zu erkennen, zu bewerten 
            und zu nutzen – für Gläubiger, Schuldner und alle Beteiligten.
          </p>
          <p className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            Präzision, Professionalität und Perspektive – das sind die drei Säulen meiner Arbeit. 
            Denn Insolvenzverwaltung ist mehr als nur Verwaltung von Vermögen: Es ist die Kunst, 
            faire Lösungen für alle zu schaffen.
          </p>
        </div>
      </div>
    </section>
  );
}
