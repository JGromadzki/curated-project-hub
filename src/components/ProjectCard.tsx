import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  role: string;
  outcome: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  role,
  outcome,
}: ProjectCardProps) => {
  return (
    <Card className="group h-full overflow-hidden border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-500 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-0">
        
        {/* Project Image */}
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Role Badge */}
          <div className="absolute top-4 right-4">
            <Badge 
              variant="secondary" 
              className="bg-white/95 backdrop-blur-sm text-foreground shadow-lg border-0"
            >
              {role}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300 flex items-start justify-between gap-2">
            {title}
            <ArrowUpRight className="h-5 w-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Outcome */}
          <div className="pt-2 pb-3">
            <p className="text-sm font-medium text-accent/90">
              {outcome}
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs font-medium border-border/50 hover:bg-accent/10 hover:border-accent/30 transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
