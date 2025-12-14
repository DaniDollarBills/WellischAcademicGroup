import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (progressRef.current) {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0;
        progressRef.current.style.transform = `scaleX(${Math.min(scrolled, 100) / 100})`;
      }
      setIsScrolled(window.scrollY > 20);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateProgress(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "services", label: "Services" },
    { id: "results", label: "Results" },
    { id: "how-it-works", label: "How It Works" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/98 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}>
        {/* Progress Bar - Silky smooth with transform */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-gold/10 w-full overflow-hidden">
          <div 
            ref={progressRef}
            className="h-full w-full bg-gradient-to-r from-gold via-gold to-gold/80 origin-left"
            style={{ 
              transform: 'scaleX(0)',
              willChange: 'transform',
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 sm:gap-3 transition-transform duration-300 hover:scale-105"
            >
              <img src={logo} alt="Wellisch Academic Group" className="w-8 h-8 rounded-lg" />
              <span className={`font-serif text-base sm:text-xl transition-colors duration-300 ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}>
                Wellisch<span className="text-gold"> Academic Group</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`transition-all duration-300 text-sm font-medium hover:text-gold ${
                    isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button variant="gold" size="sm" onClick={() => scrollToSection("contact")} className="transition-transform duration-300 hover:scale-105">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-border bg-card/98 backdrop-blur-md animate-fade-in">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium px-2 text-left"
                  >
                    {link.label}
                  </button>
                ))}
                <Button variant="gold" className="mt-2" onClick={() => scrollToSection("contact")}>
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
