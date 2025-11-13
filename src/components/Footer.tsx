export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Rechtsanwalt Ulrich Weinland. Alle Rechte vorbehalten.</p>
        <p className="mt-2">
          Impressum · Datenschutz · AGB
        </p>
      </div>
    </footer>
  );
}
