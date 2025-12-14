import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = [
    { id: "services", label: "Services" },
    { id: "results", label: "Results" },
    { id: "how-it-works", label: "How It Works" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Wellisch Academic Group" className="w-10 h-10 rounded-lg" />
            <span className="font-serif text-xl text-primary-foreground">
              Wellisch<span className="text-gold"> Academic Group</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm">
            {footerLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Wellisch Academic Group
          </p>
        </div>

        {/* Tagline */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm mb-4">
            Westchester County, NY — In-Home & Online Math Tutoring
          </p>
          
          {/* Disclaimer */}
          <p className="text-primary-foreground/30 text-xs max-w-2xl mx-auto leading-relaxed px-4">
            Results shown are based on typical student outcomes and may vary. Individual results depend on 
            student effort, attendance, and engagement. Satisfaction guarantee and refund policy details 
            discussed at enrollment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
