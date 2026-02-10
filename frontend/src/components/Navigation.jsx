import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-[#FDFCFC]/95 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl md:text-2xl font-['Playfair_Display'] font-semibold text-[#281A12] tracking-tight hover:text-[#590F05] transition-colors duration-500"
          >
            Riya Rathod
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm tracking-widest uppercase text-[#736F6A] hover:text-[#281A12] transition-colors duration-500"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#281A12] hover:text-[#590F05] transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#FDFCFC] z-40 transition-all duration-700 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['about', 'projects', 'contact'].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-3xl font-['Playfair_Display'] text-[#281A12] hover:text-[#590F05] transition-all duration-500"
              style={{
                transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                opacity: isMenuOpen ? 1 : 0,
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
