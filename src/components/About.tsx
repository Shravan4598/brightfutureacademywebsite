import { BookOpen, Heart, Users, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Excellence in Education",
      description: "Rigorous academic programs that challenge and inspire students to reach their full potential.",
    },
    {
      icon: Heart,
      title: "Nurturing Environment",
      description: "A caring community where every student feels valued, supported, and encouraged to grow.",
    },
    {
      icon: Users,
      title: "Character Development",
      description: "Building strong moral foundations and leadership skills for tomorrow's changemakers.",
    },
    {
      icon: Target,
      title: "Future-Ready Skills",
      description: "Preparing students with critical thinking, creativity, and technological proficiency.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            About Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Where Learning Meets{" "}
            <span className="text-gradient-gold">Inspiration</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Founded in 1999, Bright Future Academy has been a beacon of educational 
            excellence, shaping young minds with a perfect blend of academic rigor, 
            creative expression, and character building.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-6 shadow-gold group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-primary rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed">
              "To provide an exceptional educational experience that develops the whole child—
              intellectually, socially, emotionally, and ethically—preparing them to become 
              responsible global citizens and lifelong learners who will make a positive 
              impact on the world."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
