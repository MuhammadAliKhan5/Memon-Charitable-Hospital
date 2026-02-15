import React, { useEffect } from 'react';
import { Phone, Activity, Calendar, Clock } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Urologist = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const doctors = [
    {
      name: "Dr. Imran Idrees Memon",
      day: "Saturday",
      timing: "11am to 1pm",
      contact: "0333-2745326"
    },
    {
      name: "Dr. Shevak Ram",
      day: "Wednesday",
      timing: "03pm to 5pm",
      contact: "0300-3087925"
    },
    {
      name: "Dr. Azhar Shah",
      day: "Friday",
      timing: "03pm to 5pm",
      contact: "0333-2607673"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="relative h-[300px] bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#c2272c]/10"></div>
        <div className="relative z-10 text-center text-white px-4">
          <Activity size={48} className="text-[#c2272c] mx-auto mb-4 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider" data-aos="fade-down">
            Urology Department
          </h1>
          <div className="w-20 h-1 bg-[#c2272c] mx-auto mt-4"></div>
          <p className="mt-4 text-gray-400 font-medium uppercase text-xs tracking-[0.3em]">Specialized Urinary Care</p>
        </div>
      </header>

      {/* Doctor Cards Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {doctors.map((doc, i) => (
            <div 
              key={i} 
              className="group bg-gray-50 rounded-[3rem] p-8 border border-transparent hover:border-[#c2272c] hover:bg-white hover:shadow-2xl transition-all duration-500" 
              data-aos="fade-up" 
              data-aos-delay={i * 100}
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#c2272c] transition-colors duration-300">
                  {doc.name}
                </h3>
                <div className="mt-2 inline-block px-3 py-1 bg-gray-200 text-gray-600 rounded-lg text-[10px] font-black uppercase tracking-widest">
                  Consultant Urologist
                </div>
              </div>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar size={18} className="text-[#c2272c]" />
                  <span className="text-sm font-bold uppercase tracking-tight">{doc.day}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock size={18} className="text-[#c2272c]" />
                  <span className="text-sm font-medium">{doc.timing}</span>
                </div>
              </div>

              <a 
                href={`tel:${doc.contact}`} 
                className="flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-[#c2272c] transition-all transform hover:-translate-y-1 shadow-lg"
              >
                <Phone size={18} /> {doc.contact}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Urologist;