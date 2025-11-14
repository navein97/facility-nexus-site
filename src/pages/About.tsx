import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">About ABC Facility</h1>
            <p className="text-lg text-muted-foreground">
              Since 2005, we've been providing exceptional facility management services to businesses across the nation. Our commitment to excellence and customer satisfaction has made us a trusted partner for hundreds of organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 aspect-[4/3]" />
            <div>
              <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
              <p className="mb-4 text-muted-foreground">
                Founded in 2005 by industry veterans who saw a need for more reliable, comprehensive facility management services, ABC Facility Management Company LLC has grown from a small local operation to a nationwide provider serving hundreds of clients.
              </p>
              <p className="mb-4 text-muted-foreground">
                Our approach combines cutting-edge technology with time-tested practices and, most importantly, a deep commitment to our clients' success. We understand that facility management isn't just about maintaining buildings—it's about creating environments where businesses and people can thrive.
              </p>
              <p className="text-muted-foreground">
                Today, we manage over 2 million square feet of commercial space, employ a team of certified professionals, and maintain a 98% client satisfaction rate. But what we're most proud of is the long-term partnerships we've built with our clients, many of whom have been with us since day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <Target className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver exceptional facility management services that enhance operational efficiency, reduce costs, and create safe, productive environments for our clients and their stakeholders. We strive to be the most trusted partner in facility management by consistently exceeding expectations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Eye className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading facility management company recognized for innovation, excellence, and unwavering commitment to client success. We envision a future where every facility we manage operates at peak efficiency while providing outstanding experiences for all who use them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do and every decision we make.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Excellence</h3>
              <p className="text-muted-foreground">
                We pursue excellence in every aspect of our work, from the smallest maintenance task to the largest project.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with honesty, transparency, and accountability in all our relationships and business practices.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new technologies and methods to continuously improve our services and deliver greater value.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Reliability</h3>
              <p className="text-muted-foreground">
                Our clients depend on us to be there when they need us, delivering consistent, dependable service.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Safety</h3>
              <p className="text-muted-foreground">
                We prioritize the safety of our team members, clients, and all facility occupants in everything we do.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Respect</h3>
              <p className="text-muted-foreground">
                We treat everyone with dignity and respect, valuing diverse perspectives and fostering inclusive environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Award className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-3xl font-bold">Certifications & Accreditations</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Our team holds industry-leading certifications and our company maintains the highest standards of professional accreditation.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="font-semibold">BOMA Accredited</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="font-semibold">IFMA Certified</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="font-semibold">OSHA Compliant</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
