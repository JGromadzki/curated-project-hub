import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import powerBILogo from "@/assets/Power-BI-Logo.png";
import pythonLogo from "@/assets/Python-logo.png";
import sqlLogo from "@/assets/SQL-logo.jpg";
import powerAutomateLogo from "@/assets/Microsoft_Power_Automate.svg.png";

const About = () => {
  const softwareIcons = [
    { name: "Power BI", logo: powerBILogo },
    { name: "Python", logo: pythonLogo },
    { name: "SQL", logo: sqlLogo },
    { name: "Power Automate", logo: powerAutomateLogo }
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Subtle gradient background - replaces particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Hero Section - Simplified */}
          <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-center animate-fade-in">
            <div className="space-y-6 max-w-2xl">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  Hi, I'm <span className="text-accent">Jakub</span>
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                  Business Intelligence Expert
                </p>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Transforming data into experiences that people actually enjoy using. 
                10+ years making analytics seamless across Aviation, FMCG, and Supply Chain.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 hover:bg-accent/5 transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/jakub-gromadzki-222965143/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:jk.gromadzki@gmail.com"
                  className="p-2 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300"
                  aria-label="Email Contact"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Profile Photo - Improved styling */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/50 to-accent/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <img 
                  src={profilePhoto} 
                  alt="Jakub Gromadzki" 
                  className="relative rounded-2xl shadow-2xl w-72 h-72 md:w-80 md:h-80 object-cover ring-1 ring-border/50"
                />
              </div>
            </div>
          </div>

          {/* Core Expertise - New Section */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-accent">10+</h3>
              <p className="text-sm font-medium text-foreground">Years Experience</p>
              <p className="text-sm text-muted-foreground">Cross-sector BI expertise</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-accent">5+</h3>
              <p className="text-sm font-medium text-foreground">Industries</p>
              <p className="text-sm text-muted-foreground">Aviation, FMCG, Logistics, SCM</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-accent">∞</h3>
              <p className="text-sm font-medium text-foreground">Impact</p>
              <p className="text-sm text-muted-foreground">Data-driven transformation</p>
            </div>
          </div>

          {/* Philosophy Section - Refined */}
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-center">My Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Standard reporting only scratches the surface. I design analytical experiences 
                that adapt to how people think—not how software dictates they should.
              </p>
            </div>

            <div className="text-center py-8">
              <blockquote className="text-xl md:text-2xl italic text-muted-foreground font-light max-w-2xl mx-auto">
                "It was so easy for you to read because it was so hard for me to write."
              </blockquote>
            </div>
          </div>

          {/* Tech Stack - Simplified */}
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h3 className="text-xl font-semibold text-center">Core Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softwareIcons.map((software) => (
                <Badge 
                  key={software.name} 
                  variant="secondary" 
                  className="px-5 py-2.5 text-sm font-medium hover:bg-accent hover:text-white transition-all duration-300 cursor-default flex items-center gap-2 shadow-sm hover:shadow-md"
                >
                  <img 
                    src={software.logo} 
                    alt={`${software.name} logo`} 
                    className="h-4 w-4 object-contain" 
                  />
                  {software.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Education - Collapsible/Summary Version */}
          <div className="max-w-3xl mx-auto pt-8 border-t border-border/50 animate-fade-in">
            <details className="group">
              <summary className="text-lg font-semibold cursor-pointer text-center hover:text-accent transition-colors flex items-center justify-center gap-2">
                Education & Background
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-6 space-y-6 text-center">
                <div>
                  <p className="font-medium text-foreground">Master's in Computer Science and Econometrics</p>
                  <p className="text-sm text-muted-foreground">Poznan University of Economics and Business • 2016-2018</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Bachelor's in Supply Chain Management</p>
                  <p className="text-sm text-muted-foreground">Poznan University of Economics and Business • 2013-2016</p>
                </div>
              </div>
            </details>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
