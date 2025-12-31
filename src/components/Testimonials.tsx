import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Parent of 8th Grader",
    content: "My daughter went from a C to an A- in just two months. Daniel explains concepts in a way that actually makes sense to her.",
  },
  {
    name: "Michael T.",
    role: "Parent of 6th Grader",
    content: "We've tried other tutors before, but this is the first time my son actually looks forward to his math sessions. His confidence has grown so much.",
  },
  {
    name: "Jennifer L.",
    role: "Parent of 9th Grader",
    content: "Daniel helped my daughter prepare for her geometry final. She got a 94% and now feels much more confident going into next year.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            What Parents Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from families who have worked with us.
          </p>
        </div>

        {/* Static Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-xl p-6 lg:p-8 border border-border/50"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold/30 mb-4" />

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 text-base">
                {testimonial.content}
              </p>

              {/* Author */}
              <div>
                <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
























