import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = 1 - Math.max(0, Math.min(1, rect.top / window.innerHeight));
      
      if (imageRef.current && scrollProgress > 0) {
        imageRef.current.style.transform = `translateY(${-scrollProgress * 50}px)`;
      }
      
      if (textRef.current && scrollProgress > 0) {
        textRef.current.style.transform = `translateY(${-scrollProgress * 30}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-[#CBBAAE] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div
            ref={imageRef}
            className="relative h-[500px] md:h-[700px] overflow-hidden transition-all duration-1000"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
            }}
          >
            <div
              className="absolute inset-0 transition-all duration-1000 delay-300"
              style={{
                clipPath: isVisible
                  ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                  : 'polygon(0 0, 0 0, 0 100%, 0 100%)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1615406020658-6c4b805f1f30?w=800&q=80"
                alt="Interior Design Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Border Frame */}
            <div className="absolute inset-4 border border-[#FDFCFC]/30 pointer-events-none"></div>
          </div>

          {/* Right: Content */}
          <div
            ref={textRef}
            className="space-y-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
            }}
          >
            {/* Label */}
            <div className="overflow-hidden">
              <p
                className="text-sm tracking-[0.3em] uppercase text-[#736F6A] mb-4 transition-transform duration-1000 delay-500"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                }}
              >
                About Me
              </p>
            </div>

            {/* Name */}
            <div className="overflow-hidden">
              <h2
                className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#281A12] leading-tight transition-transform duration-1000 delay-700"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                }}
              >
                Riya Rathod
              </h2>
            </div>

            {/* Title */}
            <div className="overflow-hidden">
              <p
                className="text-xl md:text-2xl text-[#590F05] font-medium transition-transform duration-1000 delay-900"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                }}
              >
                Interior Design Student
              </p>
            </div>

            {/* Divider */}
            <div
              className="w-16 h-px bg-[#736F6A] transition-all duration-1000 delay-1000"
              style={{
                transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
              }}
            ></div>

            {/* Bio */}
            <div className="space-y-4">
              <p
                className="text-[#281A12] leading-relaxed text-base md:text-lg transition-all duration-1000 delay-1100"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                I'm Riya Rathod, a fourth-year Interior Design student passionate about
                creating functional and engaging corporate and retail spaces.
              </p>
              <p
                className="text-[#281A12] leading-relaxed text-base md:text-lg transition-all duration-1000 delay-1200"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                My design approach blends creativity with practicality, using 3D
                visualisation to craft efficient, visually impactful interiors.
              </p>
              <p
                className="text-[#281A12] leading-relaxed text-base md:text-lg transition-all duration-1000 delay-1300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                I value sustainable materials and thoughtful design that enhance user
                experience while promoting responsible, future-focused spaces.
              </p>
            </div>

            {/* Skills */}
            <div
              className="grid grid-cols-2 gap-4 pt-6 transition-all duration-1000 delay-1400"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              {[
                'Corporate Interiors',
                'Retail Spaces',
                '3D Visualization',
                'Sustainable Design',
              ].map((skill, index) => (
                <div
                  key={skill}
                  className="border border-[#736F6A]/30 px-4 py-3 text-center hover:border-[#281A12] hover:bg-[#FDFCFC]/10 transition-all duration-500"
                  style={{
                    transitionDelay: `${1400 + index * 100}ms`,
                  }}
                >
                  <p className="text-sm text-[#281A12] font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
