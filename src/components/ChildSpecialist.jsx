import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, User } from 'lucide-react';
import AOS from 'aos';

const ChildSpecialist = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const schedules = [
    { days: "Monday, Tuesday, Thursday, Saturday", time: "3pm to 4pm" },
    { days: "Wednesday & Friday", time: "6:45pm to 7:45pm" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="relative h-[350px] bg-gray-900 flex items-center justify-center">
        <img src="/slider2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Banner" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" data-aos="fade-up">Child Specialist</h1>
          <div className="w-20 h-1 bg-[#c2272c] mx-auto"></div>
        </div>
      </header>

      <section className="py-20 container mx-auto px-6 flex justify-center">
        <div className="w-full max-w-lg p-8 border border-gray-100 rounded-[2rem] hover:shadow-2xl transition-all group hover:border-[#c2272c]" data-aos="zoom-in">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-red-50 text-[#c2272c] rounded-2xl group-hover:bg-[#c2272c] group-hover:text-white transition-colors">
              <User size={24} />
            </div>
            <h3 className="font-bold text-2xl">Dr. Amir Iqbal Memon</h3>
          </div>
          
          <div className="space-y-4 mb-8 text-gray-600">
            {schedules.map((sched, i) => (
              <div key={i} className="border-l-4 border-red-50 pl-4">
                <p className="flex items-center gap-2 text-sm font-bold text-[#c2272c]"><Calendar size={16}/> {sched.days}</p>
                <p className="flex items-center gap-2 text-sm ml-6"><Clock size={16}/> {sched.time}</p>
              </div>
            ))}
          </div>

          <a href="tel:0333-2684911" className="flex items-center justify-center gap-2 w-full py-4 bg-[#c2272c] text-white rounded-2xl font-bold hover:bg-gray-900 transition-colors shadow-lg">
            <Phone size={18}/> 0333-2684911
          </a>
        </div>
      </section>
    </div>
  );
};

export default ChildSpecialist;