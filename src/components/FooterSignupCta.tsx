import QRCode from "react-qr-code";
import { Button } from "@/components/ui/button";

/** vCard payload for “Add to Contacts” when scanned (iOS & Android). */
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

const FooterSignupCta = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="footer-signup"
      className="w-full max-w-lg mx-auto mb-10 px-2 text-center"
    >
      <p className="text-primary-foreground/90 text-sm sm:text-base leading-relaxed mb-2">
        <span className="font-semibold text-primary-foreground">To sign up</span>, you need to{" "}
        <a href={SMS_HREF} className="text-gold hover:text-gold-light underline underline-offset-2">
          message
        </a>{" "}
        or{" "}
        <a href={TEL_HREF} className="text-gold hover:text-gold-light underline underline-offset-2">
          call
        </a>{" "}
        <span className="font-medium text-primary-foreground">{TEL_DISPLAY}</span>. We will walk you through
        scheduling and next steps.
      </p>
      <p className="text-primary-foreground/60 text-xs sm:text-sm mb-6">
        Or use the contact form above — we still follow up by phone or text.
      </p>

      <Button
        type="button"
        onClick={scrollToContact}
        variant="gold"
        size="lg"
        className="w-full max-w-md rounded-xl text-navy font-semibold shadow-lg mb-10"
      >
        Book your first session
      </Button>

      <div className="flex flex-col items-center gap-3">
        <div
          className="bg-white p-4 sm:p-5 rounded-2xl shadow-lg"
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
        <p className="text-primary-foreground/70 text-xs sm:text-sm">Scan to save contact</p>
        <p className="text-primary-foreground/90 text-sm mt-2">Call or text to begin</p>
        <a
          href={TEL_HREF}
          className="font-serif text-2xl sm:text-3xl font-semibold text-gold hover:text-gold-light transition-colors"
        >
          {TEL_DISPLAY}
        </a>
        <a
          href="https://wellischacademicgroup.com"
          className="text-primary-foreground/50 text-sm hover:text-primary-foreground/80 transition-colors"
        >
          wellischacademicgroup.com
        </a>
      </div>
    </div>
  );
};

export default FooterSignupCta;
