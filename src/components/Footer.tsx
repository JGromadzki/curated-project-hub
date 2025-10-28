const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Portfolio. Built with React & Tailwind CSS.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a 
              href="#about" 
              className="hover:text-accent transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="hover:text-accent transition-colors duration-200"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="hover:text-accent transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
