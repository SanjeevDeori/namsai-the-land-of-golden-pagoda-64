
const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/b6ff6d24-cf01-4318-8ef9-dffc6169fc74.png')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="opacity-0 animate-slide-in">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-4">
            Discover Arunachal Pradesh
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white opacity-0 animate-slide-in animate-delay-100 max-w-5xl leading-tight" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
          Namsai - The Land of Golden Pagoda
        </h1>
        
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/90 opacity-0 animate-slide-in animate-delay-200" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
          Experience the serene beauty, rich culture, and spiritual heritage of this hidden gem in Northeast India
        </p>
        
        <div className="mt-10 opacity-0 animate-slide-in animate-delay-300">
          <a href="#about" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-namsai-800 shadow-md hover:bg-white/90 hover:shadow-lg transition-all duration-300 font-medium">
            Explore Namsai
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-slide-in animate-delay-500">
        <span className="text-white text-sm mb-2">Scroll to discover</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
