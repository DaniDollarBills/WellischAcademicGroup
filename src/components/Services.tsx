import { Calculator, BookOpen, Target, Brain, Pencil, FlaskConical } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Math Tutoring",
    description: "Covering 5th through 9th grade, including Pre Algebra, Algebra, and Geometry. Clear explanations and step by step problem solving for every level.",
    subjects: ["Grades 5 to 9", "Pre Algebra", "Algebra I", "Geometry"],
  },
  {
    icon: FlaskConical,
    title: "Science Support",
    description: "Build a strong foundation in science with support through 9th grade biology. Understand concepts, complete lab reports, and prepare for exams with confidence.",
    subjects: ["General Science", "Life Science", "Earth Science", "Biology"],
  },
  {
    icon: Pencil,
    title: "Essay Writing and Review",
    description: "From brainstorming to final draft, get help with essays, research papers, and written assignments. Learn to write clearly, argue effectively, and edit with precision.",
    subjects: ["Essay Structure", "Thesis Development", "Editing and Revision", "Research Papers"],
  },
  {
    icon: BookOpen,
    title: "Homework Support",
    description: "Get help completing assignments correctly while actually understanding the material. We teach the why behind every solution.",
    subjects: ["Daily Assignments", "Problem Sets", "Projects", "Worksheets"],
  },
  {
    icon: Target,
    title: "Test Preparation",
    description: "Prepare with confidence for quizzes, unit tests, and exams. Proven strategies and practice problems that work.",
    subjects: ["Quizzes and Tests", "Midterms and Finals", "State Exams", "Exam Review"],
  },
  {
    icon: Brain,
    title: "Flexible Sessions",
    description: "Every session adapts to what you need most. Work on math one week, essay review the next. We are prepared to support any academic subject.",
    subjects: ["Any Subject", "Multi Subject Sessions", "Student Led Focus", "Adaptive Support"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 lg:py-28 bg-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl text-foreground mb-4">
            Comprehensive Academic Support
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg px-2">
            More than just tutoring. We build habits, understanding, and lasting confidence across all subjects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-xl p-5 lg:p-8 shadow-card border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4 lg:mb-5">
                <service.icon className="w-5 h-5 lg:w-6 lg:h-6 text-navy" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-lg lg:text-2xl text-foreground mb-2 lg:mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm lg:text-base mb-4 lg:mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Subject Tags */}
              <div className="flex flex-wrap gap-1.5 lg:gap-2">
                {service.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="text-xs font-medium px-2.5 lg:px-3 py-1 bg-secondary text-secondary-foreground rounded-full transition-all duration-300 hover:bg-gold/20 hover:text-gold"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
