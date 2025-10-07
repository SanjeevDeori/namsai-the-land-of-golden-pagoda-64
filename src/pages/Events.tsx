import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { ThemeProvider } from '@/hooks/useTheme';

interface Festival {
  id: string;
  title: string;
  description: string;
  typical_month: string;
  event_type: string;
  location: string;
  significance: string | null;
  image_url: string | null;
}

const Events = () => {
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchFestivals();
  }, []);

  const fetchFestivals = async () => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('title', { ascending: true });

    if (error) {
      console.error('Error fetching festivals:', error);
    } else {
      setFestivals(data || []);
    }
    setLoading(false);
  };

  const filteredFestivals = filter === 'all' 
    ? festivals 
    : festivals.filter(f => f.event_type?.toLowerCase() === filter);

  const festivalTypes = [...new Set(festivals.map(f => f.event_type).filter(Boolean))];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-namsai-50 to-white dark:from-namsai-900 dark:to-namsai-800">
        <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-namsai-800 dark:text-namsai-100 mb-4">
              Events & Festivals
            </h1>
            <p className="text-lg text-namsai-600 dark:text-namsai-300 mb-6">
              Discover the vibrant festivals and cultural celebrations throughout the year
            </p>
            
            <div className="flex justify-center gap-2 flex-wrap">
              <Badge 
                variant={filter === 'all' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setFilter('all')}
              >
                All Festivals
              </Badge>
              {festivalTypes.map(type => (
                <Badge 
                  key={type}
                  variant={filter === type.toLowerCase() ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setFilter(type.toLowerCase())}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">Loading festivals...</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredFestivals.map((festival, idx) => (
                <Card key={festival.id} className="hover-lift shadow-soft border-0 overflow-hidden group animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span className="text-xs font-medium">{festival.typical_month}</span>
                      </Badge>
                      {festival.event_type && (
                        <Badge variant="outline" className="text-xs">{festival.event_type}</Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl font-serif group-hover:text-primary transition-colors mb-2">
                      {festival.title}
                    </CardTitle>
                    {festival.significance && (
                      <div className="flex items-start gap-2 text-sm text-muted-foreground bg-accent/10 p-3 rounded-lg mt-3">
                        <Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="italic">{festival.significance}</p>
                      </div>
                    )}
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="mb-4 text-base leading-relaxed">
                      {festival.description}
                    </CardDescription>
                    
                    {festival.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{festival.location}</span>
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

export default Events;
