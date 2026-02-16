import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, User, Stethoscope } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GeneralPhysician = () => {
  useEffect(() => { 
    AOS.init({ duration: 800, once: true }); 
  }, []);

  const doctors = [
    { name: "Dr. Ghulam Fareed Memon", day: "Friday", timing: "03pm to 5pm", contact: "0333-2694922" },
    { name: "Dr. Kamran Qureshi", day: "Saturday / Monday", timing: "12pm to 02pm / 6pm to 8pm", contact: "0333-2621545" },
    { name: "Dr. Mujtaba Shah", day: "Tue, Thu, Sat / Sunday", timing: "2pm to 4pm / 04pm to 06pm", contact: "0312-3438946" },
    { name: "Dr. Adeel Rajput", day: "Wednesday", timing: "4:30pm to 6:30pm", contact: "0304-8718301" }
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* HERO - Increased height to h-[500px] */}
      <header className="relative h-[500px] bg-gray-900 flex items-center justify-center overflow-hidden">
        <img 
          src="/slider2.jpg" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 transition-transform duration-1000" 
          alt="General Physician Banner" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/60"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex justify-center mb-4" data-aos="zoom-in">
            <Stethoscope size={48} className="text-[#c2272c]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight" data-aos="fade-down">
            General Physician
          </h1>
          <div className="w-24 h-1.5 bg-[#c2272c] mx-auto rounded-full"></div>
        </div>
      </header>

      {/* INTRO PARAGRAPH */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-widest text-sm">Comprehensive Primary Care</h2>
          <p className="text-gray-600 text-lg leading-relaxed italic">
            Our General Physician department serves as the first point of contact for your health, 
            offering expert diagnosis and management of a wide range of acute and chronic conditions. 
            We are dedicated to providing personalized medical care, focusing on preventive health 
            strategies and wellness to ensure a healthier future for you and your family.
          </p>
        </div>
      </section>

      {/* DOCTORS GRID */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {doctors.map((doc, i) => (
            <div 
              key={i} 
              className="p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 hover:border-[#c2272c]" 
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="p-5 bg-red-50 text-[#c2272c] rounded-2xl group-hover:bg-[#c2272c] group-hover:text-white transition-all duration-300 shadow-sm">
                  <User size={28} />
                </div>
                <h3 className="font-extrabold text-xl text-gray-900 leading-tight">{doc.name}</h3>
              </div>

              <div className="space-y-4 mb-10 text-gray-600">
                <div className="flex items-start gap-3">
                  <Calendar size={20} className="text-[#c2272c] mt-1 shrink-0" /> 
                  <span className="font-semibold">{doc.day}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-[#c2272c] mt-1 shrink-0" /> 
                  <span className="font-semibold">{doc.timing}</span>
                </div>
              </div>

              <a
                href={`tel:${doc.contact}`}
                className="flex items-center justify-center gap-3 w-full py-5 bg-[#c2272c] text-white rounded-2xl font-black uppercase tracking-wider text-sm hover:bg-gray-900 transition-all shadow-lg hover:shadow-red-900/20"
              >
                <Phone size={18} fill="white" /> {doc.contact}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GeneralPhysician;