import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#FDFCFC] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-[#CBBAAE] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#736F6A] text-sm tracking-widest">LOADING</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
