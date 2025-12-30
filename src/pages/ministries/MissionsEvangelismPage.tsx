import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Globe, Users, Heart, MapPin, Building, Hospital, Star } from "lucide-react";

const outreachAreas = [
  {
    name: "Campus Evangelism",
    description: "Sharing the Gospel with fellow students through one-on-one conversations and open-air events.",
    icon: Users,
  },
  {
    name: "Annual Missions",
    description: "Organized mission trips to unreached communities during holidays.",
    icon: MapPin,
  },
  {
    name: "Prison Ministry",
    description: "Bringing hope and the message of Christ to inmates in correctional facilities.",
    icon: Building,
  },
  {
    name: "Hospital Visits",
    description: "Ministering to the sick and their families with prayers and encouragement.",
    icon: Hospital,
  },
  {
    name: "Children's Homes",
    description: "Showing love to orphaned children through visits, gifts, and spiritual nurturing.",
    icon: Heart,
  },
  {
    name: "Community Outreach",
    description: "Engaging local communities with practical help and the message of salvation.",
    icon: Globe,
  },
];

const impactStats = [
  { number: "500+", label: "Lives Reached Annually" },
  { number: "10+", label: "Mission Trips Per Year" },
  { number: "50+", label: "Active Missionaries" },
  { number: "5", label: "Partner Organizations" },
];

const MissionsEvangelismPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="/assets/images/mission1.jpg"
          alt="Missions & Evangelism"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center text-primary-foreground animate-fade-in-up">
            <Globe className="mx-auto h-16 w-16 text-secondary mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
              Missions & Evangelism
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Go into all the world and proclaim the gospel to all creation
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-heading text-primary mb-6">Our Mission Field</h2>
              <p className="text-muted-foreground mb-4">
                The Missions and Evangelism Ministry is the outreach arm of MUTCU. We are 
                passionate about fulfilling the Great Commission by sharing the love of Christ 
                with everyone we encounter - on campus, in our communities, and beyond.
              </p>
              <p className="text-muted-foreground mb-6">
                Through organized evangelism events, mission trips, and hope ministry visits, 
                we aim to transform lives with the Gospel. We believe that every believer is 
                called to be a witness, and we equip our members for effective evangelism.
              </p>
              <Link to="/ministries/join">
                <Button className="bg-secondary text-primary hover:bg-secondary/90">
                  Join the Mission
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/assets/images/mbbc1.jpg"
                alt="Mission outreach"
                className="rounded-2xl shadow-mutcu-card-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-gradient-to-r from-secondary to-accent">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-primary/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outreach Areas Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title">Our Outreach Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outreachAreas.map((area) => (
              <div
                key={area.name}
                className="bg-card rounded-2xl p-6 shadow-mutcu-card hover:-translate-y-2 transition-all"
              >
                <area.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-heading text-primary mb-2">{area.name}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Star className="mx-auto h-12 w-12 text-secondary mb-4" />
          <h2 className="text-3xl font-heading text-primary-foreground mb-4">
            Be Part of the Harvest
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            The harvest is plentiful, but the laborers are few. Join us in reaching the lost 
            and making disciples. Whether through prayer, giving, or going, there's a role for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ministries/join">
              <Button className="bg-secondary text-primary hover:bg-secondary/90">
                Become a Missionary
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Support Our Missions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default MissionsEvangelismPage;
