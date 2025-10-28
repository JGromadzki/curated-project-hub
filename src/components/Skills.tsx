import { Code, Database, Layout, Server, Smartphone, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Layout,
      title: "BI & Visualization",
      skills: ["Power BI", "Tableau", "D3.js", "Data Storytelling", "Dashboard Design"],
    },
    {
      icon: Database,
      title: "Data Engineering",
      skills: ["SQL", "NoSQL", "Snowflake", "Azure", "Data Pipelines"],
    },
    {
      icon: Code,
      title: "Programming",
      skills: ["Python", "JavaScript", "React", "APIs", "Power Automate"],
    },
    {
      icon: Zap,
      title: "AI & Data Science",
      skills: ["LLM Integration", "ML Forecasting", "NLP", "Predictive Models", "AI Engineering"],
    },
    {
      icon: Server,
      title: "Data Governance",
      skills: ["Data Quality", "Master Data", "Automation", "ETL", "Process Optimization"],
    },
    {
      icon: Smartphone,
      title: "Domain Expertise",
      skills: ["Aviation", "Supply Chain", "FMCG", "Manufacturing", "Logistics"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with regularly
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {skillCategories.map((category) => (
              <Card 
                key={category.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <category.icon className="h-6 w-6 text-accent group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li 
                        key={skill}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-default"
                      >
                        • {skill}
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
