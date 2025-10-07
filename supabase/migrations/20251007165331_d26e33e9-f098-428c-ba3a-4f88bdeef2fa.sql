-- Create gallery_photos table for user-uploaded photos
CREATE TABLE IF NOT EXISTS public.gallery_photos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  photographer_name TEXT,
  is_anonymous BOOLEAN DEFAULT true,
  description TEXT NOT NULL,
  is_approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  location TEXT
);

-- Enable RLS on gallery_photos
ALTER TABLE public.gallery_photos ENABLE ROW LEVEL SECURITY;

-- Anyone can submit photos
CREATE POLICY "Anyone can submit gallery photos"
ON public.gallery_photos
FOR INSERT
WITH CHECK (true);

-- Anyone can view approved photos
CREATE POLICY "Anyone can view approved gallery photos"
ON public.gallery_photos
FOR SELECT
USING (is_approved = true);

-- Create storage bucket for user photo uploads
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'gallery-photos',
  'gallery-photos',
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for gallery photos
CREATE POLICY "Anyone can upload gallery photos"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'gallery-photos');

CREATE POLICY "Gallery photos are publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'gallery-photos');

-- Restructure events table for festival overviews
ALTER TABLE public.events
DROP COLUMN IF EXISTS event_date,
ADD COLUMN IF NOT EXISTS typical_month TEXT,
ADD COLUMN IF NOT EXISTS significance TEXT;

-- Update existing events with typical months
UPDATE public.events
SET typical_month = 'Throughout the year'
WHERE typical_month IS NULL;