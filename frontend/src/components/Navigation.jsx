import logo from '../assests/images/riya_logo_2.png';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    // If we're not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're on home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const goHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-[#FDFCFC]/95 backdrop-blur-md shadow-lg py-4'
            : 'bg-[#FDFCFC]/80 backdrop-blur-sm shadow-md py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <button
            onClick={goHome}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-500"
          >
            
            <span className="text-xl md:text-2xl font-['Playfair_Display'] font-semibold text-[#281A12] tracking-tight hover:text-[#590F05] transition-colors duration-500">
              Riya Rathod
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {['about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="px-6 py-2 text-sm tracking-widest uppercase text-[#736F6A] hover:text-[#281A12] hover:bg-[#CBBAAE]/20 rounded-sm transition-all duration-500"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden bg-[#281A12] text-[#FDFCFC] hover:bg-[#590F05] transition-all duration-300 p-2 rounded"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-[#CBBAAE] to-[#9F9D9B] z-40 transition-all duration-700 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-6">
          {['about', 'projects', 'contact'].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-4xl font-['Playfair_Display'] text-[#281A12] hover:text-[#FDFCFC] transition-all duration-500 border-b-2 border-transparent hover:border-[#FDFCFC] pb-2"
              style={{
                transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                opacity: isMenuOpen ? 1 : 0,
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
