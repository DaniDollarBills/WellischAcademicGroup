import { Home, Video, Check } from "lucide-react";

const SessionTypes = () => {
  const inHomeFeatures = [
    "One-on-one sessions at your home",
    "Libraries and cafés in Westchester",
    "Hands-on, distraction-free learning",
    "Face-to-face accountability",
  ];

  const onlineFeatures = [
    "Live sessions via Zoom",
    "Shared digital whiteboard",
    "Screen sharing for homework",
    "Flexible scheduling options",
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-3">
            Session Formats
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            In-Home or Online
          </h2>
          <p className="text-muted-foreground text-lg">
            Most of our sessions are in-home — we find that in-person, face-to-face
            learning produces the strongest results. Online is available when you need
            the flexibility.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* In-Home Card */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-hero rounded-xl flex items-center justify-center">
                <Home className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground">In-Home</h3>
                <p className="text-gold text-xs font-medium uppercase tracking-wider">Most popular</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              In-home is our standard format. We come directly to you for focused,
              one-on-one sessions in a comfortable environment — the in-person
              connection keeps students engaged and accountable. Also available at
              local libraries or quiet spots in Westchester.
            </p>

            <ul className="space-y-3">
              {inHomeFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1">
                  <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Online Card */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center">
                <Video className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground">Online</h3>
                <p className="text-muted-foreground text-sm">Zoom + Shared Whiteboard</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Learn from anywhere with live video sessions. Our digital whiteboard 
              makes it easy to work through problems together in real-time.
            </p>

            <ul className="space-y-3">
              {onlineFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1">
                  <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results Note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-6 py-3 border border-green-500/20 transition-all duration-300 hover:bg-green-500/15">
            <span className="text-foreground font-medium">100% Satisfaction Guaranteed</span>
            <span className="text-muted-foreground">— We're committed to your success</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionTypes;
