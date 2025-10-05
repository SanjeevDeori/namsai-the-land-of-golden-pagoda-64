
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Attractions from '../components/Attractions';
import Cultural from '../components/Cultural';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import LocalGuideChat from '../components/LocalGuideChat';
import { ThemeProvider } from '../hooks/useTheme';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const navbarHeight = 80; // Account for fixed navbar
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Clean up event listeners on unmount
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-namsai-900 overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Attractions />
        <Cultural />
        <Gallery />
        <Footer />
        <LocalGuideChat />
      </div>
    </ThemeProvider>
  );
};

export default Index;
