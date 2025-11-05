import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-up">
            <Card className="p-8 gradient-card shadow-custom-lg border-0">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I'm a passionate developer with <strong>5+ years of experience</strong> building 
                web applications that combine beautiful design with robust functionality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                My journey in tech started with a curiosity about how things work, which evolved 
                into a love for creating solutions that make people's lives easier.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <Card className="p-6 text-center hover:shadow-custom-lg transition-smooth gradient-card border-0">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-custom-lg transition-smooth gradient-card border-0">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-custom-lg transition-smooth gradient-card border-0">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </Card>
            <Card className="p-6 text-center hover:shadow-custom-lg transition-smooth gradient-card border-0">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Awards Won</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
