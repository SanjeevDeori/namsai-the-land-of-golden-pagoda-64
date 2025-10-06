-- Drop accommodations table
DROP TABLE IF EXISTS public.accommodations CASCADE;

-- Create itineraries table
CREATE TABLE public.itineraries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  duration TEXT NOT NULL,
  description TEXT,
  highlights TEXT[],
  activities TEXT[],
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create reviews table
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  attraction_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  author_name TEXT NOT NULL,
  author_email TEXT,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create events table
CREATE TABLE public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  event_date DATE NOT NULL,
  event_type TEXT,
  location TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author TEXT NOT NULL,
  featured_image TEXT,
  category TEXT,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.itineraries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Anyone can view itineraries"
ON public.itineraries FOR SELECT USING (true);

CREATE POLICY "Anyone can view approved reviews"
ON public.reviews FOR SELECT USING (is_approved = true);

CREATE POLICY "Anyone can submit reviews"
ON public.reviews FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view events"
ON public.events FOR SELECT USING (true);

CREATE POLICY "Anyone can view blog posts"
ON public.blog_posts FOR SELECT USING (true);

-- Create indexes
CREATE INDEX idx_events_date ON public.events(event_date DESC);
CREATE INDEX idx_blog_slug ON public.blog_posts(slug);
CREATE INDEX idx_reviews_approved ON public.reviews(is_approved, created_at DESC);

-- Insert sample data
INSERT INTO public.itineraries (title, duration, description, highlights, activities, is_featured) VALUES
('One Day Golden Pagoda Tour', '1 Day', 'Perfect for those short on time but wanting to experience the spiritual essence of Namsai.', ARRAY['Visit Golden Pagoda', 'Explore museum', 'Local market shopping'], ARRAY['Temple visit', 'Cultural exploration', 'Shopping'], true),
('Three Day Cultural Experience', '3 Days', 'Immerse yourself in local culture, traditions, and natural beauty of Namsai.', ARRAY['Golden Pagoda', 'Parshuram Kund', 'Tribal villages', 'Local festivals'], ARRAY['Temple tours', 'Trekking', 'Cultural interactions', 'Photography'], true),
('Five Day Adventure Package', '5 Days', 'Complete Namsai experience with adventure activities and cultural immersion.', ARRAY['All major attractions', 'Wildlife sanctuary', 'River rafting', 'Village homestay'], ARRAY['Adventure sports', 'Wildlife viewing', 'Cultural programs', 'Nature walks'], true);

INSERT INTO public.events (title, description, event_date, event_type, location) VALUES
('Sangken Festival', 'Traditional water festival celebrating the Tai New Year with cultural programs and water splashing.', '2025-04-14', 'Festival', 'Namsai Town'),
('Buddha Jayanti', 'Celebration of Lord Buddha''s birthday with prayers and cultural performances at Golden Pagoda.', '2025-05-26', 'Religious', 'Golden Pagoda'),
('Poi Sangken Poi', 'Traditional harvest festival with folk dances and community feasts.', '2025-11-15', 'Festival', 'Multiple locations');

INSERT INTO public.blog_posts (title, slug, content, excerpt, author, category) VALUES
('Discovering the Golden Pagoda', 'discovering-golden-pagoda', 'The Golden Pagoda of Namsai stands as a magnificent testament to Buddhist architecture and spiritual devotion. Built in 2010, this stunning structure has become one of the most important Buddhist pilgrimage sites in India...', 'Explore the architectural marvel and spiritual significance of Namsai''s iconic Golden Pagoda.', 'Travel Namsai Team', 'Culture'),
('Best Time to Visit Namsai', 'best-time-visit-namsai', 'Planning your trip to Namsai? Understanding the best time to visit can make all the difference in your experience. Namsai enjoys a pleasant climate throughout most of the year, but certain months offer unique advantages...', 'Complete guide to choosing the perfect time for your Namsai adventure.', 'Travel Namsai Team', 'Travel Tips'),
('Local Cuisine of Namsai', 'local-cuisine-namsai', 'The culinary traditions of Namsai reflect its rich cultural heritage and indigenous communities. From traditional Tai dishes to local Arunachal delicacies, the food here is a delightful journey of flavors...', 'Discover the unique flavors and traditional dishes of Namsai.', 'Travel Namsai Team', 'Food & Culture');