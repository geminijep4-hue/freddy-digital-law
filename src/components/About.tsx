import { Scale, Shield, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About <span className="gradient-text">Freddy and Partner</span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-primary rounded-full" />
          </div>

          {/* Main Content */}
          <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Freddy and Partner is a multidisciplinary law firm committed to excellence in litigation, 
              debt collection, financial restructuring, bankruptcy, and executive legal advisory. 
              We combine legal precision with strategic foresight to protect our clients' interests.
            </p>

            {/* Values Grid */}
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-3 p-6 rounded-xl hover:bg-gradient-glow transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                  <Scale className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Unwavering commitment to the highest standards of legal practice
                </p>
              </div>

              <div className="text-center space-y-3 p-6 rounded-xl hover:bg-gradient-glow transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  Building trust through transparency and ethical conduct
                </p>
              </div>

              <div className="text-center space-y-3 p-6 rounded-xl hover:bg-gradient-glow transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Leveraging modern technology for superior legal outcomes
                </p>
              </div>
            </div>

            {/* Founder Quote */}
            <div className="mt-12 pt-8 border-t border-border">
              <blockquote className="text-center space-y-4">
                <p className="text-xl italic text-foreground">
                  "Justice is not just our profession—it's our passion. We fight for what's right, 
                  not just what's easy."
                </p>
                <footer className="text-sm text-muted-foreground">
                  <strong className="text-primary">— Freddy</strong>, Founding Partner
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
