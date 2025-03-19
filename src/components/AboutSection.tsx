
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            lineRefs.current.forEach((line, index) => {
              if (line) {
                line.style.animationDelay = `${0.2 + index * 0.2}s`;
                line.classList.add('animate-line-appear');
              }
            });
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
    <section ref={sectionRef} className="section-padding px-6 md:px-10 max-w-7xl mx-auto">
      <div className="relative">
        {/* Top line */}
        <div 
          className="w-full h-px bg-white opacity-50 transform origin-left mb-6"
          ref={el => lineRefs.current[0] = el}
        ></div>
        
        <p className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-tight uppercase mb-6">
          CRAFTING SEAMLESS DESIGNS & POWERFUL CODE, I BRING IDEAS TO LIFE WITH INNOVATION AND PRECISION.
        </p>
        
        {/* Middle line */}
        <div 
          className="w-full h-px bg-white opacity-50 transform origin-left my-6"
          ref={el => lineRefs.current[1] = el}
        ></div>
        
        <p className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-tight uppercase mb-6">
          BLENDING RESEARCH, INNOVATION, AND TECHNICAL MASTERY, I DESIGN SEAMLESS EXPERIENCES THAT TRANSLATE COMPLEX IDEAS INTO CLEAR, ENGAGING, AND IMPACTFUL DIGITAL SOLUTIONS.
        </p>
        
        {/* Bottom line */}
        <div 
          className="w-full h-px bg-white opacity-50 transform origin-left mt-6"
          ref={el => lineRefs.current[2] = el}
        ></div>
      </div>
    </section>
  );
};

export default AboutSection;
