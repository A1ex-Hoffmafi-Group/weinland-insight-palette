import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import trustImage from "@/assets/trust-image.png";
import futureImage from "@/assets/future-image.png";

export function Values() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Trust Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 -translate-x-10 blur-md'
            }`}
          >
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src={trustImage}
                alt="Vertrauen und Partnerschaft"
                className="w-full h-auto object-cover image-blend"
              />
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="text-foreground">Vertrauen als Fundament</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In Zeiten der Unsicherheit ist Vertrauen das wertvollste Gut. Als Insolvenzverwalter 
              trage ich die Verantwortung für Menschen und Unternehmen in ihrer schwierigsten Phase.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meine Arbeit basiert auf drei Prinzipien: <span className="text-primary font-semibold">Integrität</span>, 
              die keine Kompromisse kennt; <span className="text-primary font-semibold">Transparenz</span>, 
              die Klarheit schafft; und <span className="text-primary font-semibold">Engagement</span>, 
              das über das Erwartete hinausgeht.
            </p>
          </div>
        </div>

        {/* Future Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-foreground">Perspektiven schaffen</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Jede Insolvenz markiert nicht nur ein Ende, sondern auch einen Neuanfang. 
              Mein Ziel ist es, aus schwierigen Situationen Chancen zu entwickeln – 
              Chancen für einen wirtschaftlichen Neustart.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mit Weitblick und Erfahrung arbeite ich daran, Werte zu erhalten, 
              Arbeitsplätze zu schützen und faire Lösungen für alle Beteiligten zu finden. 
              Denn am Ende des Tunnels wartet immer Licht.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 translate-x-10 blur-md'
            }`}
          >
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src={futureImage}
                alt="Neue Perspektiven"
                className="w-full h-auto object-cover image-blend"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
