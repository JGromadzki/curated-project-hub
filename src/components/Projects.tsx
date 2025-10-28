import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution with real-time inventory management and seamless payment integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      role: "Lead Full-Stack Developer",
      outcome: "Increased conversion rate by 45%",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Project Management Tool",
      description: "Intuitive collaboration platform helping teams streamline workflows and boost productivity with real-time updates.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      technologies: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
      role: "Frontend Developer",
      outcome: "20k+ active users in first month",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform with customizable widgets and advanced filtering capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      technologies: ["Next.js", "D3.js", "Python", "Docker"],
      role: "Full-Stack Developer",
      outcome: "Reduced data processing time by 60%",
      githubUrl: "https://github.com",
    },
    {
      title: "Social Media App",
      description: "Engaging social platform featuring real-time messaging, content sharing, and community building tools.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      technologies: ["React Native", "GraphQL", "MongoDB", "Redis"],
      role: "Mobile Developer",
      outcome: "100k+ downloads in 3 months",
      liveUrl: "https://example.com",
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
