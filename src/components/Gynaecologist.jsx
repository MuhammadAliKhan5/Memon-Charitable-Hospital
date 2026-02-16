import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, User } from 'lucide-react';
import AOS from 'aos';

const Gynaecologist = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

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
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" data-aos="fade-up">Gynaecology</h1>
          <div className="w-20 h-1 bg-[#c2272c] mx-auto"></div>
        </div>
      </header>

      <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doc, i) => (
          <div key={i} className="p-8 border border-gray-100 rounded-[2rem] hover:shadow-2xl transition-all group hover:border-[#c2272c]" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-red-50 text-[#c2272c] rounded-2xl group-hover:bg-[#c2272c] group-hover:text-white transition-colors">
                <User size={24} />
              </div>
              <h3 className="font-bold text-xl">{doc.name}</h3>
            </div>
            <div className="space-y-3 mb-8 text-gray-600">
              <p className="flex items-center gap-2 text-sm"><Calendar size={18} className="text-[#c2272c]"/> {doc.day}</p>
              <p className="flex items-center gap-2 text-sm"><Clock size={18} className="text-[#c2272c]"/> {doc.timing}</p>
            </div>
            <a href={`tel:${doc.contact}`} className="flex items-center justify-center gap-2 w-full py-4 bg-[#c2272c] text-white rounded-2xl font-bold hover:bg-gray-900 transition-colors">
              <Phone size={18}/> {doc.contact}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gynaecologist;