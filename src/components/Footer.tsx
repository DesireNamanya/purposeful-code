import logo from "@/assets/cwg-logo.png";

const quickLinks = ["Home", "About", "Products", "Community", "Blog", "Contact"];

const Footer = () => {
  return (
    <footer id="contact" className="section-dark border-t border-cream/10 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Coding With God" className="h-10 w-auto mb-4" />
            <p className="font-sans text-cream/50 text-sm leading-relaxed max-w-xs">
              Software that serves. Building technology with purpose, integrity, and faith.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-cream text-sm font-semibold uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-sans text-cream/50 hover:text-cream text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-cream text-sm font-semibold uppercase tracking-widest mb-4">
              Contact
            </h4>
            <a
              href="mailto:hello@codingwithgod.com"
              className="font-sans text-cream/50 hover:text-cream text-sm transition-colors"
            >
              hello@codingwithgod.com
            </a>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-cream/30 text-xs">
            © {new Date().getFullYear()} Coding With God. All rights reserved.
          </p>
          <p className="font-serif text-cream/20 text-xs italic">
            "Trust in the Lord with all your heart." — Proverbs 3:5–6
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
