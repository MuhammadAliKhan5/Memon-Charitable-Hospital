import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, Activity } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Diabetologist = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const doctors = [
    { name: "Dr. Hafiz Tariq Shaikh", day: "Tuesday", timing: "5pm to 7pm", contact: "0333-2696028" },
    { name: "Dr. Yaqoob Memon", day: "Monday to Friday", timing: "7pm to 9pm", contact: "0334-2616958" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="relative h-[300px] bg-gray-900 flex items-center justify-center">
        <img src="/slider2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Banner" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-wider" data-aos="fade-down">Diabetologist</h1>
          <div className="w-20 h-1 bg-[#c2272c] mx-auto"></div>
        </div>
      </header>
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 gap-8 max-w-5xl">
        {doctors.map((doc, i) => (
          <div key={i} className="p-8 border border-gray-100 rounded-[2rem] hover:shadow-2xl transition-all group hover:border-[#c2272c]" data-aos="fade-up" data-aos-delay={i*100}>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-red-50 text-[#c2272c] rounded-2xl group-hover:bg-[#c2272c] group-hover:text-white transition-colors">
                <Activity size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900">{doc.name}</h3>
            </div>
            <div className="space-y-3 mb-8 text-gray-600 font-medium">
              <p className="flex items-center gap-2"><Calendar size={18} className="text-[#c2272c]"/> {doc.day}</p>
              <p className="flex items-center gap-2"><Clock size={18} className="text-[#c2272c]"/> {doc.timing}</p>
            </div>
            <a href={`tel:${doc.contact}`} className="flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-[#c2272c] transition-all shadow-lg">
              <Phone size={18}/> {doc.contact}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Diabetologist;