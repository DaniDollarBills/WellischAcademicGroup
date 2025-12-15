import { TrendingUp, Award, ArrowUpRight, CheckCircle, MessageCircle, Zap } from "lucide-react";

const Results = () => {
  const mainStats = [
    {
      value: "+18%",
      label: "Average Test Score Improvement",
      description: "Typical gains within the first marking period",
    },
    {
      value: "2+",
      label: "Letter Grades Improved",
      description: "Average improvement with consistent tutoring",
    },
    {
      value: "95%",
      label: "Student Satisfaction",
      description: "Students and parents happy with their progress",
    },
  ];

  const timeline = [
    {
      week: "Weeks 1 and 2",
      title: "Foundation and Quick Wins",
      description: "Identify gaps, build confidence with immediate improvements on homework and quizzes",
      improvement: "+5 to 10% on assignments",
    },
    {
      week: "Weeks 3 and 4",
      title: "Building Understanding",
      description: "Deep concept mastery, better test preparation, developing study habits",
      improvement: "+15% on tests",
    },
    {
      week: "Months 2 and 3",
      title: "Transformation",
      description: "Full grade level improvement, independent problem solving skills",
      improvement: "+1 letter grade",
    },
    {
      week: "Ongoing",
      title: "Excellence and Habit Building",
      description: "Maintain A/B grades, tackle advanced concepts, lifelong confidence",
      improvement: "+2 letter grades",
    },
  ];

  const beforeAfter = [
    { subject: "Pre Algebra", before: "D", after: "A", weeks: "10 weeks", improvement: "+3 grades" },
    { subject: "Algebra I", before: "C", after: "A", weeks: "12 weeks", improvement: "+3 grades" },
    { subject: "Geometry", before: "D", after: "B+", weeks: "8 weeks", improvement: "+2 grades" },
    { subject: "Biology", before: "C", after: "A", weeks: "10 weeks", improvement: "+2 grades" },
  ];

  const features = [
    {
      icon: Zap,
      title: "Quick Wins First",
      description: "See improvement on your next assignment, not months from now",
    },
    {
      icon: TrendingUp,
      title: "Lasting Transformation",
      description: "We build habits and understanding that stick for life",
    },
    {
      icon: MessageCircle,
      title: "Ongoing Support",
      description: "Text or message anytime for help between sessions",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of helping students succeed",
    },
  ];

  return (
    <section id="results" className="py-16 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-3">
            Proven Results
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl text-foreground mb-4">
            Real Data, Real Results
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg px-2">
            See what is possible with dedicated, personalized tutoring.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 max-w-5xl mx-auto mb-16 lg:mb-20">
          {mainStats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 lg:p-8 bg-card rounded-2xl shadow-card border border-border/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="font-serif text-4xl lg:text-6xl text-gold mb-2 lg:mb-3">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground text-base lg:text-lg mb-1 lg:mb-2">
                {stat.label}
              </div>
              <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline Section - Mobile Optimized */}
        <div className="max-w-4xl mx-auto mb-16 lg:mb-20">
          <h3 className="font-serif text-xl lg:text-2xl text-foreground text-center mb-8 lg:mb-10">
            Your Journey to Better Grades
          </h3>
          
          {/* Mobile Timeline */}
          <div className="space-y-4 lg:hidden">
            {timeline.map((item) => (
              <div 
                key={item.week}
                className="bg-card rounded-xl p-4 border border-border/50 shadow-sm"
              >
                <span className="inline-block bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {item.week}
                </span>
                <h4 className="font-serif text-lg text-foreground mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-green-600 font-semibold text-sm">
                  <ArrowUpRight className="w-4 h-4" />
                  {item.improvement}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="relative hidden lg:block">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 transform -translate-x-1/2" />
            
            {timeline.map((item, index) => (
              <div 
                key={item.week}
                className={`relative flex gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 w-4 h-4 bg-gold rounded-full transform -translate-x-1/2 mt-1.5 z-10" />
                
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <span className="inline-block bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {item.week}
                  </span>
                  <h4 className="font-serif text-xl text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                  <span className="inline-flex items-center gap-1 text-green-600 font-semibold text-sm">
                    <ArrowUpRight className="w-4 h-4" />
                    {item.improvement}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Before/After Cards */}
        <div className="max-w-4xl mx-auto mb-16 lg:mb-20">
          <h3 className="font-serif text-xl lg:text-2xl text-foreground text-center mb-6 lg:mb-8">
            Sample Student Transformations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
            {beforeAfter.map((row) => (
              <div 
                key={row.subject}
                className="bg-card rounded-xl shadow-card border border-border/50 p-4 lg:p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex justify-between items-start mb-3 lg:mb-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-base lg:text-lg">{row.subject}</h4>
                    <p className="text-muted-foreground text-xs lg:text-sm">{row.weeks}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-green-600 font-bold text-xs lg:text-sm bg-green-100 px-2 py-1 rounded-full">
                    <ArrowUpRight className="w-3 h-3" />
                    {row.improvement}
                  </span>
                </div>
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="text-center">
                    <span className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-red-100 text-red-600 font-bold text-lg lg:text-xl">
                      {row.before}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">Before</p>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-gradient-to-r from-red-300 via-gold to-green-400 relative">
                      <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 text-gold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card" />
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-green-100 text-green-600 font-bold text-lg lg:text-xl">
                      {row.after}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">After</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-xs lg:text-sm mt-4">
            *Representative examples based on student outcomes
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 max-w-6xl mx-auto">
          {features.map((item) => (
            <div
              key={item.title}
              className="p-4 lg:p-6 bg-subtle rounded-xl border border-border/50 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gold/10 rounded-lg mb-3 lg:mb-4 flex items-center justify-center">
                <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-gold" />
              </div>
              <h4 className="font-semibold text-foreground text-sm lg:text-base mb-1 lg:mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="inline-flex items-center gap-2 lg:gap-3 bg-green-500/10 rounded-full px-4 lg:px-6 py-2 lg:py-3 border border-green-500/20">
            <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500" />
            <span className="text-foreground font-medium text-sm lg:text-base">
              Join the students already seeing results
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;







