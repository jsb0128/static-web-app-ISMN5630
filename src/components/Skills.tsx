import { Card } from "@/components/ui/card";
import { Code2, Palette, Database, Cloud, Smartphone, GitBranch } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
    color: "text-primary"
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    color: "text-secondary"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["Azure", "AWS", "Docker", "Kubernetes", "CI/CD"],
    color: "text-accent"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"],
    color: "text-primary"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: ["React Native", "Flutter", "iOS", "Android", "Progressive Web Apps"],
    color: "text-secondary"
  },
  {
    icon: GitBranch,
    title: "Tools & Workflows",
    skills: ["Git", "GitHub", "Agile", "Jira", "VS Code"],
    color: "text-accent"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-custom-xl transition-smooth gradient-card border-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-primary/10 ${skill.color}`}>
                  <skill.icon className="h-6 w-6" />
                </div>
                <h3 className="ml-3 text-xl font-semibold text-foreground">{skill.title}</h3>
              </div>
              <ul className="space-y-2">
                {skill.skills.map((item, i) => (
                  <li key={i} className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
