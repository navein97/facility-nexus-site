import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
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
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">{post.title}</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {/* Header */}
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">{post.category}</Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 aspect-[16/9]" />

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content.split('\n').join('<br />') }} />
            </div>

            {/* Back Button */}
            <div className="mt-12 pt-8 border-t border-border">
              <Button asChild variant="outline">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
