import { Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const scrollToContactWithTopic = (topic: string) => {
    const planSelect = document.getElementById("planInterest") as HTMLSelectElement;
    if (planSelect) {
      planSelect.value = topic;
      const event = new Event("change", { bubbles: true });
      planSelect.dispatchEvent(event);
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="programs" className="py-16 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <p className="text-gold font-medium text-sm uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl text-slate-900 mb-4 lg:mb-6">
            Hourly tutoring — pricing varies
          </h2>
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed px-2">
            We do not sell packaged plans or monthly tiers.{" "}
            <span className="font-medium text-slate-800">Pricing varies</span> by situation; every session is
            billed <span className="font-medium text-slate-800">by the hour</span>, and rates are often around{" "}
            <span className="font-medium text-slate-800">$80 per hour</span>. Reach out for a firm quote,
            answers to your questions, and a schedule that fits your family.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-6 lg:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-xl lg:text-2xl text-slate-900 mb-2">How billing works</h3>
                <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                  You pay for the time you book — session length and frequency are flexible. Rates are hourly
                  and <span className="font-medium text-slate-800">vary</span>; many sessions fall near{" "}
                  <span className="font-medium text-slate-800">$80/hour</span>. Inquire for your exact rate.
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "In-home sessions in Westchester County, NY, or online via Zoom",
                "Work on any subject during your session — math, science, writing, and more",
                "We keep enrollment limited so every family gets focused attention",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm lg:text-base text-slate-600">
                  <Check className="w-5 h-5 mt-0.5 text-gold flex-shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => scrollToContactWithTopic("Inquire about hourly rates & pricing")}
              variant="gold"
              size="lg"
              className="w-full sm:w-auto"
            >
              Inquire for pricing
            </Button>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mt-10 lg:mt-12 px-2">
          <p className="text-slate-500 leading-relaxed text-sm">
            Because we work closely with each student, availability may vary during peak academic periods.
            Families are encouraged to start with a brief consultation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
