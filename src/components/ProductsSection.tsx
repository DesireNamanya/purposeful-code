import { ArrowRight, Truck, Hand, Code2, Wrench } from "lucide-react";

const products = [
  {
    icon: Truck,
    title: "Shitsuke",
    subtitle: "Transport & Delivery Platform",
    description: "A comprehensive logistics solution designed to streamline transport and delivery across communities.",
  },
  {
    icon: Hand,
    title: "Sign Language AI Translator",
    subtitle: "Education Tech",
    description: "Breaking communication barriers with AI-powered sign language translation technology.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    subtitle: "Tailored Solutions",
    description: "Purpose-built software that solves unique challenges for organizations and communities.",
  },
  {
    icon: Wrench,
    title: "Developer Tools & Platforms",
    subtitle: "Engineering Tools",
    description: "Open-source and internal tools built to empower the next generation of developers.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-dark py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-cream mb-4">
            What We're Building
          </h2>
          <p className="font-sans text-cream/60 text-lg">
            Solutions that serve people and communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-cream/5 border border-cream/10 rounded-2xl p-8 hover:bg-cream/10 hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors">
                <product.icon size={22} className="text-primary" />
              </div>
              <p className="font-sans text-xs text-cream/40 uppercase tracking-widest mb-2">
                {product.subtitle}
              </p>
              <h3 className="text-2xl font-bold text-cream mb-3">{product.title}</h3>
              <p className="font-sans text-cream/60 text-sm leading-relaxed mb-6">
                {product.description}
              </p>
              <span className="inline-flex items-center gap-2 font-sans text-sm text-primary group-hover:text-burgundy-glow transition-colors">
                Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
