-- Create accommodations table
CREATE TABLE public.accommodations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL CHECK (type IN ('hotel', 'homestay', 'resort', 'guesthouse')),
  price_range TEXT,
  location TEXT NOT NULL,
  contact_phone TEXT,
  contact_email TEXT,
  image_url TEXT,
  amenities TEXT[],
  rating DECIMAL(2,1) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.accommodations ENABLE ROW LEVEL SECURITY;

-- Allow public read access for accommodations (tourism website needs public data)
CREATE POLICY "Anyone can view accommodations"
ON public.accommodations
FOR SELECT
USING (true);

-- Create index for faster queries
CREATE INDEX idx_accommodations_type ON public.accommodations(type);
CREATE INDEX idx_accommodations_rating ON public.accommodations(rating DESC);

-- Insert sample data
INSERT INTO public.accommodations (name, description, type, price_range, location, contact_phone, amenities, rating, image_url) VALUES
('Golden Pagoda Hotel', 'Comfortable hotel near the Golden Pagoda with modern amenities and beautiful views.', 'hotel', '₹2000-4000/night', 'Near Golden Pagoda, Namsai', '+91-XXXX-XXXXXX', ARRAY['WiFi', 'Restaurant', 'Parking', 'AC Rooms'], 4.5, '/lovable-uploads/d9bc7569-a034-41b2-833b-fb02e8c06b2c.png'),
('Namsai Homestay', 'Experience authentic local culture with warm hospitality in traditional Namsai homes.', 'homestay', '₹800-1500/night', 'Namsai Town Center', '+91-XXXX-XXXXXX', ARRAY['Home-cooked meals', 'Cultural activities', 'WiFi'], 4.7, '/lovable-uploads/eef834b3-d7f0-4fd4-8405-baeb3ae8507f.png'),
('Lake View Resort', 'Peaceful resort with stunning lake views, perfect for nature lovers and relaxation.', 'resort', '₹3000-6000/night', 'Near Namsai Lake', '+91-XXXX-XXXXXX', ARRAY['Restaurant', 'Lake activities', 'Spa', 'WiFi', 'Pool'], 4.8, '/lovable-uploads/9027b183-c3e6-4255-a5b6-284ae30d5b74.png'),
('Budget Guesthouse', 'Affordable and clean accommodation ideal for backpackers and budget travelers.', 'guesthouse', '₹500-1000/night', 'Namsai Market Area', '+91-XXXX-XXXXXX', ARRAY['WiFi', 'Shared kitchen', 'Hot water'], 4.2, '/lovable-uploads/fde0a383-a750-4aa8-a8fd-44c48be69a22.png');