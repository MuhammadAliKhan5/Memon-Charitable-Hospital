import React from 'react';
import { 
  MapPin, Phone, Mail, ArrowRight,
  Facebook, Instagram, Youtube 
} from 'lucide-react';

const Footer = () => {
  const links = [
    { name: "About", href: "/about" },
    { name: "Specialities", href: "/speciality/general-physician" }, 
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/memoncharitablehospitalhyd" },
    { icon: <Instagram size={20} />, href: "https://instagram.com/yourpage" },
    { icon: <Youtube size={20} />, href: "https://youtube.com/yourpage" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content - 3 Column Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Hospital Info & Logo */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              {/* Logo Container - Added bg-white and padding to make the logo pop */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2 shadow-lg overflow-hidden flex-shrink-0">
                <img 
                  src="/hospital-logo.png" 
                  alt="MCH Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white leading-tight">Memon Charitable<br/>Hospital</h2>
                <p className="text-[10px] uppercase tracking-widest text-[#c2272c] font-bold">Serving Since 1954</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed">
              Providing exceptional healthcare services to our community for over 70 years with
              compassionate care and advanced medical technology.
            </p>

            {/* Social Icons with Redirection */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#c2272c] text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="md:pl-10">
            <h4 className="text-white font-semibold text-lg mb-6 pb-2 border-b-2 border-[#c2272c] inline-block">
              Links
            </h4>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="text-[#c2272c] group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 pb-2 border-b-2 border-[#c2272c] inline-block">
              Contact
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-[#c2272c] flex-shrink-0 mt-1" />
                <p className="text-sm leading-snug">
                  Nishat Chowk, Domanwa Road,<br />
                  Hyderabad, Pakistan
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={20} className="text-[#c2272c] flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <a href="tel:03197822734" className="hover:text-white block transition">0319-7822734</a>
                  <a href="tel:0221234567" className="hover:text-white block transition">022-1234567</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={20} className="text-[#c2272c] flex-shrink-0 mt-1" />
                <a href="mailto:hospitalmemoncharitable@gmail.com" className="text-sm hover:text-white transition break-all">
                  hospitalmemoncharitable@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Centered Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Memon Charitable Hospital Hyderabad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;