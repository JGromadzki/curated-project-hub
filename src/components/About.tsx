import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

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
          
          <div className="flex flex-col md:flex-row gap-8 mb-8 animate-fade-in">
            <div className="md:w-1/3">
              <img 
                src={profilePhoto} 
                alt="Jakub Gromadzki" 
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            
            <div className="md:w-2/3 space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Analytics and business intelligence expert with 10+ years of cross-sector experience spanning FMCG, 
                Manufacturing, Logistics, Supply Chain Management, and Aviation industries.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in managing end-to-end analytical projects including data engineering, data governance, 
                automation, data science, AI engineering, and LLM integration projects within organizations.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proficient in full stack development: APIs, SQL, NoSQL, Python, Power BI, Azure, 
                Power Automate. I combine analytical rigor with technical expertise to deliver 
                impactful business solutions.
              </p>
            </div>
          </div>
          
          <div className="mt-12 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-8 w-8 text-accent" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-6 ml-11">
              <div>
                <h4 className="text-lg font-semibold text-foreground">Master's Degree in Computer Science and Econometrics</h4>
                <p className="text-muted-foreground">Poznan University of Economics and Business</p>
                <p className="text-sm text-muted-foreground">2016 - 2018</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground">Bachelor's Degree in Supply Chain Management</h4>
                <p className="text-muted-foreground">Poznan University of Economics and Business</p>
                <p className="text-sm text-muted-foreground">2013 - 2016</p>
              </div>
            </div>
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
