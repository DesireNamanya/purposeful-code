import { Heart, Users, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pillars = [
  {
    icon: Heart,
    title: "Faith-Led Innovation",
    description: "We build with conviction and clarity.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We grow people, not just platforms.",
  },
  {
    icon: Zap,
    title: "Excellence in Engineering",
    description: "We deliver software with precision and impact.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* 1 — Company Story */}
      <section className="section-cream pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-center">
            Our Story
          </h1>
          <div className="space-y-6 font-sans text-muted-foreground text-lg leading-relaxed">
            <p>
              Coding With God was born from a simple conviction: technology is stewardship. Every tool we build, every line of code we write, carries a responsibility — to safety, to dignity, and to the communities we serve.
            </p>
            <p>
              We started because we saw a gap between what technology <span className="italic">could</span> do and what it <span className="italic">should</span> do. Too often, software is built for extraction — harvesting attention, monetising data, optimising for profit alone. We chose a different path.
            </p>
            <p>
              Rooted in faith and driven by engineering excellence, we set out to build products that solve real-world problems for real people. Products that respect their users. Products that last.
            </p>
            <p>
              From Uganda to the world, Coding With God exists to prove that innovation and integrity are not opposites — they are inseparable.
            </p>
          </div>
        </div>
      </section>

      {/* 2 — Mission & Vision */}
      <section className="section-dark py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-0">
            {/* Mission */}
            <div className="md:pr-12 md:border-r border-primary/40 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Mission
              </h2>
              <p className="font-sans text-lg leading-relaxed opacity-80">
                To build technology that serves people with excellence, integrity, and purpose.
              </p>
            </div>

            {/* Vision */}
            <div className="md:pl-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Vision
              </h2>
              <p className="font-sans text-lg leading-relaxed opacity-80">
                To redefine what it means to build software — where innovation and faith walk together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Core Identity Cards */}
      <section className="section-cream py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">
            Who We Are
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="bg-cream-light border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <pillar.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
