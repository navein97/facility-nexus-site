import JobCard from "@/components/JobCard";
import { jobs } from "@/data/jobs";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Award, Heart } from "lucide-react";

const Careers = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Join Our Team</h1>
            <p className="text-lg text-muted-foreground">
              Build a rewarding career with ABC Facility Management. We're always looking for talented, dedicated professionals to join our growing team.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground">
              We invest in our people because they're the foundation of our success.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-semibold">Great Culture</h3>
                <p className="text-sm text-muted-foreground">
                  Collaborative, supportive environment where everyone matters
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <TrendingUp className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-semibold">Career Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Clear advancement paths and professional development opportunities
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-semibold">Competitive Benefits</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive health coverage, retirement plans, and more
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Heart className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 font-semibold">Work-Life Balance</h3>
                <p className="text-sm text-muted-foreground">
                  Flexible schedules and generous paid time off
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Open Positions</h2>
            <p className="text-lg text-muted-foreground">
              Explore our current opportunities and find your next career move.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                department={job.department}
                location={job.location}
                type={job.type}
                description={job.description}
                postedDate={job.postedDate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Equal Opportunity */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold">Equal Opportunity Employer</h2>
            <p className="text-muted-foreground">
              ABC Facility Management Company LLC is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, or veteran status.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
