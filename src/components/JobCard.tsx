import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Calendar, ArrowRight } from "lucide-react";

interface JobCardProps {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  postedDate: string;
}

const JobCard = ({ id, title, department, location, type, description, postedDate }: JobCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{department}</Badge>
          <Badge variant="outline">{type}</Badge>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Posted {postedDate}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="group">
          <Link to={`/careers/${id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
