import React, { useEffect } from 'react';
import { Phone, Droplets, Calendar, Clock, Activity } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Nephrologist = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Dark Header Section */}
      <header className="relative h-[300px] bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#c2272c]/10"></div>
        <div className="relative z-10 text-center text-white">
          <Droplets size={48} className="mx-auto mb-4 text-[#c2272c]" />
          <h1 className="text-4xl md:text-5xl font-black uppercase italic" data-aos="zoom-in">
            Nephrologist
          </h1>
          <div className="w-16 h-1 bg-[#c2272c] mx-auto mt-2"></div>
        </div>
      </header>

      {/* Single Consultant Section */}
      <section className="py-20 container mx-auto px-6 flex justify-center">
        <div className="bg-gray-50 rounded-[3rem] p-10 w-full max-w-xl shadow-sm hover:shadow-2xl transition-all border-b-8 border-[#c2272c] hover:border-gray-900" data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Dr. Kishore Kumar</h3>
            <div className="px-4 py-1 bg-red-50 text-[#c2272c] rounded-full text-[10px] font-black uppercase tracking-[0.2em] inline-block">
              Kidney Care Specialist
            </div>
          </div>
          
          <div className="space-y-6 mb-10 bg-white p-6 rounded-[2rem]">
            <div className="flex items-center gap-4 text-gray-600">
              <div className="p-3 bg-red-50 rounded-xl">
                <Calendar size={20} className="text-[#c2272c]" />
              </div>
              <span className="text-lg font-bold uppercase">Saturday</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="p-3 bg-red-50 rounded-xl">
                <Clock size={20} className="text-[#c2272c]" />
              </div>
              <span className="text-lg font-medium">4pm to 6pm</span>
            </div>
          </div>

          <a href="tel:0304-2415568" className="flex items-center justify-center gap-3 w-full py-5 bg-gray-900 text-white rounded-[1.5rem] font-black text-xl hover:bg-[#c2272c] transition-all shadow-lg transform hover:-translate-y-1">
            <Phone size={24} /> 0304-2415568
          </a>
        </div>
      </section>
    </div>
  );
};

export default Nephrologist;