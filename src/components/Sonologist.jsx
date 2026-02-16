import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, User } from 'lucide-react';
import AOS from 'aos';

const Sonologist = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const doctors = [
    { name: "Dr. Shahabuddin Qureshi", day: "Sat, Sun, Tue, Wed, Thu", timing: "10am to 2:pm", contact: "0333-2605320" },
    { name: "Dr. Chatesh Kumar", day: "Mon, Tue, Thu", timing: "3pm to 9pm", contact: "0333-3874215" },
    { name: "Dr. Syed Shiraz Shah", day: "Monday, Tuesday", timing: "10am to 3pm", contact: "0304-1263706" },
    { name: "Dr. Fatima", day: "Sunday / Friday", timing: "3pm-10pm / 10am-3pm", contact: "0331-2261150" },
    { name: "Dr. Bakhtawar", day: "Friday", timing: "3pm to 9pm", contact: "0333-1244180" },
    { name: "Dr. Shahida Yaqoob", day: "Wednesday, Saturday", timing: "3pm to 10pm", contact: "0313-3283144" },
    { name: "Dr. Dureshwar", day: "Monday", timing: "10am to 2pm", contact: "0332-3735054" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="relative h-[350px] bg-gray-900 flex items-center justify-center">
        <img src="/slider2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Banner" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" data-aos="fade-up">Sonology Department</h1>
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
              <p className="flex items-center gap-2"><Calendar size={18} className="text-[#c2272c]"/> {doc.day}</p>
              <p className="flex items-center gap-2"><Clock size={18} className="text-[#c2272c]"/> {doc.timing}</p>
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

export default Sonologist;