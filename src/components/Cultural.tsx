
import { useEffect, useRef, useState } from 'react';

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
    <section id="culture" ref={sectionRef} className="py-20 sm:py-24 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4 opacity-10">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="bg-blue-500/20 rounded-sm"></div>
        ))}
      </div>
      
      {/* Lightning effects */}
      <div className="absolute top-0 left-1/4 w-[1px] h-40 bg-blue-400 opacity-30 animate-[pulse_4s_ease-in-out_infinite]"></div>
      <div className="absolute top-20 right-1/3 w-[1px] h-60 bg-blue-400 opacity-20 animate-[pulse_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-40 left-1/3 w-[1px] h-40 bg-blue-400 opacity-30 animate-[pulse_5s_ease-in-out_infinite]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-on-scroll">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4 backdrop-blur-sm border border-blue-500/30">
            Cultural Heritage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 glow-text">
            Vibrant Traditions of Namsai
          </h2>
          <p className="text-blue-100/80 text-lg">
            Experience the rich cultural tapestry woven with vibrant traditions, unique customs, and diverse heritage
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2 opacity-0 animate-on-scroll">
            <div 
              className="rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)] relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
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
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent z-10"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-blue-300 font-serif text-2xl font-semibold mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  Cultural Diversity
                </h3>
                <p className="text-blue-100/80">
                  The history of Namsai is deeply intertwined with the migration of diverse ethnic communities. The Tai-Khamti people, known for their Theravada Buddhist heritage, came from the Kingdom of Siam (present-day Thailand) and brought with them a rich tradition of script, literature, and craftsmanship. They are skilled in agriculture and are known for their unique martial art, "Khamti Lakawn," as well as their vibrant festivals like Sangken, the Buddhist New Year.
                </p>
                <p className="text-blue-100/80 mt-3">
                  The Singpho community, closely related to the Kachin people of Myanmar, has a distinct identity rooted in animistic beliefs and nature worship. They are renowned for their warrior traditions and played a significant role in the early tea trade in Assam. The Singphos also maintain their cultural heritage through their unique language, textiles, and traditional governance systems.
                </p>
                <p className="text-blue-100/80 mt-3">
                  Each community contributes to the rich cultural tapestry of Namsai. The Deori people are known for their agricultural expertise, colorful festivals like Ibaku Bisu, and rich oral traditions. Their deep connection to nature and ancestral customs reflects their strong cultural identity, while the Moran people have preserved their ancient traditions and distinct cultural practices through generations.
                </p>
                <p className="text-blue-100/80 mt-3">
                  Today, Namsai serves as an important cultural bridge, where these diverse communities live harmoniously while preserving their unique traditions. This makes it a fascinating destination for those interested in the rich cultural diversity of Northeast India.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div 
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] opacity-0 animate-on-scroll relative overflow-hidden"
              onMouseEnter={() => setHoverCard(1)}
              onMouseLeave={() => setHoverCard(null)}
            >
              {hoverCard === 1 && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              )}
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/30 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-blue-300 mb-3 relative z-10">Religious Diversity</h3>
              <p className="text-blue-100/80 relative z-10">
                While Theravada Buddhism is predominant among the Tai-Khamti, other communities like the Deori practice their traditional animistic beliefs, and the Singpho and Moran have their own unique spiritual practices that have been preserved for generations.
              </p>
            </div>
            
            <div 
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] opacity-0 animate-on-scroll animate-delay-100 relative overflow-hidden"
              onMouseEnter={() => setHoverCard(2)}
              onMouseLeave={() => setHoverCard(null)}
            >
              {hoverCard === 2 && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              )}
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/30 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-blue-300 mb-3 relative z-10">Traditional Arts</h3>
              <p className="text-blue-100/80 relative z-10">
                Each community excels in distinct art forms. The Tai-Khamti are known for intricate patterns in weaving, the Singpho for bamboo craft, the Deori for colorful textiles with geometric patterns, and the Moran for traditional wood carving and musical instruments.
              </p>
            </div>
            
            <div 
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] opacity-0 animate-on-scroll animate-delay-200 relative overflow-hidden"
              onMouseEnter={() => setHoverCard(3)}
              onMouseLeave={() => setHoverCard(null)}
            >
              {hoverCard === 3 && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              )}
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/30 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-blue-300 mb-3 relative z-10">Culinary Traditions</h3>
              <p className="text-blue-100/80 relative z-10">
                The cuisine features sticky rice, fresh herbs, and dishes like khao soi (rice noodle soup) from the Tai-Khamti, smoked meat preparations from the Singpho, fish-based dishes from the Deori, and unique fermented preparations from the Moran community.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 opacity-0 animate-on-scroll">
          <div 
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] relative overflow-hidden"
            onMouseEnter={() => setHoverCard(4)}
            onMouseLeave={() => setHoverCard(null)}
          >
            {hoverCard === 4 && (
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            )}
            <div className="flex flex-col md:flex-row items-center relative z-10">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-serif font-semibold text-blue-300 mb-4">
                  Experience Cultural Immersion
                </h3>
                <p className="text-blue-100/80 mb-4">
                  Visitors to Namsai can participate in cultural workshops, witness traditional performances, and even stay in homestays with local families to gain an authentic experience of the rich cultural heritage of the region.
                </p>
                <p className="text-blue-100/80">
                  The annual cultural festivals provide the perfect opportunity to witness traditional dances, music, and rituals in their full splendor.
                </p>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 px-8 py-4 font-medium transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] transform hover:-translate-y-1 group"
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
      
      {/* Add some additional floating particle effects */}
      <div className="absolute top-1/4 right-10 w-2 h-2 rounded-full bg-blue-400 opacity-50 animate-ping" style={{animationDuration: '3s'}}></div>
      <div className="absolute bottom-1/4 left-10 w-2 h-2 rounded-full bg-cyan-400 opacity-50 animate-ping" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-indigo-400 opacity-50 animate-ping" style={{animationDuration: '5s'}}></div>
      
      <style jsx>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Cultural;
