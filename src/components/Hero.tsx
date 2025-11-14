import heroBg from "@/assets/hero-bg.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90 dark:bg-background/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-foreground animate-fade-in-up">
          Ulrich Weinland
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Rechtsanwalt für Insolvenzverwaltung
        </p>
        <div className="h-px w-24 mx-auto bg-primary animate-scale-in" style={{ animationDelay: '0.4s' }}></div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Wenn Stürme toben und Wellen schlagen – ich navigiere Sie sicher durch die Untiefen der Insolvenz.
        </p>
      </div>
    </section>
  );
}
