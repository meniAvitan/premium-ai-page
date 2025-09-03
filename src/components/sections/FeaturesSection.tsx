import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Zap, Shield, Rocket } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Seamless Content Creation AI",
    description: "Let our AI-powered service simplify your content creation process. Start using AI today!",
  },
  {
    icon: Zap,
    title: "Your Ideas, Powered by Our Technology",
    description: "Transform your vision into reality with cutting-edge AI tools and modern design systems.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Built with security in mind, ensuring your data and AI models are protected at all times.",
  },
  {
    icon: Rocket,
    title: "Lightning Fast Performance",
    description: "Experience blazing-fast AI processing with our optimized infrastructure and smart caching.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Core <span className="text-gradient">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Unlock the Potential of Innovation. Discover the Advanced AI
            Tools Transforming Your Ideas into Reality with Unmatched
            Precision and Intelligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;