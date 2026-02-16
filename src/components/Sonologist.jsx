import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, User, Scan } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sonologist = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const doctors = [
    { name: "Dr. Shahabuddin Qureshi", day: "Sat, Sun, Tue, Wed, Thu", timing: "10am to 2pm", contact: "0333-2605320" },
    { name: "Dr. Chatesh Kumar", day: "Mon, Tue, Thu", timing: "3pm to 9pm", contact: "0333-3874215" },
    { name: "Dr. Syed Shiraz Shah", day: "Monday, Tuesday", timing: "10am to 3pm", contact: "0304-1263706" },
    { name: "Dr. Fatima", day: "Sunday/Friday", timing: "Flexible Hours", contact: "0331-2261150" },
    { name: "Dr. Bakhtawar", day: "Friday", timing: "3pm to 9pm", contact: "0333-1244180" },
    { name: "Dr. Shahida Yaqoob", day: "Wednesday, Saturday", timing: "3pm to 10pm", contact: "0313-3283144" },
    { name: "Dr. Dureshwar", day: "Monday", timing: "10am to 2pm", contact: "0332-3735054" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="relative h-[500px] bg-gray-900 flex items-center justify-center overflow-hidden">
        <img src="/slider2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105" alt="Sonology" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex justify-center mb-6" data-aos="zoom-in">
             <div className="bg-[#c2272c] p-4 rounded-full shadow-lg"><Scan size={48} /></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight" data-aos="fade-down">Sonology</h1>
          <div className="w-24 h-1.5 bg-[#c2272c] mx-auto rounded-full"></div>
        </div>
      </header>

      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-widest text-sm">Advanced Diagnostic Imaging</h2>
          <p className="text-gray-600 text-lg leading-relaxed italic">
            Our Sonology department uses state-of-the-art ultrasound technology to provide precise diagnostic imaging for various medical conditions. 
            Whether it is obstetric monitoring, abdominal scans, or vascular imaging, our expert sonologists ensure high-resolution 
            results to guide your treatment with absolute accuracy.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {doctors.map((doc, i) => (
          <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 hover:border-[#c2272c]" data-aos="fade-up" data-aos-delay={i * 50}>
            <div className="flex gap-5 mb-8 items-center">
              <div className="p-5 bg-red-50 text-[#c2272c] rounded-2xl group-hover:bg-[#c2272c] group-hover:text-white transition-all shadow-sm"><User size={28} /></div>
              <h3 className="font-extrabold text-xl text-gray-900 leading-tight">{doc.name}</h3>
            </div>
            <div className="space-y-4 mb-10 text-gray-600 font-semibold text-sm">
              <p className="flex items-center gap-3"><Calendar size={20} className="text-[#c2272c]"/> {doc.day}</p>
              <p className="flex items-center gap-3"><Clock size={20} className="text-[#c2272c]"/> {doc.timing}</p>
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

export default Sonologist;