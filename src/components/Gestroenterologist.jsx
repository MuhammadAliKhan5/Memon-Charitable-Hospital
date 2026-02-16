import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, User, Soup } from 'lucide-react'; // Soup used as a digestive metaphor, or you can use Activity/Dna
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gastroenterologist = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const doctors = [
    { name: "Dr. Akbar Memon", day: "Saturday", timing: "8am to 11am", contact: "0300-3064840" },
    { name: "Dr. Moomal Bhutoo", day: "Friday", timing: "6pm to 8pm", contact: "0333-7184689" },
    { name: "Dr. Aleem Qureshi", day: "Monday & Wednesday", timing: "2pm to 4pm", contact: "0332-2239867" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="relative h-[500px] bg-gray-900 flex items-center justify-center overflow-hidden">
        <img src="/slider2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105" alt="Banner" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex justify-center mb-6" data-aos="zoom-in">
             <div className="bg-[#c2272c] p-4 rounded-full shadow-lg"><User size={48} /></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight" data-aos="fade-down">Gastroenterologist</h1>
          <div className="w-24 h-1.5 bg-[#c2272c] mx-auto rounded-full"></div>
        </div>
      </header>

      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-widest text-sm">Advanced Digestive Care</h2>
          <p className="text-gray-600 text-lg leading-relaxed italic">
            Our Gastroenterology department specializes in the management of digestive system disorders, including the esophagus, 
            stomach, liver, and intestines. We use modern diagnostic procedures such as endoscopy and colonoscopy to accurately 
            identify and treat gastrointestinal issues, ensuring comprehensive digestive health for our patients.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {doctors.map((doc, i) => (
          <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 hover:border-[#c2272c]" data-aos="fade-up">
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

export default Gastroenterologist;