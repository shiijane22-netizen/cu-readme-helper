import React from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, GraduationCap, Heart, Calendar, Star } from "lucide-react";

const programs = [
  {
    name: "Bible Study Groups",
    description: "Weekly small group sessions for in-depth study of Scripture and fellowship.",
    icon: BookOpen,
  },
  {
    name: "Nurture Classes",
    description: "Foundational classes for new believers to grow in their faith journey.",
    icon: GraduationCap,
  },
  {
    name: "Discipleship Training",
    description: "Intensive programs to equip members for Christian leadership and service.",
    icon: Users,
  },
  {
    name: "One-on-One Mentorship",
    description: "Personal mentorship relationships for spiritual growth and accountability.",
    icon: Heart,
  },
];

const schedule = [
  { day: "Monday", activity: "General Bible Study", time: "6:00 PM - 7:30 PM" },
  { day: "Tuesday", activity: "Ladies' Fellowship", time: "5:00 PM - 6:30 PM" },
  { day: "Wednesday", activity: "Men's Fellowship", time: "5:00 PM - 6:30 PM" },
  { day: "Thursday", activity: "Nurture Class", time: "6:00 PM - 7:00 PM" },
  { day: "Friday", activity: "Friday Fellowship", time: "5:00 PM - 7:00 PM" },
];

const BibleStudyDiscipleshipPage: React.FC = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <img
          src="/assets/images/bs1.jpg"
          alt="Bible Study"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center text-primary-foreground animate-fade-in-up">
            <BookOpen className="mx-auto h-16 w-16 text-secondary mb-4" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
              Bible Study & Discipleship
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Growing deeper in God's Word and making disciples of Christ
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
                src="/assets/images/tlp.jpg"
                alt="Bible study session"
                className="rounded-2xl shadow-mutcu-card-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-heading text-primary mb-6">About Our Ministry</h2>
              <p className="text-muted-foreground mb-4">
                The Bible Study & Discipleship Ministry is dedicated to helping believers grow in 
                their knowledge and understanding of God's Word. We believe that spiritual maturity 
                comes through consistent study of Scripture and intentional discipleship.
              </p>
              <p className="text-muted-foreground mb-6">
                Through our various programs, we create environments where members can learn, 
                discuss, and apply biblical principles to their daily lives. Our goal is to raise 
                mature believers who can disciple others.
              </p>
              <Link to="/ministries/join">
                <Button className="bg-secondary text-primary hover:bg-secondary/90">
                  Join Bible Study
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mutcu-section-title">Our Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <div
                key={program.name}
                className="bg-card rounded-2xl p-6 text-center shadow-mutcu-card hover:-translate-y-2 transition-all"
              >
                <program.icon className="mx-auto h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-heading text-primary mb-2">{program.name}</h3>
                <p className="text-sm text-muted-foreground">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <h2 className="mutcu-section-title text-primary-foreground">Weekly Schedule</h2>
          <div className="bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur">
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-primary-foreground/20 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-secondary" />
                    <span className="font-semibold">{item.day}</span>
                  </div>
                  <span className="text-primary-foreground/80">{item.activity}</span>
                  <span className="text-secondary font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Star className="mx-auto h-12 w-12 text-secondary mb-4" />
          <h2 className="text-3xl font-heading text-primary mb-4">
            Ready to Grow?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're a new believer or have walked with Christ for years, our Bible Study 
            and Discipleship programs are designed to help you grow deeper in faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ministries/join">
              <Button className="bg-secondary text-primary hover:bg-secondary/90">
                Join a Study Group
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

export default BibleStudyDiscipleshipPage;
