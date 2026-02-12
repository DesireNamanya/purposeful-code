import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-dark py-24 md:py-32 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-cream mb-6">
          Ready to build
          <br />
          <span className="italic font-medium">with purpose?</span>
        </h2>
        <p className="font-sans text-cream/60 text-lg mb-10 max-w-lg mx-auto">
          Let's create technology that makes a difference — together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-10 py-6">
            Start a Project
            <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-10 py-6">
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
