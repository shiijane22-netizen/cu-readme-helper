import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Heart, Users, Gift, Handshake, Home, Star, HandHeart, Shield } from "lucide-react";

const services = [
  {
    name: "Member Welfare",
    description: "Supporting members during challenging times including illness, bereavement, and financial difficulties.",
    icon: Heart,
  },
  {
    name: "Counseling Support",
    description: "Providing emotional and spiritual support through trained peer counselors.",
    icon: Handshake,
  },
  {
    name: "Emergency Assistance",
    description: "Responding to urgent needs of members with practical help and resources.",
    icon: Shield,
  },
  {
    name: "Community Outreach",
    description: "Extending care to the wider community through various welfare initiatives.",
    icon: Users,
  },
];

const initiatives = [
  "Hospital visitation for sick members",
  "Condolence visits and support",
  "Financial assistance programs",
  "Mentorship and guidance",
  "Student welfare advocacy",
  "Community service projects",
];

const WelfareCommitteePage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center text-primary-foreground animate-fade-in-up">
            <HandHeart className="mx-auto h-16 w-16 text-secondary mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
              Welfare Committee
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Caring for one another as the body of Christ
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-heading text-primary mb-6">Bearing One Another's Burdens</h2>
              <p className="text-muted-foreground mb-4">
                The Welfare Committee is dedicated to ensuring that no member of MUTCU walks 
                alone through life's challenges. We embody the biblical call to "bear one another's 
                burdens" by providing practical, emotional, and spiritual support.
              </p>
              <p className="text-muted-foreground mb-6">
                Whether it's a hospital visit, financial assistance during emergencies, or simply 
                a listening ear, our team is committed to showing Christ's love through action. 
                We believe that true fellowship includes caring for the whole person.
              </p>
              <Link to="/ministries/join">
                <Button className="bg-secondary text-primary hover:bg-secondary/90">
                  Join Welfare Committee
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl p-12 flex items-center justify-center">
                <Gift className="h-32 w-32 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title">Our Services</h2>
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

      {/* Initiatives Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="mutcu-section-title text-primary-foreground">Our Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-4 backdrop-blur"
              >
                <Star className="h-5 w-5 text-secondary shrink-0" />
                <span>{initiative}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Home className="mx-auto h-12 w-12 text-secondary mb-4" />
          <h2 className="text-3xl font-heading text-primary mb-4">
            Need Support?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you or someone you know is going through a difficult time, please reach out. 
            The Welfare Committee is here to support you with love and practical help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-secondary text-primary hover:bg-secondary/90">
                Request Support
              </Button>
            </Link>
            <Link to="/ministries/join">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default WelfareCommitteePage;
