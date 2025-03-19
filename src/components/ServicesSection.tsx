
import { useRef, useEffect } from 'react';

interface Service {
  id: number;
  title: string;
}

const services: Service[] = [
  { id: 1, title: "UI/UX Design" },
  { id: 2, title: "Web Development" },
  { id: 3, title: "Backend Development" },
  { id: 4, title: "Performance Optimization" },
  { id: 5, title: "Graphic Design" },
  { id: 6, title: "Full-Stack Solutions" },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleLineTopRef = useRef<HTMLDivElement>(null);
  const titleLineBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (titleRef.current) {
                titleRef.current.style.opacity = '1';
                titleRef.current.style.transform = 'translateY(0)';
              }
              if (titleLineTopRef.current) {
                titleLineTopRef.current.classList.add('animate-line-appear');
              }
              if (titleLineBottomRef.current) {
                titleLineBottomRef.current.classList.add('animate-line-appear');
              }
            }
          });
        },
        { threshold: 0.1 }
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
      <section ref={sectionRef} className="section-padding px-6 md:px-10 pb-16">
        <div className="relative mb-12">
          {/* Top line above "Services" */}
          <div
              ref={titleLineTopRef}
              className="w-full h-px bg-foreground/20 transform origin-left mb-6"
          ></div>

          <h2
              ref={titleRef}
              className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-black leading-tight tracking-tighter mb-6 opacity-0 transform translate-y-4 transition-all duration-700 ease-out text-foreground"
          >
            How I Work
          </h2>

          {/* Bottom line below "Services" */}
          <div
              ref={titleLineBottomRef}
              className="w-full h-px bg-foreground/20 transform origin-left"
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
              <div
                  key={service.id}
                  className="border-2 border-foreground/20 bg-transparent flex flex-col p-6 md:p-8 transition-all duration-300 hover:border-foreground/50 text-foreground"
              >
                <div className="flex flex-col space-y-5">
                  <span className="text-sm tracking-wide text-foreground/60">{service.id}</span>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <div className="w-full h-px bg-foreground/20 mt-2"></div>
                </div>

                {/* Bottom border line within card */}
                <div className="mt-auto pt-10">
                  <div className="w-full h-px bg-foreground/20"></div>
                </div>
              </div>
          ))}
        </div>
      </section>
  );
};

export default ServicesSection;
