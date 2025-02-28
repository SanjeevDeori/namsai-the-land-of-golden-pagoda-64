
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="text-namsai-800 font-serif font-bold text-xl md:text-2xl tracking-tight">
              The Golden Pagoda
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-namsai-700 hover:text-namsai-500 transition-colors font-medium">
              About Namsai
            </a>
            <a href="#attractions" className="text-namsai-700 hover:text-namsai-500 transition-colors font-medium">
              Attractions
            </a>
            <a href="#culture" className="text-namsai-700 hover:text-namsai-500 transition-colors font-medium">
              Culture
            </a>
            <a href="#gallery" className="text-namsai-700 hover:text-namsai-500 transition-colors font-medium">
              Gallery
            </a>
          </nav>
          
          <div className="md:hidden">
            <button className="flex items-center p-2 rounded-full bg-namsai-50 text-namsai-700 hover:bg-namsai-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
