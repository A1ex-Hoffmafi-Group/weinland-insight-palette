import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import teamImage from "@/assets/team-image.jpg";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Herr Weinland hat uns durch die schwierigste Zeit unseres Unternehmens geführt. Seine Expertise und sein menschliches Verständnis waren unbezahlbar.",
    author: "Mittelständisches Unternehmen",
    role: "Geschäftsführung",
  },
  {
    text: "Professionell, transparent und lösungsorientiert – so kann ich die Zusammenarbeit beschreiben. Dank seiner Hilfe haben wir einen Neustart geschafft.",
    author: "Familienunternehmen",
    role: "Inhaber",
  },
  {
    text: "In einer Phase voller Unsicherheit war es beruhigend, einen so kompetenten Anwalt an unserer Seite zu haben. Klare Kommunikation und faire Lösungen.",
    author: "Gläubigerversammlung",
    role: "Vertretung",
  },
];

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${teamImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/95 dark:bg-background/97"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4 text-foreground">Stimmen unserer Mandanten</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Erfolg misst sich nicht nur in Zahlen – sondern in Vertrauen und Zufriedenheit
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
