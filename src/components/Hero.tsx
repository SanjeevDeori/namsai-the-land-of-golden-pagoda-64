
import { useTheme } from '../hooks/useTheme';
import { Star, Sparkles } from 'lucide-react';

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-16 bg-gradient-to-b from-background to-primary/5">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-bubble bg-secondary/30 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-60 h-60 rounded-bubble bg-primary/20 mix-blend-multiply filter blur-xl animate-blob animate-delay-200"></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 rounded-bubble bg-accent/30 mix-blend-multiply filter blur-xl animate-blob animate-delay-300"></div>
        
        {/* Small decorative elements */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: ['#FF6B98', '#7EB2FF', '#83EDA8', '#FFE156', '#BC7FFF'][Math.floor(Math.random() * 5)],
              opacity: 0.4,
              transform: `scale(${0.5 + Math.random() * 0.5})`,
              animation: `float ${2 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="opacity-0 animate-slide-in">
          <span className="inline-flex items-center gap-1 py-1 px-4 rounded-full bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium mb-4 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span>Discover Magical Namsai</span>
            <Sparkles className="w-4 h-4" />
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-foreground opacity-0 animate-slide-in animate-delay-100 max-w-4xl leading-tight">
          <span className="block">Namsai</span>
          <span className="text-primary inline-block relative">
            The Land of Golden Pagoda
            <span className="absolute -top-10 right-10 animate-bounce-custom">
              <Star className="h-8 w-8 text-accent fill-accent" />
            </span>
          </span>
        </h1>
        
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-foreground/80 opacity-0 animate-slide-in animate-delay-200">
          Experience the serene beauty, rich culture, and spiritual heritage of this hidden gem in Northeast India
        </p>
        
        <div className="mt-10 opacity-0 animate-slide-in animate-delay-300">
          <a 
            href="#about" 
            className="inline-flex items-center justify-center rounded-full bg-primary text-white shadow-md hover:shadow-playful-hover transition-all duration-300 font-medium px-8 py-4 text-lg jelly-button"
          >
            Start Exploring
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        {/* Decorative characters/elements that float */}
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-16 h-16 bg-candy-pink rounded-bubble flex items-center justify-center text-white text-3xl transform rotate-12">
            🌟
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-12 h-12 bg-candy-blue rounded-bubble flex items-center justify-center text-white text-2xl transform -rotate-12">
            🏯
          </div>
        </div>
        <div className="absolute bottom-40 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-14 h-14 bg-candy-green rounded-bubble flex items-center justify-center text-white text-2xl transform rotate-6">
            🌿
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - Centered */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center opacity-0 animate-slide-in animate-delay-500">
        <span className="text-foreground/70 text-sm mb-2">Scroll to discover</span>
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-foreground/50 rounded-full mt-2 animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C57,42,124.85,56.44,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
