import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Building2 } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About Us" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact Us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">ABC Facility</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.path)
                  ? "text-primary"
                  : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link to="/contact">Get Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container flex flex-col space-y-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? "text-primary bg-secondary"
                    : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
