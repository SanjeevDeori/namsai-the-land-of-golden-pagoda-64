import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Upload, Loader2 } from 'lucide-react';

const GalleryUploadForm = () => {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    description: '',
    photographerName: '',
    location: '',
    isAnonymous: false,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file');
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      toast.error('Please select an image');
      return;
    }

    if (!formData.description.trim()) {
      toast.error('Please add a description');
      return;
    }

    setUploading(true);

    try {
      // Upload image to storage
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('gallery-photos')
        .upload(filePath, selectedFile);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('gallery-photos')
        .getPublicUrl(filePath);

      // Insert into database
      const { error: insertError } = await supabase
        .from('gallery_photos')
        .insert({
          image_url: publicUrl,
          description: formData.description,
          photographer_name: formData.isAnonymous ? null : formData.photographerName || null,
          location: formData.location || null,
          is_anonymous: formData.isAnonymous,
          is_approved: false,
        });

      if (insertError) throw insertError;

      toast.success('Photo submitted successfully! It will appear after approval.');
      
      // Reset form
      setFormData({
        description: '',
        photographerName: '',
        location: '',
        isAnonymous: false,
      });
      setSelectedFile(null);
      const fileInput = document.getElementById('photo-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (error: any) {
      console.error('Error uploading photo:', error);
      toast.error('Failed to upload photo. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-lg p-6 border border-border">
      <div className="flex items-center gap-2 mb-4">
        <Upload className="h-5 w-5 text-primary" />
        <h3 className="text-xl font-semibold text-foreground">Share Your Photo</h3>
      </div>
      <p className="text-muted-foreground mb-6 text-sm">
        Upload your favorite photos of Namsai. All photos are reviewed before being published.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="photo-upload">Photo *</Label>
          <Input
            id="photo-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            className="cursor-pointer"
          />
          <p className="text-xs text-muted-foreground mt-1">Max size: 5MB</p>
        </div>

        <div>
          <Label htmlFor="description">Description *</Label>
          <Textarea
            id="description"
            placeholder="Describe your photo..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            disabled={uploading}
            rows={3}
            maxLength={200}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="photographer">Your Name (optional)</Label>
            <Input
              id="photographer"
              placeholder="Your name"
              value={formData.photographerName}
              onChange={(e) => setFormData({ ...formData, photographerName: e.target.value })}
              disabled={uploading || formData.isAnonymous}
            />
          </div>

          <div>
            <Label htmlFor="location">Location (optional)</Label>
            <Input
              id="location"
              placeholder="e.g., Golden Pagoda"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              disabled={uploading}
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="anonymous"
            checked={formData.isAnonymous}
            onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
            disabled={uploading}
            className="rounded border-border"
          />
          <Label htmlFor="anonymous" className="cursor-pointer">
            Submit anonymously
          </Label>
        </div>

        <Button 
          type="submit" 
          disabled={uploading || !selectedFile}
          className="w-full"
        >
          {uploading ? (
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
    </div>
  );
};

export default GalleryUploadForm;
