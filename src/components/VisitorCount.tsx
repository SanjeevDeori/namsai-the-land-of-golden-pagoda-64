import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Users } from 'lucide-react';

const VisitorCount = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // Increment visitor count
        const { data, error } = await supabase.rpc('increment_visitor_count');
        
        if (!error && data) {
          setCount(data);
        } else {
          // Fallback: just fetch current count if increment fails
          const { data: stats } = await supabase
            .from('visitor_stats')
            .select('visit_count')
            .single();
          
          if (stats) {
            setCount(stats.visit_count);
          }
        }
      } catch (error) {
        console.error('Error tracking visitor:', error);
      } finally {
        setLoading(false);
      }
    };

    trackVisitor();
  }, []);

  if (loading || count === null) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <Users className="h-4 w-4" />
      <span className="text-sm">
        <strong className="text-foreground">{count.toLocaleString()}</strong> visitors
      </span>
    </div>
  );
};

export default VisitorCount;
