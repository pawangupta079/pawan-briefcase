import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-20 left-10 w-2 h-2 bg-accent rounded-full opacity-60" />
        <div className="animate-float absolute top-40 right-20 w-1 h-1 bg-primary rounded-full opacity-40" style={{ animationDelay: '2s' }} />
        <div className="animate-float absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent rounded-full opacity-50" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">Creative</span>
            <br />
            Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences through innovative design and cutting-edge technology
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-4">
            <Button variant="ghost" size="sm" className="transition-bounce hover:scale-110">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="transition-bounce hover:scale-110">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="transition-bounce hover:scale-110">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="hero-gradient hover:opacity-90 transition-smooth text-lg px-8 py-6"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8 py-6"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-foreground transition-smooth" />
      </button>
    </section>
  );
};

export default Hero;