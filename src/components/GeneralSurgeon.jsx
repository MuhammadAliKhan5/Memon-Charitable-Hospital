import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, User } from 'lucide-react';
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

      {/* HERO SECTION WITH ANIMATION */}
      <header className="relative h-[350px] bg-gray-900 flex items-center justify-center overflow-hidden">
        <img src="/slider2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="General Surgeon Banner" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" data-aos="fade-down">
            General Surgeon
          </h1>
          <div className="w-20 h-1 bg-[#c2272c] mx-auto" data-aos="zoom-in" data-aos-delay="300"></div>
        </div>
      </header>

      {/* DOCTORS GRID WITH STAGGERED ANIMATION */}
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doc, i) => (
          <div 
            key={i} 
            className="p-8 border border-gray-100 rounded-[2rem] hover:shadow-2xl transition-all group hover:border-[#c2272c]"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-red-50 text-[#c2272c] rounded-2xl group-hover:bg-[#c2272c] group-hover:text-white transition-colors">
                <User size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900">{doc.name}</h3>
            </div>

            <div className="space-y-3 mb-8 text-gray-600 font-medium">
              <p className="flex items-center gap-2">
                <Calendar size={18} className="text-[#c2272c]" /> {doc.day}
              </p>
              <p className="flex items-center gap-2">
                <Clock size={18} className="text-[#c2272c]" /> {doc.timing}
              </p>
            </div>

            <a 
              href={`tel:${doc.contact}`} 
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#c2272c] text-white rounded-2xl font-bold hover:bg-gray-900 transition-all"
            >
              <Phone size={18} /> {doc.contact}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default GeneralSurgeon;