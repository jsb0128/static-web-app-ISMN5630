import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} Your Name. All rights reserved.
          </p>
          
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using React & Tailwind CSS
          </p>

          <div className="flex gap-6 text-sm">
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-primary transition-base"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-muted-foreground hover:text-primary transition-base"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-muted-foreground hover:text-primary transition-base"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-base"
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
