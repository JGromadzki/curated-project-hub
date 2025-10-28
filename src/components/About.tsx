import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
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
    { name: "APIs", icon: "🔌" },
    { name: "Figma", icon: "🎨" },
    { name: "Power Automate", logo: powerAutomateLogo }
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16 animate-fade-in">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2 text-foreground">
                  Hi, I'm <span className="text-accent">Jakub Gromadzki</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Business Intelligence Expert
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Experience</h3>
                  <p className="text-muted-foreground">
                    10+ years of cross-sector experience in FMCG, Manufacturing, Logistics, 
                    Supply Chain Management, and Aviation industries
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Education</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div>
                      <p className="font-medium">Master's in Computer Science and Econometrics</p>
                      <p className="text-sm">Poznan University of Economics and Business (2016-2018)</p>
                    </div>
                    <div>
                      <p className="font-medium">Bachelor's in Supply Chain Management</p>
                      <p className="text-sm">Poznan University of Economics and Business (2013-2016)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/jakub-gromadzki-222965143/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:jk.gromadzki@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img 
                  src={profilePhoto} 
                  alt="Jakub Gromadzki" 
                  className="rounded-lg shadow-lg w-64 h-64 object-cover mx-auto"
                />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Most Used Software</h3>
                <div className="flex flex-wrap gap-3">
                  {softwareIcons.map((software) => (
                    <Badge 
                      key={software.name} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm hover:bg-accent hover:text-white transition-colors duration-300 cursor-default flex items-center"
                    >
                      {software.logo ? (
                        <img src={software.logo} alt={software.name} className="h-5 w-5 mr-2 object-contain" />
                      ) : (
                        <span className="mr-2">{software.icon}</span>
                      )}
                      {software.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                As a Business Intelligence specialist, I believe standard reporting only scratches 
                the surface. The real magic happens when you blend traditional BI with other 
                components to create analytical experiences that help people solve daily problems 
                in a seamless way—and actually enjoy the process.
              </p>
              
              <p>
                I'm drawn to the intersection of technology and human understanding, designing 
                systems that adapt to how people actually think—not how software dictates they should.
              </p>
            </div>

            <div className="text-center">
              <blockquote className="text-xl md:text-2xl italic text-muted-foreground font-light">
                "It was so easy for you to read because it was so hard for me to write."
              </blockquote>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-accent/20 hover:bg-accent/10 backdrop-blur-sm transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
