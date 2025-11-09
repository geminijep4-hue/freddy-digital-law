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
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-primary rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive legal solutions tailored to your unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow group cursor-pointer"
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
