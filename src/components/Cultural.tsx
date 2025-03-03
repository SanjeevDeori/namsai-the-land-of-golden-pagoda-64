
import { useEffect, useRef, useState } from 'react';
import { Sparkles, Heart, StarIcon, Music, Palette, Utensils } from 'lucide-react';

const Cultural = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoverCard, setHoverCard] = useState<number | null>(null);
  
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
    <section id="culture" ref={sectionRef} className="py-20 sm:py-24 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/10 dark:from-primary/20 dark:to-background relative overflow-hidden">
      {/* Decorative bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary/10 dark:bg-primary/20 animate-float"
            style={{
              width: `${30 + Math.random() * 80}px`,
              height: `${30 + Math.random() * 80}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-on-scroll">
          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Cultural Heritage
            <Sparkles className="h-4 w-4" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Vibrant Traditions of Namsai
          </h2>
          <p className="text-foreground/70 text-lg">
            Experience the rich cultural tapestry woven with vibrant traditions, unique customs, and diverse heritage
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2 opacity-0 animate-on-scroll">
            <div 
              className="rounded-2xl overflow-hidden shadow-lg relative bg-white/70 dark:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-playful playful-card border border-primary/10"
              onMouseEnter={() => setHoverCard(0)}
              onMouseLeave={() => setHoverCard(null)}
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img 
                  src="/lovable-uploads/c4889389-a69b-4da1-83bc-4b34d6ae4865.png" 
                  alt="Sangken Festival - Water ritual with Buddha statue" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {hoverCard === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-white font-display text-2xl font-semibold mb-2 flex items-center">
                  <Heart className="h-6 w-6 mr-2 text-candy-pink" />
                  Cultural Diversity
                </h3>
                <p className="text-white/90">
                  The history of Namsai is deeply intertwined with the migration of diverse ethnic communities. The Tai-Khamti people, known for their Theravada Buddhist heritage, came from the Kingdom of Siam (present-day Thailand) and brought with them a rich tradition of script, literature, and craftsmanship. They are skilled in agriculture and are known for their unique martial art, "Khamti Lakawn," as well as their vibrant festivals like Sangken, the Buddhist New Year.
                </p>
                <p className="text-white/90 mt-3">
                  The Singpho community, closely related to the Kachin people of Myanmar, has a distinct identity rooted in animistic beliefs and nature worship. They are renowned for their warrior traditions and played a significant role in the early tea trade in Assam. The Singphos also maintain their cultural heritage through their unique language, textiles, and traditional governance systems.
                </p>
                <p className="text-white/90 mt-3">
                  Each community contributes to the rich cultural tapestry of Namsai. The Deori people are known for their agricultural expertise, colorful festivals like Ibaku Bisu, and rich oral traditions. Their deep connection to nature and ancestral customs reflects their strong cultural identity, while the Moran people have preserved their ancient traditions and distinct cultural practices through generations.
                </p>
                <p className="text-white/90 mt-3">
                  Today, Namsai serves as an important cultural bridge, where these diverse communities live harmoniously while preserving their unique traditions. This makes it a fascinating destination for those interested in the rich cultural diversity of Northeast India.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div 
              className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-playful-sm border border-primary/10 opacity-0 animate-on-scroll relative overflow-hidden playful-card"
              onMouseEnter={() => setHoverCard(1)}
              onMouseLeave={() => setHoverCard(null)}
            >
              {hoverCard === 1 && (
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30 transition duration-1000 animate-pulse"></div>
              )}
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 border border-primary/30 relative z-10">
                <StarIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 relative z-10">Religious Diversity</h3>
              <p className="text-foreground/70 relative z-10">
                While Theravada Buddhism is predominant among the Tai-Khamti, other communities like the Deori practice their traditional animistic beliefs, and the Singpho and Moran have their own unique spiritual practices that have been preserved for generations.
              </p>
            </div>
            
            <div 
              className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-playful-sm border border-primary/10 opacity-0 animate-on-scroll animate-delay-100 relative overflow-hidden playful-card"
              onMouseEnter={() => setHoverCard(2)}
              onMouseLeave={() => setHoverCard(null)}
            >
              {hoverCard === 2 && (
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30 transition duration-1000 animate-pulse"></div>
              )}
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 border border-primary/30 relative z-10">
                <Music className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 relative z-10">Traditional Arts</h3>
              <p className="text-foreground/70 relative z-10">
                Each community excels in distinct art forms. The Tai-Khamti are known for intricate patterns in weaving, the Singpho for bamboo craft, the Deori for colorful textiles with geometric patterns, and the Moran for traditional wood carving and musical instruments.
              </p>
            </div>
            
            <div 
              className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-playful-sm border border-primary/10 opacity-0 animate-on-scroll animate-delay-200 relative overflow-hidden playful-card"
              onMouseEnter={() => setHoverCard(3)}
              onMouseLeave={() => setHoverCard(null)}
            >
              {hoverCard === 3 && (
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30 transition duration-1000 animate-pulse"></div>
              )}
              <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 border border-primary/30 relative z-10">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 relative z-10">Culinary Traditions</h3>
              <p className="text-foreground/70 relative z-10">
                The cuisine features sticky rice, fresh herbs, and dishes like khao soi (rice noodle soup) from the Tai-Khamti, smoked meat preparations from the Singpho, fish-based dishes from the Deori, and unique fermented preparations from the Moran community.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 opacity-0 animate-on-scroll">
          <div 
            className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-playful border border-primary/10 relative overflow-hidden playful-card"
            onMouseEnter={() => setHoverCard(4)}
            onMouseLeave={() => setHoverCard(null)}
          >
            {hoverCard === 4 && (
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30 transition duration-1000 animate-pulse"></div>
            )}
            <div className="flex flex-col md:flex-row items-center relative z-10">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                  Experience Cultural Immersion
                </h3>
                <p className="text-foreground/70 mb-4">
                  Visitors to Namsai can participate in cultural workshops, witness traditional performances, and even stay in homestays with local families to gain an authentic experience of the rich cultural heritage of the region.
                </p>
                <p className="text-foreground/70">
                  The annual cultural festivals provide the perfect opportunity to witness traditional dances, music, and rituals in their full splendor.
                </p>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 px-8 py-4 font-medium transition-all duration-300 shadow-lg hover:shadow-playful hover:-translate-y-1 group jelly-button"
                >
                  Discover Cultural Tours
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add additional decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20"></div>
      
      <style>
        {`
          .glow-text {
            text-shadow: 0 0 10px rgba(255, 107, 152, 0.5), 0 0 20px rgba(255, 107, 152, 0.3);
          }
        `}
      </style>
    </section>
  );
};

export default Cultural;
