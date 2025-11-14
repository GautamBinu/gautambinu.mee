
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTheme, setActiveTheme] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = (themeNum: number) => {
    setActiveTheme(themeNum);
    
    if (themeNum === 1) {
      document.documentElement.removeAttribute('data-theme');
    } else if (themeNum === 2) {
      document.documentElement.setAttribute('data-theme', 'orange');
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-10 transition-all duration-300 flex justify-between items-center",
        scrolled ? "bg-background/90 backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="flex items-center space-x-6 md:space-x-12">
        <a 
          href="#" 
          className="text-xs sm:text-sm tracking-wide opacity-90 hover:opacity-100 transition-opacity"
        >
          GAUTAM BINU.
        </a>
        <span className="text-xs sm:text-sm tracking-wide opacity-60">
          DESIGNER & DEVELOPER.
        </span>
      </div>
      
      <div className="flex items-center space-x-6 md:space-x-12">
        <a 
          href="mailto:hello@gautambinu.me" 
          className="text-xs sm:text-sm tracking-wide opacity-90 hover:opacity-100 transition-opacity animated-underline hidden sm:block"
        >
          hello@gautambinu.me
        </a>
        <div className="flex space-x-4">
          <button 
            className={cn(
              "text-xs tracking-wide transition-opacity",
              activeTheme === 1 ? "opacity-100" : "opacity-50 hover:opacity-70"
            )}
            onClick={() => toggleTheme(1)}
          >
            THEME ONE
          </button>
          <button 
            className={cn(
              "text-xs tracking-wide transition-opacity",
              activeTheme === 2 ? "opacity-100" : "opacity-50 hover:opacity-70"
            )}
            onClick={() => toggleTheme(2)}
          >
            THEME TWO
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
