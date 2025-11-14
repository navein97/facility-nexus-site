import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Our Projects</h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of successful facility management projects. From complex renovations to ongoing service contracts, we deliver results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                client={project.client}
                category={project.category}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
