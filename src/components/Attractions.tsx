
import { useEffect, useRef } from 'react';
import { Sparkles, Compass, Star } from 'lucide-react';

const attractions = [
  {
    id: 1,
    title: "Golden Pagoda (Kongmu Kham)",
    description: "The most iconic landmark of Namsai, this magnificent Buddhist temple is adorned with gold and showcases exquisite Tai-Khamti architecture. The serene atmosphere and spiritual significance make it a must-visit destination.",
    image: "/lovable-uploads/969dc2c3-c3ad-43c9-b2db-1d01425fb936.png",
    emoji: "🏯"
  },
  {
    id: 2,
    title: "Namdapha National Park",
    description: "A stunning biodiversity hotspot located near Namsai, this national park is home to diverse flora and fauna, including rare species of tigers, leopards, and hundreds of bird species. The lush rainforest and pristine rivers offer perfect opportunities for nature enthusiasts and adventure seekers.",
    image: "/lovable-uploads/fec4af02-9f78-4a2f-969c-22c83f83a2ee.png",
    emoji: "🐯"
  },
  {
    id: 3,
    title: "Parshuramkund",
    description: "A sacred site located on the Lohit River, Parshuramkund attracts thousands of pilgrims who come to take a holy dip in its waters, especially during Makar Sankranti in January.",
    image: "/lovable-uploads/902fb122-a32b-4392-9770-6a7f5ae9167a.png",
    emoji: "💦"
  },
  {
    id: 4,
    title: "Riverside Resorts",
    description: "Experience luxurious relaxation amidst nature at the riverside resorts of Namsai. These eco-friendly accommodations offer stunning views, traditional architecture, and an authentic experience of local hospitality while enjoying the serene riverside environment.",
    image: "/lovable-uploads/9d6bb13c-2c12-40f5-ad32-3ccf0bc17a5e.png",
    emoji: "🏞️"
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
    <section id="attractions" ref={sectionRef} className="py-20 sm:py-24 md:py-28 bg-gradient-to-b from-background to-accent/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-dots opacity-50"></div>
      
      {/* Floating stars */}
      {[...Array(10)].map((_, i) => (
        <div 
          key={i} 
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          <Star 
            className="text-accent fill-accent/30 animate-pulse" 
            style={{
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        </div>
      ))}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-on-scroll">
          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4 border border-accent/30">
            <Compass className="h-4 w-4" />
            Explore
            <Compass className="h-4 w-4" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Must-Visit Places in Namsai
          </h2>
          <p className="text-foreground/70 text-lg">
            Discover the spiritual sanctuaries, natural wonders, and cultural landmarks
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {attractions.map((attraction, index) => (
            <div 
              key={attraction.id} 
              className="group bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-playful transition-all duration-500 opacity-0 animate-on-scroll playful-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-2xl transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  {attraction.emoji}
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="absolute -top-12 right-6 transform translate-y-0 opacity-0 group-hover:translate-y-4 group-hover:opacity-100 transition-all duration-500">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {attraction.title}
                </h3>
                <p className="text-foreground/70">
                  {attraction.description}
                </p>
                <div className="mt-6">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-300 jelly-button"
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
            className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 font-medium transition-all duration-300 shadow-lg hover:shadow-playful hover:-translate-y-1 jelly-button"
          >
            View All Attractions
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-secondary/20"></path>
        </svg>
      </div>
    </section>
  );
};

export default Attractions;
