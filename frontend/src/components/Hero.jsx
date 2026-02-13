import logo from '../assests/images/riya_logo_1.webp';
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Trigger animations on mount
    setTimeout(() => setIsVisible(true), 100);

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrolled * 0.5}px) scale(${1 + scrolled * 0.0003})`;
      }
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
        textRef.current.style.opacity = 1 - scrolled * 0.002;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#FDFCFC]">
      {/* Background Image with Mask Reveal */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={imageRef}
          className="w-full h-full transition-all duration-1000 ease-out"
          style={{
            clipPath: isVisible
              ? 'inset(0% 0% 0% 0%)'
              : 'inset(50% 0% 50% 0%)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1581784878214-8d5596b98a01?w=1920&q=80"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#281A12]/20 to-[#281A12]/60"></div>
            {/* Film Grain Texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="3.5" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
              backgroundRepeat: 'repeat',
            }}
            ></div>
          </div>
          </div>

          {/* Hero Content */}
      <div ref={textRef} className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-5xl">
          {/* Animated Title */}
                <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                {['Crafting', 'Spaces', 'That', 'Inspire'].map((word, index) => (
                  <span
                  key={word}
                  className="inline-block opacity-0 animate-fade-in-up mr-4"
                  style={{
                    animationDelay: `${0.5 + index * 0.2}s`,
                    animationFillMode: 'forwards',
                  }}
                  >
                  {word}
                  </span>
                ))}
                </h1>

                {/* Subtitle */}
          <p
            className="text-[#CBBAAE] text-lg md:text-xl tracking-wide mb-8 opacity-0 animate-fade-in"
            style={{
              animationDelay: '1.5s',
              animationFillMode: 'forwards',
            }}
          >
            Interior Design Portfolio
          </p>
          <div className="mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
            <img src={logo} alt="Interior Design" className="w-32 h-32 rounded-lg object-cover mx-auto shadow-lg" />
          </div>
          {/* Decorative Line */}
          <div
            className="w-24 h-px bg-[#CBBAAE] mx-auto mb-12 transform scale-x-0 animate-scale-x"
            style={{
              animationDelay: '2s',
              animationFillMode: 'forwards',
            }}
          ></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in"
        style={{
          animationDelay: '2.5s',
          animationFillMode: 'forwards',
        }}
      >
        <ChevronDown className="text-white w-8 h-8 animate-bounce" />
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-scale-x {
          animation: scale-x 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default Hero;
