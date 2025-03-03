
import { useEffect, useRef } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

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
    <section ref={sectionRef} id="about" className="py-20 sm:py-24 md:py-28 bg-secondary/30 dark:bg-secondary/10 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-confetti-pattern opacity-30"></div>
      
      {/* Floating emojis */}
      {['🌿', '🏯', '🌸', '🍃', '🌊'].map((emoji, index) => (
        <div 
          key={index}
          className="absolute text-3xl animate-float"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            animationDuration: `${3 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 2}s`,
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
          }}
        >
          {emoji}
        </div>
      ))}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-on-scroll">
          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            <Star className="h-4 w-4 fill-primary" />
            About Namsai
            <Star className="h-4 w-4 fill-primary" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            A Tranquil District in Eastern Arunachal
          </h2>
          <p className="text-foreground/70 text-lg">
            Discover the rich heritage, spiritual significance, and natural beauty of this hidden gem
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-on-scroll bg-white/60 dark:bg-white/5 p-8 rounded-2xl backdrop-blur-sm shadow-lg border border-primary/10 playful-card">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center">
              <Heart className="h-5 w-5 mr-2 text-primary fill-primary" />
              The Land and Its People
            </h3>
            <p className="text-foreground/70 mb-4">
              Namsai, a picturesque district in Arunachal Pradesh, is nestled amidst lush greenery and rolling hills in the eastern part of the state. It was carved out of the Lohit district in 2014 to become the 18th district of Arunachal Pradesh.
            </p>
            <p className="text-foreground/70 mb-4">
              The district is primarily inhabited by the Tai-Khamti, Singpho, Deori, and Moran communities, who have preserved their unique cultural heritage for centuries. The Tai-Khamti people follow Theravada Buddhism, which has significantly influenced the cultural landscape of the region.
            </p>
            <p className="text-foreground/70">
              With its pristine natural beauty, rich biodiversity, and cultural significance, Namsai has emerged as an important destination for spiritual tourism and cultural exploration in Northeast India.
            </p>
          </div>
          
          <div className="relative rounded-bubble overflow-hidden shadow-xl opacity-0 animate-on-scroll transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="aspect-w-4 aspect-h-3 image-shine">
              <img 
                src="/lovable-uploads/69a46d8b-9efe-418d-b9e9-c7c814f3c530.png" 
                alt="Golden Pagoda at Night - Namsai" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h4 className="text-white font-display text-xl">Golden Pagoda of Namsai</h4>
              <p className="text-white/80 text-sm mt-1">The spiritual heart of the region</p>
            </div>
            <div className="absolute -top-2 -right-2 animate-bounce-custom">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
          </div>
          
          <div className="relative rounded-bubble overflow-hidden shadow-xl md:order-3 opacity-0 animate-on-scroll transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="aspect-w-4 aspect-h-3 image-shine">
              <img 
                src="/lovable-uploads/95665f8a-5b6e-48b4-a15a-7c63f4099616.png" 
                alt="Dihing River flowing through lush green forests" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h4 className="text-white font-display text-xl">Dihing River</h4>
              <p className="text-white/80 text-sm mt-1">Lifeblood of the region's ecosystem</p>
            </div>
            <div className="absolute -top-2 -left-2 animate-bounce-custom" style={{ animationDelay: '0.5s' }}>
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
          </div>
          
          <div className="md:order-4 opacity-0 animate-on-scroll bg-white/60 dark:bg-white/5 p-8 rounded-2xl backdrop-blur-sm shadow-lg border border-primary/10 playful-card">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-4 flex items-center">
              <Heart className="h-5 w-5 mr-2 text-primary fill-primary" />
              Cultural Diversity
            </h3>
            <p className="text-foreground/70 mb-4">
              The history of Namsai is deeply intertwined with the migration of diverse ethnic communities. The Tai-Khamti people, known for their Theravada Buddhist heritage, came from the Kingdom of Siam (present-day Thailand) and brought with them a rich tradition of script, literature, and craftsmanship. They are skilled in agriculture and are known for their unique martial art, "Khamti Lakawn," as well as their vibrant festivals like Sangken, the Buddhist New Year.
            </p>
            <p className="text-foreground/70 mb-4">
              The Singpho community, closely related to the Kachin people of Myanmar, has a distinct identity rooted in animistic beliefs and nature worship. They are renowned for their warrior traditions and played a significant role in the early tea trade in Assam. The Singphos also maintain their cultural heritage through their unique language, textiles, and traditional governance systems.
             
              Each community contributes to the rich cultural tapestry of Namsai.The Deori people are known for their agricultural expertise, colorful festivals like Ibaku Bisu, and rich oral traditions. Their deep connection to nature and ancestral customs reflects their strong cultural identity, while the Moran people have preserved their ancient traditions and distinct cultural practices through generations.
            </p>
            <p className="text-foreground/70">
              Today, Namsai serves as an important cultural bridge, where these diverse communities live harmoniously while preserving their unique traditions, making it a fascinating destination for those interested in the rich cultural tapestry of Northeast India.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: "/lovable-uploads/6af0d8ea-0224-4983-a4d2-f21f306db6c0.png",
              title: "Buddhist Heritage",
              desc: "Theravada Buddhism has deeply influenced the cultural landscape of Namsai, with magnificent Buddha statues and ornate temples that serve as centers of spiritual practice and community gatherings."
            },
            {
              img: "/lovable-uploads/a24fa4cf-6b05-4a1d-a947-7e567ca37d3a.png",
              title: "Culinary Traditions",
              desc: "The cuisine of Namsai reflects its cultural diversity, featuring dishes prepared with locally grown ingredients, herbs, and traditional cooking methods that have been passed down through generations."
            },
            {
              img: "/lovable-uploads/b5270599-1127-47f1-8f3b-64d84ec823b2.png",
              title: "Glimpses of Namsai",
              desc: "The colorful temples, serene water bodies, and lush landscapes showcase the unique blend of natural beauty and cultural heritage that defines the essence of Namsai."
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-white/60 dark:bg-white/5 rounded-2xl overflow-hidden shadow-lg opacity-0 animate-on-scroll playful-card transform hover:-rotate-1 transition-all duration-300" 
              style={{animationDelay: `${i * 100}ms`}}
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center animate-bounce-subtle">
                  <Star className="h-5 w-5 text-accent fill-accent" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
