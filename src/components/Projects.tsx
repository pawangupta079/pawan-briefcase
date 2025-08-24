import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FitTab – Fitness Tracking & Workout Analysis App",
      description: "Built with Flask + OpenCV + Mediapipe. Features real-time pose detection, workout tracking, PDF report generation, user profiles, gym locator, and analytics dashboard. Helped users track goals, boosting consistency by 25%.",
      tech: ["Flask", "OpenCV", "Mediapipe", "SQLite", "JavaScript", "HTML/CSS"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      github: "https://github.com/pawangupta079/fittab-health-app",
      live: "https://fittab-2.onrender.com/"
    },
    {
      title: "Movie Recommender System",
      description: "Content-based recommendation system using cosine similarity on TMDB dataset. Responsive web app with backend REST API integration for personalized movie suggestions.",
      tech: ["Python", "Scikit-learn", "Pandas", "Streamlit", "REST API"],
      image: "https://images.unsplash.com/photo-1489599735734-79b4169717b1?w=500&h=300&fit=crop",
      github: "https://github.com/pawangupta079/Movies-Recommendation-System-End-to-end",
      live: "https://movies-recommendation-system-end-to-end-kjv2op4khfuhu6appngsnt.streamlit.app/"
    },
    {
      title: "My Offline Tutor",
      description: "Platform connecting students with expert tutors for personalized learning. Features tutor search, interactive sessions, profile management, and secure payment integration for offline tutoring.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      github: "https://github.com/pawangupta079/My_Offline_Tutor",
      live: "#"
    },
    {
      title: "NurtureNest Pregnancy Tracker",
      description: "Intuitive pregnancy symptom tracker with ML-powered insights. Features daily symptom logging, progress visualization, customizable tracking, and data export for healthcare providers.",
      tech: ["React.js", "Flask", "Python", "MongoDB", "Machine Learning", "Material-UI"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Tic Tac Toe Game",
      description: "Interactive Tic Tac Toe game with clean UI and smooth gameplay experience. Built with modern web technologies for responsive design across all devices.",
      tech: ["JavaScript", "HTML", "CSS", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop",
      github: "https://github.com/pawangupta079/tic-tac-toe-game",
      live: "https://amazing-rolypoly-10ee2c.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web technologies and creative problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-effect hover:card-glow transition-smooth group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.live !== "#" && (
                    <Button size="sm" className="flex-1 hero-gradient" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;