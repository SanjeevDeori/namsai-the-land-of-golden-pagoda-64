import { useEffect, useRef, useState } from 'react';

const images = [
  {
    id: 1,
    src: "/lovable-uploads/67ec9cc6-ada7-4700-b343-d6d8430b687c.png",
    alt: "Sangken Festival in Namsai",
    caption: "Vibrant Sangken Festival celebrations",
  },
  {
    id: 2,
    src: "/lovable-uploads/2c7ed464-464c-4c06-97c4-265efab6219c.png",
    alt: "Namdapha National Park",
    caption: "Lush forests of Namdapha National Park",
  },
  {
    id: 3,
    src: "/lovable-uploads/45a33244-4b98-4554-903f-967f4c1effc8.png",
    alt: "Parshuramkund",
    caption: "Sacred site of Parshuramkund",
  },
  {
    id: 4,
    src: "/lovable-uploads/9027b183-c3e6-4255-a5b6-284ae30d5b74.png",
    alt: "Golden Pagoda",
    caption: "The magnificent Golden Pagoda",
  },
  {
    id: 5,
    src: "/lovable-uploads/4c16c767-aac3-4ca4-b32f-526b0f3195ef.png",
    alt: "Luxury Resorts in Namsai",
    caption: "Luxurious accommodations in Namsai",
  },
  {
    id: 6,
    src: "/lovable-uploads/181a7f41-00bc-4f9e-bb70-547089d9ff91.png",
    alt: "Riverside Resort in Namsai",
    caption: "Serene riverside resort with traditional huts",
  }
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
            Explore the beauty and culture of Namsai through our curated photo gallery
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
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
        
        <div className="mt-12 text-center opacity-0 animate-on-scroll">
          <a 
            href="#" 
            className="inline-flex items-center justify-center rounded-full bg-namsai-700 text-white hover:bg-namsai-600 px-6 py-3 font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View Complete Gallery
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
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
                src={images[selectedImage].src} 
                alt={images[selectedImage].alt} 
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
              <p className="text-lg font-medium">{images[selectedImage].caption}</p>
              <p className="text-sm text-white/70">{selectedImage + 1} of {images.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
