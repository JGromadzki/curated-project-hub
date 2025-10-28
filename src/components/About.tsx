import { Badge } from "@/components/ui/badge";

const About = () => {
  const coreSkills = [
    "End-to-End Analytical Solutions",
    "Data Engineering & Governance",
    "AI & LLM Integration",
    "Business Intelligence Development",
    "Data Science & Automation",
    "Cross-Sector Analytics Expertise"
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
              Analytics and business intelligence expert with 10+ years of cross-sector experience spanning FMCG, 
              Manufacturing, Logistics, Supply Chain Management, and Aviation industries.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in managing end-to-end analytical projects including data engineering, data governance, 
              automation, data science, AI engineering, and LLM integration projects within organizations.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proficient in full stack development: APIs, SQL, NoSQL, Python, Power BI, JavaScript, Azure, 
              Power Automate. With a Bachelor's degree in Supply Chain Management and a Master's degree in 
              Computer Science and Econometrics, I combine analytical rigor with technical expertise to deliver 
              impactful business solutions.
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
