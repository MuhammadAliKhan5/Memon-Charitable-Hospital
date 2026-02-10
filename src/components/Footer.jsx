import React from 'react';
import { 
  HeartPulse, Heart, Droplets, Stethoscope, Pill, 
  MapPin, Phone, Mail, Send, ArrowRight,
  Facebook, Twitter, Instagram, Youtube 
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    "About Us",
    "Our Doctors", 
    "Departments",
    "Careers",
    "Contact Us"
  ];

  const services = [
    { icon: <HeartPulse size={18} />, name: "Emergency Services" },
    { icon: <Heart size={18} />, name: "Cardiac Care" },
    { icon: <Droplets size={18} />, name: "Dialysis Center" },
    { icon: <Stethoscope size={18} />, name: "ICU & OT" },
    { icon: <Pill size={18} />, name: "Pharmacy" }
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" },
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Youtube size={18} />, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-8 border-b border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-1">Memon Charitable Hospital</h2>
              <p className="text-sm">Serving Since 1954</p>
            </div>

            {/* Newsletter */}
            <div className="w-full md:w-auto">
              <div className="text-center md:text-right">
                <p className="text-white font-medium mb-3 text-sm">Stay Updated</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c2272c] text-sm w-full sm:w-64"
                  />
                  <button className="bg-[#c2272c] text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-300 text-sm inline-flex items-center justify-center gap-2">
                    <Send size={16} />
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center">
                <HeartPulse size={24} className="text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Quality Care</h3>
                <p className="text-sm">70+ Years of Service</p>
              </div>
            </div>

            <p className="text-sm mb-6 leading-relaxed">
              Providing exceptional healthcare services to our community for over 70 years with
              compassionate care and advanced technology.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-[#c2272c] rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  {React.cloneElement(social.icon, {
                    className: "w-4 h-4 text-white"
                  })}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 pb-3 border-b border-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight size={14} className="text-[#c2272c]" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 pb-3 border-b border-gray-800">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    {React.cloneElement(service.icon, {
                      className: "w-4 h-4 text-[#c2272c]"
                    })}
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 pb-3 border-b border-gray-800">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-red-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-1">Address</p>
                  <p className="text-xs">
                    Nishat Chowk, Domanwa Road,<br />
                    Hyderabad, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-red-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-1">Phone</p>
                  <p className="text-xs">
                    <a href="tel:03197822734" className="hover:text-white transition">0319-7822734</a><br />
                    <a href="tel:0221234567" className="hover:text-white transition">022-1234567</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-red-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm mb-1">Email</p>
                  <p className="text-xs">
                    <a href="mailto:hospitalmemoncharitable@gmail.com" className="hover:text-white transition break-all">
                      hospitalmemoncharitable@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-center md:text-left">
              © {new Date().getFullYear()} Memon Charitable Hospital. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Sitemap
              </a>
              <button className="bg-[#c2272c] text-white px-3 py-1.5 rounded text-xs hover:bg-red-700 transition-colors duration-300 inline-flex items-center gap-1.5">
                <Heart size={12} />
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;