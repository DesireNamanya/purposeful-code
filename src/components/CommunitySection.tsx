import { GraduationCap, Users, BookOpen, Lightbulb, Quote } from "lucide-react";

const initiatives = [
  { icon: Users, label: "Developer Mentorship Programs" },
  { icon: GraduationCap, label: "Campus Partnerships" },
  { icon: BookOpen, label: "Faith & Tech Meetups" },
  { icon: Lightbulb, label: "Student Innovation Labs" },
];

const testimonials = [
  {
    quote: "Coding With God showed me that my skills could serve a greater purpose. It changed how I approach every project.",
    author: "Junior Developer",
    role: "CWG Fellowship Alumni",
  },
  {
    quote: "Their commitment to excellence and integrity is unlike anything I've seen in the tech industry.",
    author: "Technology Partner",
    role: "Enterprise Client",
  },
  {
    quote: "This community gave me the confidence to pursue tech with faith as my foundation.",
    author: "Community Member",
    role: "Student Developer",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="section-burgundy py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cream mb-4">
            More Than Code.
            <br />
            <span className="italic font-medium">A Calling.</span>
          </h2>
          <p className="font-sans text-cream/70 text-lg">
            Building a community where faith and technology intersect.
          </p>
        </div>

        {/* Initiatives */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
          {initiatives.map((item) => (
            <div
              key={item.label}
              className="bg-cream/10 border border-cream/15 rounded-xl p-5 text-center hover:bg-cream/15 transition-colors"
            >
              <item.icon size={24} className="text-cream mx-auto mb-3" />
              <p className="font-sans text-cream/90 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-cream/5 border border-cream/10 rounded-2xl p-6"
            >
              <Quote size={20} className="text-cream/30 mb-4" />
              <p className="font-sans text-cream/80 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-sans text-cream text-sm font-medium">{t.author}</p>
                <p className="font-sans text-cream/50 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
