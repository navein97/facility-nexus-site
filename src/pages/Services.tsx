import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const Services = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive facility management solutions designed to keep your business running smoothly. From routine maintenance to specialized services, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="container">
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

      {/* Benefits Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Comprehensive Facility Solutions
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Our integrated approach ensures all aspects of your facility are managed efficiently and effectively.
            </p>
            <div className="grid gap-8 md:grid-cols-3 text-left">
              <div>
                <h3 className="mb-2 text-xl font-semibold">Customized Plans</h3>
                <p className="text-muted-foreground">
                  Tailored solutions that match your specific needs and budget requirements.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Preventive Approach</h3>
                <p className="text-muted-foreground">
                  Proactive maintenance strategies that minimize downtime and extend asset life.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Rigorous quality control processes and regular inspections ensure excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
