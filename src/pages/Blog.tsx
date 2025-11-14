import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Facility Management Insights</h1>
            <p className="text-lg text-muted-foreground">
              Stay informed with the latest trends, best practices, and expert insights in facility management.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                date={post.date}
                category={post.category}
                readTime={post.readTime}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
