import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Submit to Formspree
    const form = e.target;
    const formDataToSend = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen bg-[#CBBAAE] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Contact Info */}
          <div
            className="space-y-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Header */}
            <div>
              <div className="overflow-hidden mb-4">
                <p
                  className="text-sm tracking-[0.3em] uppercase text-[#736F6A] transition-transform duration-1000 delay-300"
                  style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  }}
                >
                  Get In Touch
                </p>
              </div>
              
              <div className="overflow-hidden">
                <h2
                  className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#281A12] leading-tight transition-transform duration-1000 delay-500"
                  style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                  }}
                >
                  Let's Create
                  <br />
                  Something Beautiful
                </h2>
              </div>
            </div>

            <div
              className="w-16 h-px bg-[#736F6A] transition-all duration-1000 delay-700"
              style={{
                transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
              }}
            ></div>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'vrrathod1243@gmail.com',
                  href: 'mailto:vrrathod1243@gmail.com',
                  delay: 900,
                },
                // {
                //   icon: Phone,
                //   label: 'Phone',
                //   value: '+1 147 299 6161',
                //   href: 'tel:+11472996161',
                //   delay: 1000,
                // },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  value: 'https://www.linkedin.com/in/riya-rathod-43a68827a/',
                  href: 'https://www.linkedin.com/in/riya-rathod-43a68827a/',
                  delay: 1100,
                },
              ].map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={contact.label}
                    className="flex items-start gap-4 group transition-all duration-1000"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                      transitionDelay: `${contact.delay}ms`,
                    }}
                  >
                    <div className="bg-[#FDFCFC] p-3 rounded-full group-hover:bg-[#281A12] transition-colors duration-500">
                      <Icon className="w-5 h-5 text-[#281A12] group-hover:text-[#FDFCFC] transition-colors duration-500" />
                    </div>
                    <div>
                      <p className="text-sm text-[#736F6A] mb-1">{contact.label}</p>
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#281A12] font-medium hover:text-[#590F05] transition-colors duration-300"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Decorative Text */}
            <div
              className="pt-8 transition-all duration-1000 delay-1200"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              <p className="text-[#281A12]/70 text-sm leading-relaxed italic">
                "Design is not just what it looks like and feels like.
                <br />
                Design is how it works."
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className="bg-[#FDFCFC] p-8 md:p-12 transition-all duration-1000 delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
            }}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[500px] text-center animate-fade-in">
                <CheckCircle className="w-16 h-16 text-[#590F05] mb-6" />
                <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#281A12] mb-4">
                  Message Sent!
                </h3>
                <p className="text-[#736F6A] max-w-sm">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form 
                action="https://formspree.io/f/mpqjppzw"
                method="POST"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-[#736F6A] mb-2 tracking-wide"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-[#CBBAAE] text-[#281A12] focus:border-[#281A12] focus:outline-none transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-[#736F6A] mb-2 tracking-wide"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-[#CBBAAE] text-[#281A12] focus:border-[#281A12] focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-[#736F6A] mb-2 tracking-wide"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border border-[#CBBAAE] text-[#281A12] focus:border-[#281A12] focus:outline-none transition-colors duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-[#736F6A] mb-2 tracking-wide"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-transparent border border-[#CBBAAE] text-[#281A12] focus:border-[#281A12] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#281A12] text-[#FDFCFC] py-4 px-8 font-medium tracking-widest uppercase text-sm hover:bg-[#590F05] transition-colors duration-500 flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div
        className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#9F9D9B] opacity-10 rounded-tl-full transition-all duration-1000"
        style={{
          transform: isVisible ? 'scale(1)' : 'scale(0)',
          transformOrigin: 'bottom right',
        }}
      ></div>
    </section>
  );
};

export default Contact;