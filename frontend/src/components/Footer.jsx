import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#281A12] text-[#FDFCFC] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4">
              Riya Rathod
            </h3>
            <p className="text-[#CBBAAE] text-sm leading-relaxed">
              Creating functional and engaging spaces through sustainable design and thoughtful innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-[#CBBAAE] mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-[#CBBAAE] hover:text-[#FDFCFC] transition-colors duration-300 text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-[#CBBAAE] mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:riya.rathod@design.com"
                  className="text-[#CBBAAE] hover:text-[#FDFCFC] transition-colors duration-300"
                >
                  riya.rathod@design.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="text-[#CBBAAE] hover:text-[#FDFCFC] transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/riyarathod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#CBBAAE] hover:text-[#FDFCFC] transition-colors duration-300"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#CBBAAE]/20 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-[#CBBAAE] flex items-center gap-2">
            © {currentYear} Riya Rathod. Crafted with
            <Heart className="w-4 h-4 text-[#590F05] fill-current" />
          </p>
          <p className="text-[#9F9D9B] text-xs">
            Interior Design Portfolio • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
