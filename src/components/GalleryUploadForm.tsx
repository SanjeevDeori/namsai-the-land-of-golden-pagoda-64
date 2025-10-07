import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Upload, Loader2 } from 'lucide-react';

const GalleryUploadForm = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [photographerName, setPhotographerName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: 'Invalid file type',
          description: 'Please upload an image file (JPEG, PNG, or WebP)',
          variant: 'destructive',
        });
        return;
      }
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: 'File too large',
          description: 'Image must be less than 5MB',
          variant: 'destructive',
        });
        return;
      }
      
      setImageFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!imageFile || !description) {
      toast({
        title: 'Missing information',
        description: 'Please provide an image and description',
        variant: 'destructive',
      });
      return;
    }

    setIsUploading(true);

    try {
      // Upload image to storage
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('gallery-photos')
        .upload(filePath, imageFile);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('gallery-photos')
        .getPublicUrl(filePath);

      // Insert record into database
      const { error: dbError } = await supabase
        .from('gallery_photos')
        .insert({
          image_url: publicUrl,
          photographer_name: isAnonymous ? null : photographerName,
          is_anonymous: isAnonymous,
          description,
          location: location || null,
        });

      if (dbError) throw dbError;

      toast({
        title: 'Photo submitted successfully!',
        description: 'Your photo will appear in the gallery after approval.',
      });

      // Reset form
      setImageFile(null);
      setPhotographerName('');
      setIsAnonymous(true);
      setDescription('');
      setLocation('');
      const fileInput = document.getElementById('photo-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: 'Upload failed',
        description: 'There was an error uploading your photo. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="glass border-0 shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Share Your Namsai Photos
        </CardTitle>
        <CardDescription>
          Contribute to our gallery by uploading your beautiful photos of Namsai
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="photo-upload">Photo *</Label>
            <Input
              id="photo-upload"
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/webp"
              onChange={handleFileChange}
              disabled={isUploading}
              className="cursor-pointer"
            />
            <p className="text-sm text-muted-foreground mt-1">
              Max 5MB • JPEG, PNG, or WebP
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="anonymous"
              checked={isAnonymous}
              onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
              disabled={isUploading}
            />
            <Label htmlFor="anonymous" className="cursor-pointer">
              Submit anonymously
            </Label>
          </div>

          {!isAnonymous && (
            <div>
              <Label htmlFor="photographer">Your Name</Label>
              <Input
                id="photographer"
                value={photographerName}
                onChange={(e) => setPhotographerName(e.target.value)}
                placeholder="Enter your name"
                disabled={isUploading}
                maxLength={100}
              />
            </div>
          )}

          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us about this photo..."
              disabled={isUploading}
              maxLength={500}
              rows={3}
            />
            <p className="text-sm text-muted-foreground mt-1">
              {description.length}/500 characters
            </p>
          </div>

          <div>
            <Label htmlFor="location">Location (Optional)</Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Where was this photo taken?"
              disabled={isUploading}
              maxLength={100}
            />
          </div>

          <Button type="submit" disabled={isUploading} className="w-full">
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Submit Photo
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default GalleryUploadForm;