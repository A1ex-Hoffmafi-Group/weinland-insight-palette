import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-foreground">Kontakt</h2>
          <p className="text-lg text-muted-foreground">
            Der erste Schritt zur Lösung ist das Gespräch. 
            Nehmen Sie Kontakt auf – diskret, kompetent, konstruktiv.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Telefon</h3>
            <p className="text-muted-foreground">+49 (0) 123 456789</p>
          </div>

          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">E-Mail</h3>
            <p className="text-muted-foreground">kanzlei@weinland-recht.de</p>
          </div>

          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Kanzlei</h3>
            <p className="text-muted-foreground">Musterstraße 12<br />12345 Musterstadt</p>
          </div>
        </div>
      </div>
    </section>
  );
}
