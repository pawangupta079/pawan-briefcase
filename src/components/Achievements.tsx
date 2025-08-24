import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, BookOpen } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Winner – Intercollege Coding Hackathon 2024",
      type: "Competition"
    },
    {
      icon: Star,
      title: "Top 10% in University Programming Contest",
      type: "Competition"
    },
    {
      icon: Award,
      title: "350+ Problems Solved on LeetCode",
      type: "Coding"
    },
    {
      icon: Award,
      title: "110+ Problems Solved on GeeksforGeeks",
      type: "Coding"
    },
    {
      icon: Trophy,
      title: "District Topper (Top 10) – UP Board Exam 2019",
      type: "Academic"
    }
  ];

  const scholarships = [
    "JMS Trust Scholarship",
    "HDFC Bank Parivartan Scholarship", 
    "UP Government Scholarship"
  ];

  const certifications = [
    "Full Stack Development (NIET Institute)",
    "Introduction to AI & ML (YBI Foundation)",
    "Data Visualization with Python (YBI Foundation)",
    "Introduction to AI"
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence, coding skills, and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Achievements */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Trophy className="h-6 w-6 text-primary" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth">
                  <div className="p-2 rounded-full bg-primary/10">
                    <achievement.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm leading-tight">{achievement.title}</h4>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {achievement.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Scholarships */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Scholarships
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {scholarships.map((scholarship, index) => (
                <div key={index} className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="font-medium text-sm">{scholarship}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {certifications.map((certification, index) => (
                <div key={index} className="p-3 rounded-lg bg-accent/5 border border-accent/20">
                  <p className="font-medium text-sm">{certification}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;