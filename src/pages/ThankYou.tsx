import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Home, ArrowRight } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-success/10 p-6">
              <CheckCircle2 className="h-16 w-16 text-success" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Thank You!
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            We've received your message and will get back to you as soon as possible. 
            Our team typically responds within 24 hours during business days.
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
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
