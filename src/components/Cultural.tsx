
import { useEffect, useRef } from 'react';

const Cultural = () => {
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
    <section id="culture" ref={sectionRef} className="py-20 sm:py-24 md:py-28 bg-namsai-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-on-scroll">
          <span className="inline-block py-1 px-3 rounded-full bg-namsai-100 text-namsai-800 text-sm font-medium mb-4">
            Cultural Heritage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-namsai-800 mb-6">
            Vibrant Traditions of Namsai
          </h2>
          <p className="text-namsai-600 text-lg">
            Experience the rich cultural tapestry of the Tai-Khamti and Singpho communities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2 opacity-0 animate-on-scroll">
            <div className="rounded-2xl overflow-hidden shadow-lg relative">
              <div className="aspect-w-16 aspect-h-9 image-shine">
                <img 
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1974" 
                  alt="Traditional Tai-Khamti festival" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-serif text-2xl font-semibold mb-2">Festivals & Celebrations</h3>
                <p className="text-white/90">
                  The Sangken Festival (Tai New Year) is the most important celebration, featuring water rituals, traditional dances, and community feasts.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg opacity-0 animate-on-scroll">
              <div className="w-12 h-12 rounded-full bg-namsai-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-namsai-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-namsai-800 mb-3">Buddhist Heritage</h3>
              <p className="text-namsai-600">
                Theravada Buddhism has deeply influenced the culture, with numerous monasteries (wats) and pagodas dotting the landscape. Monks play a crucial role in preserving traditional teachings and practices.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg opacity-0 animate-on-scroll animate-delay-100">
              <div className="w-12 h-12 rounded-full bg-namsai-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-namsai-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-namsai-800 mb-3">Traditional Arts</h3>
              <p className="text-namsai-600">
                The communities excel in weaving intricate patterns, wood carving, and traditional music played on instruments like khap (stringed instrument) and the phom (drum).
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg opacity-0 animate-on-scroll animate-delay-200">
              <div className="w-12 h-12 rounded-full bg-namsai-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-namsai-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-namsai-800 mb-3">Culinary Traditions</h3>
              <p className="text-namsai-600">
                The cuisine features sticky rice, fresh herbs, and dishes like khao soi (rice noodle soup) and mah (fermented fish). Local teas and rice wines are important cultural beverages.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 opacity-0 animate-on-scroll">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-serif font-semibold text-namsai-800 mb-4">
                  Experience Cultural Immersion
                </h3>
                <p className="text-namsai-600 mb-4">
                  Visitors to Namsai can participate in cultural workshops, witness traditional performances, and even stay in homestays with local families to gain an authentic experience of the rich cultural heritage of the region.
                </p>
                <p className="text-namsai-600">
                  The annual cultural festivals provide the perfect opportunity to witness traditional dances, music, and rituals in their full splendor.
                </p>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center rounded-full bg-namsai-700 text-white hover:bg-namsai-600 px-8 py-4 font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Discover Cultural Tours
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cultural;
