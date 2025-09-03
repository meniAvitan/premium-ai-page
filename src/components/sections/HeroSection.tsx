import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, FileText, Code, ImageIcon, Video } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const FloatingIcon = ({ icon: Icon, label, className }: { icon: any, label: string, className: string }) => (
  <div className={`absolute ${className} float`}>
    <div className="glass rounded-2xl p-4 shadow-soft">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <span className="text-sm font-medium text-foreground">{label}</span>
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="hero-section relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <Badge variant="secondary" className="glass px-6 py-2 text-sm">
              ⭐ Powerful AI Kit for AI Products, Tools and Startups
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient">AI UI Kit</span> and Templates for{" "}
              <br className="hidden sm:block" />
              Tailwind CSS and Figma
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform Your Vision into Reality: Unleash Your Creativity and Build 
              Cutting-Edge AI Startups, Tools, and Products with Our Powerful AI Agent 
              UI Kit, Designed to Streamline Development and AI Innovation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 px-8 py-4 text-lg interactive-hover"
            >
              View Tools
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="flex items-center space-x-2 px-8 py-4 text-lg glass hover:bg-white/20"
            >
              <Play className="w-5 h-5" />
              <span>Watch Intro</span>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="AI Agent Dashboard Interface" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Floating Icons */}
          <FloatingIcon 
            icon={FileText} 
            label="Text Generator" 
            className="top-1/3 left-8 lg:left-16 float-delayed"
          />
          <FloatingIcon 
            icon={ImageIcon} 
            label="Image Generator" 
            className="top-1/4 right-8 lg:right-16 float"
          />
          <FloatingIcon 
            icon={Code} 
            label="Code Generator" 
            className="top-2/3 left-12 lg:left-24 float"
          />
          <FloatingIcon 
            icon={Video} 
            label="Video Generator" 
            className="top-1/2 right-12 lg:right-24 float-delayed"
          />
        </div>
      </div>

      {/* Brands Section */}
      <div className="relative z-10 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground mb-8">
            Trusted by worlds largest companies including...
          </p>
          <div className="flex items-center justify-center space-x-8 lg:space-x-12 opacity-60">
            {/* Brand placeholders - in a real implementation these would be actual brand logos */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-24 h-8 bg-muted-foreground/20 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;