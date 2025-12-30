import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useUIStore } from "@/store/uiStore";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Ministries", path: "/ministries" },
  { label: "Events", path: "/events" },
  { label: "Resources", path: "/resources" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { isScrolled, setScrolled, isMobileMenuOpen, setMobileMenuOpen } = useUIStore();
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [setScrolled]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, setMobileMenuOpen]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header
      id="mutcu-navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 shadow-lg backdrop-blur-sm"
          : "bg-card/90 backdrop-blur-sm border-b border-border"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/assets/images/Full Logo.png"
            alt="MUTCU Logo"
            className="h-12 md:h-14 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-sm font-heading uppercase font-semibold transition-colors nav-link-underline ${
                isActive(item.path)
                  ? isScrolled
                    ? "text-secondary"
                    : "text-secondary"
                  : isScrolled
                  ? "text-primary-foreground hover:text-secondary"
                  : "text-primary hover:text-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/ministries/join">
            <Button 
              size="sm" 
              className="bg-secondary text-primary hover:bg-secondary/90 font-heading uppercase text-xs"
            >
              Join Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled
              ? "text-primary-foreground hover:bg-white/10"
              : "text-primary hover:bg-primary/10"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className={`px-4 py-4 space-y-2 ${isScrolled ? "bg-primary" : "bg-card border-t border-border"}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block py-2 px-4 rounded-lg font-heading uppercase text-sm font-semibold transition-colors ${
                isActive(item.path)
                  ? "bg-secondary text-primary"
                  : isScrolled
                  ? "text-primary-foreground hover:bg-white/10"
                  : "text-primary hover:bg-primary/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/ministries/join" className="block pt-2">
            <Button 
              className="w-full bg-secondary text-primary hover:bg-secondary/90 font-heading uppercase"
            >
              Join Us
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
