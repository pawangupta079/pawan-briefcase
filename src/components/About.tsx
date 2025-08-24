import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["Python", "JavaScript", "C++", "SQL", "Java", "C#"]
    },
    {
      icon: Palette,
      title: "Frontend",
      skills: ["React.js", "HTML", "CSS", "JavaScript"]
    },
    {
      icon: Zap,
      title: "Backend & Tools",
      skills: ["Flask", "Node.js", "Express.js", "MongoDB", "MySQL", "Git", "GitHub"]
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-card/50 rounded-lg p-6 glass-effect">
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">B.Tech, CSE (AI & ML)</h4>
                  <p className="text-muted-foreground">NIET Greater Noida (2022–2026) — CGPA: 8.18/10</p>
                </div>
                <div>
                  <h4 className="font-medium">UP Board 12th</h4>
                  <p className="text-muted-foreground">85.2% (2021)</p>
                </div>
                <div>
                  <h4 className="font-medium">UP Board 10th</h4>
                  <p className="text-muted-foreground">91% (District Topper, Top 10)</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-card/50 rounded-lg p-6 glass-effect">
              <h3 className="text-2xl font-semibold mb-4">Experience</h3>
              <div>
                <h4 className="font-medium">Data Science & ML Intern</h4>
                <p className="text-primary font-medium">YBI Foundation (Sept–Oct 2023)</p>
                <ul className="text-muted-foreground mt-2 space-y-1">
                  <li>• Built sentiment analysis model (85% accuracy) using Python & Scikit-learn</li>
                  <li>• Optimized pipelines → reduced processing time by 15%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass-effect hover:card-glow transition-smooth group cursor-pointer"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;