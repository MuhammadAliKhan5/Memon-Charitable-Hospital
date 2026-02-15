import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ChevronDown, Heart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);

  // Complete list of specialties based on hospital data [cite: 3, 23, 34, 37]
  const specialities = [
    'General Physician', 'General Surgeon', 'Gestroenterologist',
    'Gynaecologist', 'Eye Specialist', 'Diabetologist',
    'Chest Physician', 'Cardiologist', 'Skin Specialist',
    'Orthopedic Surgeon', 'Child Specialist', 'Sonologist',
    'ENT Specialist', 'Urologist',
    'Plastic Surgeon', 'Nephrologist', 'Physiotherapy'
  ];

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsSpecialtiesOpen(false);
  };

  return (
    <header className="relative z-50 bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-gradient-to-br from-[#c2272c] to-[#a81e22] py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-white">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Nishat Chowk, Domanwa Road, Hyderabad</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:hospitalmemoncharitable@gmail.com" className="flex items-center gap-2 hover:opacity-90 transition">
                <Mail size={14} />
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
      <nav className="py-2 md:py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* LEFT: LOGO */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center group" onClick={closeMenu}>
                <img
                  src="/hospital-logo.png"
                  alt="Memon Charitable Hospital"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* CENTER: MENUS */}
            <div className="hidden lg:flex flex-grow justify-center">
              <div className="flex items-center space-x-6 xl:space-x-8">
                <Link to="/" className="font-bold text-gray-700 hover:text-[#c2272c] transition-colors text-sm uppercase tracking-wide">Home</Link>
                <Link to="/about" className="font-bold text-gray-700 hover:text-[#c2272c] transition-colors text-sm uppercase tracking-wide">About</Link>

                {/* Specialities Dropdown */}
                <div className="relative group">
                  <button className="font-bold text-gray-700 hover:text-[#c2272c] transition-colors flex items-center gap-1 text-sm uppercase tracking-wide">
                    Specialities
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                  </button>
                  {/* Dropdown Menu - Scrollable for many items */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl min-w-[260px] max-h-[400px] overflow-y-auto opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-[#c2272c] z-50">
                    {specialities.map((item, index) => (
                      <Link
                        key={index}
                        to={`/speciality/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={closeMenu}
                        className="block px-6 py-3 hover:bg-red-50 hover:text-[#c2272c] transition-all duration-200 border-b border-gray-100 last:border-b-0 text-sm font-medium"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link to="/events" className="font-bold text-gray-700 hover:text-[#c2272c] transition-colors text-sm uppercase tracking-wide">News</Link>
                <Link to="/gallery" className="font-bold text-gray-700 hover:text-[#c2272c] transition-colors text-sm uppercase tracking-wide">Gallery</Link>
                <Link to="/careers" className="font-bold text-gray-700 hover:text-[#c2272c] transition-colors text-sm uppercase tracking-wide">Career</Link>
                <Link to="/contact" className="font-bold text-gray-700 hover:text-[#c2272c] transition-colors text-sm uppercase tracking-wide">Contact</Link>
              </div>
            </div>

            {/* RIGHT: DONATE BUTTON */}
            <div className="hidden lg:flex flex-shrink-0">
              <Link to="/donate" className="bg-gradient-to-br from-[#c2272c] to-[#d9261c] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-red-200 hover:-translate-y-0.5 whitespace-nowrap">
                <Heart size={14} />
                Donate Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-[#c2272c]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300 max-h-[80vh] overflow-y-auto">
              <div className="space-y-4">
                <Link to="/" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-[#c2272c] font-bold border-b border-gray-50">HOME</Link>
                <Link to="/about" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-[#c2272c] font-bold border-b border-gray-50">ABOUT</Link>
                <div>
                  <button onClick={() => setIsSpecialtiesOpen(!isSpecialtiesOpen)} className="flex items-center justify-between w-full py-2 text-gray-800 hover:text-[#c2272c] font-bold border-b border-gray-50">
                    SPECIALITIES
                    <ChevronDown size={16} className={`transition-transform ${isSpecialtiesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSpecialtiesOpen && (
                    <div className="mt-2 ml-4 space-y-2 border-l-2 border-[#c2272c] pl-4 bg-gray-50 rounded-r-lg">
                      {specialities.map((item, index) => (
                        <Link key={index} to={`/speciality/${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={closeMenu} className="block py-2 text-gray-600 text-sm hover:text-[#c2272c]">
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link to="/events" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-[#c2272c] font-bold border-b border-gray-50">NEWS</Link>
                <Link to="/gallery" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-[#c2272c] font-bold border-b border-gray-50">GALLERY</Link>
                <Link to="/careers" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-[#c2272c] font-bold border-b border-gray-50">CAREER</Link>
                <Link to="/contact" onClick={closeMenu} className="block py-2 text-gray-800 hover:text-[#c2272c] font-bold border-b border-gray-50">CONTACT</Link>
                <Link to="/donate" onClick={closeMenu} className="bg-[#c2272c] text-white px-6 py-3 rounded-xl font-bold w-full flex items-center justify-center gap-2 mt-4 shadow-lg shadow-red-200">
                  <Heart size={16} /> DONATE NOW
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;