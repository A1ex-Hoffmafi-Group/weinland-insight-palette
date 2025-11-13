import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <About />
      <Expertise />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
