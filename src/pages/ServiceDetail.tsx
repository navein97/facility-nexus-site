import { useParams, Link, Navigate } from "react-router-dom";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/30">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{service.title}</h1>
            <p className="text-lg text-muted-foreground">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Image Placeholder */}
            <div className="rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 aspect-[4/3]" />

            {/* Features */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">What We Offer</h2>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-lg bg-gradient-to-br from-primary to-accent p-8 md:p-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mb-6 text-lg opacity-90">
              Contact us today to learn how our {service.title.toLowerCase()} can benefit your facility.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/services">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
