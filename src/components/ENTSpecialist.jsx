import React, { useEffect } from 'react';
import { Phone, Headset } from 'lucide-react';
import AOS from 'aos';

const ENTSpecialist = () => {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-16" data-aos="fade-right">
          <div className="h-1 w-12 bg-[#c2272c]"></div>
          <h2 className="text-4xl font-black text-gray-900 italic uppercase">ENT Specialist</h2>
        </div>
        
        <div className="bg-gray-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden" data-aos="fade-up">
          <div className="absolute right-[-20px] top-[-20px] opacity-10">
            <Headset size={200} />
          </div>
          <h3 className="text-3xl font-bold mb-2">Dr. Abdul Ghaffar Jamali [cite: 25]</h3>
          <p className="text-[#c2272c] font-black mb-8">Monday, Tuesday, Wednesday [cite: 25]</p>
          <div className="text-xl text-gray-400 mb-10">
            Timing: <span className="text-white">10:30am to 12:pm [cite: 25]</span>
          </div>
          <a href="tel:0333-7558627" className="text-2xl font-mono font-bold flex items-center gap-3 hover:text-[#c2272c] transition-colors">
            <Phone /> 0333-7558627 [cite: 25]
          </a>
        </div>
      </div>
    </div>
  );
};

export default ENTSpecialist;