import { Mail, Phone, MapPin, ArrowRight, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    studentName: "",
    studentGrade: "",
    school: "",
    planInterest: "",
    wantsConsultation: "",
    message: "",
  });

  // Listen for programmatic changes to the plan dropdown (from Programs section)
  useEffect(() => {
    const planSelect = document.getElementById("planInterest") as HTMLSelectElement;
    if (planSelect) {
      const handlePlanChange = (e: Event) => {
        const target = e.target as HTMLSelectElement;
        setFormData(prev => ({ ...prev, planInterest: target.value }));
      };
      planSelect.addEventListener('change', handlePlanChange);
      return () => planSelect.removeEventListener('change', handlePlanChange);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `New Student Inquiry: ${formData.studentName}, ${formData.studentGrade} Grade`;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "7f3a8a67-0cc7-4cac-bb72-0ee8da9ee6bc",
          to: "danielwellischny@gmail.com",
          from_name: formData.parentName,
          subject: subject,
          parent_name: formData.parentName,
          email: formData.email,
          phone: formData.phone,
          student_name: formData.studentName,
          student_grade: formData.studentGrade,
          school: formData.school,
          plan_interest: formData.planInterest,
          wants_consultation: formData.wantsConsultation,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Inquiry Submitted!",
          description: "We will contact you within 24 to 48 hours.",
        });
        setFormData({ 
          parentName: "", 
          email: "", 
          phone: "", 
          studentName: "",
          studentGrade: "", 
          school: "",
          planInterest: "",
          wantsConsultation: "",
          message: "" 
        });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      const body = `
Parent Name: ${formData.parentName}
Email: ${formData.email}
Phone: ${formData.phone}
Student Name: ${formData.studentName}
Student Grade: ${formData.studentGrade}
School: ${formData.school}
Plan Interest: ${formData.planInterest}
Wants Consultation: ${formData.wantsConsultation}

Message:
${formData.message}
      `.trim();

      const mailtoLink = `mailto:danielwellischny@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, '_blank');

      toast({
        title: "Opening Email",
        description: "Please send the email to complete your inquiry.",
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-3">
            Get Started
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg px-2">
            Fill out the form below and we will get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-6">
              Get in Touch
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-sm lg:text-base">
              Have questions? Reach out directly. We are happy to discuss 
              how Wellisch Academic Group can help your student.
            </p>

            <div className="space-y-5 lg:space-y-6">
              <div className="flex items-start gap-4 transition-all duration-300 hover:translate-x-1">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-navy" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm lg:text-base">Email</p>
                  <a href="mailto:danielwellischny@gmail.com" className="text-muted-foreground hover:text-gold transition-colors text-sm lg:text-base">
                    danielwellischny@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 transition-all duration-300 hover:translate-x-1">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-navy" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm lg:text-base">Call or Text</p>
                  <a href="tel:+19089283214" className="text-muted-foreground hover:text-gold transition-colors text-sm lg:text-base">
                    (908) 928-3214
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 transition-all duration-300 hover:translate-x-1">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-navy" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm lg:text-base">Service Area</p>
                  <p className="text-muted-foreground text-sm lg:text-base">
                    Westchester County, NY<br />
                    <span className="text-xs lg:text-sm">Online sessions available</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 transition-all duration-300 hover:translate-x-1">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm lg:text-base">Proven Results</p>
                  <p className="text-muted-foreground text-sm lg:text-base">
                    Every student improves their grade<br />
                    <span className="text-xs lg:text-sm">See results within weeks</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="mt-8 p-5 lg:p-6 bg-green-500/5 rounded-xl border border-green-500/20">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1 text-sm lg:text-base">Our Commitment</p>
                  <p className="text-muted-foreground text-xs lg:text-sm">
                    If you are not completely satisfied with your student's progress, 
                    we will provide a full refund. Your satisfaction is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-card border border-border/50">
            <h4 className="font-serif text-lg lg:text-xl text-foreground mb-6">New Student Inquiry</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Parent Name */}
              <div>
                <label htmlFor="parentName" className="block text-sm font-medium text-foreground mb-1.5">
                  Parent or Guardian Name
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
                    placeholder="(914) 555-1234"
                  />
                </div>
              </div>

              {/* Student Name and School */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-foreground mb-1.5">
                    Student Name
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
                    placeholder="Student's name"
                  />
                </div>
                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-foreground mb-1.5">
                    School
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
                    placeholder="School name"
                  />
                </div>
              </div>

              {/* Grade and Plan side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="studentGrade" className="block text-sm font-medium text-foreground mb-1.5">
                    Student Grade
                  </label>
                  <select
                    id="studentGrade"
                    name="studentGrade"
                    value={formData.studentGrade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
                  >
                    <option value="">Select grade</option>
                    <option value="5th">5th Grade</option>
                    <option value="6th">6th Grade</option>
                    <option value="7th">7th Grade</option>
                    <option value="8th">8th Grade</option>
                    <option value="9th">9th Grade</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="planInterest" className="block text-sm font-medium text-foreground mb-1.5">
                    Plan Interest
                  </label>
                  <select
                    id="planInterest"
                    name="planInterest"
                    value={formData.planInterest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
                  >
                    <option value="">Select a plan</option>
                    <option value="Academic Support">Academic Support</option>
                    <option value="Weekly Scholars">Weekly Scholars</option>
                    <option value="Advanced Scholars">Advanced Scholars</option>
                    <option value="Academic Fellowship">Academic Fellowship</option>
                    <option value="Pay As You Go">Pay As You Go</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="wantsConsultation" className="block text-sm font-medium text-foreground mb-1.5">
                  What would you like to do?
                </label>
                <select
                  id="wantsConsultation"
                  name="wantsConsultation"
                  value={formData.wantsConsultation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300"
                >
                  <option value="">Select an option</option>
                  <option value="Sign up for a membership">Sign up for a membership</option>
                  <option value="Book a session">Book a session</option>
                  <option value="Get more information">Get more information</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Tell Us About Your Student (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all duration-300 resize-none"
                  placeholder="Current subjects, goals, schedule preferences..."
                />
              </div>

              <Button variant="gold" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
                <ArrowRight className="w-4 h-4" />
              </Button>

              <p className="text-muted-foreground text-xs text-center">
                We will contact you within 24 to 48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;





