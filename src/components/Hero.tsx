import { ArrowRight, MapPin, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Simple subtitle */}
          <p className="text-gold/90 text-sm font-medium uppercase tracking-widest mb-6">
            Westchester County, NY
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            Academic Tutoring{" "}
            <span className="text-gold">for Grades 5 through 9</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Personalized tutoring that builds lasting study habits and deep understanding. 
            See quick wins in weeks, transformational results over time, plus ongoing 
            support whenever your student needs help.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              className="w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="w-full sm:w-auto"
              onClick={() => scrollToSection("results")}
            >
              See Our Results
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold/70" />
              <span className="text-sm">In-Home Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-gold/70" />
              <span className="text-sm">Online via Zoom</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
