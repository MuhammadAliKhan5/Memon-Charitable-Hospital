import React, { useEffect } from 'react';
import { Phone, Activity, Calendar, Clock, Accessibility } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Physiotherapy = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const staff = [
    { name: "Dr. Taj Fareed", contact: "0312-3832928" },
    { name: "Dr. Priya Khan", contact: "0312-1380407" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="relative h-[300px] bg-[#c2272c] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center text-white">
          <Accessibility size={48} className="mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-black uppercase italic" data-aos="zoom-in">
            Physiotherapy
          </h1>
          <div className="w-16 h-1 bg-white mx-auto mt-2"></div>
        </div>
      </header>

      {/* Staff Grid Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {staff.map((doc, i) => (
            <div key={i} className="bg-gray-50 rounded-[3rem] p-8 shadow-sm hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-gray-900" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 min-h-[3.5rem]">{doc.name}</h3>
                <div className="mt-4 inline-block px-4 py-1 bg-red-50 text-[#c2272c] rounded-full text-[10px] font-black uppercase tracking-tighter">
                  Physical Therapy Specialist
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-500">
                  <Calendar size={18} className="text-[#c2272c]" />
                  <span className="text-sm font-bold uppercase">Monday to Saturday</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <Clock size={18} className="text-[#c2272c]" />
                  <span className="text-sm font-medium">5pm to 9pm</span>
                </div>
              </div>

              <a href={`tel:${doc.contact}`} className="flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-[#c2272c] transition-colors shadow-lg">
                <Phone size={18} /> {doc.contact}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Physiotherapy;