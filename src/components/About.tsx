
import { useEffect, useRef } from 'react';

const About = () => {
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
    <section ref={sectionRef} id="about" className="py-20 sm:py-24 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-on-scroll">
          <span className="inline-block py-1 px-3 rounded-full bg-namsai-100 text-namsai-800 text-sm font-medium mb-4">
            About Namsai
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-namsai-800 mb-6">
            A Tranquil District in Eastern Arunachal
          </h2>
          <p className="text-namsai-600 text-lg">
            Discover the rich heritage, spiritual significance, and natural beauty of this hidden gem
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-on-scroll">
            <h3 className="text-2xl font-serif font-semibold text-namsai-800 mb-4">
              The Land and Its People
            </h3>
            <p className="text-namsai-600 mb-4">
              Namsai, a picturesque district in Arunachal Pradesh, is nestled amidst lush greenery and rolling hills in the eastern part of the state. It was carved out of the Lohit district in 2014 to become the 18th district of Arunachal Pradesh.
            </p>
            <p className="text-namsai-600 mb-4">
              The district showcases a rich cultural diversity with communities like the Tai-Khamti, Singpho, Deori, Moran, and other indigenous tribes who have preserved their unique cultural heritage for centuries. The Tai-Khamti people follow Theravada Buddhism, which has significantly influenced the cultural landscape of the region.
            </p>
            <p className="text-namsai-600">
              With its pristine natural beauty, rich biodiversity including elephants and exotic wildlife, and the serene Dihing River flowing through its landscapes, Namsai has emerged as an important destination for spiritual tourism and cultural exploration in Northeast India.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl opacity-0 animate-on-scroll">
            <div className="aspect-w-4 aspect-h-3 image-shine">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1974" 
                alt="Elephants in Namsai forests" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h4 className="text-white font-serif text-xl font-medium">Rich Biodiversity of Namsai</h4>
              <p className="text-white/80 text-sm mt-1">Home to majestic elephants and diverse wildlife</p>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl md:order-3 opacity-0 animate-on-scroll">
            <div className="aspect-w-4 aspect-h-3 image-shine">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1974" 
                alt="Dihing River flowing through Namsai" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h4 className="text-white font-serif text-xl font-medium">The Dihing River</h4>
              <p className="text-white/80 text-sm mt-1">The lifeblood of Namsai's natural ecosystem</p>
            </div>
          </div>
          
          <div className="md:order-4 opacity-0 animate-on-scroll">
            <h3 className="text-2xl font-serif font-semibold text-namsai-800 mb-4">
              Historical Significance
            </h3>
            <p className="text-namsai-600 mb-4">
              The history of Namsai is deeply intertwined with the migration of the Tai-Khamti people from the Kingdom of Siam (present-day Thailand) in the 18th century. They brought with them their language, customs, and Theravada Buddhism, which has shaped the cultural fabric of the region.
            </p>
            <p className="text-namsai-600 mb-4">
              The district has witnessed significant historical events, including interactions with the British during the colonial period. The Tai-Khamti rebellion of 1839 against the British marked an important chapter in the history of resistance against colonial powers in Northeast India.
            </p>
            <p className="text-namsai-600">
              Today, Namsai serves as an important cultural bridge, preserving ancient traditions while embracing modernity, making it a fascinating destination for those interested in the rich tapestry of Northeast Indian history and culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
