import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Airport Operations Centralized Analytical Platform",
      description: "Designed and developed a centralized analytical platform providing executive-level real-time access to critical airport operational KPIs across all key performance areas.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      technologies: ["Power BI", "Azure", "JavaScript", "React", "SQL"],
      role: "Technical Expert",
      outcome: "Delivered real-time operational intelligence to C-suite and senior leadership",
    },
    {
      title: "Passenger Insights and Market Research",
      description: "Developed an automated passenger insights platform that collects and analyzes customer feedback from Dubai International Airport and key competitor airports. Replaced third-party vendor solutions and drastically reduced subscription costs.",
      image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80",
      technologies: ["Python", "API Integration", "AI Engineering", "NLP"],
      role: "Lead Analyst",
      outcome: "Automated market research with continuous, scalable insights",
    },
    {
      title: "AI Engineering & Data Science Development",
      description: "Led enterprise-wide AI and LLM adoption initiatives to enhance analytical capabilities, automate insights generation, and embed artificial intelligence across existing data infrastructure and business processes.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      technologies: ["LLM", "Power BI", "Snowflake", "Python", "ML Forecasting"],
      role: "AI Engineering Lead",
      outcome: "Integrated AI across analytical solutions and delivered team upskilling programs",
    },
    {
      title: "Business Intelligence and Automation Projects",
      description: "Developed end-to-end analytical solutions for airside operations, CRM integration, and financial reporting. Replaced manual workflows with automated systems using Power BI, Power Automate, and Python.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      technologies: ["Power BI", "Power Automate", "Python", "Azure", "Figma"],
      role: "Senior Analyst",
      outcome: "Optimized terminal operations and automated regulatory-compliant reporting",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing diverse technical challenges and creative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
