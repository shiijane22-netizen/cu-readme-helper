import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useUIStore } from "@/store/uiStore";
import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { 
  Cross, 
  Heart, 
  Lightbulb, 
  Church, 
  Users, 
  HandHeart,
  Music,
  BookOpen,
  Globe,
  Paintbrush,
  Calendar,
  Clock,
  Quote,
  Search,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Types
interface EventItem {
  id: number;
  title: string;
  dateLabel: string;
  timeLabel: string;
  description: string;
  image: string;
}

interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

// Data
const heroSlides = [
  {
    id: 1,
    title: "Inspire Love, Hope & Godliness",
    description: "Join MUTCU to grow in faith, fellowship, and service at Murang'a University of Technology.",
    image: "/assets/images/Lumii_20241023_192938507.jpg",
    primaryHref: "/contact",
    primaryLabel: "Join Us",
    secondaryHref: "/resources",
    secondaryLabel: "Watch Live",
  },
  {
    id: 2,
    title: "We Are One, We Are MUTCU",
    description: "A family united in Christ, reaching out to transform lives within and beyond.",
    image: "/assets/images/church2.jpg",
    primaryHref: "/ministries",
    primaryLabel: "Explore Ministries",
    secondaryHref: "/events",
    secondaryLabel: "Join an Event",
  },
  {
    id: 3,
    title: "Cultivating Christ-Centeredness",
    description: "Our vision is to be a model Christian Union impacting society.",
    image: "/assets/images/church3.jpg",
    primaryHref: "/about",
    primaryLabel: "Our Vision",
    secondaryHref: "/gallery",
    secondaryLabel: "View Gallery",
  },
];

const coreValues = [
  {
    icon: Cross,
    title: "Faith",
    text: "Rooted in the Bible and a personal relationship with Jesus Christ, expressed through prayer, worship, and in-depth Bible study.",
  },
  {
    icon: Heart,
    title: "Love",
    text: 'Demonstrating God's unconditional love through genuine fellowship and a welcoming heart for all, as we are a "home away from home".',
  },
  {
    icon: Lightbulb,
    title: "Hope",
    text: "Inspiring our community through positive words, encouraging actions, and unwavering faith in a world crumbling with uncertainties.",
  },
  {
    icon: Church,
    title: "Godliness",
    text: "A commitment to striving for lives that honor and glorify God in all things, reflected in both personal conduct and collective activities.",
  },
  {
    icon: Users,
    title: "Community",
    text: "Dedicated to building a strong sense of belonging and mutual support among members, where everyone feels valued and connected.",
  },
  {
    icon: HandHeart,
    title: "Service",
    text: "A core belief in putting faith into action by actively reaching out to serve the practical and spiritual needs of others.",
  },
];

const ministries = [
  {
    title: "Music Ministry",
    text: "Leading and ministering worship through Choir, Band, Instrumentalism and Praise & Worship.",
    image: "/assets/images/music1.jpg",
    icon: Music,
    path: "/ministries/music",
  },
  {
    title: "Bible Study & Discipleship",
    text: "Deepening faith through small groups, nurturing classes for new believers, and resourceful training programs.",
    image: "/assets/images/bs1.jpg",
    icon: BookOpen,
    path: "/ministries/bible-study-discipleship",
  },
  {
    title: "Missions & Evangelism",
    text: "Sharing the Gospel through campus outreach, annual missions, and hope ministry visits.",
    image: "/assets/images/mission1.jpg",
    icon: Globe,
    path: "/ministries/missions-evangelism",
  },
  {
    title: "Creative Ministry",
    text: "Expressing faith through drama, dance, spoken word, modelling and other artistic talents.",
    image: "/assets/images/dance3.jpg",
    icon: Paintbrush,
    path: "/ministries/creative-arts",
  },
];

const galleryItems = [
  { title: "Worship Service", image: "/assets/images/music1.jpg" },
  { title: "Evangelism", image: "/assets/images/mission1.jpg" },
  { title: "Creative Night", image: "/assets/images/film1.jpg" },
  { title: "Bible Study", image: "/assets/images/bs1.jpg" },
];

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote: "MUTCU has been my family away from home. The fellowship and discipleship have deepened my faith and helped me navigate university life.",
    author: "– Prudence Chepkurui, Computer Science, 4th Year",
  },
  {
    id: 2,
    quote: "The Music Ministry has transformed my worship, teaching me to serve with excellence and passion. It's truly inspiring.",
    author: "– Joseph Mbogo, Electrical Engineering, 2nd Year",
  },
  {
    id: 3,
    quote: "The Missions and Evangelism docket showed me how God uses ordinary students to bring hope and transformation to communities.",
    author: "– Grace Akinyi, Medical Lab, 2nd Year",
  },
];

