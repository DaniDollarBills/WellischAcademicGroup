import { Award, Clock, TrendingUp, PenTool } from "lucide-react";
import danielPhoto from "@/assets/daniel-wellisch.jpeg";

const Tutors = () => {
  const credentials = [
    {
      icon: TrendingUp,
      label: "Top 1% Nationally",
      description: "Quantitative reasoning",
    },
    {
      icon: Award,
      label: "99 GPA (4.0)",
      description: "Unweighted academic record",
    },
    {
      icon: PenTool,
      label: "Competition Writer",
      description: "Research and essay competitions",
    },
    {
      icon: Clock,
      label: "Elite Athlete",
      description: "Nationally competitive rower",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-3">
            About Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Dedicated to Your Success
          </h2>
          <p className="text-muted-foreground text-lg">
            Learn from someone who understands the challenges students face and knows 
            how to help them succeed.
          </p>
        </div>

        {/* Tutor Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden transition-all duration-500 hover:shadow-lg">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Photo */}
              <div className="lg:col-span-2 bg-navy/5 flex items-center justify-center p-8 lg:p-0">
                <div className="w-48 h-48 lg:w-full lg:h-full lg:min-h-[380px] overflow-hidden rounded-xl lg:rounded-none">
                  <img 
                    src={danielPhoto} 
                    alt="Daniel Wellisch" 
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-3 p-8 lg:p-10">
                <div className="mb-6">
                  <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-1">
                    Daniel Wellisch
                  </h3>
                  <p className="text-gold font-medium">Founder</p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Daniel is a high school student and nationally competitive rower training 
                  six days per week at one of the top rowing programs in the country. He ranks 
                  in the top 1% nationally in quantitative reasoning and scored a near perfect 
                  math score on his first SAT attempt.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Beyond athletics, Daniel has distinguished himself in academic competitions 
                  and scholarly pursuits. He has experience in competitive writing, having 
                  participated in essay and research competitions at the regional and national 
                  level. His research background spans multiple disciplines, with a focus on 
                  analytical thinking and evidence based argumentation.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Maintaining a 99 unweighted GPA (4.0) while balancing elite athletics and 
                  academic competitions demonstrates his exceptional discipline, time management, 
                  and commitment to excellence. Daniel brings this same dedication to every 
                  student he works with.
                </p>

                {/* Credential Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {credentials.map((cred) => (
                    <div key={cred.label} className="text-center transition-all duration-300 hover:-translate-y-1">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <cred.icon className="w-5 h-5 text-gold" />
                      </div>
                      <p className="font-semibold text-foreground text-sm">{cred.label}</p>
                      <p className="text-muted-foreground text-xs">{cred.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Note */}
        <p className="text-center text-muted-foreground text-sm mt-8 max-w-xl mx-auto">
          All credentials are accurate and verifiable. We believe in complete transparency 
          with the families we work with.
        </p>
      </div>
    </section>
  );
};

export default Tutors;
