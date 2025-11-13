import { Mail, Phone, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="mb-4 text-foreground">Kontakt</h2>
          <p className="text-lg text-muted-foreground">
            Der erste Schritt zur Lösung ist das Gespräch. 
            Nehmen Sie Kontakt auf – diskret, kompetent, konstruktiv.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Phone, title: "Telefon", content: "+49 (0) 123 456789", delay: "0" },
            { icon: Mail, title: "E-Mail", content: "kanzlei@weinland-recht.de", delay: "200" },
            { icon: MapPin, title: "Kanzlei", content: "Musterstraße 12\n12345 Musterstadt", delay: "400" }
          ].map((item, index) => (
            <div 
              key={index}
              className={`group text-center space-y-3 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <item.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