const eventsData: EventItem[] = [
  {
    id: 1,
    title: "Prayer Kesha",
    dateLabel: "September 26, 2025",
    timeLabel: "7:00 PM - 9:30 PM",
    description: "Join us for a night of intercession and spiritual revival.",
    image: "/assets/images/church1.jpg",
  },
  {
    id: 2,
    title: "Praise Fest",
    dateLabel: "November 7, 2025",
    timeLabel: "7:00 PM - 9:30 PM",
    description: "Celebrate our God through our Music Ministry in a lively evening of praise and worship.",
    image: "/assets/images/Dance1.jpg",
  },
  {
    id: 3,
    title: "Creative Night",
    dateLabel: "October 10, 2025",
    timeLabel: "8:00 PM - 5:30 AM",
    description: "Experience a night full of creativity on the theme Ashes to Beauty.",
    image: "/assets/images/final poster.png",
  },
];

// Queries
function useEventsQuery() {
  return useQuery<EventItem[]>({
    queryKey: ["events"],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 200));
      return eventsData;
    },
  });
}

function useTestimonialsQuery() {
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 200));
      return testimonialsData;
    },
  });
}

// Hero Section
const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = heroSlides[activeIndex];

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const goToPrev = () => setActiveIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const goToNext = () => setActiveIndex((prev) => (prev + 1) % heroSlides.length);

  return (
    <section className="relative h-[90vh] min-h-[540px] w-full overflow-hidden">
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] scale-105"
      />
      <div className="hero-overlay" />
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="max-w-3xl text-center text-primary-foreground space-y-6 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-wide drop-shadow-lg text-primary-foreground uppercase">
            {slide.title}
          </h1>
          <p className="text-base md:text-xl text-primary-foreground/90">
            {slide.description}
          </p>
          <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center">
            <Link to={slide.primaryHref}>
              <Button className="bg-secondary text-primary hover:bg-secondary/90 px-6 py-2 rounded-full text-sm md:text-base font-heading uppercase shadow-lg">
                {slide.primaryLabel}
              </Button>
            </Link>
            <Link to={slide.secondaryHref}>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-6 py-2 rounded-full text-sm md:text-base font-heading uppercase">
                {slide.secondaryLabel}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary/50 text-primary-foreground hover:bg-primary/70 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-primary/50 text-primary-foreground hover:bg-primary/70 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 z-20">
        {heroSlides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === activeIndex ? "w-8 bg-secondary" : "w-2 bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

// About Section
const AboutSection: React.FC = () => (
  <section id="about" className="bg-card py-16 md:py-20">
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      <h2 className="mutcu-section-title">About MUTCU</h2>
      <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-muted-foreground">
        Murang'a University of Technology Christian Union (MUTCU) is a lively, student-led society in MUT. 
        We are affiliated with FOCUS-Kenya, dedicated to inspiring love, hope, and godliness through 
        discipleship, evangelism, mission work, and leadership development.
      </p>
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-2">Our Mission</h3>
            <p className="text-muted-foreground">
              To raise a family well-equipped in all aspects of life, exemplary to Jesus Christ, 
              by encouraging unity as one body of Christ and reaching out to non-believers within and beyond.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-2">Our Vision</h3>
            <p className="text-muted-foreground">
              To be a model Christian Union cultivating Christ-centeredness among members to impact society.
            </p>
          </div>
          <Link to="/about">
            <Button className="bg-secondary text-primary hover:bg-secondary/90 mt-2">
              Learn More About Us
            </Button>
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/images/prayer1.jpg"
            alt="MUTCU Community"
            className="w-full max-w-md rounded-2xl shadow-mutcu-card-lg object-cover transition-transform hover:scale-[1.02]"
          />
        </div>
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-primary mb-3">Doctrinal Basis</h3>
        <p className="mx-auto max-w-4xl text-sm md:text-base text-muted-foreground">
          The Union's beliefs are based on the fundamental truths of Christianity as outlined in its constitution. 
          This includes the unity of the Trinity, the sovereignty of God in creation and redemption, 
          the divine inspiration and supreme authority of the Holy Scripture, the universal sinfulness of man, 
          redemption solely through the sacrificial death of Jesus Christ, His bodily resurrection and ascension, 
          and the sanctifying work of the Holy Spirit in every believer.
        </p>
      </div>
    </div>
  </section>
);

// Core Values Section
const CoreValuesSection: React.FC = () => (
  <section className="bg-gradient-to-br from-primary to-primary/80 py-16 md:py-20 text-primary-foreground">
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      <h2 className="mutcu-section-title text-primary-foreground">Our Core Values</h2>
      <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-primary-foreground/70">
        Rooted in faith and community, our values guide everything we do.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {coreValues.map((value) => (
          <div key={value.title} className="value-card">
            <value.icon className="mb-3 h-10 w-10 text-secondary" />
            <h4 className="mb-2 text-lg font-semibold text-secondary">{value.title}</h4>
            <p className="text-sm text-primary-foreground/80">{value.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Ministries Section
const MinistriesSection: React.FC = () => (
  <section id="ministries" className="bg-background py-16 md:py-20">
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      <h2 className="mutcu-section-title">Our Ministries</h2>
      <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-muted-foreground">
        Join a ministry to grow in faith and serve others.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {ministries.map((m) => (
          <div key={m.title} className="ministry-card">
            <img src={m.image} alt={m.title} className="h-44 w-full object-cover" />
            <div className="flex flex-1 flex-col items-center px-5 pb-5 pt-4 text-center">
              <m.icon className="mb-2 h-8 w-8 text-primary" />
              <h4 className="mb-1 text-lg font-semibold text-primary">{m.title}</h4>
              <p className="mb-3 text-sm text-muted-foreground">{m.text}</p>
              <Link to={m.path} className="mt-auto">
                <Button size="sm" className="bg-secondary text-primary hover:bg-secondary/90">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/ministries">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
            View All Ministries
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

// Events Section
const EventsSection: React.FC = () => {
  const { data: events } = useEventsQuery();

  return (
    <section id="events" className="bg-muted py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mutcu-section-title">Upcoming Events</h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-muted-foreground">
          Join us for worship, fellowship, and outreach!
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events?.map((e) => (
            <div key={e.id} className="ministry-card">
              <img src={e.image} alt={e.title} className="h-44 w-full object-cover" />
              <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                <h4 className="mb-2 text-xl font-semibold text-primary">{e.title}</h4>
                <p className="mb-1 text-sm text-muted-foreground flex items-center gap-2">
                  <Calendar size={14} className="text-secondary" />
                  <strong>Date:</strong> {e.dateLabel}
                </p>
                <p className="mb-2 text-sm text-muted-foreground flex items-center gap-2">
                  <Clock size={14} className="text-secondary" />
                  <strong>Time:</strong> {e.timeLabel}
                </p>
                <p className="mb-3 text-sm text-muted-foreground">{e.description}</p>
                <Link to="/events" className="mt-auto">
                  <Button size="sm" className="bg-secondary text-primary hover:bg-secondary/90">
                    Details & RSVP
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/events">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Prayer Request Section
const PrayerSection: React.FC = () => {
  const showConfirmation = useUIStore((s) => s.showConfirmation);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const request = (form.elements.namedItem("prayerRequest") as HTMLTextAreaElement)?.value;

    if (!request.trim()) {
      (form.elements.namedItem("prayerRequest") as HTMLTextAreaElement)?.focus();
      return;
    }

    showConfirmation("Thank you for your prayer request! Our Prayer Ministry will intercede for you.");
    form.reset();
  };

  return (
    <section className="bg-accent py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="mutcu-section-title">Need Prayers?</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-muted-foreground">
          Our Prayer Ministry is here to support you in faith and intercession. Submit your requests confidentially.
        </p>
        <form onSubmit={handleSubmit} className="rounded-2xl bg-card p-6 shadow-mutcu-card-lg">
          <div className="mb-4">
            <label htmlFor="prayerName" className="mb-1 block text-sm font-semibold text-primary">
              Your Name (Optional)
            </label>
            <input
              id="prayerName"
              name="prayerName"
              type="text"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40"
              placeholder="Enter your name"
            />
            <p className="mt-1 text-xs text-muted-foreground">You may submit anonymously if preferred.</p>
          </div>
          <div className="mb-6">
            <label htmlFor="prayerRequest" className="mb-1 block text-sm font-semibold text-primary">
              Prayer Request <span className="text-destructive">*</span>
            </label>
            <textarea
              id="prayerRequest"
              name="prayerRequest"
              rows={5}
              required
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40"
              placeholder="Share your prayer request here..."
            />
          </div>
          <Button type="submit" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-heading uppercase">
            Submit Request
          </Button>
        </form>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection: React.FC = () => {
  const { data: testimonials } = useTestimonialsQuery();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => window.clearInterval(id);
  }, [testimonials]);

  if (!testimonials || testimonials.length === 0) return null;

  const t = testimonials[index];

  return (
    <section className="bg-gradient-to-r from-primary via-primary/90 to-destructive py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2 className="mutcu-section-title text-secondary">What Our Members Say</h2>
        <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-primary-foreground/70">
          Hear from our Members about their MUTCU experience.
        </p>
        <div className="mx-auto max-w-3xl rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-8 text-center shadow-lg backdrop-blur">
          <Quote className="mx-auto mb-4 h-8 w-8 text-secondary" />
          <p className="text-lg leading-relaxed text-primary-foreground">{t.quote}</p>
          <p className="mt-4 text-sm font-semibold text-secondary">{t.author}</p>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-secondary" : "w-2 bg-primary-foreground/50"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection: React.FC = () => (
  <section id="gallery" className="bg-card py-16 md:py-20">
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      <h2 className="mutcu-section-title">Our Gallery</h2>
      <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-muted-foreground">
        Moments from our fellowship, events, and outreach activities.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {galleryItems.map((g) => (
          <Link
            key={g.title}
            to="/gallery"
            className="gallery-item group relative cursor-pointer overflow-hidden rounded-2xl shadow-mutcu-card transition-all hover:-translate-y-1 hover:shadow-mutcu-card-lg"
          >
            <img
              src={g.image}
              alt={g.title}
              className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="gallery-overlay">
              <span className="flex items-center gap-2 text-sm font-semibold uppercase text-primary-foreground">
                <Search size={16} />
                {g.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/gallery">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
            View Full Gallery
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

// Newsletter Section
const NewsletterSection: React.FC = () => {
  const showConfirmation = useUIStore((s) => s.showConfirmation);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("newsletterEmail") as HTMLInputElement)?.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      (form.elements.namedItem("newsletterEmail") as HTMLInputElement)?.focus();
      return;
    }

    showConfirmation("Thank you for subscribing to our newsletter! You'll receive our latest updates directly in your inbox.");
    form.reset();
  };

  return (
    <section className="bg-gradient-to-r from-primary to-accent py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="mutcu-section-title text-secondary">Stay Connected</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-primary-foreground/80">
          Subscribe to our newsletter for updates on events, devotionals, and ministry opportunities.
        </p>
        <form onSubmit={handleSubmit} className="rounded-2xl bg-primary-foreground/10 backdrop-blur p-6 shadow-lg border border-primary-foreground/20">
          <div className="mb-5">
            <label htmlFor="newsletterEmail" className="mb-1 block text-sm font-semibold text-primary-foreground">
              Email Address <span className="text-secondary">*</span>
            </label>
            <input
              id="newsletterEmail"
              name="newsletterEmail"
              type="email"
              required
              className="w-full rounded-lg border border-primary-foreground/30 bg-primary-foreground/20 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40"
              placeholder="your.email@example.com"
            />
          </div>
          <Button type="submit" className="w-full bg-secondary text-primary hover:bg-secondary/90 font-heading uppercase">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

// Main HomePage Component
const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <CoreValuesSection />
      <MinistriesSection />
      <EventsSection />
      <PrayerSection />
      <TestimonialsSection />
      <GallerySection />
      <NewsletterSection />
    </MainLayout>
  );
};

export default HomePage;
