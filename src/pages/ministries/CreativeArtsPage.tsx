import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Paintbrush, Theater, Music2, PenTool, Camera, Shirt, Star, Heart } from "lucide-react";

const artForms = [
  {
    name: "Drama",
    description: "Telling stories that transform through powerful theatrical performances.",
    icon: Theater,
  },
  {
    name: "Dance",
    description: "Expressing worship and praise through choreographed and spontaneous dance.",
    icon: Music2,
  },
  {
    name: "Spoken Word",
    description: "Poetry and spoken word that speaks truth and inspires hearts.",
    icon: PenTool,
  },
  {
    name: "Modelling",
    description: "Using fashion and modelling as a platform for Christ-centered expression.",
    icon: Shirt,
  },
  {
    name: "Film & Media",
    description: "Creating impactful visual content for ministry and evangelism.",
    icon: Camera,
  },
  {
    name: "Visual Arts",
    description: "Painting, drawing, and crafts that glorify God and beautify our spaces.",
    icon: Paintbrush,
  },
];

const events = [
  "Creative Night - Annual showcase of all art forms",
  "Drama Fest - Inter-CU drama competitions",
  "Dance workshops and training sessions",
  "Film screening and discussions",
  "Art exhibitions during major events",
];

const CreativeArtsPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="/assets/images/dance3.jpg"
          alt="Creative Arts Ministry"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center text-primary-foreground animate-fade-in-up">
            <Paintbrush className="mx-auto h-16 w-16 text-secondary mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
              Creative Arts Ministry
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              CREAM - Expressing faith through the beauty of art
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/assets/images/drama2.JPG"
                alt="Drama performance"
                className="rounded-2xl shadow-mutcu-card-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-heading text-primary mb-6">About CREAM</h2>
              <p className="text-muted-foreground mb-4">
                The Creative Arts Ministry (CREAM) is where art meets faith. We believe that 
                creativity is a gift from God, and we use various art forms to worship Him, 
                share the Gospel, and edify the body of Christ.
              </p>
              <p className="text-muted-foreground mb-6">
                From powerful drama productions to inspiring dance performances, from thought-provoking 
                spoken word to beautiful visual arts - we provide a platform for artists to express 
                their faith and develop their talents for God's glory.
              </p>
              <Link to="/ministries/join">
                <Button className="bg-secondary text-primary hover:bg-secondary/90">
                  Join Creative Arts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Art Forms Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title">Our Art Forms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artForms.map((art) => (
              <div
                key={art.name}
                className="bg-card rounded-2xl p-6 shadow-mutcu-card hover:-translate-y-2 transition-all"
              >
                <art.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-heading text-primary mb-2">{art.name}</h3>
                <p className="text-sm text-muted-foreground">{art.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-destructive text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="mutcu-section-title text-primary-foreground">Our Events</h2>
          <div className="space-y-4">
            {events.map((event, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-4 backdrop-blur"
              >
                <Star className="h-5 w-5 text-secondary shrink-0" />
                <span>{event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title">Creative Moments</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/assets/images/Dance1.jpg" alt="Dance" className="rounded-lg h-48 w-full object-cover" />
            <img src="/assets/images/drama2.JPG" alt="Drama" className="rounded-lg h-48 w-full object-cover" />
            <img src="/assets/images/models1.JPG" alt="Modelling" className="rounded-lg h-48 w-full object-cover" />
            <img src="/assets/images/cream1.JPG" alt="CREAM" className="rounded-lg h-48 w-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Heart className="mx-auto h-12 w-12 text-secondary mb-4" />
          <h2 className="text-3xl font-heading text-primary mb-4">
            Unleash Your Creativity
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're an experienced artist or just discovering your creative gifts, 
            CREAM welcomes you. Come and use your talents to glorify God and bless others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ministries/join">
              <Button className="bg-secondary text-primary hover:bg-secondary/90">
                Join CREAM
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CreativeArtsPage;
