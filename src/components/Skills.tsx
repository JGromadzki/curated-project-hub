import { Code, Database, Layout, Zap, ShieldCheck, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Layout,
      title: "BI & Visualization",
      skills: ["Power BI", "Tableau", "Data Storytelling", "Dashboard Design"],
    },
    {
      icon: Database,
      title: "Data Engineering",
      skills: ["SQL", "Snowflake", "Azure", "Data Pipelines"],
    },
    {
      icon: Code,
      title: "Programming & Automation",
      skills: ["Python", "APIs", "Power Automate", "ETL"],
    },
    {
      icon: Zap,
      title: "AI & Data Science",
      skills: ["LLM Integration", "Machine Learning", "Predictive Models"],
    },
    {
      icon: ShieldCheck,
      title: "Data Governance",
      skills: ["Data Quality", "Master Data", "Process Optimization"],
    },
    {
      icon: Briefcase,
      title: "Industry Expertise",
      skills: ["Aviation", "Supply Chain", "FMCG", "Manufacturing"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Technical Skills
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and methodologies I leverage daily
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fade-in">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border/50 hover:border-accent/30 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 md:p-8">
                  
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                      <category.icon className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  {/* Skills List */}
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li 
                        key={skill}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-2 group/item"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover/item:bg-accent transition-colors duration-300" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
