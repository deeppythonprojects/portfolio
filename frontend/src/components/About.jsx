import portfolio_self_portrait from '../assests/images/portfolio_self.webp';
import resume from '../assests/resumes/Riya_Rathod_Resume_f.pdf';
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
    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
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
            className="relative h-[500px] md:h-[700px] overflow-hidden transition-all duration-1000 group cursor-pointer"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
            }}
          >
            <div
              className="absolute inset-0 transition-all duration-1000 delay-300 group-hover:scale-110"
              style={{
                clipPath: isVisible
                  ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                  : 'polygon(0 0, 0 0, 0 100%, 0 100%)',
              }}
            >
              <img
                src={portfolio_self_portrait}
                alt="Self Portfolio"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Border Frame */}
            <div className="absolute inset-4 border border-[#FDFCFC]/30 pointer-events-none group-hover:border-[#FDFCFC]/60 transition-all duration-500"></div>
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
                className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#281A12] leading-tight transition-transform duration-1000 delay-700 hover:text-[#590F05] cursor-pointer"
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
                className="text-xl md:text-2xl text-[#590F05] font-medium transition-transform duration-1000 delay-900 hover:scale-105 hover:translate-x-2 cursor-pointer inline-block origin-left"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                }}
              >
                Interior Design Student
              </p>
            </div>

            {/* Divider */}
            <div
              className="w-16 h-px bg-[#736F6A] transition-all duration-1000 delay-1000 hover:w-32 hover:bg-[#590F05] cursor-pointer"
              style={{
                transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
              }}
            ></div>

            {/* Bio */}
            <div className="space-y-4">
              {[
                "I'm Riya Rathod, a fourth-year Interior Design student passionate about creating functional and engaging corporate and retail spaces.",
                'My design approach blends creativity with practicality, using 3D visualisation to craft efficient, visually impactful interiors.',
                'I value sustainable materials and thoughtful design that enhance user experience while promoting responsible, future-focused spaces.',
              ].map((text, idx) => (
                <p
                  key={idx}
                  className="text-[#281A12] leading-relaxed text-base md:text-lg transition-all duration-500 hover:text-[#590F05] hover:translate-x-2"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: `${1100 + idx * 100}ms`,
                  }}
                >
                  {text}
                </p>
              ))}
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
                      className="relative border border-[#736F6A]/30 px-4 py-3 text-center overflow-hidden transition-all duration-500 hover:border-[#281A12] hover:scale-105 hover:-translate-y-1 cursor-pointer group"
                      style={{
                      transitionDelay: `${1400 + index * 100}ms`,
                      }}
                    >
                      {/* Swoop background */}
                      <div className="absolute inset-0 bg-[#281A12] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                      
                      {/* Text */}
                      <p className="relative text-sm text-[#281A12] font-medium group-hover:text-[#FDFCFC] transition-colors duration-500">
                      {skill}
                      </p>
                    </div>
                    ))}
                  </div>
                  </div>
                  {/* Education & Skills Section */}
          <div className="md:col-span-2 pt-12 border-t border-[#736F6A]/20">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Education */}
              <div
                className="group hover:bg-[#FDFCFC]/10 p-6 rounded transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 1.5s',
                }}
              >
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#281A12] mb-6 group-hover:text-[#590F05] transition-colors duration-500">
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="group-hover:translate-x-2 transition-transform duration-500">
                    <p className="text-[#590F05] font-semibold text-lg">Bachelor of Interior Design</p>
                    <p className="text-[#736F6A] text-sm mt-1">2022-2026</p>
                    <p className="text-[#281A12] text-base mt-2">
                      <b>Yorkville University, Toronto, ON</b>
                      <br />
                      Interests: Space Planning & Layout, Client-Centered Design Approach, Materials & Finishes Selection, 2D Drafting & 3D Modeling, Presentation Boards & Mood boards & Team Collaboration
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div
                className="group hover:bg-[#FDFCFC]/10 p-6 rounded transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 1.6s',
                }}
              >
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#281A12] mb-6 group-hover:text-[#590F05] transition-colors duration-500">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {['AutoCAD', 'SketchUp', 'Twinmotion', 'Revit', 'Adobe Suite', 'V-Ray & D5 Rendering'].map((tech) => (
                    <div key={tech} className="bg-[#FDFCFC]/20 px-3 py-2 rounded border border-[#736F6A]/20 hover:bg-[#590F05]/10 hover:border-[#590F05] hover:scale-110 transition-all duration-300 cursor-pointer">
                      <p className="text-[#281A12] text-sm font-medium">{tech}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-[#736F6A]/20">
                  <a
                    href={resume}
                    download
                    className="inline-flex items-center px-6 py-3 bg-[#281A12] text-[#FDFCFC] font-medium rounded hover:bg-[#590F05] transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
