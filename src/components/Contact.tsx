import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "pkg739895@gmail.com",
      href: "mailto:pkg739895@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91-9305343440",
      href: "tel:+919305343440"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Greater Noida, UP",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input placeholder="Your name" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" className="bg-background/50" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="Project discussion" className="bg-background/50" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  className="bg-background/50 min-h-32"
                />
              </div>
              
              <Button className="w-full hero-gradient text-lg py-6">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you're looking for a full-stack developer, AI/ML enthusiast, or someone 
                who can solve complex problems through code, I'd love to connect and discuss how we can work together.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 rounded-lg glass-effect hover:card-glow transition-smooth group"
                >
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-smooth mr-4">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{info.title}</div>
                    <div className="text-muted-foreground">{info.content}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;