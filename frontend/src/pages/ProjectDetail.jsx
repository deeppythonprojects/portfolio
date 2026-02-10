import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Ruler } from 'lucide-react';
import { projectsData } from '../data/projects';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imageRefs = useRef([]);
  
  const project = projectsData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const rect = ref.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const windowCenter = windowHeight / 2;
        
        // Calculate distance from center
        const distanceFromCenter = Math.abs(elementCenter - windowCenter);
        const maxDistance = windowHeight / 2;
        
        // Calculate scale based on distance (closer to center = larger)
        const scale = Math.max(0.85, 1 - (distanceFromCenter / maxDistance) * 0.3);
        const opacity = Math.max(0.6, 1 - (distanceFromCenter / maxDistance) * 0.4);
        
        ref.style.transform = `scale(${scale})`;
        ref.style.opacity = opacity;
        
        // Track active image
        if (distanceFromCenter < 200) {
          setActiveImageIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FDFCFC]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 bg-gradient-to-b from-[#CBBAAE]/20 to-[#FDFCFC]">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-[#736F6A] hover:text-[#281A12] transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm tracking-wide uppercase">Back to Portfolio</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Project Info */}
            <div>
              <div className="inline-block bg-[#281A12] text-[#FDFCFC] px-4 py-2 text-xs tracking-widest uppercase mb-6">
                {project.category}
              </div>
              
              <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-bold text-[#281A12] mb-6 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-[#736F6A] text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#590F05]" />
                  <div>
                    <p className="text-xs text-[#9F9D9B] uppercase tracking-wide">Year</p>
                    <p className="text-[#281A12] font-medium">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Ruler className="w-5 h-5 text-[#590F05]" />
                  <div>
                    <p className="text-xs text-[#9F9D9B] uppercase tracking-wide">Area</p>
                    <p className="text-[#281A12] font-medium">{project.area}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Featured Image */}
            <div className="relative h-[500px] overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#281A12]/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section className="py-20 px-6 lg:px-12 bg-[#FDFCFC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#281A12] mb-8">
            Project Overview
          </h2>
          
          <div className="space-y-6 text-[#736F6A] leading-relaxed">
            <p>
              {project.detailedDescription?.overview || 
              `This ${project.category.toLowerCase()} project represents a careful balance between 
              aesthetics and functionality. Every design decision was made with the end-user experience 
              in mind, creating spaces that not only look beautiful but also enhance daily operations 
              and interactions.`}
            </p>
            
            <p>
              {project.detailedDescription?.challenge || 
              `The challenge was to create an environment that reflects modern design sensibilities 
              while maintaining practicality and sustainability. Through careful material selection 
              and spatial planning, we achieved a harmonious blend of form and function.`}
            </p>
            
            <p>
              {project.detailedDescription?.solution || 
              `Our solution incorporated sustainable materials, strategic lighting, and flexible 
              layouts that can adapt to changing needs. The result is a space that feels both 
              timeless and contemporary, serving its purpose while inspiring those who use it.`}
            </p>
          </div>

          {/* Key Features */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {(project.features || [
              'Sustainable materials',
              'Natural lighting optimization',
              'Flexible spatial design',
              'Modern aesthetic',
              'User-centric approach',
              'Efficient space utilization'
            ]).map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 border-l-2 border-[#CBBAAE] bg-[#CBBAAE]/10 hover:border-[#590F05] transition-colors duration-300"
              >
                <div className="w-2 h-2 bg-[#590F05] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#281A12]">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Image Gallery with Scale Animation */}
      <section className="py-20 bg-[#CBBAAE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: Sticky Title */}
            <div className="lg:col-span-2 lg:sticky lg:top-32">
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#281A12] mb-6">
                Visual Journey
              </h2>
              <p className="text-[#736F6A] leading-relaxed mb-8">
                Explore the intricate details and thoughtful design elements that bring this 
                space to life. Each image tells a story of craftsmanship and intentional design.
              </p>
              
              {/* Image counter */}
              <div className="flex items-center gap-4">
                <div className="text-3xl font-['Playfair_Display'] font-bold text-[#281A12]">
                  {String(activeImageIndex + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 h-px bg-[#736F6A]"></div>
                <div className="text-sm text-[#736F6A]">
                  {String(project.images.length).padStart(2, '0')}
                </div>
              </div>
            </div>

            {/* Right: Scrolling Images */}
            <div className="lg:col-span-3 space-y-24">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  ref={(el) => (imageRefs.current[index] = el)}
                  className="relative h-[400px] md:h-[500px] overflow-hidden transition-all duration-500 ease-out origin-center"
                  style={{
                    transform: 'scale(0.85)',
                    opacity: 0.6,
                  }}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Detail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#281A12]/80 to-transparent p-6">
                    <p className="text-[#FDFCFC] text-sm tracking-wide">
                      Image {index + 1} of {project.images.length}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 px-6 lg:px-12 bg-[#FDFCFC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#281A12] mb-12 text-center">
            Design Process
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Research & Discovery',
                description: 'Understanding client needs, space requirements, and contextual factors.'
              },
              {
                step: '02',
                title: 'Concept Development',
                description: 'Creating initial concepts through sketches, mood boards, and 3D visualizations.'
              },
              {
                step: '03',
                title: 'Design Refinement',
                description: 'Iterating on chosen concepts with detailed plans and material selections.'
              },
              {
                step: '04',
                title: 'Implementation',
                description: 'Bringing the design to life with careful attention to every detail.'
              }
            ].map((phase, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#CBBAAE] group-hover:bg-[#281A12] transition-colors duration-500 flex items-center justify-center">
                    <span className="font-['Playfair_Display'] text-xl font-bold text-[#281A12] group-hover:text-[#FDFCFC] transition-colors duration-500">
                      {phase.step}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#281A12] mb-2">{phase.title}</h3>
                  <p className="text-[#736F6A] leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-12 bg-gradient-to-r from-[#CBBAAE] to-[#9F9D9B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#281A12] mb-6">
            Let's Create Your Space
          </h2>
          <p className="text-[#736F6A] text-lg mb-8 max-w-2xl mx-auto">
            Interested in collaborating on your next interior design project? 
            Let's discuss how we can bring your vision to life.
          </p>
          <button
            onClick={() => navigate('/#contact')}
            className="bg-[#281A12] text-[#FDFCFC] px-10 py-4 font-medium tracking-widest uppercase text-sm hover:bg-[#590F05] transition-all duration-500 inline-flex items-center gap-2"
          >
            Get In Touch
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
