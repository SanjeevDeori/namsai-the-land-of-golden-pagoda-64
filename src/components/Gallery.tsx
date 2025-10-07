import { useEffect, useRef, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import GalleryUploadForm from './GalleryUploadForm';
import { Skeleton } from '@/components/ui/skeleton';

const curatedImages = [
  {
    id: 1,
    src: "/lovable-uploads/a1e0c0f0-07fa-4532-85d7-4111421c04a6.png",
    alt: "Golden Pagoda illuminated at night",
    caption: "The magnificent Golden Pagoda illuminated at night",
  },
  {
    id: 2,
    src: "/lovable-uploads/30dc4606-508c-4e7c-a1cf-4bd340635538.png",
    alt: "Dihing River flowing through forests",
    caption: "Dihing River: Lifeblood of the region's ecosystem",
  },
  {
    id: 3,
    src: "/lovable-uploads/dec22237-99fa-4614-983e-17f0f5b574e4.png",
    alt: "Parshuramkund on the Lohit River",
    caption: "Parshuramkund - Sacred pilgrimage site",
  },
  {
    id: 4,
    src: "/lovable-uploads/c5dc96f2-9adc-443c-b259-ffa75c8c0b93.png",
    alt: "Traditional Namsai cuisine",
    caption: "Local cuisine of Namsai",
  },
  {
    id: 5,
    src: "/lovable-uploads/a821a661-cd28-43f5-bbea-5192f054f456.png",
    alt: "Golden Pagoda in daylight",
    caption: "Golden Pagoda with its distinctive architecture",
  },
  {
    id: 6,
    src: "/lovable-uploads/0e9193ce-2476-4e64-9f0c-ce8d1407455b.png",
    alt: "Golden Buddha statue at Golden Pagoda",
    caption: "Golden Buddha statue at Kongmu Kham",
  },
];

interface GalleryPhoto {
  id: string;
  image_url: string;
  photographer_name: string | null;
  description: string;
  location: string | null;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [userPhotos, setUserPhotos] = useState<GalleryPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  // Combine curated and user photos
  const allImages = [
    ...curatedImages,
    ...userPhotos.map(photo => ({
      id: parseInt(photo.id.slice(0, 8), 16),
      src: photo.image_url,
      alt: photo.description,
      caption: photo.photographer_name 
        ? `${photo.description} - Photo by ${photo.photographer_name}`
        : photo.description,
    }))
  ];
  
  // Fetch user-uploaded photos
  useEffect(() => {
    const fetchUserPhotos = async () => {
      const { data, error } = await supabase
        .from('gallery_photos')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setUserPhotos(data);
      }
      setLoading(false);
    };

    fetchUserPhotos();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: number) => {
    if (selectedImage === null) return;
    
    const newIndex = (selectedImage + direction + allImages.length) % allImages.length;
    setSelectedImage(newIndex);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateImage(1);
      if (e.key === 'ArrowLeft') navigateImage(-1);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery" ref={sectionRef} className="py-20 sm:py-24 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-on-scroll">
          <span className="inline-block py-1 px-3 rounded-full bg-namsai-100 text-namsai-800 text-sm font-medium mb-4">
            Visual Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-namsai-800 mb-6">
            Glimpses of Namsai
          </h2>
          <p className="text-namsai-600 text-lg">
            Explore the beauty and culture of Namsai through photos from our community
          </p>
        </div>

        {/* Upload Form */}
        <div className="mb-12 max-w-2xl mx-auto">
          <GalleryUploadForm />
        </div>
        
        {/* Gallery Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <Skeleton key={n} className="aspect-[4/3] rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allImages.map((image, index) => (
            <div 
              key={image.id} 
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group opacity-0 animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-4 aspect-h-3 image-shine">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-medium">{image.caption}</p>
                  <button className="mt-2 text-white/80 text-sm hover:text-white flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4h2v4A2.75 2.75 0 0112.75 18h-8.5A2.75 2.75 0 011.5 15.25v-8.5A2.75 2.75 0 014.25 4h4v2h-4z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                    </svg>
                    View full size
                  </button>
                </div>
              </div>
            </div>
            ))}
          </div>
        )}
        
      </div>
      
      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white z-10"
              onClick={(e) => { e.stopPropagation(); navigateImage(-1); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="h-full max-h-[80vh] flex items-center">
              <img 
                src={allImages[selectedImage].src} 
                alt={allImages[selectedImage].alt} 
                className="max-w-full max-h-full object-contain mx-auto"
              />
            </div>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white z-10"
              onClick={(e) => { e.stopPropagation(); navigateImage(1); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-lg font-medium">{allImages[selectedImage].caption}</p>
              <p className="text-sm text-white/70">{selectedImage + 1} of {allImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
