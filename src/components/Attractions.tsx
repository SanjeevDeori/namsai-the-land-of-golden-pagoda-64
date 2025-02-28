
import { useEffect, useRef } from 'react';

const attractions = [
  {
    id: 1,
    title: "Golden Pagoda (Kongmu Kham)",
    description: "The most iconic landmark of Namsai, this magnificent Buddhist temple is adorned with gold and showcases exquisite Tai-Khamti architecture. The serene atmosphere and spiritual significance make it a must-visit destination.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1974",
  },
  {
    id: 2,
    title: "Namsai Botanical Garden",
    description: "Home to a diverse collection of indigenous plants and medicinal herbs, the botanical garden offers a peaceful retreat for nature lovers and researchers interested in the rich biodiversity of the region.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1974",
  },
  {
    id: 3,
    title: "Parshuramkund",
    description: "A sacred site located on the Lohit River, Parshuramkund attracts thousands of pilgrims who come to take a holy dip in its waters, especially during Makar Sankranti in January.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1974",
  },
  {
    id: 4,
    title: "Namsai Museum",
    description: "Showcasing the rich cultural heritage of the Tai-Khamti and other indigenous communities, the museum houses traditional artifacts, ancient manuscripts, and exhibits that narrate the fascinating history of the region.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1974",
  },
];

const Attractions = () => {
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

  return (
    <section id="attractions" ref={sectionRef} className="py-20 sm:py-24 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-on-scroll">
          <span className="inline-block py-1 px-3 rounded-full bg-namsai-100 text-namsai-800 text-sm font-medium mb-4">
            Explore
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-namsai-800 mb-6">
            Must-Visit Places in Namsai
          </h2>
          <p className="text-namsai-600 text-lg">
            Discover the spiritual sanctuaries, natural wonders, and cultural landmarks
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {attractions.map((attraction, index) => (
            <div 
              key={attraction.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-namsai-800 mb-3 group-hover:text-namsai-600 transition-colors duration-300">
                  {attraction.title}
                </h3>
                <p className="text-namsai-600">
                  {attraction.description}
                </p>
                <div className="mt-6">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-namsai-700 font-medium hover:text-namsai-500 transition-colors duration-300"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center opacity-0 animate-on-scroll">
          <a 
            href="#" 
            className="inline-flex items-center justify-center rounded-full bg-namsai-100 text-namsai-700 hover:bg-namsai-200 px-6 py-3 font-medium transition-colors duration-300"
          >
            View All Attractions
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Attractions;
