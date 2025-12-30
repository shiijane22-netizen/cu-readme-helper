import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Coffee, Users, Utensils, Home, Heart, Star, HandHeart } from "lucide-react";

const services = [
  {
    name: "Event Hospitality",
    description: "Welcoming guests and ensuring comfort during all MUTCU events and services.",
    icon: Home,
  },
  {
    name: "Refreshments",
    description: "Preparing and serving refreshments for fellowship sessions and special events.",
    icon: Coffee,
  },
  {
    name: "Ushering",
    description: "Guiding members and visitors, maintaining order, and creating a welcoming atmosphere.",
    icon: Users,
  },
  {
    name: "Catering",
    description: "Organizing meals and snacks for retreats, missions, and extended events.",
    icon: Utensils,
  },
];

const values = [
  "Creating a warm and welcoming environment",
  "Serving with joy and excellence",
  "Ensuring everyone feels at home",
  "Supporting all ministry activities",
  "Practicing Christian hospitality",
  "Building community through service",
];

const HospitalityMinistryPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gradient-to-br from-primary to-accent">
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center text-primary-foreground animate-fade-in-up">
            <Coffee className="mx-auto h-16 w-16 text-secondary mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
              Hospitality Ministry
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Creating a home away from home through Christian hospitality
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl p-12 flex items-center justify-center">
                <HandHeart className="h-32 w-32 text-secondary" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-heading text-primary mb-6">Welcome Home</h2>
              <p className="text-muted-foreground mb-4">
                The Hospitality Ministry embodies the heart of MUTCU's vision to be a "home away 
                from home." We ensure that every person who walks through our doors feels welcomed, 
                valued, and cared for.
              </p>
              <p className="text-muted-foreground mb-6">
                From greeting visitors with warm smiles to serving refreshments with joy, our team 
                works behind the scenes to create an atmosphere of love and belonging. We believe 
                that hospitality is a powerful expression of Christ's love.
              </p>
              <Link to="/ministries/join">
                <Button className="bg-secondary text-primary hover:bg-secondary/90">
                  Join Hospitality Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-card rounded-2xl p-6 text-center shadow-mutcu-card hover:-translate-y-2 transition-all"
              >
                <service.icon className="mx-auto h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-heading text-primary mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="mutcu-section-title text-primary-foreground">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-4 backdrop-blur"
              >
                <Star className="h-5 w-5 text-secondary shrink-0" />
                <span>{value}</span>
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
            Serve With Us
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Do you have a heart for serving others? The Hospitality Ministry is looking for 
            dedicated individuals who want to make a difference through service.
          </p>
          <Link to="/ministries/join">
            <Button className="bg-secondary text-primary hover:bg-secondary/90">
              Join the Team
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default HospitalityMinistryPage;
