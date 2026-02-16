import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, User, Eye } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EyeSpecialist = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const doctors = [
    { name: "Dr. Nadeem Nisar Memon", day: "Saturday, Sunday", timing: "5pm to 7pm", contact: "0334-3444159" },
    { name: "Dr. Rahib", day: "Wednesday, Thursday", timing: "5pm to 7pm", contact: "0302-9220179" },
    { name: "Dr. Adnan", day: "Friday", timing: "8pm to 10pm", contact: "0334-2916958" },
    { name: "Dr. Noor Muhammad Soomro", day: "Monday, Tuesday", timing: "5pm to 7pm", contact: "0300-3099242" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="relative h-[500px] bg-gray-900 flex items-center justify-center overflow-hidden">
        <img src="/slider2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105" alt="Banner" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex justify-center mb-6" data-aos="zoom-in">
             <div className="bg-[#c2272c] p-4 rounded-full shadow-lg"><Eye size={48} /></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight" data-aos="fade-down">Eye Specialists</h1>
          <div className="w-24 h-1.5 bg-[#c2272c] mx-auto rounded-full"></div>
        </div>
      </header>

      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-widest text-sm">Vision & Ophthalmology Excellence</h2>
          <p className="text-gray-600 text-lg leading-relaxed italic">
            Our Ophthalmology department is dedicated to preserving your sight through advanced medical and surgical eye care. 
            We provide comprehensive eye examinations, treatment for cataracts, glaucoma, and retina disorders. 
            Our focus is on delivering precision care to ensure long-term eye health and clear vision for all our patients.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {doctors.map((doc, i) => (
          <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 hover:border-[#c2272c]" data-aos="fade-up" data-aos-delay={i * 100}>
            <div className="flex gap-5 mb-8 items-center">
              <div className="p-5 bg-red-50 text-[#c2272c] rounded-2xl group-hover:bg-[#c2272c] group-hover:text-white transition-all shadow-sm"><User size={28} /></div>
              <h3 className="font-extrabold text-xl text-gray-900 leading-tight">{doc.name}</h3>
            </div>
            <div className="space-y-4 mb-10 text-gray-600">
              <p className="flex items-center gap-3 font-semibold text-lg"><Calendar size={20} className="text-[#c2272c]"/> {doc.day}</p>
              <p className="flex items-center gap-3 font-semibold text-lg"><Clock size={20} className="text-[#c2272c]"/> {doc.timing}</p>
            </div>
            <a href={`tel:${doc.contact}`} className="flex justify-center items-center gap-3 py-5 bg-[#c2272c] text-white rounded-2xl font-black uppercase tracking-wider text-sm hover:bg-gray-900 transition-all shadow-lg">
              <Phone size={18} fill="white" /> {doc.contact}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EyeSpecialist;