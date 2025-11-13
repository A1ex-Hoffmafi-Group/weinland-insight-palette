export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-foreground">
          Ulrich Weinland
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light">
          Rechtsanwalt für Insolvenzverwaltung
        </p>
        <div className="h-px w-24 mx-auto bg-primary"></div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Wenn Stürme toben und Wellen schlagen – ich navigiere Sie sicher durch die Untiefen der Insolvenz.
        </p>
      </div>
    </section>
  );
}
