import React, { useEffect } from 'react';
import { Phone, Wind, Calendar, Clock } from 'lucide-react';
import AOS from 'aos';

const ChestPhysician = () => {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

  const doctors = [
    { name: "Dr. Pardeep Kumar Soni", day: "Thursday", timing: "9pm to 10pm", contact: "0332-4645265" },
    { name: "Dr. Kashif Ali", day: "Tuesday, Wednesday", timing: "8:30pm to 9:30pm", contact: "0300-4326434" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="relative h-[300px] bg-[#c2272c] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <Wind size={48} className="mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-black italic uppercase" data-aos="zoom-in">Chest Physician</h1>
        </div>
      </header>
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 gap-8 max-w-5xl">
        {doctors.map((doc, i) => (
          <div key={i} className="bg-gray-50 p-10 rounded-[3rem] border-2 border-transparent hover:border-gray-900 transition-all shadow-sm" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{doc.name}</h3>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-gray-600 bg-white p-3 rounded-xl">
                <Calendar className="text-[#c2272c]" size={20} />
                <span className="font-bold uppercase text-xs tracking-widest">{doc.day}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 bg-white p-3 rounded-xl">
                <Clock className="text-[#c2272c]" size={20} />
                <span className="font-bold text-xs">{doc.timing}</span>
              </div>
            </div>
            <a href={`tel:${doc.contact}`} className="block text-center py-4 bg-[#c2272c] text-white rounded-2xl font-black tracking-tighter hover:bg-gray-900 transition-colors uppercase">
              Call {doc.contact}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ChestPhysician;