import React, { useState } from 'react';
import { MapPin, Mail, ChevronDown, Heart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);

  const specialities = [
    'GENERAL PHYSICIAN',
    'GENERAL SURGEON',
    'GESTROENTEROLOGIST',
    'GYNAECOLOGIST',
    'EYE SPECIALIST',
    'DIABETOLOGIST',
    'CHEST PHYSICIAN',
    'CARDIOLOGIST',
    'SKIN SPECIALIST',
    'ORTHOPEDIC SURGEON',
    'CHILD SPECIALIST'
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-gradient-to-br from-[#c2272c] to-[#a81e22] py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-white">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Nishat Chowk, Domanwa Road, Hyderabad</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:hospitalmemoncharitable@gmail.com"
                className="flex items-center gap-2 hover:opacity-90 transition"
              >
                <Mail size={16} />
                <span className="hidden md:inline">hospitalmemoncharitable@gmail.com</span>
              </a>
              <span className="bg-white/20 px-4 py-1 rounded-full font-semibold">
                UAN: 0319-7822734
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/hospital-logo.png" 
                alt="Memon Charitable Hospital" 
                className="w-12 h-12 mr-3"
              />
              <div>
                <div className="text-xl font-black text-gray-900">Memon Charitable</div>
                <div className="text-sm text-gray-600 font-medium">Hospital & Research Center</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="font-semibold text-gray-700 hover:text-[#c2272c] transition-colors">
                Home
              </a>
              <a href="/about.html" className="font-semibold text-gray-700 hover:text-[#c2272c] transition-colors">
                About
              </a>
              
              {/* Specialities Dropdown */}
              <div className="relative group">
                <button className="font-semibold text-gray-700 hover:text-[#c2272c] transition-colors flex items-center gap-1">
                  Speciality / Doctors
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl min-w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-[#c2272c] z-50">
                  {specialities.map((item, index) => (
                    <div 
                      key={index}
                      className="px-6 py-3 hover:bg-red-50 hover:text-[#c2272c] transition-all duration-200 border-b border-gray-100 last:border-b-0 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <a href="/newevents.html" className="font-semibold text-gray-700 hover:text-[#c2272c] transition-colors">
                New Events
              </a>
              <a href="/career.html" className="font-semibold text-gray-700 hover:text-[#c2272c] transition-colors">
                Career
              </a>
              <a href="/contact.html" className="font-semibold text-gray-700 hover:text-[#c2272c] transition-colors">
                Contact
              </a>
              <a href="#" className="bg-gradient-to-br from-[#c2272c] to-[#d9261c] text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-[#c2272c]/20 hover:shadow-xl hover:shadow-[#c2272c]/30 hover:-translate-y-0.5">
                <Heart size={16} />
                Donate Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-white rounded-xl shadow-xl p-6 border border-gray-200">
              <div className="space-y-4">
                <a href="#" className="block py-2 text-gray-700 hover:text-[#c2272c] font-semibold">
                  Home
                </a>
                <a href="/about.html" className="block py-2 text-gray-700 hover:text-[#c2272c] font-semibold">
                  About
                </a>
                
                {/* Mobile Specialities Dropdown */}
                <div>
                  <button 
                    onClick={() => setIsSpecialtiesOpen(!isSpecialtiesOpen)}
                    className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-[#c2272c] font-semibold"
                  >
                    Speciality / Doctors
                    <ChevronDown size={16} className={`transition-transform ${isSpecialtiesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isSpecialtiesOpen && (
                    <div className="mt-2 ml-4 space-y-2 border-l-2 border-[#c2272c] pl-4">
                      {specialities.map((item, index) => (
                        <a 
                          key={index}
                          href="#" 
                          className="block py-2 text-gray-600 hover:text-[#c2272c]"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a href="/newevents.html" className="block py-2 text-gray-700 hover:text-[#c2272c] font-semibold">
                  New Events
                </a>
                <a href="/career.html" className="block py-2 text-gray-700 hover:text-[#c2272c] font-semibold">
                  Career
                </a>
                <a href="/contact.html" className="block py-2 text-gray-700 hover:text-[#c2272c] font-semibold">
                  Contact
                </a>
                <a href="#" className="bg-gradient-to-br from-[#c2272c] to-[#d9261c] text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-[#c2272c]/20 hover:shadow-xl hover:shadow-[#c2272c]/30 w-full justify-center mt-4">
                  <Heart size={16} />
                  Donate Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;