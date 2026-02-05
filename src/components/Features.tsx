import { 
  Users, 
  Award, 
  BookOpen, 
  Globe, 
  Shield, 
  Sparkles 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Maximum 20 students per class ensures personalized attention and meaningful teacher-student relationships.",
    },
    {
      icon: Award,
      title: "Qualified Faculty",
      description: "Our experienced educators are passionate about teaching and committed to student success.",
    },
    {
      icon: BookOpen,
      title: "Modern Curriculum",
      description: "Research-based teaching methods combined with innovative learning technologies.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students to thrive in a diverse, interconnected world with cultural awareness.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "State-of-the-art security and a nurturing atmosphere where every child feels protected.",
    },
    {
      icon: Sparkles,
      title: "Holistic Development",
      description: "Balanced focus on academics, arts, athletics, and character to develop well-rounded individuals.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Bright Future{" "}
            <span className="text-gradient-gold">Difference</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Discover what makes our academy the preferred choice for families 
            seeking exceptional education and nurturing growth for their children.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
            >
              <div className="bg-card rounded-2xl p-8 h-full shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 hover:border-secondary/30">
                {/* Icon */}
                <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-gold group-hover:shadow-gold transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-card rounded-2xl p-8 sm:p-12 shadow-card max-w-3xl">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-secondary fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote className="font-display text-xl sm:text-2xl text-foreground italic mb-6 leading-relaxed">
              "Bright Future Academy has been an incredible journey for our daughter. 
              The teachers truly care, and we've seen remarkable growth in her 
              confidence and love for learning."
            </blockquote>
            <div>
              <p className="font-semibold text-foreground">Sarah Johnson</p>
              <p className="text-muted-foreground text-sm">Parent of Grade 4 Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
