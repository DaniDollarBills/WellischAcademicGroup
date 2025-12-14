import { Check, MessageCircle, Calendar, Clock, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const memberships = [
  {
    name: "Academic Support",
    subtitle: "Membership",
    price: "$249",
    period: "/month",
    description: "Ongoing academic access without scheduled sessions",
    features: [
      "Unlimited academic questions (async)",
      "24-hour response window",
      "Concept clarification & review",
      "Guidance between sessions",
    ],
    icon: MessageCircle,
    featured: false,
    gradient: "from-slate-50 to-slate-100",
    borderColor: "border-slate-200",
  },
  {
    name: "Weekly Scholars",
    subtitle: "Program",
    price: "$449",
    period: "/month",
    description: "Structured weekly sessions with async support",
    features: [
      "Everything in Academic Support",
      "4 scheduled 1-on-1 sessions/month",
      "Fixed weekly time slot",
      "Preparation & accountability focus",
    ],
    icon: Calendar,
    featured: false,
    gradient: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
  },
  {
    name: "Advanced Scholars",
    subtitle: "Access",
    price: "$749",
    period: "/month",
    description: "Enhanced access with homework support hours",
    features: [
      "Everything in Weekly Scholars",
      "Homework Support Hours access",
      "Time-boxed 1-on-1 help sessions",
      "Priority async responses",
    ],
    icon: Clock,
    featured: true,
    gradient: "from-gold/10 to-amber-50",
    borderColor: "border-gold/50",
  },
  {
    name: "Academic Fellowship",
    subtitle: "Limited Enrollment",
    price: "$1,100",
    period: "/month",
    description: "The highest level of ongoing academic support",
    features: [
      "12 scheduled sessions/month",
      "Same-day academic responses",
      "Monthly parent strategy check-in",
      "Priority peak-period scheduling",
    ],
    icon: Star,
    featured: false,
    gradient: "from-navy/5 to-slate-100",
    borderColor: "border-navy/30",
    premium: true,
  },
];

const Programs = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="programs" className="py-20 lg:py-28 bg-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-3">
            Programs & Memberships
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Structured Academic Support
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our programs are designed for students who value consistent, structured academic support. 
            We work with a limited number of students at any given time to ensure focus, continuity, 
            and high-quality instruction.
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {memberships.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative bg-gradient-to-br ${tier.gradient} rounded-2xl p-6 lg:p-8 border-2 ${tier.borderColor} transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                tier.featured ? 'ring-2 ring-gold shadow-lg scale-[1.02]' : ''
              } ${tier.premium ? 'shadow-lg' : ''}`}
            >
              {/* Featured Badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Premium Badge */}
              {tier.premium && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-navy text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Limited
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                tier.featured ? 'bg-gold/20' : tier.premium ? 'bg-navy/10' : 'bg-white shadow-sm'
              }`}>
                <tier.icon className={`w-6 h-6 ${
                  tier.featured ? 'text-gold' : tier.premium ? 'text-navy' : 'text-muted-foreground'
                }`} />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl text-foreground mb-0.5">
                {tier.name}
              </h3>
              <p className={`text-sm mb-4 ${tier.featured ? 'text-gold' : 'text-muted-foreground'}`}>
                {tier.subtitle}
              </p>

              {/* Price */}
              <div className="mb-4">
                <span className="font-serif text-3xl lg:text-4xl text-foreground">{tier.price}</span>
                <span className="text-muted-foreground text-sm">{tier.period}</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      tier.featured ? 'text-gold' : tier.premium ? 'text-navy' : 'text-green-500'
                    }`} />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                onClick={scrollToContact}
                variant={tier.featured ? "gold" : tier.premium ? "default" : "outline"}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Pay-As-You-Go Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 text-center">
            <h3 className="font-serif text-2xl text-foreground mb-2">
              Pay-As-You-Go Tutoring
            </h3>
            <p className="text-muted-foreground mb-6">
              For families who prefer flexibility
            </p>
            
            <div className="inline-block bg-subtle rounded-xl px-8 py-6 mb-6">
              <p className="text-sm text-muted-foreground mb-1">Private 1-on-1 Tutoring</p>
              <span className="font-serif text-4xl text-foreground">$120</span>
              <span className="text-muted-foreground"> / hour</span>
            </div>

            <ul className="text-sm text-muted-foreground space-y-2 mb-6">
              <li>• Scheduled in advance</li>
              <li>• Subject to availability</li>
              <li>• Best suited for occasional or short-term support</li>
            </ul>

            <p className="text-xs text-muted-foreground italic">
              Membership programs offer greater continuity and guaranteed availability.
            </p>
          </div>
        </div>

        {/* Closing Note */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground leading-relaxed">
            Because we work closely with each student, availability may vary during peak academic periods. 
            Families seeking ongoing support are encouraged to begin with a consultation to determine 
            the most appropriate program.
          </p>
          <Button onClick={scrollToContact} variant="gold" size="lg" className="mt-6">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
