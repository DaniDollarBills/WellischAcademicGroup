import { Check, MessageCircle, Calendar, Clock, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="programs" className="py-16 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-widest mb-3">
            Programs & Memberships
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl text-slate-900 mb-4 lg:mb-6">
            Structured Academic Support
          </h2>
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed px-2">
            Our programs are designed for students who value consistent, structured academic support. 
            We work with a limited number of students at any given time to ensure focus, continuity, 
            and high-quality instruction.
          </p>
        </div>

        {/* Membership Cards - Mobile First */}
        <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-6 max-w-6xl mx-auto mb-12 lg:mb-16">
          
          {/* Tier 1 - Academic Support Membership */}
          <div className="flex flex-col bg-white rounded-2xl p-5 lg:p-6 border border-slate-200 hover:border-slate-300 transition-all duration-300">
            <div className="flex items-start gap-4 lg:block">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 lg:mb-5">
                <MessageCircle className="w-6 h-6 text-slate-500" />
              </div>
              <div className="flex-1 lg:flex-none">
                <h3 className="font-serif text-xl text-slate-900 mb-1">Academic Support</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-2 lg:mb-4">Membership</p>
                <div className="lg:hidden mb-2">
                  <span className="font-serif text-2xl text-slate-900">$199</span>
                  <span className="text-slate-400 text-sm">/mo</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block mb-3">
              <span className="font-serif text-3xl text-slate-900">$199</span>
              <span className="text-slate-400 text-sm">/mo</span>
            </div>
            <p className="text-slate-500 text-sm mb-4 lg:mb-5">Designed for students who want ongoing academic access without scheduled private sessions.</p>
            <ul className="space-y-2 lg:space-y-3 mb-5 lg:mb-6 flex-grow">
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <Check className="w-4 h-4 mt-0.5 text-slate-400 flex-shrink-0" />
                <span>Access to scheduled live academic support calls</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <Check className="w-4 h-4 mt-0.5 text-slate-400 flex-shrink-0" />
                <span>Submit questions via dedicated support line</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <Check className="w-4 h-4 mt-0.5 text-slate-400 flex-shrink-0" />
                <span>Asynchronous academic guidance</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <Check className="w-4 h-4 mt-0.5 text-slate-400 flex-shrink-0" />
                <span>24-hour response window</span>
              </li>
            </ul>
            <Button onClick={scrollToContact} variant="outline" className="w-full mt-auto">
              Get Started
            </Button>
          </div>

          {/* Tier 2 - Weekly Scholars Program */}
          <div className="flex flex-col bg-white rounded-2xl p-5 lg:p-6 border border-slate-200 hover:border-slate-300 transition-all duration-300">
            <div className="flex items-start gap-4 lg:block">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 lg:mb-5">
                <Calendar className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex-1 lg:flex-none">
                <h3 className="font-serif text-xl text-slate-900 mb-1">Weekly Scholars</h3>
                <p className="text-xs text-blue-500 uppercase tracking-wider mb-2 lg:mb-4">Program</p>
                <div className="lg:hidden mb-2">
                  <span className="font-serif text-2xl text-slate-900">$399</span>
                  <span className="text-slate-400 text-sm">/mo</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block mb-3">
              <span className="font-serif text-3xl text-slate-900">$399</span>
              <span className="text-slate-400 text-sm">/mo</span>
            </div>
            <p className="text-slate-500 text-sm mb-4 lg:mb-5">Structured weekly sessions with a fixed commitment to consistency and preparation.</p>
            <ul className="space-y-2 lg:space-y-3 mb-5 lg:mb-6 flex-grow">
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <Check className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                <span>Everything in Academic Support</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <Check className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                <span>4 scheduled private sessions/month</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <Check className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                <span>Fixed weekly time slot</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <Check className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                <span>Emphasis on preparation & accountability</span>
              </li>
            </ul>
            <Button onClick={scrollToContact} variant="outline" className="w-full mt-auto">
              Get Started
            </Button>
          </div>

          {/* Tier 3 - Advanced Scholars Access */}
          <div className="flex flex-col bg-white rounded-2xl p-5 lg:p-6 border-2 border-gold/40 hover:border-gold transition-all duration-300">
            <div className="flex items-start gap-4 lg:block">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 lg:mb-5">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div className="flex-1 lg:flex-none">
                <h3 className="font-serif text-xl text-slate-900 mb-1">Advanced Scholars</h3>
                <p className="text-xs text-gold uppercase tracking-wider mb-2 lg:mb-4">Access</p>
                <div className="lg:hidden mb-2">
                  <span className="font-serif text-2xl text-slate-900">$649</span>
                  <span className="text-slate-400 text-sm">/mo</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block mb-3">
              <span className="font-serif text-3xl text-slate-900">$649</span>
              <span className="text-slate-400 text-sm">/mo</span>
            </div>
            <p className="text-slate-500 text-sm mb-4 lg:mb-5">Enhanced access with structured academic office hours for focused support.</p>
            <ul className="space-y-2 lg:space-y-3 mb-5 lg:mb-6 flex-grow">
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <Check className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span>Everything in Weekly Scholars</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <Check className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span>Homework Support Hours access</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <Check className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span>Time-boxed 1-on-1 help for immediate questions</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <Check className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span>Priority response window</span>
              </li>
            </ul>
            <Button onClick={scrollToContact} variant="gold" className="w-full mt-auto">
              Get Started
            </Button>
          </div>

          {/* Tier 4 - Academic Fellowship */}
          <div 
            className="flex flex-col rounded-2xl p-5 lg:p-6 border-2 border-gold shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)' }}
          >
            <div className="flex items-start gap-4 lg:block">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 lg:mb-5" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}>
                <Crown className="w-6 h-6" style={{ color: '#d4af37' }} />
              </div>
              <div className="flex-1 lg:flex-none">
                <h3 className="font-serif text-xl mb-1" style={{ color: '#ffffff' }}>Academic Fellowship</h3>
                <p className="text-xs uppercase tracking-wider mb-2 lg:mb-4" style={{ color: '#d4af37' }}>Limited Enrollment</p>
                <div className="lg:hidden mb-2">
                  <span className="font-serif text-2xl" style={{ color: '#ffffff' }}>$899</span>
                  <span className="text-sm" style={{ color: '#94a3b8' }}>/mo</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block mb-3">
              <span className="font-serif text-3xl" style={{ color: '#ffffff' }}>$899</span>
              <span className="text-sm" style={{ color: '#94a3b8' }}>/mo</span>
            </div>
            <p className="text-sm mb-4 lg:mb-5" style={{ color: '#cbd5e1' }}>The highest level of ongoing academic support and access.</p>
            <ul className="space-y-2 lg:space-y-3 mb-5 lg:mb-6 flex-grow">
              <li className="flex items-start gap-2.5 text-sm" style={{ color: '#e2e8f0' }}>
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#d4af37' }} />
                <span>12 scheduled sessions/month</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm" style={{ color: '#e2e8f0' }}>
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#d4af37' }} />
                <span>Same-day academic responses</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm" style={{ color: '#e2e8f0' }}>
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#d4af37' }} />
                <span>Monthly parent strategy call</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm" style={{ color: '#e2e8f0' }}>
                <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#d4af37' }} />
                <span>Priority scheduling during peak periods</span>
              </li>
            </ul>
            <Button onClick={scrollToContact} variant="gold" className="w-full mt-auto">
              Apply Now
            </Button>
          </div>
        </div>

        {/* Subjects Note */}
        <div className="max-w-2xl mx-auto mb-10 lg:mb-12">
          <div className="bg-white rounded-xl p-4 lg:p-5 border border-slate-200 text-center">
            <p className="text-slate-600 text-sm lg:text-base">
              <span className="font-medium text-slate-900">All sessions are flexible.</span>{" "}
              Work on any subject during your session — math, science, essay writing, or any academic need.
            </p>
          </div>
        </div>

        {/* Pay-As-You-Go Section */}
        <div className="max-w-sm mx-auto mb-10 lg:mb-12">
          <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
            <p className="text-slate-500 text-sm mb-2">Pay-As-You-Go Tutoring</p>
            <div className="mb-2">
              <span className="font-serif text-2xl text-slate-900">$95</span>
              <span className="text-slate-400"> / hour</span>
            </div>
            <p className="text-xs text-slate-400 mb-2">
              Scheduled in advance · Subject to availability
            </p>
            <p className="text-xs text-slate-400">
              Best suited for short-term or occasional support. Ongoing availability is prioritized for members.
            </p>
          </div>
        </div>

        {/* Closing Note */}
        <div className="text-center max-w-2xl mx-auto px-2">
          <p className="text-slate-500 leading-relaxed text-sm">
            Because we work closely with each student, availability may vary during peak academic periods. 
            Families seeking ongoing support are encouraged to begin with a consultation.
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
