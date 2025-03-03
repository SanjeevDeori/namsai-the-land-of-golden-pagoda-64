
import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Heart, Sparkles, Sun, Moon } from 'lucide-react';

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
        ? 'bg-white/80 backdrop-blur-md shadow-md dark:bg-candy-purple/30 dark:backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="font-display text-2xl md:text-3xl tracking-wide text-candy-pink dark:text-white flex items-center gap-2">
              <span className="relative">
                <Heart className="w-6 h-6 text-candy-pink fill-candy-pink" />
                <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-candy-yellow" />
              </span>
              Namsai Land
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            {['About', 'Attractions', 'Culture', 'Gallery'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="px-4 py-2 rounded-full hover:bg-primary/10 transition-colors font-medium text-foreground relative group overflow-hidden"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
            
            <button 
              onClick={toggleTheme}
              className="ml-2 flex items-center justify-center p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 jelly-button"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-foreground" />
              ) : (
                <Sun className="h-5 w-5 text-foreground" />
              )}
            </button>
          </nav>
          
          <div className="md:hidden flex items-center space-x-3">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 jelly-button"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-foreground" />
              ) : (
                <Sun className="h-5 w-5 text-foreground" />
              )}
            </button>
            <button className="flex items-center p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 text-foreground jelly-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-3 left-0 w-full overflow-hidden">
        <div className="w-full h-3">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-primary/20 dark:fill-white/10"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" className="fill-primary/30 dark:fill-white/5 opacity-70"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
