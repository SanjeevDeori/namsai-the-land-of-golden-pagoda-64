-- Create visitor_stats table to track site visitors
CREATE TABLE public.visitor_stats (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  visit_count bigint NOT NULL DEFAULT 0,
  last_updated timestamp with time zone DEFAULT now()
);

-- Insert initial record
INSERT INTO public.visitor_stats (visit_count) VALUES (0);

-- Enable RLS
ALTER TABLE public.visitor_stats ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view visitor count
CREATE POLICY "Anyone can view visitor stats"
ON public.visitor_stats
FOR SELECT
USING (true);

-- Allow anyone to update visitor count (will be incremented via function)
CREATE POLICY "Anyone can update visitor stats"
ON public.visitor_stats
FOR UPDATE
USING (true);

-- Create function to increment visitor count
CREATE OR REPLACE FUNCTION public.increment_visitor_count()
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_count bigint;
BEGIN
  UPDATE public.visitor_stats
  SET visit_count = visit_count + 1,
      last_updated = now()
  WHERE id = (SELECT id FROM public.visitor_stats LIMIT 1)
  RETURNING visit_count INTO new_count;
  
  RETURN new_count;
END;
$$;