import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Leading development of enterprise web applications using React, Node.js, and Azure cloud services. Mentoring junior developers and architecting scalable solutions.",
    achievements: [
      "Increased application performance by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipeline"
    ]
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client-facing web applications. Collaborated with designers to create intuitive user experiences.",
    achievements: [
      "Delivered 15+ projects on time",
      "Reduced bug reports by 60%",
      "Improved code review process"
    ]
  },
  {
    type: "work",
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2018 - 2019",
    description: "Built responsive web interfaces and RESTful APIs. Participated in agile development processes and learned modern development practices.",
    achievements: [
      "Shipped first production feature within 2 weeks",
      "Contributed to 20+ features",
      "Maintained 95% code coverage"
    ]
  }
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Technology",
    period: "2016 - 2018",
    description: "Specialized in Software Engineering and Cloud Computing. Graduated with honors."
  },
  {
    degree: "Bachelor of Science in Information Technology",
    school: "State University",
    period: "2012 - 2016",
    description: "Foundation in computer science, algorithms, and software development principles."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Work Experience */}
        <div className="mb-16">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Work Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center animate-fade-in-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className="p-6 hover:shadow-custom-xl transition-smooth gradient-card border-0">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <span className="ml-3 text-sm font-medium text-primary">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-custom-xl transition-smooth gradient-card border-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <GraduationCap className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="ml-3 text-sm font-medium text-secondary">{edu.period}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground font-medium mb-3">{edu.school}</p>
                <p className="text-muted-foreground">{edu.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
