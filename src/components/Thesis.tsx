import { ChevronDown } from "lucide-react";

const Thesis = () => {
  const phases = [
    { 
      phase: "Phase 1", 
      desc: "Compare Personal Care, Beauty, and Fashion — all in one platform for smarter choices.",
      detailedDesc: "Discover smarter shopping with TruPick — the all-in-one platform to compare Personal Care, Beauty, and Fashion products effortlessly. Explore trusted recommendations, personalized insights, and make confident buying decisions with TruPick's intelligent comparison experience."
    },
    { 
      phase: "Phase 2", 
      desc: "AI-powered product recommendations based on your search history and preferences.",
      detailedDesc: "Get smarter product recommendations with TruPick — your AI-powered guide to personalized beauty, skincare, and fashion choices. TruPick analyzes your search history and preferences to deliver tailored suggestions that help you shop faster, smarter, and more confidently."
    },
    { 
      phase: "Phase 2.5", 
      desc: "Smart face scan. Personalized beauty recommendations.",
      detailedDesc: "Experience the future of beauty with TruPick. Our smart face scan technology delivers personalized beauty and skincare recommendations tailored to your unique skin tone and needs. Discover products that truly fit you — faster, smarter, and effortlessly with TruPick."
    },
    { 
      phase: "Phase 3", 
      desc: "Book personalized 1:1 consultations with beauty and product experts.",
      detailedDesc: "Book personalized 1:1 beauty consultations with expert professionals on TruPick. Get trusted advice from product specialists who understand your needs, skin, and style. Discover the perfect skincare, makeup, and fashion choices through expert-guided recommendations."
    },
    { 
      phase: "Phase 4", 
      desc: "LLM-powered Q&A with clear, trusted answers.",
      detailedDesc: "Get instant, reliable answers with TruPick's LLM-powered Q&A. Ask any question and receive clear, trusted, and well-cited responses designed to guide your product decisions. TruPick helps you shop smarter with verified insights powered by advanced AI understanding."
    }
  ];

  return (
    <section id="our-thesis" className="py-12 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Thesis</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Online shopping should be clear, fast, and trustworthy. We’re building a platform that helps you compare, discover, and decide — effortlessly.
          </p>
          
          <div className="grid gap-5">
            {phases.map((item, idx) => {
              return (
                <div 
                  key={idx}
                  className="group gradient-card rounded-xl transition-all duration-300 border border-border/50 shadow-soft bg-card/60 hover:shadow-hover hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="flex items-start gap-5 p-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold transition-all duration-300 group-hover:scale-105">
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="font-bold text-xl text-foreground tracking-tight">{item.phase}</h3>
                        <div className="shrink-0 p-1.5 text-muted-foreground transition-all">
                          <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" aria-hidden="true" />
                        </div>
                      </div>
                      
                      <p className="text-[15px] leading-relaxed text-foreground/80 font-medium">
                        {item.desc}
                      </p>
                      
                      <div className="overflow-hidden transition-all duration-500 ease-in-out group-hover:mt-4 group-hover:opacity-100 group-hover:max-h-96 mt-0 opacity-0 max-h-0">
                        <div className="pt-4 border-t-2 border-border/70">
                          <p className="text-sm leading-relaxed text-muted-foreground/90 font-normal italic">
                            {item.detailedDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thesis;
