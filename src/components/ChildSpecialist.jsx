import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, User, Baby } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ChildSpecialist = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const schedules = [
    { days: "Monday, Tuesday, Thursday, Saturday", time: "3pm to 4pm" },
    { days: "Wednesday & Friday", time: "6:45pm to 7:45pm" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="relative h-[500px] bg-gray-900 flex items-center justify-center overflow-hidden">
        <img src="/slider2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105" alt="Banner" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex justify-center mb-6" data-aos="zoom-in">
             <div className="bg-[#c2272c] p-4 rounded-full shadow-lg"><Baby size={48} /></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight" data-aos="fade-down">Child Specialist</h1>
          <div className="w-24 h-1.5 bg-[#c2272c] mx-auto rounded-full"></div>
        </div>
      </header>

      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-widest text-sm">Pediatric Care for Your Little Ones</h2>
          <p className="text-gray-600 text-lg leading-relaxed italic">
            Our Pediatrics department offers comprehensive medical care for infants, children, and adolescents. 
            We focus on promoting healthy growth and development while providing expert treatment for acute 
            illnesses and chronic conditions. From vaccinations to nutritional guidance, we ensure your child 
            receives compassionate and specialized attention.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6 flex justify-center">
        <div className="w-full max-w-2xl p-10 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-2xl transition-all duration-300 group hover:border-[#c2272c]" data-aos="zoom-in">
          <div className="flex items-center gap-5 mb-8">
            <div className="p-5 bg-red-50 text-[#c2272c] rounded-2xl group-hover:bg-[#c2272c] group-hover:text-white transition-all shadow-sm"><User size={32} /></div>
            <h3 className="font-extrabold text-2xl text-gray-900 leading-tight">Dr. Amir Iqbal Memon</h3>
          </div>
          
          <div className="space-y-6 mb-10 text-gray-600">
            {schedules.map((sched, i) => (
              <div key={i} className="border-l-4 border-red-100 pl-6 py-2">
                <p className="flex items-center gap-3 font-bold text-[#c2272c] text-lg"><Calendar size={20}/> {sched.days}</p>
                <p className="flex items-center gap-3 font-semibold ml-8 mt-1 text-gray-700"><Clock size={20}/> {sched.time}</p>
              </div>
            ))}
          </div>

          <a href="tel:0333-2684911" className="flex items-center justify-center gap-3 w-full py-5 bg-[#c2272c] text-white rounded-2xl font-black uppercase tracking-wider text-sm hover:bg-gray-900 transition-all shadow-lg">
            <Phone size={18} fill="white"/> 0333-2684911
          </a>
        </div>
      </section>
    </div>
  );
};

export default ChildSpecialist;