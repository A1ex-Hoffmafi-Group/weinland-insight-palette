import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Process } from "@/components/Process";
import { Values } from "@/components/Values";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <About />
      <Expertise />
      <Process />
      <Values />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
