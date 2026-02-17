import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
    <>
      {/* 🔥 SEO SECTION */}
      <Helmet>
        <title>Riya Rathod | Interior Designer Portfolio</title>

        <meta
          name="description"
          content="Riya Rathod is a professional interior designer specializing in modern, therapeutic, and functional spaces. Explore creative residential and commercial interior projects."
        />

        <meta
          name="keywords"
          content="Riya Rathod, Interior Designer, Interior Design Portfolio, Residential Design, Commercial Interiors, Modern Interiors"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Riya Rathod | Interior Designer" />
        <meta
          property="og:description"
          content="Explore interior design projects and modern creative spaces designed by Riya Rathod."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://riyarathod.netlify.app/" />
        <meta property="og:image" content="https://riyarathod.netlify.app/preview.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Riya Rathod",
              "jobTitle": "Interior Designer",
              "url": "https://riyarathod.netlify.app/"
            }
          `}
        </script>
      </Helmet>

      {/* WEBSITE CONTENT */}
      <div className="relative">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
