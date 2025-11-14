import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowLeft, Calendar } from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
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
            <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-foreground">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <Badge variant="secondary" className="text-sm">{project.category}</Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Completed {project.completionDate}</span>
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
            <p className="text-xl text-muted-foreground">Client: {project.client}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Project Image */}
            <div className="mb-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 aspect-[16/9]" />

            {/* Overview */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">Project Overview</h2>
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>

            {/* Challenge */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">The Challenge</h2>
              <p className="text-muted-foreground">{project.challenge}</p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">Our Solution</h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold">Results & Impact</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {project.results.map((result, index) => (
                  <div key={index} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success mt-0.5" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-lg bg-muted p-8 text-center">
              <h3 className="mb-4 text-xl font-bold">Interested in Similar Results?</h3>
              <p className="mb-6 text-muted-foreground">
                Let's discuss how we can help optimize your facility operations.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/projects">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    View More Projects
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

export default ProjectDetail;
