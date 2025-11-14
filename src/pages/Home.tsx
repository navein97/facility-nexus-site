import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { CheckCircle2, Users, Building, TrendingUp, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))] py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Excellence in Facility Management
            </h1>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Comprehensive facility solutions that keep your business running smoothly. From maintenance to security, we deliver reliable service you can trust.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="mx-auto mb-2 h-8 w-8 text-primary" />
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Satisfied Clients</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Building className="mx-auto mb-2 h-8 w-8 text-primary" />
                <div className="text-3xl font-bold text-foreground">2M+</div>
                <div className="text-sm text-muted-foreground">Sq Ft Managed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <TrendingUp className="mx-auto mb-2 h-8 w-8 text-primary" />
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-primary" />
                <div className="text-3xl font-bold text-foreground">19</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive facility management solutions tailored to your business needs
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Why Choose ABC Facility?</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                With nearly two decades of experience, we've perfected the art of facility management. Our commitment to excellence and customer satisfaction sets us apart.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">24/7 Support</h3>
                    <p className="text-muted-foreground">Round-the-clock assistance for all your facility needs</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">Certified Professionals</h3>
                    <p className="text-muted-foreground">Highly trained and certified facility management experts</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">Cost-Effective Solutions</h3>
                    <p className="text-muted-foreground">Maximize value while reducing operational costs</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-1">Proven Track Record</h3>
                    <p className="text-muted-foreground">Hundreds of successful projects across multiple industries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 p-8 w-full aspect-square" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="py-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
              <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">
                Contact us today for a free consultation and discover how we can help optimize your facility operations.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
