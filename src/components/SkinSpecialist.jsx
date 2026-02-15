import React, { useEffect } from 'react';
import { Phone, Sparkles, Calendar, Clock } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkinSpecialist = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const doctors = [
    {
      name: "Dr. Farooque Ibrahim Memon",
      day: "Saturday",
      timing: "8pm to 9pm",
      contact: "0300-3049097"
    },
    {
      name: "Dr. Abdul Sattar",
      day: "Thursday",
      timing: "3:30pm to 5:30pm",
      contact: "0306-4700484"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="relative h-[300px] bg-gray-900 flex items-center justify-center">
        <div className="relative z-10 text-center text-white px-4">
          <Sparkles className="text-[#c2272c] w-12 h-12 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-widest" data-aos="fade-down">
            Skin Specialist
          </h1>
          <div className="w-20 h-1 bg-[#c2272c] mx-auto"></div>
          <p className="mt-4 text-gray-400 font-medium">Dermatology & Cosmetology Care</p>
        </div>
      </header>

      <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 gap-8 max-w-5xl">
        {doctors.map((doc, i) => (
          <div key={i} className="group p-10 bg-gray-50 rounded-[2.5rem] border border-transparent hover:border-[#c2272c] transition-all duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-[#c2272c] transition-colors">{doc.name}</h3>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-gray-600 bg-white p-4 rounded-2xl shadow-sm">
                <Calendar className="text-[#c2272c]" size={20} />
                <span className="font-bold uppercase text-xs tracking-widest">{doc.day}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 bg-white p-4 rounded-2xl shadow-sm">
                <Clock className="text-[#c2272c]" size={20} />
                <span className="font-bold text-sm">{doc.timing}</span>
              </div>
            </div>
            <a href={`tel:${doc.contact}`} className="flex items-center justify-center gap-3 w-full py-4 bg-gray-900 text-white rounded-2xl font-black hover:bg-[#c2272c] transition-all shadow-lg">
              <Phone size={20} /> {doc.contact}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SkinSpecialist;