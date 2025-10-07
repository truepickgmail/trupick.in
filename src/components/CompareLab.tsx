import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CompareLab = () => {
  return (
    <section className="py-12 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(234_89%_20%/0.05),transparent_70%)]" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
            Ready to Compare?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Compare Lab
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Experience the power of side-by-side product comparison. Make smarter decisions in seconds, not hours.
          </p>
          
          <Button size="lg" className="text-lg group bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
            Launch Compare Lab
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CompareLab;
