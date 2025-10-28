import { Badge } from "@/components/ui/badge";

const About = () => {
  const coreSkills = [
    "Full-Stack Development",
    "UI/UX Design",
    "Cloud Architecture",
    "API Development",
    "Database Design",
    "System Integration"
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in-up">
            About Me
          </h2>
          
          <div className="space-y-8 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating 
              seamless user experiences. With years of experience building web applications, I specialize 
              in transforming complex problems into elegant, intuitive solutions.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines technical expertise with creative thinking, ensuring that every project 
              not only functions flawlessly but also delights users. I believe in writing clean, maintainable 
              code and staying current with the latest technologies and best practices.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Core Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:bg-accent hover:text-white transition-colors duration-300 cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
