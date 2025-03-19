
import { useRef, useEffect } from 'react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (lineRef.current) {
              lineRef.current.classList.add('animate-line-appear');
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-padding px-6 md:px-10">
      <div ref={lineRef} className="separator-line mb-16"></div>
      
      <div className="max-w-4xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-tight uppercase mb-8">
          LET’S CONNECT AND CREATE.
        </h2>
        
        <div className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-tight uppercase">
          GET IN TOUCH:{' '}
          <a 
            href="mailto:me@gautambinu.co" 
            className="border-b border-white/50 hover:border-white transition-colors"
          >
            me@gautambinu.co
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
