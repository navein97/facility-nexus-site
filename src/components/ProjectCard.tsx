import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
}

const ProjectCard = ({ id, title, client, category, description }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10" />
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-sm text-muted-foreground">{client}</span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="ghost" className="group">
          <Link to={`/projects/${id}`}>
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
