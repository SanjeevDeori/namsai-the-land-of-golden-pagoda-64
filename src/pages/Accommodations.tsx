import { useState, useEffect } from 'react';
import { Hotel, Star, Phone, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../hooks/useTheme';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Accommodation {
  id: string;
  name: string;
  description: string;
  type: string;
  price_range: string;
  location: string;
  contact_phone: string;
  contact_email: string | null;
  image_url: string | null;
  amenities: string[];
  rating: number;
}

const Accommodations = () => {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const { toast } = useToast();

  useEffect(() => {
    fetchAccommodations();
  }, []);

  const fetchAccommodations = async () => {
    try {
      const { data, error } = await supabase
        .from('accommodations')
        .select('*')
        .order('rating', { ascending: false });

      if (error) throw error;
      setAccommodations(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load accommodations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredAccommodations = filter === 'all' 
    ? accommodations 
    : accommodations.filter(acc => acc.type === filter);

  const typeColors: Record<string, string> = {
    hotel: 'bg-blue-500',
    homestay: 'bg-green-500',
    resort: 'bg-purple-500',
    guesthouse: 'bg-orange-500',
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-foreground">Accommodations</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find the perfect place to stay during your visit to Namsai
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {['all', 'hotel', 'homestay', 'resort', 'guesthouse'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-6 py-2 rounded-full font-medium capitalize transition-colors ${
                    filter === type
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Accommodations Grid */}
            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading accommodations...</p>
              </div>
            ) : filteredAccommodations.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No accommodations found</p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredAccommodations.map((accommodation) => (
                  <Card key={accommodation.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    {accommodation.image_url && (
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={accommodation.image_url} 
                          alt={accommodation.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-xl">{accommodation.name}</CardTitle>
                        <Badge className={typeColors[accommodation.type] || 'bg-gray-500'}>
                          {accommodation.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="font-semibold text-foreground">{accommodation.rating}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription>{accommodation.description}</CardDescription>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{accommodation.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>{accommodation.contact_phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Hotel className="h-4 w-4" />
                          <span className="font-semibold text-foreground">{accommodation.price_range}</span>
                        </div>
                      </div>

                      {accommodation.amenities && accommodation.amenities.length > 0 && (
                        <div className="pt-2 border-t">
                          <p className="text-sm font-semibold mb-2">Amenities:</p>
                          <div className="flex flex-wrap gap-2">
                            {accommodation.amenities.map((amenity, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {amenity}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
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

export default Accommodations;
