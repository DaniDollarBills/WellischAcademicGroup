import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Parent of 8th Grader",
    content: "My daughter went from a C to an A- in just two months. Daniel explains concepts in a way that actually makes sense to her. Highly recommend!",
    rating: 5,
  },
  {
    name: "Michael T.",
    role: "Parent of 6th Grader",
    content: "We've tried other tutors before, but this is the first time my son actually looks forward to his math sessions. His confidence has skyrocketed.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    role: "Parent of 10th Grader",
    content: "Daniel helped my daughter prepare for her geometry final. She got a 94% and now feels so much more confident going into next year.",
    rating: 5,
  },
  {
    name: "David R.",
    role: "Parent of 7th Grader",
    content: "The personalized approach makes all the difference. Daniel identified exactly where my son was struggling and addressed it head-on.",
    rating: 5,
  },
  {
    name: "Amanda K.",
    role: "Parent of 9th Grader",
    content: "Worth every penny. My daughter's algebra grades improved significantly, and she's now helping her friends with homework!",
    rating: 5,
  },
  {
    name: "Robert H.",
    role: "Parent of 5th Grader",
    content: "Starting early with a great tutor was the best decision. My son now loves math and is ahead of his class. Thank you!",
    rating: 5,
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when we've scrolled half the content (since we duplicate it)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-subtle overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            What Parents Are Saying
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it — hear from families who've seen real results.
          </p>
        </div>
      </div>

      {/* Scrolling Testimonials */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden cursor-grab"
        style={{ scrollBehavior: "auto" }}
      >
        {allTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className="flex-shrink-0 w-[350px] sm:w-[400px] bg-card rounded-2xl p-6 lg:p-8 shadow-card border border-border/50"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>

            {/* Content */}
            <p className="text-foreground leading-relaxed mb-6 text-base">
              "{testimonial.content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center">
                <span className="text-navy font-semibold text-sm">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-muted-foreground text-xs">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;





