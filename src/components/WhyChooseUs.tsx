import { CheckCircle2, Scale, Briefcase, Clock, Globe } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle2,
    title: "Strategic Legal Insight",
    description: "Deep understanding of legal frameworks combined with business acumen",
  },
  {
    icon: Scale,
    title: "Proven Courtroom Experience",
    description: "Extensive track record of successful litigation and settlements",
  },
  {
    icon: Briefcase,
    title: "Discreet and Professional",
    description: "Complete confidentiality and professional handling of sensitive matters",
  },
  {
    icon: Clock,
    title: "Efficient and Responsive",
    description: "Rapid response times and streamlined processes for urgent matters",
  },
  {
    icon: Globe,
    title: "Modern Legal Technology",
    description: "Cutting-edge tools and platforms for superior client service",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-primary rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Excellence, experience, and innovation in every case we handle
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card border-2 border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <reason.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="max-w-6xl mx-auto bg-gradient-primary rounded-2xl p-12 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-primary-foreground">15+</div>
              <div className="text-sm md:text-base text-primary-foreground/90 font-medium">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-primary-foreground">500+</div>
              <div className="text-sm md:text-base text-primary-foreground/90 font-medium">Cases Handled</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-primary-foreground">98%</div>
              <div className="text-sm md:text-base text-primary-foreground/90 font-medium">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-bold text-primary-foreground">24/7</div>
              <div className="text-sm md:text-base text-primary-foreground/90 font-medium">Client Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
