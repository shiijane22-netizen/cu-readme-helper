import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Ministries", path: "/ministries" },
  { label: "Events", path: "/events" },
  { label: "Resources", path: "/resources" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const ministryLinks = [
  { label: "Music Ministry", path: "/ministries/music" },
  { label: "Bible Study", path: "/ministries/bible-study-discipleship" },
  { label: "Missions & Evangelism", path: "/ministries/missions-evangelism" },
  { label: "Creative Arts", path: "/ministries/creative-arts" },
  { label: "Prayer Ministry", path: "/ministries/prayer" },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <h5 className="mb-4 text-lg font-heading uppercase text-secondary">
              About MUTCU
            </h5>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Murang'a University of Technology Christian Union is a
              non-denominational community dedicated to inspiring love, hope, and
              godliness through faith, unity, and service.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <img 
                src="/assets/images/FOCUS-Kenya-logo.webp" 
                alt="FOCUS Kenya" 
                className="h-8 w-auto opacity-80"
              />
              <span className="text-xs text-primary-foreground/60">
                Affiliated with FOCUS Kenya
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-4 text-lg font-heading uppercase text-secondary">
              Quick Links
            </h5>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Ministries */}
          <div>
            <h5 className="mb-4 text-lg font-heading uppercase text-secondary">
              Our Ministries
            </h5>
            <div className="flex flex-col gap-2">
              {ministryLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="mb-4 text-lg font-heading uppercase text-secondary">
              Connect With Us
            </h5>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
                <span>Murang'a University of Technology, Murang'a, Kenya</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-secondary" />
                <span>+254 712 345 678</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-secondary" />
                <span>info@mutcu.ac.ke</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock size={16} className="shrink-0 text-secondary" />
                <span>Office Hours: Mon-Fri, 8:00 AM - 5:00 PM</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Murang'a University of Technology Christian Union. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40 mt-1">
            Designed with ❤️ by MUTCU Tech Team
          </p>
        </div>
      </div>
    </footer>
  );
};
