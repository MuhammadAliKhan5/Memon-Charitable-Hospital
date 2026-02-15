import React, { useEffect } from 'react';
import { Phone, Baby, Calendar, Clock } from 'lucide-react';
import AOS from 'aos';

const ChildSpecialist = () => {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

  const consultant = {
    name: "Dr. Amir Iqbal Memon",
    schedules: [
      { days: "Monday, Tuesday, Thursday, Saturday", time: "3pm to 4pm" },
      { days: "Wednesday & Friday", time: "6:45pm to 7:45pm" }
    ],
    contact: "0333-2684911"
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="relative h-[300px] bg-gray-900 flex items-center justify-center">
        <img src="/slider2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Pediatrics" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase" data-aos="fade-down">Child Specialist</h1>
          <div className="w-20 h-1 bg-[#c2272c] mx-auto"></div>
        </div>
      </header>

      <section className="py-20 container mx-auto px-6 max-w-4xl">
        <div className="bg-gray-50 rounded-[3rem] p-10 shadow-xl border-t-8 border-[#c2272c]" data-aos="zoom-in">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="p-6 bg-white rounded-full text-[#c2272c] shadow-inner">
              <Baby size={64} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{consultant.name}</h2>
              <div className="space-y-4 mb-8">
                {consultant.schedules.map((sched, i) => (
                  <div key={i} className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="text-[#c2272c] font-black text-xs uppercase tracking-widest">{sched.days}:</span>
                    <span className="text-gray-600 font-bold">{sched.time}</span>
                  </div>
                ))}
              </div>
              <a href={`tel:${consultant.contact}`} className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-black hover:bg-[#c2272c] transition-all">
                <Phone size={20} /> {consultant.contact}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChildSpecialist;