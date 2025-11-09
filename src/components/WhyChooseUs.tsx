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
    <section id="why-us" className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-primary rounded-full" />
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Excellence, experience, and innovation in every case we handle
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="max-w-5xl mx-auto space-y-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:glow group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary-foreground mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 glass rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <div className="text-sm text-primary-foreground/70">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-sm text-primary-foreground/70">Cases Handled</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-sm text-primary-foreground/70">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-sm text-primary-foreground/70">Client Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
