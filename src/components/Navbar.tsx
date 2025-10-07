
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import SearchBar from './SearchBar';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-strong shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className={`font-serif font-bold text-xl md:text-2xl tracking-tight transition-all duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white drop-shadow-lg'
            } hover:text-primary`}>
              The Golden Pagoda
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="/#about" className={`font-medium transition-all duration-300 relative group ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/#attractions" className={`font-medium transition-all duration-300 relative group ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              Attractions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link to="/itineraries" className={`font-medium transition-all duration-300 relative group ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              Itineraries
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/events" className={`font-medium transition-all duration-300 relative group ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              Events
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/blog" className={`font-medium transition-all duration-300 relative group ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/travel-info" className={`font-medium transition-all duration-300 relative group ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              Info
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a href="/#gallery" className={`font-medium transition-all duration-300 relative group ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button 
              onClick={toggleTheme}
              className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled 
                  ? 'bg-secondary hover:bg-secondary/80' 
                  : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'
              }`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isScrolled ? 'text-foreground' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            <div className={isScrolled ? '' : '[&_button]:!text-white'}>
              <SearchBar />
            </div>
            <div className={isScrolled ? '' : '[&_button]:!text-white'}>
              <LanguageSelector />
            </div>
          </nav>
          
          <div className="md:hidden flex items-center space-x-3">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled 
                  ? 'bg-secondary' 
                  : 'bg-white/20 backdrop-blur-sm'
              }`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isScrolled ? 'text-foreground' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            <button className={`flex items-center p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              isScrolled 
                ? 'bg-secondary' 
                : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
