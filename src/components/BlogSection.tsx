import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    category: "Stewardship",
    title: "Technology and Stewardship",
    excerpt: "How we can use our technical gifts responsibly and in service of something greater than profit margins.",
  },
  {
    category: "AI Ethics",
    title: "Building Ethical AI",
    excerpt: "A faith-centered framework for developing artificial intelligence that respects human dignity.",
  },
  {
    category: "Startups",
    title: "Faith in the Startup Journey",
    excerpt: "Lessons learned from building a purpose-driven technology company rooted in faith and community.",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-cream py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Thoughts on Faith
            <br />
            <span className="italic font-medium">& Technology</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group bg-cream-light border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="h-40 bg-gradient-to-br from-primary/10 to-primary/5" />
              <div className="p-6">
                <span className="font-sans text-xs text-primary uppercase tracking-widest font-medium">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="burgundy" size="lg" className="px-8">
            Read All Articles
            <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
