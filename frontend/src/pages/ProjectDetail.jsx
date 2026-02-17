import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Helmet } from "react-helmet-async";


const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projectsData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Auto-carousel every 5 seconds
  useEffect(() => {
    if (!project || !project.images.renders || project.images.renders.length === 0) return;
    
    const galleryImages = [project.images.main, ...project.images.renders];
    if (galleryImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFCFC]">
        <Helmet>
          <title>{project.title} | Riya Rathod</title>
          <meta name="description" content={project.description} />
        </Helmet>
        <div className="text-center">
          <h2 className="font-['Playfair_Display'] text-3xl text-[#281A12] mb-4">
            Project not found
          </h2>
          <button
            onClick={() => navigate('/')}
            className="text-[#590F05] hover:text-[#281A12] font-medium"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  // Combine main and renders for the gallery slider
  const galleryImages = [project.images.main, ...project.images.renders];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  // Get current and next project for navigation
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];
  const prevProject =
    projectsData[
      currentIndex === 0 ? projectsData.length - 1 : currentIndex - 1
    ];

  // Determine layout direction based on number of floor plans
  const layoutCount = project.images.layouts?.length || 0;
  const lastLayoutOnLeft = layoutCount % 2 === 0;

  // Helper function to get floor-specific layout items
  const getFloorLayout = (floorIndex) => {
    if (!project.layout) return [];
    
    const floorHeaders = project.layout
      .map((item, idx) => ({ item, idx }))
      .filter(({ item }) => 
        item.includes('Floor') || 
        item.includes('Basement') || 
        item.includes('Ground')
      );

    if (floorHeaders.length === 0) return project.layout;

    const startIdx = floorHeaders[floorIndex]?.idx;
    const endIdx = floorHeaders[floorIndex + 1]?.idx || project.layout.length;

    if (startIdx === undefined) return [];

    return project.layout.slice(startIdx, endIdx);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFC]">
      {/* Back Button - Sticky Header */}
      <div className="sticky top-0 z-50 bg-[#FDFCFC]/95 backdrop-blur-sm border-b border-[#CBBAAE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#590F05] hover:text-[#281A12] transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>
      </div>

      {/* Hero Section - Split with Main Image */}
      <section className="bg-[#FDFCFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left: Project Info */}
            <div>
              <span className="inline-block bg-[#CBBAAE] text-[#281A12] px-4 py-2 text-xs tracking-widest uppercase font-medium mb-4">
                {project.category}
              </span>
              <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl lg:text-7xl font-bold text-[#281A12] mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm text-[#736F6A] mb-4">
                <div>
                  <span className="font-medium text-[#281A12]">Year:</span>{' '}
                  {project.year}
                </div>
                <div>
                  <span className="font-medium text-[#281A12]">Area:</span>{' '}
                  {project.area}
                </div>
              </div>
              <p className="text-lg text-[#736F6A] leading-relaxed text-justify">
                {project.detailedDescription.overview}
              </p>
            </div>

            {/* Right: Main Image */}
                  <div className="relative h-[400px] md:h-[500px]">
                    {/* Offset Square Background */}
                    <div className="absolute inset-0 bg-[#736F6A] rounded-lg transform translate-x-4 translate-y-4"></div>
                    
                    {/* Main Image */}
                    <div className="relative h-full overflow-hidden rounded-lg">
                    <img
                      src={project.images.main}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#281A12]/20 to-transparent"></div>
                    </div>
                  </div>
                  </div>

                  {/* Renders Image Slider - Full Width Below Hero */}
          {project.images.renders && project.images.renders.length > 0 && (
            <div className="relative h-[450px] md:h-[650px] bg-gray-100 overflow-hidden group">
              {galleryImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} - View ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                  style={{
                    opacity: idx === currentImageIndex ? 1 : 0,
                    zIndex: idx === currentImageIndex ? 1 : 0,
                  }}
                />
              ))}

              {/* Navigation Arrows */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white p-3 rounded-full transition-all duration-300 shadow-lg md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ArrowLeft className="w-5 h-5 text-[#281A12]" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white p-3 rounded-full transition-all duration-300 shadow-lg md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ArrowRight className="w-5 h-5 text-[#281A12]" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-6 right-6 z-20 bg-[#281A12]/90 text-[#FDFCFC] px-5 py-2 rounded-full text-sm font-medium">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </div>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {galleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex
                            ? 'bg-white w-8'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Overview Section
      {project.detailedDescription?.overview && (
        <section className="bg-[#F5F3F0] py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <p className="text-sm tracking-[0.3em] uppercase text-[#736F6A] mb-4">
              Overview
            </p>
            <p className="text-xl md:text-2xl text-[#281A12] leading-relaxed font-light text-justify">
              {project.detailedDescription.overview}
            </p>
          </div>
        </section>
      )} */}

      {/* Floor Plans Section - Split Screen with Floor-Specific Layouts */}
      {project.images.layouts && project.images.layouts.length > 0 && (
        <section className="bg-[#FDFCFC]">
          <div className="max-w-7xl mx-auto">
            {project.images.layouts.map((layout, idx) => {
              const isLastLayout = idx === project.images.layouts.length - 1;
              const imageOnLeft = idx % 2 === 0;
              const floorLayout = getFloorLayout(idx);
              
              return (
                <div
                  key={idx}
                  className="grid lg:grid-cols-2 min-h-[550px]"
                >
                  {/* Image Side */}
                  <div
                    className={`relative bg-white p-8 lg:p-12 flex items-center justify-center ${
                      imageOnLeft ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <img
                      src={layout}
                      alt={`${project.title} - Layout ${idx + 1}`}
                      className="w-full h-auto object-contain max-h-[480px]"
                    />
                  </div>

                  {/* Text Side with Floor-Specific Layout */}
                  <div
                    className={`bg-[#281A12] p-8 lg:p-12 flex flex-col justify-center ${
                      imageOnLeft ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <p className="text-sm tracking-[0.3em] uppercase text-[#CBBAAE] mb-3">
                      Planning
                    </p>
                    <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#FDFCFC] mb-4">
                      {floorLayout[0] || 'Floor Plan'}
                    </h2>
                    <p className="text-[#E8E6E3] leading-relaxed mb-6 text-justify">
                      Detailed spatial organization showcasing the thoughtful arrangement of each area within the {project.area} facility.
                    </p>

                    {/* Floor-Specific Space Designation - 2 Columns */}
                    {floorLayout.length > 1 && (
                      <div className="border-t border-[#CBBAAE]/30 pt-6 mt-2">
                        <h3 className="font-['Playfair_Display'] text-lg font-semibold text-[#CBBAAE] mb-4">
                          Space Designation
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                          {floorLayout.slice(1).map((item, itemIdx) => (
                            item !== '' && (
                              <p
                                key={itemIdx}
                                className="text-[#E8E6E3] text-xs leading-relaxed"
                              >
                                {item}
                              </p>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Mood Board Section - Split Screen with Proper Symmetry */}
      {project.images.mood && (
        <section className="bg-[#F5F3F0]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 min-h-[550px]">
              {/* Image Side - Position based on floor plan count for symmetry */}
              <div
                className={`relative bg-white p-8 lg:p-12 flex items-center justify-center ${
                  lastLayoutOnLeft ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <img
                  src={project.images.mood}
                  alt={`${project.title} - Mood Board`}
                  className="w-full h-auto object-contain max-h-[500px] shadow-xl"
                />
              </div>

              {/* Text Side */}
              <div
                className={`bg-gradient-to-br from-[#CBBAAE] to-[#9F9D9B] p-8 lg:p-12 flex flex-col justify-center ${
                  lastLayoutOnLeft ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <p className="text-sm tracking-[0.3em] uppercase text-[#281A12]/80 mb-3">
                  Concept
                </p>
                <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#281A12] mb-6">
                  Design Mood
                </h2>
                <blockquote className="text-xl md:text-2xl text-[#281A12] leading-relaxed italic font-light border-l-4 border-[#281A12] pl-6 mb-8 text-justify">
                  {project.description}
                </blockquote>
                
                <div className="pt-6 border-t border-[#281A12]/20">
                  <p className="text-sm text-[#281A12]/70 leading-relaxed text-justify">
                    The design mood encapsulates the emotional and aesthetic qualities we sought to create—a harmonious blend of form, function, and feeling that defines the essence of this space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Elevations Section - Split Screen Layout */}
      {project.images.elevations && project.images.elevations.length > 0 && (
        <section className="bg-[#FDFCFC]">
          <div className="max-w-7xl mx-auto">
            {project.images.elevations.map((elevation, idx) => {
              const imageOnLeft = idx % 2 === 1;
              
              return (
                <div
                  key={idx}
                  className="grid lg:grid-cols-2 min-h-[500px]"
                >
                  {/* Image Side */}
                  <div
                    className={`relative bg-white p-8 lg:p-12 flex items-center justify-center ${
                      imageOnLeft ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <img
                      src={elevation}
                      alt={`${project.title} - Elevation ${idx + 1}`}
                      className="w-full h-auto object-contain max-h-[420px]"
                    />
                  </div>

                  {/* Text Side */}
                  <div
                    className={`bg-[#F5F3F0] p-8 lg:p-12 flex flex-col justify-center ${
                      imageOnLeft ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <p className="text-sm tracking-[0.3em] uppercase text-[#736F6A] mb-3">
                      Architecture {project.images.elevations.length > 1 ? `${idx + 1}` : ''}
                    </p>
                    <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#281A12] mb-4">
                      Elevation View
                    </h2>
                    <p className="text-[#736F6A] leading-relaxed text-lg mb-6 text-justify">
                      Exterior perspectives showcasing the architectural character and form of the building, revealing the thoughtful composition of volumes, materials, and proportions.
                    </p>
                    
                    <div className="pt-6 border-t border-[#CBBAAE]">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-xs uppercase tracking-wide text-[#9F9D9B] mb-2">Orientation</p>
                          <p className="text-[#281A12] font-medium">
                            {idx === 0 ? 'North' : idx === 1 ? 'South' : idx === 2 ? 'East' : idx === 3 ? 'West' : `View ${idx + 1}`}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wide text-[#9F9D9B] mb-2">Drawing Scale</p>
                          <p className="text-[#281A12] font-medium">1:100</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Assembly Section - Split Screen */}
      {project.images.assembly && (
        <section className="bg-[#F5F3F0]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 min-h-[550px]">
              {/* Image Side */}
              <div className="relative bg-white p-8 lg:p-12 flex items-center justify-center lg:order-1">
                <img
                  src={project.images.assembly}
                  alt={`${project.title} - Assembly`}
                  className="w-full h-auto object-contain max-h-[500px]"
                />
              </div>

              {/* Text Side */}
              <div className="bg-[#281A12] p-8 lg:p-12 flex flex-col justify-center lg:order-2">
                <p className="text-sm tracking-[0.3em] uppercase text-[#CBBAAE] mb-3">
                  Technical
                </p>
                <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#FDFCFC] mb-4">
                  Assembly View
                </h2>
                <p className="text-[#E8E6E3] leading-relaxed text-lg mb-6 text-justify">
                  Exploded axonometric view illustrating the spatial relationships and construction assembly, revealing how components integrate to form the complete design.
                </p>
                
                <div className="border-t border-[#CBBAAE]/30 pt-6">
                  <h3 className="text-[#CBBAAE] text-sm tracking-widest uppercase mb-4">
                    Technical Highlights
                  </h3>
                  <div className="space-y-2 text-[#E8E6E3] text-sm">
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#CBBAAE] rounded-full"></span>
                      Structural system integration
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#CBBAAE] rounded-full"></span>
                      Material composition breakdown
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#CBBAAE] rounded-full"></span>
                      Spatial layer relationships
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#CBBAAE] rounded-full"></span>
                      Construction sequence visualization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Design Process Section - Redesigned */}
      {project.detailedDescription && (
        <section className="bg-[#FDFCFC] py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-10">
              <p className="text-sm tracking-[0.3em] uppercase text-[#736F6A] mb-3">
                Methodology
              </p>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#281A12]">
                Design Process
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Challenge */}
              <div className="bg-[#F5F3F0] p-8 border-l-4 border-[#590F05] hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-[#590F05] text-sm tracking-widest uppercase mb-4 font-semibold flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#590F05] text-white rounded-full flex items-center justify-center text-xs">
                    01
                  </span>
                  Challenge
                </h3>
                <p className="text-[#736F6A] leading-relaxed text-justify">
                  {project.detailedDescription.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-[#F5F3F0] p-8 border-l-4 border-[#281A12] hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-[#281A12] text-sm tracking-widest uppercase mb-4 font-semibold flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#281A12] text-white rounded-full flex items-center justify-center text-xs">
                    02
                  </span>
                  Solution
                </h3>
                <p className="text-[#736F6A] leading-relaxed text-justify">
                  {project.detailedDescription.solution}
                </p>
              </div>
            </div>

            
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section className="bg-[#F5F3F0] py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="border-t border-[#CBBAAE] pt-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <button
                onClick={() => navigate(`/project/${prevProject.id}`)}
                className="group flex items-center gap-3 text-[#736F6A] hover:text-[#590F05] transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5 flex-shrink-0 group-hover:-translate-x-1 transition-transform duration-300" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest mb-1 text-[#9F9D9B]">
                    Previous
                  </p>
                  <p className="font-['Playfair_Display'] text-lg md:text-xl font-semibold">
                    {prevProject.title}
                  </p>
                </div>
              </button>

              <button
                onClick={() => navigate(`/project/${nextProject.id}`)}
                className="group flex items-center gap-3 text-[#736F6A] hover:text-[#590F05] transition-colors duration-300 md:ml-auto"
              >
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest mb-1 text-[#9F9D9B]">
                    Next
                  </p>
                  <p className="font-['Playfair_Display'] text-lg md:text-xl font-semibold">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;