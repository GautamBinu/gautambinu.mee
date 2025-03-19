
import { ArrowDown, Instagram, Twitter, Linkedin, Github, Music } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-10">
      <div className="w-full">
        <h1 
          className="text-[16vw] md:text-[14vw] lg:text-[12vw] font-black leading-[0.9] tracking-tighter opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Gautam<br/>Binu.
        </h1>
        
        <div 
          className="flex mt-6 space-x-6 opacity-0 animate-fade-in ml-[0.75em]"
          style={{ animationDelay: '0.6s' }}
        >
          <a href="https://www.instagram.com/gautam.binu/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://x.com/broncstar901" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://open.spotify.com/user/jwqydp9zz7dwtns4i5ztnfj4o?si=a90bd615aa7942e4" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <Music className="w-6 h-6" />
            <span className="sr-only">Spotify</span>
          </a>
          <a href="https://www.linkedin.com/in/gautambinu/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://github.com/GautamBinu" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
      
      <div 
        className="absolute bottom-16 left-6 md:left-10 flex items-center space-x-2 opacity-0 animate-fade-in"
        style={{ animationDelay: '0.8s' }}
      >
        <ArrowDown className="w-4 h-4 animate-float" />
        <span className="text-xs tracking-wide">SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
};

export default HeroSection;
