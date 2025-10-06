import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Activity } from 'lucide-react';
import { ThemeProvider } from '@/hooks/useTheme';

interface Itinerary {
  id: string;
  title: string;
  duration: string;
  description: string;
  highlights: string[];
  activities: string[];
  is_featured: boolean;
}

const Itineraries = () => {
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItineraries();
  }, []);

  const fetchItineraries = async () => {
    const { data, error } = await supabase
      .from('itineraries')
      .select('*')
      .order('duration');

    if (error) {
      console.error('Error fetching itineraries:', error);
    } else {
      setItineraries(data || []);
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
              Plan Your Perfect Trip
            </h1>
            <p className="text-lg text-namsai-600 dark:text-namsai-300">
              Choose from our curated itineraries or customize your own adventure
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">Loading itineraries...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itineraries.map((itinerary, idx) => (
                <Card key={itinerary.id} className="hover-lift shadow-soft border-0 bg-card overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500"></div>
                  <CardHeader className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span className="font-medium">{itinerary.duration}</span>
                      </Badge>
                      {itinerary.is_featured && (
                        <Badge className="gradient-gold text-foreground font-semibold">⭐ Featured</Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl font-serif group-hover:text-primary transition-colors">{itinerary.title}</CardTitle>
                    <CardDescription className="text-base mt-2">{itinerary.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative">
                    <div className="space-y-5">
                      <div>
                        <h4 className="font-semibold flex items-center gap-2 mb-3 text-foreground">
                          <MapPin className="h-4 w-4 text-primary" />
                          Highlights
                        </h4>
                        <ul className="space-y-2 text-sm">
                          {itinerary.highlights?.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold flex items-center gap-2 mb-3 text-foreground">
                          <Activity className="h-4 w-4 text-primary" />
                          Activities
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {itinerary.activities?.map((activity, idx) => (
                            <Badge key={idx} variant="outline" className="hover:bg-primary/10 transition-colors">{activity}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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

export default Itineraries;
