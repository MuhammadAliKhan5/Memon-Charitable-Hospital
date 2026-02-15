import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, User } from 'lucide-react';
import AOS from 'aos';

const GeneralSurgeon = () => {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

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
      <section className="relative h-[350px] bg-gray-900 flex items-center justify-center">
        <img src="/slider2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Banner" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" data-aos="zoom-in">General Surgeon</h1>
          <div className="w-20 h-1 bg-[#c2272c] mx-auto"></div>
        </div>
      </section>
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doc, i) => (
          <div key={i} className="p-8 border border-gray-100 rounded-[2rem] hover:shadow-2xl transition-all group" data-aos="fade-up">
            <h3 className="font-bold text-xl mb-6 group-hover:text-[#c2272c]">{doc.name}</h3>
            <div className="space-y-3 mb-8">
              <p className="flex items-center gap-2 text-gray-600"><Calendar size={18}/> {doc.day}</p>
              <p className="flex items-center gap-2 text-gray-600"><Clock size={18}/> {doc.timing}</p>
            </div>
            <a href={`tel:${doc.contact}`} className="flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-[#c2272c] transition-colors">
              <Phone size={18}/> {doc.contact}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default GeneralSurgeon;