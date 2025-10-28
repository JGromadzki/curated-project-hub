import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Let's Connect
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Open to consulting opportunities and collaboration
            </p>
          </div>
          
          <Card className="animate-fade-in border-border/50 shadow-xl bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10">
                
                {/* Contact Information */}
                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold">Get In Touch</h3>
                  
                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent transition-all duration-300">
                      <Mail className="h-5 w-5 text-accent group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-sm text-muted-foreground">Email</p>
                      <a 
                        href="mailto:contact@jakubgromadzki.com"
                        className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
                      >
                        contact@jakubgromadzki.com
                      </a>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent transition-all duration-300">
                      <MapPin className="h-5 w-5 text-accent group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground font-medium">
                        Dubai, UAE
                      </p>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="pt-4">
                    <p className="font-medium mb-4 text-sm text-muted-foreground">Social</p>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 hover:scale-110"
                        asChild
                      >
                        <a 
                          href="https://github.com/jakubgromadzki" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="GitHub Profile"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 hover:scale-110"
                        asChild
                      >
                        <a 
                          href="https://linkedin.com/in/jakubgromadzki" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="LinkedIn Profile"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Availability & CTA */}
                <div className="space-y-6">
                  
                  {/* Availability Card */}
                  <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <p className="text-sm font-semibold text-accent">Available for Projects</p>
                    </div>
                    <p className="text-foreground font-medium mb-3">
                      Open to opportunities
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Consulting on analytics, BI, and AI engineering projects. 
                      Let's discuss how data can transform your business.
                    </p>
                  </div>
                  
                  {/* Primary CTA */}
                  <Button 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                    asChild
                  >
                    <a href="mailto:contact@jakubgromadzki.com">
                      <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Send me an email
                    </a>
                  </Button>

                  {/* Alternative Contact */}
                  <p className="text-sm text-center text-muted-foreground">
                    or message me on{" "}
                    <a 
                      href="https://linkedin.com/in/jakubgromadzki" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium"
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
