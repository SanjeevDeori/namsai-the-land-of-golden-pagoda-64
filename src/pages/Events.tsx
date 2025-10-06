import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';
import { format } from 'date-fns';

interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  event_type: string;
  location: string;
  image_url: string | null;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('event_date', { ascending: true });

    if (error) {
      console.error('Error fetching events:', error);
    } else {
      setEvents(data || []);
    }
    setLoading(false);
  };

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(e => e.event_type?.toLowerCase() === filter);

  const eventTypes = [...new Set(events.map(e => e.event_type).filter(Boolean))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-namsai-50 to-white dark:from-namsai-900 dark:to-namsai-800">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-namsai-800 dark:text-namsai-100 mb-4">
              Events & Festivals
            </h1>
            <p className="text-lg text-namsai-600 dark:text-namsai-300 mb-6">
              Experience the vibrant culture and traditions of Namsai
            </p>
            
            <div className="flex justify-center gap-2 flex-wrap">
              <Badge 
                variant={filter === 'all' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setFilter('all')}
              >
                All Events
              </Badge>
              {eventTypes.map(type => (
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
            <div className="text-center py-12">Loading events...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(event.event_date), 'MMM dd, yyyy')}
                      </Badge>
                      {event.event_type && (
                        <Badge variant="outline">{event.event_type}</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="mb-4">
                      {event.description}
                    </CardDescription>
                    
                    {event.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {event.location}
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
  );
};

export default Events;
