import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: string;
  attraction_name: string;
  rating: number;
  comment: string;
  author_name: string;
  created_at: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    attraction_name: '',
    rating: 5,
    comment: '',
    author_name: '',
    author_email: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('is_approved', true)
      .order('created_at', { ascending: false })
      .limit(10);

    if (!error && data) {
      setReviews(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { error } = await supabase
      .from('reviews')
      .insert([formData]);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Thank you!",
        description: "Your review has been submitted and will appear after approval."
      });
      setFormData({
        attraction_name: '',
        rating: 5,
        comment: '',
        author_name: '',
        author_email: ''
      });
      setShowForm(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-white dark:bg-namsai-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-namsai-800 dark:text-namsai-100 mb-4">
              Visitor Reviews
            </h2>
            <p className="text-namsai-600 dark:text-namsai-300">
              Read what others have to say about their experience
            </p>
          </div>

          {!showForm && (
            <div className="text-center mb-8">
              <Button onClick={() => setShowForm(true)}>Write a Review</Button>
            </div>
          )}

          {showForm && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Share Your Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.author_name}
                      onChange={(e) => setFormData({...formData, author_name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.author_email}
                      onChange={(e) => setFormData({...formData, author_email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Place you visited (e.g., Golden Pagoda)"
                      value={formData.attraction_name}
                      onChange={(e) => setFormData({...formData, attraction_name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-6 w-6 cursor-pointer ${
                            star <= formData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                          }`}
                          onClick={() => setFormData({...formData, rating: star})}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Share your experience..."
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                      rows={4}
                      required
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit">Submit Review</Button>
                    <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          <div className="space-y-4">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{review.author_name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{review.attraction_name}</p>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
