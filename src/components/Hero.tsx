import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bright Future Academy Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Admissions Open for 2025-2026
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in [animation-delay:100ms]">
            Building{" "}
            <span className="text-gradient-gold">Bright Futures</span>
            <br />
            One Student at a Time
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed animate-fade-in [animation-delay:200ms]">
            At Bright Future Academy, we nurture curious minds and build confident 
            leaders through innovative education, personalized attention, and a 
            supportive community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in [animation-delay:300ms]">
            <Button variant="gold" size="xl">
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              <Play className="w-5 h-5" />
              Take a Virtual Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-in [animation-delay:400ms]">
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-secondary">
                25+
              </p>
              <p className="text-primary-foreground/70 text-sm mt-1">
                Years of Excellence
              </p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-secondary">
                500+
              </p>
              <p className="text-primary-foreground/70 text-sm mt-1">
                Happy Students
              </p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-secondary">
                98%
              </p>
              <p className="text-primary-foreground/70 text-sm mt-1">
                Success Rate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
