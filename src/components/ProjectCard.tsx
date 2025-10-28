import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  role: string;
  outcome: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  role,
  outcome,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6 space-y-4">
        <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-3">
          <div>
            <span className="text-sm font-semibold text-foreground">Role: </span>
            <span className="text-sm text-muted-foreground">{role}</span>
          </div>
          
          <div>
            <span className="text-sm font-semibold text-foreground">Impact: </span>
            <span className="text-sm text-accent">{outcome}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 pt-4">
          {liveUrl && (
            <Button 
              size="sm" 
              className="bg-accent hover:bg-accent/90"
              asChild
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          
          {githubUrl && (
            <Button 
              size="sm" 
              variant="outline"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
