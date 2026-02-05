import { Button } from "@/components/ui/button";
import { ArrowRight, Baby, Backpack, GraduationCap, Palette, Code, Trophy } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Baby,
      title: "Early Childhood",
      ages: "Ages 3-5",
      description: "Play-based learning that sparks curiosity and builds foundational skills.",
      features: ["Creative Play", "Social Skills", "Early Literacy"],
      color: "bg-sage/20",
      iconColor: "text-sage",
    },
    {
      icon: Backpack,
      title: "Elementary School",
      ages: "Grades K-5",
      description: "Comprehensive curriculum fostering academic excellence and creativity.",
      features: ["Core Subjects", "Arts & Music", "Physical Education"],
      color: "bg-secondary/20",
      iconColor: "text-secondary",
    },
    {
      icon: GraduationCap,
      title: "Middle School",
      ages: "Grades 6-10",
      description: "Challenging academics with personalized guidance for adolescent growth.",
      features: ["Advanced Studies", "Leadership", "Career Exploration"],
      color: "bg-primary/10",
      iconColor: "text-primary",
    },
  ];

  const extras = [
    { icon: Palette, name: "Arts Program" },
    { icon: Code, name: "STEM Lab" },
    { icon: Trophy, name: "Sports Academy" },
  ];

  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Programs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Academic Excellence at{" "}
            <span className="text-gradient-gold">Every Level</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From early learners to middle schoolers, our carefully designed programs 
            cater to each developmental stage with age-appropriate challenges and support.
          </p>
        </div>

        {/* Programs Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Card Header */}
              <div className={`${program.color} p-8`}>
                <div className={`w-16 h-16 bg-card rounded-2xl flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-transform`}>
                  <program.icon className={`w-8 h-8 ${program.iconColor}`} />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  {program.title}
                </h3>
                <p className="text-muted-foreground font-medium">{program.ages}</p>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground">
                      <span className="w-2 h-2 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Programs */}
        <div className="bg-muted rounded-2xl p-8 sm:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Enrichment Programs
              </h3>
              <p className="text-muted-foreground">
                Beyond academics, explore your passions with our specialized programs.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {extras.map((extra) => (
                <div
                  key={extra.name}
                  className="flex items-center gap-3 bg-card px-6 py-3 rounded-full shadow-soft"
                >
                  <extra.icon className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-foreground">{extra.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
