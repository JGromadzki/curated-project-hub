import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <Card className="animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a 
                        href="mailto:contact@jakubgromadzki.com"
                        className="text-muted-foreground hover:text-accent transition-colors duration-200"
                      >
                        contact@jakubgromadzki.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-muted-foreground">
                        Dubai, UAE
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <p className="font-medium mb-3">Connect with me</p>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-accent hover:text-white hover:border-accent transition-colors duration-300"
                        asChild
                      >
                        <a href="https://github.com/jakubgromadzki" target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-accent hover:text-white hover:border-accent transition-colors duration-300"
                        asChild
                      >
                        <a href="https://linkedin.com/in/jakubgromadzki" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 bg-accent/5 rounded-lg border border-accent/20">
                    <p className="text-sm font-semibold text-accent mb-2">Availability Status</p>
                    <p className="text-foreground font-medium mb-3">Open to opportunities</p>
                    <p className="text-sm text-muted-foreground">
                      Open to consulting opportunities and collaboration on analytics, BI, and AI engineering projects. 
                      Let's discuss how data can transform your business!
                    </p>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="mailto:contact@jakubgromadzki.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send me an email
                    </a>
                  </Button>
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
