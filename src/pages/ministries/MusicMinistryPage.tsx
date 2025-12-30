import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Music, Mic, Guitar, Users, Heart, Star } from "lucide-react";

const teams = [
  {
    name: "Choir",
    description: "Our choir leads congregational worship with powerful harmonies and spirit-filled songs.",
    icon: Users,
  },
  {
    name: "Praise & Worship",
    description: "Leading the congregation into the presence of God through contemporary worship.",
    icon: Mic,
  },
  {
    name: "Band",
    description: "Skilled instrumentalists providing musical accompaniment for all worship sessions.",
    icon: Guitar,
  },
  {
    name: "Instrumentalists",
    description: "Dedicated musicians playing various instruments to enhance worship experience.",
    icon: Music,
  },
];

const activities = [
  "Weekly choir rehearsals every Wednesday",
  "Praise and worship practice sessions",
  "Music workshops and training",
  "Special ministrations at events",
  "Inter-CU music festivals",
  "Recording and production of worship songs",
];

const MusicMinistryPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="/assets/images/music1.jpg"
          alt="Music Ministry"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center text-primary-foreground animate-fade-in-up">
            <Music className="mx-auto h-16 w-16 text-secondary mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
              Music Ministry
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Leading hearts into worship through the gift of music
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-heading text-primary mb-6">About Our Ministry</h2>
              <p className="text-muted-foreground mb-4">
                The Music Ministry is the heartbeat of worship at MUTCU. We believe that music is a 
                powerful tool for expressing our love and devotion to God. Our ministry comprises 
                talented and dedicated individuals who use their musical gifts to lead the congregation 
                into the presence of God.
              </p>
              <p className="text-muted-foreground mb-6">
                We are committed to excellence in worship, continuous growth, and nurturing the next 
                generation of worship leaders. Whether through the choir, band, or individual 
                ministrations, we strive to create an atmosphere where people can encounter God.
              </p>
              <Link to="/ministries/join">
                <Button className="bg-secondary text-primary hover:bg-secondary/90">
                  Join Music Ministry
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/assets/images/Ingwee.JPG"
                alt="Worship session"
                className="rounded-2xl shadow-mutcu-card-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title">Our Teams</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teams.map((team) => (
              <div
                key={team.name}
                className="bg-card rounded-2xl p-6 text-center shadow-mutcu-card hover:-translate-y-2 transition-all"
              >
                <team.icon className="mx-auto h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-heading text-primary mb-2">{team.name}</h3>
                <p className="text-sm text-muted-foreground">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title text-primary-foreground">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-4 backdrop-blur"
              >
                <Star className="h-5 w-5 text-secondary shrink-0" />
                <span className="text-sm">{activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Heart className="mx-auto h-12 w-12 text-secondary mb-4" />
          <h2 className="text-3xl font-heading text-primary mb-4">
            Called to Worship?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you have a passion for music and worship, we invite you to join our ministry. 
            Whether you sing, play an instrument, or have a heart for worship, there's a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ministries/join">
              <Button className="bg-secondary text-primary hover:bg-secondary/90">
                Join Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default MusicMinistryPage;
