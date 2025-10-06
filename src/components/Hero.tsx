
import { useTheme } from '../hooks/useTheme';

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center animate-[scale_20s_ease-in-out_infinite]" style={{ backgroundImage: "url('/lovable-uploads/969dc2c3-c3ad-43c9-b2db-1d01425fb936.png')" }}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="opacity-0 animate-slide-in">
          <span className="inline-block py-2 px-4 rounded-full glass border border-white/30 text-white text-sm font-medium mb-6 shadow-glow">
            ✨ Discover Arunachal Pradesh
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white opacity-0 animate-slide-in animate-delay-100 max-w-6xl leading-tight mb-6" style={{ textShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
          Namsai
          <span className="block text-gradient-gold drop-shadow-2xl">The Golden Pagoda</span>
        </h1>
        
        <p className="mt-4 max-w-3xl text-xl sm:text-2xl text-white/95 opacity-0 animate-slide-in animate-delay-200 leading-relaxed" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
          Experience the serene beauty, rich culture, and spiritual heritage of this hidden gem in Northeast India
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 opacity-0 animate-slide-in animate-delay-300">
          <a href="#about" className="group inline-flex items-center justify-center rounded-full gradient-gold px-8 py-4 text-foreground shadow-glow hover:shadow-glow-lg transition-all duration-300 font-semibold text-lg hover:scale-105">
            Explore Namsai
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="/travel-info" className="inline-flex items-center justify-center rounded-full glass border-2 border-white/30 px-8 py-4 text-white shadow-soft hover:bg-white/20 transition-all duration-300 font-semibold text-lg hover:scale-105">
            Plan Your Visit
          </a>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center opacity-0 animate-slide-in animate-delay-500">
        <span className="text-white/80 text-sm mb-3 tracking-wide">Scroll to discover more</span>
        <div className="w-7 h-12 border-2 border-white/50 rounded-full flex justify-center p-2 hover:border-white transition-colors">
          <div className="w-1.5 h-3 bg-white rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
