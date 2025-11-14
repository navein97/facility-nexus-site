import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

const Custom404 = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6">
            <h1 className="text-9xl font-bold text-primary">404</h1>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Page Not Found
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or the URL might be incorrect.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">
                <Search className="mr-2 h-5 w-5" />
                Browse Services
              </Link>
            </Button>
          </div>
          <div className="mt-12 border-t border-border pt-8">
            <p className="mb-4 text-sm text-muted-foreground">
              Looking for something specific? Try these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/services" className="text-sm text-primary hover:underline">
                Services
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/projects" className="text-sm text-primary hover:underline">
                Projects
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/blog" className="text-sm text-primary hover:underline">
                Blog
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/about" className="text-sm text-primary hover:underline">
                About Us
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/careers" className="text-sm text-primary hover:underline">
                Careers
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/contact" className="text-sm text-primary hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
