import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow",
    avatar: "SC",
    rating: 5,
    content: "This AI UI kit completely transformed our development process. We launched our AI product 3x faster than expected. The quality and attention to detail is outstanding."
  },
  {
    name: "Marcus Johnson", 
    role: "Lead Developer",
    company: "InnovateLab",
    avatar: "MJ",
    rating: 5,
    content: "The components are beautifully designed and incredibly flexible. Perfect for modern AI applications. Our team productivity increased dramatically."
  },
  {
    name: "Emma Rodriguez",
    role: "UI/UX Designer", 
    company: "DesignFirst",
    avatar: "ER",
    rating: 5,
    content: "Finally, a design system that understands AI products. The color palette and animations are perfect for creating that premium, futuristic feel."
  },
  {
    name: "David Park",
    role: "CTO",
    company: "NextGen AI",
    avatar: "DP", 
    rating: 5,
    content: "We've tried many UI kits, but this one stands out. The dark mode implementation is flawless, and the responsive design works perfectly across all devices."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of developers and designers who trust our AI UI Kit to build 
            exceptional products. Here's what they have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-card border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-center">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">99%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Premium Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">100+</div>
            <div className="text-sm text-muted-foreground">UI Components</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;