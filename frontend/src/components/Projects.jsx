import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ExternalLink, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleImageTransition = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const handleViewProject = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      ref={cardRef}
      className="group relative transition-all duration-1000"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
        transitionDelay: `${index * 200}ms`,
      }}
    >
      {/* Image Container */}
      <div
        className="relative h-[500px] md:h-[600px] overflow-hidden cursor-pointer"
        onClick={handleViewProject}
        onMouseEnter={handleImageTransition}
      >
        {/* Images with crossfade */}
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${project.title} - View ${idx + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{
              opacity: idx === currentImageIndex ? 1 : 0,
            }}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#281A12]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Hover Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="text-center">
            <p className="text-[#FDFCFC] text-lg mb-4 font-['Playfair_Display']">View Project</p>
            <ArrowRight className="w-8 h-8 text-[#FDFCFC] mx-auto animate-pulse" />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-6 left-6">
          <span className="bg-[#CBBAAE] text-[#281A12] px-4 py-2 text-xs tracking-widest uppercase font-medium">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#FDFCFC] p-8 md:p-10 border-l-2 border-[#CBBAAE] transform transition-all duration-700 group-hover:border-[#590F05]">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-[#281A12] group-hover:text-[#590F05] transition-colors duration-500">
            {project.title}
          </h3>
          <span className="text-sm text-[#736F6A] whitespace-nowrap ml-4">{project.year}</span>
        </div>
        
        <p className="text-[#736F6A] leading-relaxed mb-6">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#9F9D9B]">
            <span className="font-medium text-[#281A12]">Area:</span> {project.area}
          </span>
          <button
            onClick={handleViewProject}
            className="text-[#590F05] hover:text-[#281A12] font-medium tracking-wide transition-colors duration-300 flex items-center gap-2"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('All');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen bg-[#FDFCFC] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="overflow-hidden mb-4">
            <p
              className="text-sm tracking-[0.3em] uppercase text-[#736F6A] transition-transform duration-1000"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              }}
            >
              Portfolio
            </p>
          </div>
          
          <div className="overflow-hidden mb-8">
            <h2
              className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl font-bold text-[#281A12] transition-transform duration-1000 delay-200"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              }}
            >
              Featured Projects
            </h2>
          </div>

          {/* Filter Buttons */}
          <div
            className="flex flex-wrap gap-4 transition-all duration-1000 delay-400"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            {['All', 'Corporate', 'Retail'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 text-sm tracking-widest uppercase transition-all duration-500 ${
                  filter === category
                    ? 'bg-[#281A12] text-[#FDFCFC]'
                    : 'bg-transparent text-[#736F6A] border border-[#CBBAAE] hover:border-[#281A12] hover:text-[#281A12]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
