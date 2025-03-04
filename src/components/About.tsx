
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
              The district is primarily inhabited by the Tai-Khamti, Singpho, Deori, and Moran communities, who have preserved their unique cultural heritage for centuries. The Tai-Khamti people follow Theravada Buddhism, which has significantly influenced the cultural landscape of the region.
            </p>
            <p className="text-namsai-600">
              With its pristine natural beauty, rich biodiversity, and cultural significance, Namsai has emerged as an important destination for spiritual tourism and cultural exploration in Northeast India.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl opacity-0 animate-on-scroll">
            <div className="aspect-w-4 aspect-h-3 image-shine">
              <img 
                src="/lovable-uploads/69a46d8b-9efe-418d-b9e9-c7c814f3c530.png" 
                alt="Golden Pagoda at Night - Namsai" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h4 className="text-white font-serif text-xl font-medium">Golden Pagoda of Namsai</h4>
              <p className="text-white/80 text-sm mt-1">The spiritual heart of the region</p>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl md:order-3 opacity-0 animate-on-scroll">
            <div className="aspect-w-4 aspect-h-3 image-shine">
              <img 
                src="/lovable-uploads/95665f8a-5b6e-48b4-a15a-7c63f4099616.png" 
                alt="Dihing River flowing through lush green forests" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h4 className="text-white font-serif text-xl font-medium">Dihing River</h4>
              <p className="text-white/80 text-sm mt-1">Lifeblood of the region's ecosystem</p>
            </div>
          </div>
          
          <div className="md:order-4 opacity-0 animate-on-scroll">
            <h3 className="text-2xl font-serif font-semibold text-namsai-800 mb-4">
              Cultural Diversity
            </h3>
            <p className="text-namsai-600 mb-4">
              The history of Namsai is deeply intertwined with the migration of diverse ethnic communities. The Tai-Khamti people, known for their Theravada Buddhist heritage, came from the Kingdom of Siam (present-day Thailand) and brought with them a rich tradition of script, literature, and craftsmanship. They are skilled in agriculture and are known for their unique martial art, "Khamti Lakawn," as well as their vibrant festivals like Sangken, the Buddhist New Year.
            </p>
            <p className="text-namsai-600 mb-4">
              The Singpho community, closely related to the Kachin people of Myanmar, has a distinct identity rooted in animistic beliefs and nature worship. They are renowned for their warrior traditions and played a significant role in the early tea trade in Assam. The Singphos also maintain their cultural heritage through their unique language, textiles, and traditional governance systems.
             
              Each community contributes to the rich cultural tapestry of Namsai.The Deori people are known for their agricultural expertise, colorful festivals like Ibaku Bisu, and rich oral traditions. Their deep connection to nature and ancestral customs reflects their strong cultural identity, while the Moran people have preserved their ancient traditions and distinct cultural practices through generations.
            </p>
            <p className="text-namsai-600">
              Today, Namsai serves as an important cultural bridge, where these diverse communities live harmoniously while preserving their unique traditions, making it a fascinating destination for those interested in the rich cultural tapestry of Northeast India.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg opacity-0 animate-on-scroll">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="/lovable-uploads/6af0d8ea-0224-4983-a4d2-f21f306db6c0.png" 
                alt="Golden Buddha statue in Namsai" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-semibold text-namsai-800 mb-2">Buddhist Heritage</h3>
              <p className="text-namsai-600">
                Theravada Buddhism has deeply influenced the cultural landscape of Namsai, with magnificent Buddha statues and ornate temples that serve as centers of spiritual practice and community gatherings.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg opacity-0 animate-on-scroll animate-delay-100">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="/lovable-uploads/a24fa4cf-6b05-4a1d-a947-7e567ca37d3a.png" 
                alt="Traditional cuisine of Namsai" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-semibold text-namsai-800 mb-2">Culinary Traditions</h3>
              <p className="text-namsai-600">
                The cuisine of Namsai reflects its cultural diversity, featuring dishes prepared with locally grown ingredients, herbs, and traditional cooking methods that have been passed down through generations.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg opacity-0 animate-on-scroll animate-delay-200">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="/lovable-uploads/b5270599-1127-47f1-8f3b-64d84ec823b2.png" 
                alt="Temple by the water in Namsai" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-semibold text-namsai-800 mb-2">Glimpses of Namsai</h3>
              <p className="text-namsai-600">
                The colorful temples, serene water bodies, and lush landscapes showcase the unique blend of natural beauty and cultural heritage that defines the essence of Namsai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
