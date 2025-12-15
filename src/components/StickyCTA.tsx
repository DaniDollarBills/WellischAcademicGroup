import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearContact, setIsNearContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (about 600px)
      const shouldShow = window.scrollY > 600;
      setIsVisible(shouldShow);

      // Hide when near contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setIsNearContact(rect.top < window.innerHeight + 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible || isNearContact) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-up">
      <Button 
        onClick={scrollToContact}
        variant="gold" 
        size="lg"
        className="shadow-2xl hover:scale-105 transition-transform"
      >
        Get Started
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default StickyCTA;








