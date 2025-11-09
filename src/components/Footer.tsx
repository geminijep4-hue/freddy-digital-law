import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-dark border-t border-border/30">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-foreground">
                Freddy <span className="gradient-text">and Partner</span>
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Strategic Legal Solutions for a Modern World. Excellence, integrity, and innovation in every case.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-primary-foreground">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <a href="#about" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  About Us
                </a>
                <a href="#services" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Our Services
                </a>
                <a href="#why-us" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Why Choose Us
                </a>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </nav>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="font-semibold text-primary-foreground">Connect With Us</h4>
              <div className="flex flex-col space-y-3">
                <a
                  href="mailto:info@freddyandpartner.com"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  info@freddyandpartner.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  +1 (234) 567-890
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
              <p>© 2025 Freddy and Partner. All Rights Reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
