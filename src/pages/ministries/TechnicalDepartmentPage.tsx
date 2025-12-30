import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Monitor, Camera, Mic, Wifi, Video, Settings, Star, Lightbulb } from "lucide-react";

const teams = [
  {
    name: "Sound Engineering",
    description: "Managing audio systems for clear and balanced sound during services and events.",
    icon: Mic,
  },
  {
    name: "Visual Production",
    description: "Operating projectors, screens, and visual displays for worship presentations.",
    icon: Monitor,
  },
  {
    name: "Videography",
    description: "Recording and live-streaming services for online audiences.",
    icon: Video,
  },
  {
    name: "Photography",
    description: "Capturing moments from events for documentation and publicity.",
    icon: Camera,
  },
  {
    name: "Lighting",
    description: "Creating the right ambiance through professional lighting design.",
    icon: Lightbulb,
  },
  {
    name: "IT Support",
    description: "Maintaining technical infrastructure and providing IT solutions.",
    icon: Settings,
  },
];

const services = [
  "Live streaming of Sunday services",
  "Audio and visual support for events",
  "Photography and videography",
  "Website and social media management",
  "Technical training workshops",
  "Equipment maintenance",
];

const TechnicalDepartmentPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gradient-to-br from-primary to-primary/70">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-secondary/30 to-transparent" />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center text-primary-foreground animate-fade-in-up">
            <Monitor className="mx-auto h-16 w-16 text-secondary mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
              Technical Department
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Empowering ministry through technology and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 grid grid-cols-3 gap-4">
                <Mic className="h-12 w-12 text-secondary mx-auto" />
                <Monitor className="h-12 w-12 text-secondary mx-auto" />
                <Camera className="h-12 w-12 text-secondary mx-auto" />
                <Video className="h-12 w-12 text-secondary mx-auto" />
                <Wifi className="h-12 w-12 text-secondary mx-auto" />
                <Settings className="h-12 w-12 text-secondary mx-auto" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-heading text-primary mb-6">Behind the Scenes Excellence</h2>
              <p className="text-muted-foreground mb-4">
                The Technical Department is the backbone of MUTCU's multimedia operations. We 
                ensure that every service, event, and program is supported with excellent 
                technical production that enhances the worship experience.
              </p>
              <p className="text-muted-foreground mb-6">
                From sound engineering to live streaming, from photography to IT support, our 
                team of dedicated technicians work behind the scenes to make ministry happen. 
                We believe in using technology as a tool for advancing God's kingdom.
              </p>
              <Link to="/ministries/join">
                <Button className="bg-secondary text-primary hover:bg-secondary/90">
                  Join Tech Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title">Our Teams</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <div
                key={team.name}
                className="bg-card rounded-2xl p-6 shadow-mutcu-card hover:-translate-y-2 transition-all"
              >
                <team.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-heading text-primary mb-2">{team.name}</h3>
                <p className="text-sm text-muted-foreground">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="mutcu-section-title text-primary-foreground">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-4 backdrop-blur"
              >
                <Star className="h-5 w-5 text-secondary shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Wifi className="mx-auto h-12 w-12 text-secondary mb-4" />
          <h2 className="text-3xl font-heading text-primary mb-4">
            Tech-Savvy for God's Glory?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you have skills in audio, video, photography, IT, or any technical field, 
            we invite you to use your talents for the Kingdom. Training is provided!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ministries/join">
              <Button className="bg-secondary text-primary hover:bg-secondary/90">
                Join Tech Department
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TechnicalDepartmentPage;
