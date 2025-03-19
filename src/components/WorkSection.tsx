
import { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface WorkItem {
  id: string;
  title: string;
  categories: string;
  date: string;
  link: string;
}

const workItems: WorkItem[] = [
  {
    id: '001',
    title: 'SlateFront',
    categories: 'AI / INNOVATION',
    date: 'MARCH, 2025',
    link: 'https://slatefront.ampierelabs.com/'
  },
  {
    id: '002',
    title: 'WellSpace',
    categories: 'AI / ED-TECH',
    date: 'JULY, 2024',
    link: 'https://wellspace.ampiere.co/'
  },
  {
    id: '003',
    title: 'ATCEMS',
    categories: 'AI / AVIATION',
    date: 'WIP',
    link: 'https://ampierelabs.com/'
  }
];

const WorkSection = () => {
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
      <section ref={sectionRef} className="section-padding px-6 md:px-10 pb-16 text-foreground">
        <div className="relative mb-12">
          {/* Top Line Above "Select Work" */}
          <div
              ref={titleLineTopRef}
              className="w-full h-px bg-foreground/20 transform origin-left mb-6"
          ></div>

          <h2
              ref={titleRef}
              className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-black leading-tight tracking-tighter mb-6 opacity-0 transform translate-y-4 transition-all duration-700 ease-out text-foreground"
              style={{ letterSpacing: '-0.05em', fontWeight: 900, WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}
          >
            Select Work
          </h2>

          {/* Bottom Line Below "Select Work" */}
          <div
              ref={titleLineBottomRef}
              className="w-full h-px bg-foreground/20 transform origin-left"
          ></div>
        </div>

        <div className="space-y-0">
          {workItems.map((item, index) => (
              <a
                  key={item.id}
                  href={item.link}
                  className="group block py-8 border-t border-foreground/10 smooth-transition"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <span className="text-sm tracking-wide text-foreground/60" style={{ letterSpacing: '0.05em' }}>{item.id}</span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-black tracking-tighter group-hover:translate-x-1 transition-transform duration-300 text-foreground"
                        style={{ letterSpacing: '-0.03em', fontWeight: 800, WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}
                    >
                      {item.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-1 sm:space-y-0 text-xs tracking-wide text-foreground/70" style={{ letterSpacing: '0.05em' }}>
                      <span>{item.categories}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <ArrowUpRight className="w-6 h-6 text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Bottom Line Below Each Work Item */}
                <div className="w-full h-px bg-foreground/10 mt-6"></div>
              </a>
          ))}
        </div>
      </section>
  );
};

export default WorkSection;
