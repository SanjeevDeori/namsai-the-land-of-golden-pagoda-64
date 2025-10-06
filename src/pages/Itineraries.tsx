import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Activity } from 'lucide-react';

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
              {itineraries.map((itinerary) => (
                <Card key={itinerary.id} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {itinerary.duration}
                      </Badge>
                      {itinerary.is_featured && (
                        <Badge variant="default">Featured</Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl">{itinerary.title}</CardTitle>
                    <CardDescription>{itinerary.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4 text-namsai-600" />
                          Highlights
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {itinerary.highlights?.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold flex items-center gap-2 mb-2">
                          <Activity className="h-4 w-4 text-namsai-600" />
                          Activities
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {itinerary.activities?.map((activity, idx) => (
                            <Badge key={idx} variant="outline">{activity}</Badge>
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
  );
};

export default Itineraries;
