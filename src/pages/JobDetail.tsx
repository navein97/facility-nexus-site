import { useParams, Link, Navigate } from "react-router-dom";
import { jobs } from "@/data/jobs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Briefcase, Calendar, ArrowLeft, ArrowRight } from "lucide-react";

const JobDetail = () => {
  const { jobId } = useParams();
  const job = jobs.find((j) => j.id === jobId);

  if (!job) {
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
            <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
            <span>/</span>
            <span className="text-foreground">{job.title}</span>
          </div>
        </div>
      </div>

      {/* Job Header */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{job.department}</Badge>
              <Badge variant="outline">{job.type}</Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{job.title}</h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Posted {job.postedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Description */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">About This Role</h2>
              <p className="text-lg text-muted-foreground">{job.description}</p>
            </div>

            {/* Responsibilities */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Qualifications */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Qualifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.qualifications.map((qualification, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Benefits & Compensation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Apply Section */}
            <div className="rounded-lg bg-gradient-to-br from-primary to-accent p-8 text-center text-white">
              <h3 className="mb-4 text-2xl font-bold">Ready to Apply?</h3>
              <p className="mb-6 text-lg opacity-90">
                Join our team and help us deliver excellence in facility management.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/careers">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    View All Positions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetail;
