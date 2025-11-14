import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import teamImage from "@/assets/team-image.png";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Nach Jahren der finanziellen Belastung hat mir Herr Weinland den Weg in eine schuldenfreie Zukunft geebnet. Seine einfühlsame und professionelle Beratung hat mir neue Hoffnung gegeben.",
    author: "Michael K.",
    role: "Privatinsolvenz abgeschlossen 2023",
  },
  {
    text: "Herr Weinland hat mir in meiner dunkelsten Stunde zur Seite gestanden. Er hat mir nicht nur rechtlich geholfen, sondern mir auch wieder Mut gemacht. Heute bin ich schuldenfrei und kann neu anfangen.",
    author: "Sandra T.",
    role: "Privatinsolvenz abgeschlossen 2022",
  },
  {
    text: "Die Privatinsolvenz war meine letzte Hoffnung. Herr Weinland hat den gesamten Prozess transparent begleitet und mir jeden Schritt erklärt. Endlich kann ich wieder durchatmen.",
    author: "Thomas M.",
    role: "Privatinsolvenz laufend",
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
          <h2 className="mb-4 text-foreground">Stimmen aus der Privatinsolvenz</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Echte Menschen, echte Neuanfänge – Vertrauen, das Zukunft schafft
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
