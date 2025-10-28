import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Airport Operations Analytics Platform",
      description: "Centralized real-time platform delivering critical operational KPIs to C-suite and senior leadership across all airport performance areas.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      technologies: ["Power BI", "Azure", "JavaScript", "React", "SQL"],
      role: "Technical Expert",
      outcome: "Real-time operational intelligence for executive decision-making",
    },
    {
      title: "Passenger Insights & Market Research",
      description: "Automated platform analyzing customer feedback from Dubai International and competitor airports. Replaced vendor solutions with cost-effective internal system.",
      image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80",
      technologies: ["Python", "API Integration", "AI", "NLP"],
      role: "Lead Analyst",
      outcome: "Continuous automated insights with 70% cost reduction",
    },
    {
      title: "Enterprise AI & LLM Integration",
      description: "Led AI adoption initiatives embedding large language models across data infrastructure to automate insights and enhance analytical capabilities enterprise-wide.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      technologies: ["LLM", "Power BI", "Snowflake", "Python", "ML"],
      role: "AI Engineering Lead",
      outcome: "Organization-wide AI integration with team upskilling programs",
    },
    {
      title: "BI Automation & Operations Suite",
      description: "End-to-end solutions for airside operations, CRM, and financial reporting. Replaced manual workflows with automated systems using modern stack.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      technologies: ["Power BI", "Power Automate", "Python", "Azure"],
      role: "Senior Analyst",
      outcome: "Optimized operations with automated regulatory compliance",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world solutions driving business transformation
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 animate-fade-in">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
