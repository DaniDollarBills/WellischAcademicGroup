import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import QRCode from "react-qr-code";

const CONTACT_QR_VALUE = `BEGIN:VCARD
VERSION:3.0
FN:Daniel Wellisch
N:Wellisch;Daniel;;;
ORG:Wellisch Academic Group
TEL;TYPE=CELL:+19089283214
EMAIL:danielwellischny@gmail.com
URL:https://wellischacademicgroup.com
END:VCARD`;

const TEL_DISPLAY = "(908) 928-3214";
const TEL_HREF = "tel:+19089283214";
const SMS_HREF = "sms:+19089283214";

const Contact = () => {
  return (
    <section id="contact" className="py-16 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <p className="text-gold font-medium text-sm uppercase tracking-wider mb-3">
            Get Started
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg px-2">
            All sign-ups go through a quick call or text. Reach out and we will
            answer any questions and walk you through the process.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Main sign-up block */}
          <div className="bg-navy rounded-2xl p-8 lg:p-10 text-center mb-10">
            <h3 className="font-serif text-xl lg:text-2xl text-primary-foreground mb-2">
              To sign up, call or text
            </h3>
            <a
              href={TEL_HREF}
              className="block font-serif text-4xl sm:text-5xl font-semibold text-gold hover:text-gold-light transition-colors mb-6"
            >
              {TEL_DISPLAY}
            </a>
            <div className="flex gap-3 justify-center mb-6">
              <a
                href={SMS_HREF}
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Text us
              </a>
              <a
                href={TEL_HREF}
                className="inline-flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors text-sm border border-primary-foreground/20"
              >
                <Phone className="w-4 h-4" />
                Call us
              </a>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md mx-auto">
              Ask any questions, discuss scheduling, and go through the sign-up
              process with us directly.
            </p>
          </div>

          {/* QR code block */}
          <div className="flex flex-col items-center text-center mb-10">
            <h4 className="font-serif text-lg lg:text-xl text-foreground mb-1">
              Add us to your contacts
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Scan the QR code to save Daniel Wellisch's contact info to your phone.
            </p>
            <div
              className="bg-white p-5 rounded-2xl shadow-md border border-border mb-3"
              role="img"
              aria-label="QR code to add Daniel Wellisch to your contacts"
            >
              <QRCode
                value={CONTACT_QR_VALUE}
                size={200}
                level="M"
                bgColor="#ffffff"
                fgColor="#0f172a"
              />
            </div>
            <p className="text-muted-foreground text-xs">
              Then text or call anytime to get started.
            </p>
          </div>

          {/* Contact details */}
          <div className="grid sm:grid-cols-3 gap-6 text-center mb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-navy" />
              </div>
              <p className="font-medium text-foreground text-sm">Call or Text</p>
              <a href={TEL_HREF} className="text-muted-foreground hover:text-gold transition-colors text-sm">
                {TEL_DISPLAY}
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center">
                <Mail className="w-4 h-4 text-navy" />
              </div>
              <p className="font-medium text-foreground text-sm">Email</p>
              <a href="mailto:wellischacademicgroup@gmail.com" className="text-muted-foreground hover:text-gold transition-colors text-sm break-all">
                wellischacademicgroup@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-navy" />
              </div>
              <p className="font-medium text-foreground text-sm">Service Area</p>
              <p className="text-muted-foreground text-sm">
                Westchester County, NY
              </p>
            </div>
          </div>

          {/* Guarantee */}
          <div className="p-5 bg-green-500/5 rounded-xl border border-green-500/20">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1 text-sm">Our Commitment</p>
                <p className="text-muted-foreground text-xs">
                  If you are not completely satisfied with your student's progress,
                  we will provide a full refund. Your satisfaction is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
