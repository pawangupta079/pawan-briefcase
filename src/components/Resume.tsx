import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, Github, Linkedin } from "lucide-react";
import resumeImage from "@/assets/resume.png";
import resumePDF from "@/assets/resume.pdf"; // <-- add your PDF here

const Resume = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/pawangupta079",
      color: "hover:text-purple-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pawan-kumar-gupta-592463254/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download my complete resume or connect with me on social platforms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Resume Preview */}
          <Card className="glass-effect overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Eye className="h-6 w-6 text-primary" />
                Resume Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative bg-white rounded-lg p-4 shadow-lg">
                <img
                  src={resumeImage}
                  alt="Pawan Kumar Gupta Resume"
                  className="w-full h-auto rounded border"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded" />
              </div>

              <div className="mt-6 space-y-4">
                <Button className="w-full hero-gradient text-lg py-6" asChild>
                  <a href={resumePDF} download="Pawan_Kumar_Gupta_Resume.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume (PDF)
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="w-full text-lg py-6"
                  asChild
                >
                  <a
                    href={resumePDF}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    View Full Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Social Links & Quick Info */}
          <div className="space-y-8">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-2xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg glass-effect hover:card-glow transition-smooth group"
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth mr-4">
                      <link.icon
                        className={`h-5 w-5 text-primary ${link.color} transition-smooth`}
                      />
                    </div>
                    <div>
                      <div className="font-medium">{link.label}</div>
                      <div className="text-muted-foreground text-sm">
                        @pawangupta079
                      </div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-2xl">Quick Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-primary/5">
                    <div className="text-2xl font-bold text-primary">8.18</div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/5">
                    <div className="text-2xl font-bold text-accent">350+</div>
                    <div className="text-sm text-muted-foreground">LeetCode</div>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/5">
                    <div className="text-2xl font-bold text-accent">3+</div>
                    <div className="text-sm text-muted-foreground">Awards</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Full Stack Developer with expertise in Python, JavaScript,
                  React.js, and Machine Learning. Passionate about creating
                  innovative solutions and contributing to dynamic tech
                  environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
