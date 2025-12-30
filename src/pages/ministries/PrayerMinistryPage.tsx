import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Heart, Users, Clock, Calendar, Star, HandHeart } from "lucide-react";

const prayerPrograms = [
  {
    name: "Morning Glory",
    description: "Early morning prayer sessions to start the day with God.",
    time: "5:30 AM - 6:30 AM",
    days: "Monday - Friday",
  },
  {
    name: "Intercessory Prayer",
    description: "Dedicated time to pray for the union, members, and the nation.",
    time: "6:00 PM - 7:00 PM",
    days: "Wednesday",
  },
  {
    name: "Prayer Kesha",
    description: "All-night prayer vigils for spiritual breakthrough and renewal.",
    time: "9:00 PM - 5:00 AM",
    days: "Monthly",
  },
  {
    name: "Prayer Partners",
    description: "Paired prayer partners for accountability and mutual intercession.",
    time: "Flexible",
    days: "Weekly",
  },
];

const prayerFocus = [
  "Campus revival and transformation",
  "Student welfare and academic success",
  "National and global issues",
  "Church growth and unity",
  "Individual prayer requests",
  "Missions and evangelism",
];

const PrayerMinistryPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="/assets/images/prayer1.jpg"
          alt="Prayer Ministry"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center text-primary-foreground animate-fade-in-up">
            <HandHeart className="mx-auto h-16 w-16 text-secondary mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
              Prayer Ministry
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              The effectual fervent prayer of a righteous man availeth much
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-heading text-primary mb-6">The Power of Prayer</h2>
              <p className="text-muted-foreground mb-4">
                The Prayer Ministry is the spiritual backbone of MUTCU. We believe that prayer 
                is the key to every breakthrough, and through consistent intercession, we cover 
                every aspect of the union's activities and the lives of our members.
              </p>
              <p className="text-muted-foreground mb-6">
                Our ministry creates an atmosphere of prayer through various programs - from early 
                morning devotions to all-night prayer vigils. We also receive and pray over 
                personal prayer requests submitted by members and visitors.
              </p>
              <Link to="/ministries/join">
                <Button className="bg-secondary text-primary hover:bg-secondary/90">
                  Join Prayer Ministry
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/assets/images/PRAYER.jpg"
                alt="Prayer session"
                className="rounded-2xl shadow-mutcu-card-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Programs */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title">Prayer Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {prayerPrograms.map((program) => (
              <div
                key={program.name}
                className="bg-card rounded-2xl p-6 shadow-mutcu-card hover:-translate-y-2 transition-all"
              >
                <h3 className="text-xl font-heading text-primary mb-2">{program.name}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-2 text-secondary">
                    <Clock className="h-4 w-4" />
                    {program.time}
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {program.days}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prayer Focus Areas */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="mutcu-section-title text-primary-foreground">Our Prayer Focus</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {prayerFocus.map((focus, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-4 backdrop-blur"
              >
                <Star className="h-5 w-5 text-secondary shrink-0" />
                <span>{focus}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Prayer Request */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <Heart className="mx-auto h-12 w-12 text-secondary mb-4" />
          <h2 className="text-3xl font-heading text-primary mb-4">
            Need Prayer?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We believe in the power of prayer and would be honored to intercede on your behalf. 
            Submit your prayer request and our dedicated team will lift you up in prayer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button className="bg-secondary text-primary hover:bg-secondary/90">
                Submit Prayer Request
              </Button>
            </Link>
            <Link to="/ministries/join">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Join Prayer Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PrayerMinistryPage;
