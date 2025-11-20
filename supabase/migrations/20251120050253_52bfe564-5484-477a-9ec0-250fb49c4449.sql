-- Fix search_path for increment_visitor_count function
CREATE OR REPLACE FUNCTION public.increment_visitor_count()
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
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