import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/90 to-primary/80" />
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-light)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-light)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Logo/Name */}
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight">
              Freddy <span className="gradient-text">and Partner</span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-primary rounded-full" />
          </div>

          {/* Tagline */}
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground/90">
            Strategic Legal Solutions for a Modern World
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Freddy and Partner provides litigation, financial restructuring, and corporate legal services tailored to your needs.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full glow transition-all duration-300 hover:scale-105 group"
            >
              Consult Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="pt-12 flex justify-center gap-12 text-primary-foreground/60">
            <div className="animate-float">
              <div className="text-3xl font-bold gradient-text">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-3xl font-bold gradient-text">500+</div>
              <div className="text-sm">Cases Won</div>
            </div>
            <div className="animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-3xl font-bold gradient-text">98%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
