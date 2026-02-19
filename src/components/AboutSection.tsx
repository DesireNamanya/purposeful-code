import { Heart, Users, Zap } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Faith-Led Innovation",
    description: "Every line of code reflects our commitment to integrity, purpose, and service to something greater.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We build for people — creating tools that empower communities and bridge real-world gaps.",
  },
  {
    icon: Zap,
    title: "Excellence in Engineering",
    description: "We pursue mastery in our craft, delivering solutions that are beautiful, reliable, and scalable.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-cream py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Technology, Stewardship,
            <br />
            <span className="italic font-medium">and Faith</span>
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed">
          Coding With God is a Ugandan technology company committed to building ethical, practical, and trustworthy software. We believe every line of code carries responsibility to safety, dignity, and opportunity. Our work blends technical excellence with stewardship, integrity, and long-term thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="bg-cream-light border border-border rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
  );
};

export default AboutSection;
