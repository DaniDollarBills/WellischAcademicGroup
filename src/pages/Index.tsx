import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Programs from "@/components/Programs";
import SessionTypes from "@/components/SessionTypes";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Tutors from "@/components/Tutors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Results />
      <Programs />
      <SessionTypes />
      <HowItWorks />
      <Testimonials />
      <Tutors />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
