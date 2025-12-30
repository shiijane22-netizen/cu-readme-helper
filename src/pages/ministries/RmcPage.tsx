import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { FileText, Camera, Archive, PenLine, BookOpen, Star, ClipboardList } from "lucide-react";

const responsibilities = [
  {
    name: "Documentation",
    description: "Recording and maintaining accurate records of all MUTCU activities and meetings.",
    icon: FileText,
  },
  {
    name: "Photography",
    description: "Capturing and archiving photos from events for historical records.",
    icon: Camera,
  },
  {
    name: "Publications",
    description: "Producing newsletters, reports, and other informational materials.",
    icon: BookOpen,
  },
  {
    name: "Archives",
    description: "Maintaining the historical records and archives of the union.",
    icon: Archive,
  },
];

const outputs = [
  "Weekly activity reports",
  "Event documentation and photos",
  "Annual reports and publications",
  "Meeting minutes and records",
  "Historical archives",
  "Media content management",
];

const RmcPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary/30">
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center text-primary-foreground animate-fade-in-up">
            <ClipboardList className="mx-auto h-16 w-16 text-secondary mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
              Records & Media Committee
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Preserving our history, documenting our journey
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-heading text-primary mb-6">Our Role</h2>
              <p className="text-muted-foreground mb-4">
                The Records and Media Committee (RMC) is responsible for documenting the life 
                and activities of MUTCU. We believe that preserving our history is essential 
                for learning, accountability, and inspiring future generations.
              </p>
              <p className="text-muted-foreground mb-6">
                From taking minutes at meetings to capturing photos at events, from producing 
                publications to managing our archives, RMC ensures that nothing significant 
                goes unrecorded. We are the storytellers of MUTCU's journey.
              </p>
              <Link to="/ministries/join">
                <Button className="bg-secondary text-primary hover:bg-secondary/90">
                  Join RMC
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl p-12 flex items-center justify-center">
                <PenLine className="h-32 w-32 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title">Our Responsibilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responsibilities.map((item) => (
              <div
                key={item.name}
                className="bg-card rounded-2xl p-6 text-center shadow-mutcu-card hover:-translate-y-2 transition-all"
              >
                <item.icon className="mx-auto h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-heading text-primary mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outputs Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="mutcu-section-title text-primary-foreground">What We Produce</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {outputs.map((output, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-4 backdrop-blur"
              >
                <Star className="h-5 w-5 text-secondary shrink-0" />
                <span>{output}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Archive className="mx-auto h-12 w-12 text-secondary mb-4" />
          <h2 className="text-3xl font-heading text-primary mb-4">
            Detail-Oriented and Creative?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you have an eye for detail, a passion for writing, or skills in documentation 
            and media, RMC would love to have you on the team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ministries/join">
              <Button className="bg-secondary text-primary hover:bg-secondary/90">
                Join RMC
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default RmcPage;
