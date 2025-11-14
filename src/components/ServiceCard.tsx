import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Wrench, Sparkles, Shield, Package, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  Sparkles,
  Shield,
  Package,
};

const ServiceCard = ({ id, title, description, icon }: ServiceCardProps) => {
  const Icon = iconMap[icon] || Wrench;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="ghost" className="group">
          <Link to={`/services/${id}`}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
