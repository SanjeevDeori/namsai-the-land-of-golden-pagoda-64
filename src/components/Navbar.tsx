
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? theme === 'dark'
          ? 'bg-namsai-800/90 backdrop-blur-md shadow-sm' 
          : 'bg-white/90 backdrop-blur-md shadow-sm'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className={`font-serif font-bold text-xl md:text-2xl tracking-tight ${
              isScrolled || theme === 'dark' ? 'text-namsai-100' : 'text-namsai-800'
            }`}>
              The Golden Pagoda
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/#about" className={`hover:text-namsai-500 transition-colors font-medium ${
              theme === 'dark' ? 'text-namsai-100' : 'text-namsai-700'
            }`}>
              About
            </a>
            <a href="/#attractions" className={`hover:text-namsai-500 transition-colors font-medium ${
              theme === 'dark' ? 'text-namsai-100' : 'text-namsai-700'
            }`}>
              Attractions
            </a>
            <Link to="/travel-info" className={`hover:text-namsai-500 transition-colors font-medium ${
              theme === 'dark' ? 'text-namsai-100' : 'text-namsai-700'
            }`}>
              Travel Info
            </Link>
            <Link to="/accommodations" className={`hover:text-namsai-500 transition-colors font-medium ${
              theme === 'dark' ? 'text-namsai-100' : 'text-namsai-700'
            }`}>
              Stay
            </Link>
            <a href="/#gallery" className={`hover:text-namsai-500 transition-colors font-medium ${
              theme === 'dark' ? 'text-namsai-100' : 'text-namsai-700'
            }`}>
              Gallery
            </a>
            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-full bg-namsai-50 hover:bg-namsai-100 transition-colors duration-300"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-namsai-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-namsai-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </nav>
          
          <div className="md:hidden flex items-center space-x-3">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme === 'dark' ? 'bg-namsai-700 text-namsai-100' : 'bg-namsai-50 text-namsai-700'} hover:bg-namsai-100 transition-colors`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            <button className={`flex items-center p-2 rounded-full ${
              theme === 'dark' ? 'bg-namsai-700 text-namsai-100' : 'bg-namsai-50 text-namsai-700'
            } hover:bg-namsai-100 transition-colors`}>
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
