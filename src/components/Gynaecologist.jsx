import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, User } from 'lucide-react';
import AOS from 'aos';

const Gynaecologist = () => {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

  const doctors = [
    { name: "Dr. Gulfareen", day: "Friday, Saturday, Tuesday", timing: "3pm to 5pm", contact: "0336-2020558" },
    { name: "Dr. Sobia", day: "Wednesday, Thursday", timing: "6pm to 8pm", contact: "0316-3070847" },
    { name: "Dr. Tasleem Irfan", day: "Wednesday", timing: "3pm to 5:pm", contact: "0300-3018490" },
    { name: "Dr. Afzeen Daniyal", day: "Thursday / Sunday, Monday", timing: "2pm-5pm / 3pm-8pm", contact: "0332-2625877" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="relative h-[350px] bg-gray-900 flex items-center justify-center">
        <img src="/slider2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Banner" />
        <h1 className="relative z-10 text-5xl font-black text-white" data-aos="fade-up">Gynaecology</h1>
      </header>
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 gap-8">
        {doctors.map((doc, i) => (
          <div key={i} className="p-8 border-2 border-gray-50 rounded-[2rem] hover:border-[#c2272c] transition-all shadow-sm" data-aos="fade-left">
            <h3 className="font-bold text-2xl mb-4">{doc.name}</h3>
            <div className="flex flex-wrap gap-4 text-gray-500 mb-6">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Days: {doc.day}</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Time: {doc.timing}</span>
            </div>
            <a href={`tel:${doc.contact}`} className="text-[#c2272c] font-bold text-lg flex items-center gap-2">
              <Phone size={20}/> Call: {doc.contact}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gynaecologist;