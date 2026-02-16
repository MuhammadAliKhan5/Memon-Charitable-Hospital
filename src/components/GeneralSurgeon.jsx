import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, User, Scissors } from 'lucide-react'; // Using Scissors icon for Surgery
import AOS from 'aos';
import 'aos/dist/aos.css';

const GeneralSurgeon = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const doctors = [
    { name: "Dr. Khurram Abbas", day: "Thursday", timing: "2pm to 4pm", contact: "0333-2705299" },
    { name: "Dr. Sundas", day: "Monday", timing: "3pm to 5pm", contact: "0333-3732734" },
    { name: "Dr. Shafaque", day: "Tuesday", timing: "4pm to 6pm", contact: "0313-3260450" },
    { name: "Dr. Aneeta Kumari", day: "Saturday", timing: "7pm to 9pm", contact: "0331-3548541" },
    { name: "Dr. Hassan Shaikh", day: "Friday", timing: "7pm to 10pm", contact: "0300-3075315" },
    { name: "Dr. Waseem Memon", day: "Sat / Sun", timing: "5pm to 7pm / 12pm to 2pm", contact: "0345-3530281" }
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* HERO SECTION - Enhanced Height and Depth */}
      <header className="relative h-[500px] bg-gray-900 flex items-center justify-center overflow-hidden">
        <img 
          src="/slider2.jpg" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105" 
          alt="General Surgeon Banner" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex justify-center mb-6" data-aos="zoom-in">
             <div className="bg-[#c2272c] p-4 rounded-full shadow-lg">
                <Scissors size={40} className="text-white transform -rotate-45" />
             </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight" data-aos="fade-down">
            General Surgeon
          </h1>
          <div className="w-24 h-1.5 bg-[#c2272c] mx-auto rounded-full"></div>
        </div>
      </header>

      {/* INTRO PARAGRAPH SECTION */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-widest text-sm">Precision & Advanced Care</h2>
          <p className="text-gray-600 text-lg leading-relaxed italic">
            The General Surgery department at MCH provides expert surgical intervention for a broad spectrum 
            of health conditions. Our highly skilled surgeons utilize advanced techniques and state-of-the-art 
            technology to perform both routine and complex procedures. We prioritize patient safety and 
            post-operative recovery, ensuring you receive compassionate, world-class surgical care at every step.
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
                <div className="flex items-start gap-3 font-semibold">
                  <Calendar size={20} className="text-[#c2272c] mt-1 shrink-0" /> 
                  <span>{doc.day}</span>
                </div>
                <div className="flex items-start gap-3 font-semibold">
                  <Clock size={20} className="text-[#c2272c] mt-1 shrink-0" /> 
                  <span>{doc.timing}</span>
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

export default GeneralSurgeon;