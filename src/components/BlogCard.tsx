import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const BlogCard = ({ id, title, excerpt, author, date, category, readTime }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10" />
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{category}</Badge>
        </div>
        <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">By {author}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="group">
          <Link to={`/blog/${id}`}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
