import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const features = [
  "100+ Premium UI Components",
  "Dark & Light Mode Support", 
  "Fully Responsive Design",
  "Figma & Tailwind CSS",
  "Premium Support Included",
  "Lifetime Updates"
];

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <Badge variant="secondary" className="glass px-6 py-2 text-sm">
              🚀 Ready to Build Something Amazing?
            </Badge>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Start Building Your 
            <span className="text-gradient"> AI Product </span>
            Today
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers and designers who are already using our AI UI Kit 
            to create stunning, professional-grade AI applications. Get started in minutes.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 text-left">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 shadow-soft hover:shadow-glow group"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 glass-card hover:bg-accent"
            >
              View Live Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by developers at leading companies
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {/* Company logos placeholders */}
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-20 h-6 bg-muted-foreground/20 rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="mt-16 max-w-md mx-auto">
          <div className="glass-card rounded-2xl p-8 shadow-glow border-2 border-primary/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium Access</h3>
              <div className="flex items-baseline justify-center space-x-2 mb-6">
                <span className="text-4xl font-bold text-gradient">$79</span>
                <span className="text-muted-foreground line-through">$159</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                  50% OFF
                </Badge>
              </div>
              <Button className="w-full shadow-soft hover:shadow-glow">
                Get Premium Access
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                One-time payment • Lifetime access • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default CTASection;