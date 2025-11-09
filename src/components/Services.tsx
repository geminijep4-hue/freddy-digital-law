import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gavel, DollarSign, TrendingUp, FileText, Briefcase } from "lucide-react";

const services = [
  {
    icon: Gavel,
    title: "Litigation Work",
    description: "Resolving disputes through the court system – from initial claims to final judgment or settlement.",
    color: "from-primary to-primary-light",
  },
  {
    icon: DollarSign,
    title: "Debt Collection",
    description: "Legal and administrative actions to recover money owed by debtors, both amicably and through litigation.",
    color: "from-primary-light to-primary-glow",
  },
  {
    icon: TrendingUp,
    title: "Financial Restructuring",
    description: "Legal and strategic reorganization of debts, assets, or capital for companies or individuals.",
    color: "from-primary-glow to-primary",
  },
  {
    icon: FileText,
    title: "Bankruptcy / Insolvency",
    description: "Legal and administrative handling of financial collapse, from declaration to resolution.",
    color: "from-primary to-accent",
  },
  {
    icon: Briefcase,
    title: "Executive Personal Assistant",
    description: "Professional executive support ensuring top-level efficiency and strategic focus.",
    color: "from-accent to-primary-light",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Our <span className="gradient-text">Legal Services</span>
          </h2>
          <div className="h-1.5 w-32 mx-auto bg-gradient-primary rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal expertise across five core practice areas, delivering strategic solutions with precision and professionalism
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-2 border-border hover:border-primary transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl group cursor-pointer overflow-hidden relative"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <CardHeader className="space-y-6 pb-4">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <service.icon className="h-10 w-10 text-primary-foreground" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pb-8">
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Need legal assistance? Our team is ready to help.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
