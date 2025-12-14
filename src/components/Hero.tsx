import { ArrowRight, MapPin, Video, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 bg-gold/20 backdrop-blur-sm rounded-full px-5 py-3 mb-8 animate-fade-up border border-gold/30">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Academic Support That Works
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 animate-fade-up-delay-1">
            Elite Math Tutoring{" "}
            <span className="text-gold">Tailored to Every Student</span>
          </h1>

          {/* Guarantee Badge */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up-delay-1 border border-green-400/30">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-300 text-sm font-semibold">
              100% Satisfaction Guaranteed
            </span>
          </div>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up-delay-2">
            Personalized tutoring that builds lasting study habits and deep understanding. 
            See quick wins in weeks, transformational results over time, plus ongoing 
            support whenever your student needs help.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up-delay-3">
            <Button 
              variant="hero" 
              size="xl" 
              className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("results")}
            >
              See Our Results
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-primary-foreground/70 animate-fade-up-delay-3">
            <div className="flex items-center gap-2 transition-all duration-300 hover:text-primary-foreground">
              <MapPin className="w-5 h-5 text-gold/80" />
              <span className="text-sm">In-Home Sessions</span>
            </div>
            <div className="flex items-center gap-2 transition-all duration-300 hover:text-primary-foreground">
              <Video className="w-5 h-5 text-gold/80" />
              <span className="text-sm">Online via Zoom</span>
            </div>
            <div className="flex items-center gap-2 transition-all duration-300 hover:text-primary-foreground">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm">Now Accepting Students</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
