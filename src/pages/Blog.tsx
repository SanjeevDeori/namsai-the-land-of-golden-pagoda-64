import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { ThemeProvider } from '@/hooks/useTheme';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  category: string;
  featured_image: string | null;
  published_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, slug, excerpt, author, category, featured_image, published_at')
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching blog posts:', error);
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-namsai-50 to-white dark:from-namsai-900 dark:to-namsai-800">
        <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-namsai-800 dark:text-namsai-100 mb-4">
              Travel Stories & Guides
            </h1>
            <p className="text-lg text-namsai-600 dark:text-namsai-300">
              Discover insights, tips, and stories from Namsai
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">Loading articles...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, idx) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="group animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <Card className="h-full hover-lift shadow-soft border-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>
                    <CardHeader className="relative">
                      <div className="flex items-center justify-between mb-3">
                        {post.category && (
                          <Badge className="gradient-gold text-foreground font-medium">{post.category}</Badge>
                        )}
                        <span className="text-xs text-muted-foreground font-medium">
                          {format(new Date(post.published_at), 'MMM dd, yyyy')}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <CardDescription className="mb-5 line-clamp-3 text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                      
                      <div className="flex items-center justify-between text-sm pt-4 border-t border-border">
                        <span className="text-muted-foreground">By {post.author}</span>
                        <span className="flex items-center gap-1.5 text-primary group-hover:gap-2.5 transition-all font-medium">
                          Read more <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Blog;
