import { Mail, Linkedin } from "lucide-react";

import facultyPrincipal from "@/assets/faculty-principal.jpeg";
import facultyScience from "@/assets/faculty-science.jpeg";
import facultyEnglish from "@/assets/faculty-english.jpg";
import facultyMath from "@/assets/faculty-math.jpeg";
import facultyArt from "@/assets/faculty-art.jpg";
import facultyMath1 from "@/assets/faculty-pe.jpg";
import facultyPe1 from "@/assets/faculty-pe1.jpg";
import facultyPe2 from "@/assets/faculty-pe2.jpg";


const Faculty = () => {
  const facultyMembers = [
    {
      image: facultyPrincipal,
      name: "Raj Shekhar",
      role: "Director",
      department: "Administration and Leadership",
      credentials: "Bachelor of Science in Chemistry",
      experience: "10+ years in education",
      quote: "Every child has the potential to shine.",
    },
    {
      image: facultyScience,
      name: "Ganga Rani",
      role: "Principal",
      department: "Teaching and Curriculum Development",
      credentials: "M.A. and B.Ed. in Hindi",
      experience: "7 years teaching experience",
      quote: "Science is about asking the right questions.",
    },
    {
      image: facultyEnglish,
      name: "Ajit Kumar Ray",
      role: "English Teacher",
      department: "Language Arts and Teaching",
      credentials: "Bachelor of Arts in English",
      experience: "5 years teaching experience",
      quote: "Literature opens windows to the world.",
    },
    {
      image: facultyMath1,
      name: "Pallavi Kumari",
      role: "Mathematics Teacher",
      department: "Mathematics",
      credentials: "Bachelor of Arts in Economics",
      experience: "2 years teaching experience",
      quote: "Math is the language of the universe.",
    },
    {
      image: facultyArt,
      name: "Hemlata Devi",
      role: "Hindi Teacher",
      department: "Visual Arts and Teaching",
      credentials: "Intermediate of Arts and Diploma in Elementary Education(D.El.Ed)",
      experience: "4 years teaching experience",
      quote: "Creativity is intelligence having fun.",
    },
    {
      image: facultyMath,
      name: "Pradeep Kumar Pandey ",
      role: "Maths Teacher",
      department: "Athletics and Teaching",
      credentials: "Bachelor of Commerce + Bachelor of Education (Accountancy)",
      experience: "7 years teaching experience",
      quote: "A healthy body nurtures a healthy mind.",
    },
    {
      image: facultyPe1,
      name: "Shankar Kumar Yadav",
      role: "Social Science Teacher",
      department: "Teaching",
      credentials: "B.A. (Bachelor of Arts) in Geography and D.El.Ed (Diploma in Elementary Education) ",
      experience: "2 years coaching experience",
      quote: "Science is about asking the right questions.",
    },
    {
      image: facultyPe2,
      name: "Shruti Kumari",
      role: "Science Teacher",
      department: "Science",
      credentials: "Intermediate of Science and Diploma in Elementary Education(D.El.Ed)",
      experience: "1 year coaching experience",
      quote: "A healthy body nurtures a healthy mind.",
    },
  ];

  return (
    <section id="faculty" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our{" "}
            <span className="text-gradient-gold">Dedicated Faculty</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our passionate educators bring years of experience, advanced degrees, 
            and a genuine love for teaching to inspire and guide every student.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-[4/5]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-primary-foreground/90 italic text-sm">
                    "{member.quote}"
                  </p>
                </div>
                {/* Department Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-secondary/90 text-primary text-xs font-semibold rounded-full">
                    {member.department}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium text-sm mb-3">
                  {member.role}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    <span className="text-muted-foreground text-sm">
                      {member.credentials}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-muted-foreground text-sm">
                      {member.experience}
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-2 pt-4 border-t border-border">
                  <button className="w-9 h-9 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card rounded-2xl p-8 sm:p-10 shadow-card">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Join Our Team
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg">
              We're always looking for passionate educators who share our commitment 
              to excellence and student success.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-gold to-gold-dark text-primary font-semibold px-6 py-3 rounded-lg shadow-gold hover:shadow-lg hover:scale-105 transition-all"
            >
              View Open Positions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;