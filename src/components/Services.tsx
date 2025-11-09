import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gavel, DollarSign, TrendingUp, FileText, Briefcase, Scale, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Gavel,
    title: "Litigation Work",
    description: "Resolving disputes through the court system – from initial claims to final judgment or settlement.",
    color: "from-blue-600 to-blue-400",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    features: ["Court Representation", "Case Strategy", "Legal Documentation"]
  },
  {
    icon: DollarSign,
    title: "Debt Collection",
    description: "Legal and administrative actions to recover money owed by debtors, both amicably and through litigation.",
    color: "from-green-600 to-green-400",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    features: ["Amicable Settlement", "Legal Action", "Asset Recovery"]
  },
  {
    icon: TrendingUp,
    title: "Financial Restructuring",
    description: "Legal and strategic reorganization of debts, assets, or capital for companies or individuals.",
    color: "from-purple-600 to-purple-400",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    features: ["Debt Restructuring", "Asset Optimization", "Capital Reorganization"]
  },
  {
    icon: FileText,
    title: "Bankruptcy / Insolvency",
    description: "Legal and administrative handling of financial collapse, from declaration to resolution.",
    color: "from-red-600 to-red-400",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    features: ["Bankruptcy Filing", "Asset Liquidation", "Creditor Protection"]
  },
  {
    icon: Briefcase,
    title: "Executive Personal Assistant",
    description: "Professional executive support ensuring top-level efficiency and strategic focus.",
    color: "from-orange-600 to-orange-400",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    features: ["Executive Support", "Strategic Planning", "Business Coordination"]
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mr-4" />
            <Scale className="h-8 w-8 text-primary" />
            <div className="w-12 h-1 bg-gradient-to-r from-primary-light to-primary rounded-full ml-4" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
            Our <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Legal Services</span>
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-full" />
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal expertise across five core practice areas, delivering strategic solutions with precision and professionalism
          </p>
          
          {/* Service Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-gray-600">Practice Areas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-light">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm text-gray-600">Cases Handled</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Background Pattern */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.bgColor} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              {/* Icon Container */}
              <div className="relative pt-8 px-8">
                <div className="flex justify-center mb-6">
                  <div className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {/* Icon Background Effects */}
                    <div className="absolute inset-0 bg-white/20 rounded-3xl backdrop-blur-sm" />
                    <div className="absolute -inset-2 bg-gradient-to-br opacity-30 blur-lg" />
                    
                    {/* Main Icon */}
                    <service.icon className="h-12 w-12 text-white relative z-10" strokeWidth={2} />
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${service.color}`} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative px-8 pb-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.color}`} />
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="text-center">
                  <button className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group-hover:translate-y-1`}>
                    Learn More
                  </button>
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              {/* Bottom Border */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              Ready to Discuss Your Legal Needs?
            </h3>
            <p className="text-lg text-gray-600">
              Our experienced team is here to provide strategic legal solutions tailored to your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <span>Schedule a Consultation</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
