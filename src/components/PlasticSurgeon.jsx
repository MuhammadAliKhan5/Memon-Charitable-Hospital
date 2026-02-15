import React, { useEffect } from 'react';
import { Phone, Sparkle, Calendar, Clock } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PlasticSurgeon = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <header className="relative h-[300px] bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-red-900/10"></div>
        <div className="relative z-10 text-center text-white px-4">
          <Sparkle size={48} className="text-[#c2272c] mx-auto mb-4 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider" data-aos="fade-down">
            Plastic Surgeon
          </h1>
          <div className="w-20 h-1 bg-[#c2272c] mx-auto mt-4"></div>
          <p className="mt-4 text-gray-400 font-medium uppercase text-xs tracking-[0.3em]">Reconstructive & Cosmetic Excellence</p>
        </div>
      </header>

      <section className="py-20 container mx-auto px-6 flex justify-center">
        <div 
          className="w-full max-w-lg group bg-gray-50 rounded-[3rem] p-10 border border-transparent hover:border-[#c2272c] hover:bg-white hover:shadow-2xl transition-all duration-500 text-center" 
          data-aos="zoom-in"
        >
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 group-hover:text-[#c2272c] transition-colors duration-300">
              Dr. Samra Irshad
            </h3>
            <div className="mt-3 inline-block px-4 py-1 bg-[#c2272c] text-white rounded-full text-[10px] font-black uppercase tracking-widest">
              Consultant Plastic Surgeon
            </div>
          </div>
          
          <div className="space-y-6 mb-10 inline-block text-left">
            <div className="flex items-center gap-4 text-gray-600">
              <Calendar size={22} className="text-[#c2272c]" />
              <span className="text-lg font-bold uppercase tracking-tight">Saturday</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <Clock size={22} className="text-[#c2272c]" />
              <span className="text-lg font-medium">3pm to 5pm</span>
            </div>
          </div>

          <a 
            href="tel:0312-3021505" 
            className="flex items-center justify-center gap-3 w-full py-5 bg-gray-900 text-white rounded-2xl font-black text-xl hover:bg-[#c2272c] transition-all transform hover:-translate-y-1 shadow-lg"
          >
            <Phone size={24} /> 0312-3021505
          </a>
        </div>
      </section>
    </div>
  );
};

export default PlasticSurgeon;