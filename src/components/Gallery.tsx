
import { useEffect, useRef, useState } from 'react';
import { Camera, Image, Star, Sparkles } from 'lucide-react';

const images = [
  {
    id: 1,
    src: "/lovable-uploads/a1e0c0f0-07fa-4532-85d7-4111421c04a6.png",
    alt: "Golden Pagoda illuminated at night",
    caption: "The magnificent Golden Pagoda illuminated at night",
    emoji: "✨"
  },
  {
    id: 2,
    src: "/lovable-uploads/30dc4606-508c-4e7c-a1cf-4bd340635538.png",
    alt: "Dihing River flowing through forests",
    caption: "Dihing River: Lifeblood of the region's ecosystem",
    emoji: "🌊"
  },
  {
    id: 3,
    src: "/lovable-uploads/dec22237-99fa-4614-983e-17f0f5b574e4.png",
    alt: "Parshuramkund on the Lohit River",
    caption: "Parshuramkund - Sacred pilgrimage site",
    emoji: "🏞️"
  },
  {
    id: 4,
    src: "/lovable-uploads/c5dc96f2-9adc-443c-b259-ffa75c8c0b93.png",
    alt: "Traditional Namsai cuisine",
    caption: "Local cuisine of Namsai",
    emoji: "🍽️"
  },
  {
    id: 5,
    src: "/lovable-uploads/a821a661-cd28-43f5-bbea-5192f054f456.png",
    alt: "Golden Pagoda in daylight",
    caption: "Golden Pagoda with its distinctive architecture",
    emoji: "🏯"
  },
  {
    id: 6,
    src: "/lovable-uploads/0e9193ce-2476-4e64-9f0c-ce8d1407455b.png",
    alt: "Golden Buddha statue at Golden Pagoda",
    caption: "Golden Buddha statue at Kongmu Kham",
    emoji: "🧘"
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
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
    
    const newIndex = (selectedImage + direction + images.length) % images.length;
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
    <section id="gallery" ref={sectionRef} className="py-20 sm:py-24 md:py-28 bg-secondary/20 dark:bg-secondary/5 relative overflow-hidden">
      {/* Decorative background confetti */}
      <div className="absolute inset-0 bg-confetti-pattern opacity-25"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-on-scroll">
          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            <Camera className="h-4 w-4" />
            Visual Journey
            <Camera className="h-4 w-4" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Glimpses of Namsai
          </h2>
          <p className="text-foreground/70 text-lg">
            Explore the beauty and culture of Namsai through our curated photo gallery
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group opacity-0 animate-on-scroll transform hover:-rotate-1 hover:-translate-y-2 transition-all duration-300 playful-card"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-4 aspect-h-3 image-shine relative">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-2xl z-10 transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
                  {image.emoji}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-medium font-display">{image.caption}</p>
                  <button className="mt-2 text-white/80 text-sm hover:text-white flex items-center">
                    <Image className="h-4 w-4 mr-1" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">View full size</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-on-scroll">
          <a 
            href="#" 
            className="inline-flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 px-8 py-4 font-medium transition-all duration-300 shadow-lg hover:shadow-playful hover:-translate-y-1 jelly-button"
          >
            View Complete Gallery
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="absolute top-4 right-4 flex space-x-2">
              <button 
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 z-10"
                onClick={() => navigateImage(-1)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 z-10"
                onClick={() => navigateImage(1)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button 
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 z-10"
                onClick={closeLightbox}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="h-full max-h-[80vh] flex items-center">
              <div className="relative">
                <img 
                  src={images[selectedImage].src} 
                  alt={images[selectedImage].alt} 
                  className="max-w-full max-h-full object-contain mx-auto rounded-xl"
                />
                <div className="absolute -top-4 -right-4">
                  <Sparkles className="h-8 w-8 text-accent animate-pulse" />
                </div>
                <div className="absolute -bottom-4 -left-4">
                  <Star className="h-8 w-8 text-accent fill-accent/30 animate-pulse" />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <div className="bg-black/50 backdrop-blur-md py-3 px-6 rounded-full inline-block">
                <p className="text-lg font-display text-white">{images[selectedImage].caption}</p>
                <p className="text-sm text-white/70">{selectedImage + 1} of {images.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
