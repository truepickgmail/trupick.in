import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const handleLearnMore = () => {
    const thesisSection = document.getElementById('our-thesis');
    if (thesisSection) {
      thesisSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(234_89%_25%/0.3),transparent_50%)]" />
      
      <div className="container relative z-10 px-4 py-16 mx-auto text-center">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Pick Smarter.<br />Shop Confident.
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Compare products instantly. Get  AI-powered smart recommendations. Shop smarter, faster, and confidently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg group">
              Start Comparing
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/30" onClick={handleLearnMore}>
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
