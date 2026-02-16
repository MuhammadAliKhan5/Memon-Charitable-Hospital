import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, ChevronDown, Heart, Menu, X, Copy, Check, Building2 } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const specialities = [
    'General Physician', 'General Surgeon', 'Gestroenterologist',
    'Gynaecologist', 'Eye Specialist', 'Diabetologist',
    'Chest Physician', 'Cardiologist', 'Skin Specialist',
    'Orthopedic Surgeon', 'Child Specialist', 'Sonologist',
    'ENT Specialist', 'Urologist',
    'Plastic Surgeon', 'Nephrologist', 'Physiotherapy'
  ];

  const donateInfo = [
    { label: "Account Title", value: "Memon Charitable Hospital" },
    { label: "UBL Account Number", value: "267571459" },
    { label: "Branch Code", value: "0413" },
    { label: "IBAN", value: "PK08UNIL0109000267571459" },
  ];

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

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
            <div className="flex items-center gap-2 text-[11px] sm:text-sm">
              <MapPin size={14} />
              <span>Nishat Chowk, Domanwa Road, Hyderabad</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:hospitalmemoncharitable@gmail.com" className="flex items-center gap-2 hover:opacity-90 transition text-[11px] sm:text-sm">
                <Mail size={14} />
                <span className="hidden md:inline">hospitalmemoncharitable@gmail.com</span>
              </a>
              <span className="bg-white/20 px-4 py-1 rounded-full font-semibold text-[11px] sm:text-sm">
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
            {/* LOGO */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center group" onClick={closeMenu}>
                <img
                  src="/hospital-logo.png"
                  alt="Memon Charitable Hospital"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex flex-grow justify-center">
              <div className="flex items-center space-x-6 xl:space-x-8">
                <Link to="/" className="font-bold text-gray-700 hover:text-[#c2272c] transition-colors text-sm uppercase tracking-wide">Home</Link>
                <Link to="/about" className="font-bold text-gray-700 hover:text-[#c2272c] transition-colors text-sm uppercase tracking-wide">About</Link>

                <div className="relative group">
                  <button className="font-bold text-gray-700 hover:text-[#c2272c] transition-colors flex items-center gap-1 text-sm uppercase tracking-wide">
                    Specialities
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                  </button>
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

            {/* DONATE BUTTON (Desktop) */}
            <div className="hidden lg:flex flex-shrink-0">
              <button 
                onClick={() => setIsDonateModalOpen(true)}
                className="bg-gradient-to-br from-[#c2272c] to-[#d9261c] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-red-200 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <Heart size={14} />
                Donate Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden p-2 text-[#c2272c]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DRAWER */}
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
              
              <button 
                onClick={() => { closeMenu(); setIsDonateModalOpen(true); }}
                className="bg-[#c2272c] text-white px-6 py-4 rounded-xl font-bold w-full flex items-center justify-center gap-2 mt-4 shadow-lg shadow-red-200"
              >
                <Heart size={16} /> DONATE NOW
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- DONATE MODAL OVERLAY --- */}
      {isDonateModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Background Blur Overlay */}
          <div 
            className="absolute inset-0 bg-gray-900/80 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setIsDonateModalOpen(false)}
          ></div>
          
          {/* Small, Compact Modal Card */}
          <div className="relative bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-gray-100 flex flex-col max-h-[90vh]">
            
            {/* TOP RIGHT CLOSE BUTTON */}
            <button 
              onClick={() => setIsDonateModalOpen(false)}
              className="absolute top-4 right-4 z-[110] p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all"
              aria-label="Close modal"
            >
              <X size={20} strokeWidth={3} />
            </button>

            {/* Header Content */}
            <div className="bg-[#c2272c] p-6 text-center text-white shrink-0">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart size={24} fill="white" />
              </div>
              <h2 className="text-xl font-black uppercase tracking-tight">Support Our Mission</h2>
              <p className="text-red-50 text-[11px] mt-1 px-4 leading-tight">
                Your donation provides life-saving healthcare to the community.
              </p>
            </div>

            {/* Bank Information (Scrollable) */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-2 mb-4 text-gray-800 border-b border-gray-100 pb-2">
                <Building2 className="text-[#c2272c]" size={18} />
                <h3 className="font-bold text-sm uppercase tracking-wider">Bank Transfer Details</h3>
              </div>
              
              <div className="space-y-3">
                {donateInfo.map((info, idx) => (
                  <div key={idx} className="flex flex-col p-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-red-50/50 transition-colors">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{info.label}</span>
                    <div className="flex justify-between items-center mt-1">
                      <span className="font-bold text-gray-800 text-sm break-all">{info.value}</span>
                      <button 
                        onClick={() => handleCopy(info.value, info.label)}
                        className="ml-2 p-1.5 text-[#c2272c] hover:bg-white rounded-md transition-all shadow-sm shrink-0"
                      >
                        {copiedField === info.label ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3 rounded-xl bg-blue-50 border border-blue-100">
                <p className="text-blue-700 text-[10px] font-semibold leading-relaxed text-center">
                  Please share a screenshot of your transfer via WhatsApp for our records.
                </p>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="p-6 pt-0 shrink-0">
              <button 
                onClick={() => setIsDonateModalOpen(false)}
                className="w-full py-3.5 bg-gray-900 text-white rounded-xl font-bold hover:bg-[#c2272c] transition-all shadow-lg active:scale-95"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;