import { Award, Clock, TrendingUp, PenTool, Target } from "lucide-react";
import danielPhoto from "@/assets/daniel-wellisch.jpeg";
import liamPhoto from "@/assets/liam-wellisch.png";

const Tutors = () => {
  const danielCredentials = [
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
      description: "Research and essays",
    },
    {
      icon: Clock,
      label: "Elite Athlete",
      description: "Competitive rower",
    },
  ];

  const liamCredentials = [
    {
      icon: TrendingUp,
      label: "99th Percentile",
      description: "Quantitative reasoning",
    },
    {
      icon: Target,
      label: "ICDC Competitor",
      description: "National level",
    },
    {
      icon: PenTool,
      label: "Published Writer",
      description: "Scholastic honoree",
    },
    {
      icon: Clock,
      label: "Elite Athlete",
      description: "Competitive rower",
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-28 bg-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-3">
            Meet the Team
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl text-foreground mb-4">
            Dedicated to Your Success
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Learn from tutors who understand the challenges students face and know 
            how to help them succeed.
          </p>
        </div>

        {/* Co-Founders Grid */}
        <div className="space-y-8 lg:space-y-12 max-w-5xl mx-auto">
          
          {/* Daniel */}
          <div className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden transition-all duration-500 hover:shadow-lg">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Photo */}
              <div className="lg:col-span-2 bg-navy/5 flex items-center justify-center p-6 lg:p-0">
                <div className="w-40 h-40 lg:w-full lg:h-full lg:min-h-[320px] overflow-hidden rounded-xl lg:rounded-none">
                  <img 
                    src={danielPhoto} 
                    alt="Daniel Wellisch" 
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-3 p-6 lg:p-8">
                <div className="mb-4">
                  <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-1">
                    Daniel Wellisch
                  </h3>
                  <p className="text-gold font-medium text-sm">Co-Founder</p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-3 text-sm lg:text-base">
                  Daniel is a high school student and nationally competitive rower training 
                  six days per week at one of the top rowing programs in the country. He ranks 
                  in the top 1% nationally in quantitative reasoning.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-3 text-sm lg:text-base">
                  Beyond athletics, Daniel has distinguished himself in academic competitions 
                  and scholarly pursuits. He has experience in competitive writing, having 
                  participated in essay and research competitions at the regional and national 
                  level.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-sm lg:text-base">
                  Maintaining a 99 unweighted GPA (4.0) while balancing elite athletics and 
                  academic competitions demonstrates his exceptional discipline and commitment 
                  to excellence.
                </p>

                {/* Credential Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {danielCredentials.map((cred) => (
                    <div key={cred.label} className="text-center transition-all duration-300 hover:-translate-y-1">
                      <div className="w-9 h-9 bg-accent/10 rounded-lg mx-auto mb-1.5 flex items-center justify-center">
                        <cred.icon className="w-4 h-4 text-gold" />
                      </div>
                      <p className="font-semibold text-foreground text-xs">{cred.label}</p>
                      <p className="text-muted-foreground text-[10px]">{cred.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Liam */}
          <div className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden transition-all duration-500 hover:shadow-lg">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Photo */}
              <div className="lg:col-span-2 bg-navy/5 flex items-center justify-center p-6 lg:p-0">
                <div className="w-40 h-40 lg:w-full lg:h-full lg:min-h-[320px] overflow-hidden rounded-xl lg:rounded-none">
                  <img 
                    src={liamPhoto} 
                    alt="Liam Wellisch" 
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-3 p-6 lg:p-8">
                <div className="mb-4">
                  <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-1">
                    Liam Wellisch
                  </h3>
                  <p className="text-gold font-medium text-sm">Co-Founder</p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-3 text-sm lg:text-base">
                  Liam is a high achieving student athlete and competitive rower who excels in both 
                  academics and athletics. He scores in the 99th percentile in quantitative reasoning, 
                  demonstrating exceptional analytical and problem solving abilities, and has competed 
                  at the ICDC level, performing under pressure on a national stage. Liam maintains an 
                  unweighted GPA of 99 and is an active member of his school's math club, where he has 
                  participated in numerous regional mathematics competitions, further highlighting his 
                  advanced quantitative strengths.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-3 text-sm lg:text-base">
                  Beyond STEM, he is also a published poet and imagery writer, earning an Honorable 
                  Mention in the Scholastic Poetry Competition and receiving recognition in a local 
                  newspaper for an original poetry piece. He is currently conducting an independent 
                  science research project focused on the relationship between genetics, climate change, 
                  and global warming.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-sm lg:text-base">
                  As a co-founder of Wellisch Academic Group, Liam brings together academic rigor, 
                  competitive discipline, and creative insight with a relentless work ethic, demonstrating 
                  a strong commitment to meeting students' needs in a thoughtful and caring manner.
                </p>

                {/* Credential Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {liamCredentials.map((cred) => (
                    <div key={cred.label} className="text-center transition-all duration-300 hover:-translate-y-1">
                      <div className="w-9 h-9 bg-accent/10 rounded-lg mx-auto mb-1.5 flex items-center justify-center">
                        <cred.icon className="w-4 h-4 text-gold" />
                      </div>
                      <p className="font-semibold text-foreground text-xs">{cred.label}</p>
                      <p className="text-muted-foreground text-[10px]">{cred.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Note */}
        <p className="text-center text-muted-foreground text-xs lg:text-sm mt-8 max-w-xl mx-auto">
          All credentials are accurate and verifiable. We believe in complete transparency 
          with the families we work with.
        </p>
      </div>
    </section>
  );
};

export default Tutors;
