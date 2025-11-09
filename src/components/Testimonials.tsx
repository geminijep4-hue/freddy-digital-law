import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, FinTech Group",
    content: "Freddy and Partner handled our complex financial restructuring with utmost professionalism and precision. Their strategic insight saved our company.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Director, Manufacturing Corp",
    content: "Outstanding litigation support. Their courtroom expertise and dedication resulted in a favorable outcome that exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Entrepreneur",
    content: "The debt collection services were handled discreetly and efficiently. Professional, responsive, and results-driven team.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-primary rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow"
            >
              <CardContent className="p-8 space-y-4">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Quote className="h-6 w-6 text-primary-foreground" />
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-accent"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
