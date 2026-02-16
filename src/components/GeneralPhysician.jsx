import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, User } from 'lucide-react';
import AOS from 'aos';

const GeneralPhysician = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const doctors = [
    { name: "Dr. Ghulam Fareed Memon", day: "Friday", timing: "03pm to 5pm", contact: "0333-2694922" },
    { name: "Dr. Kamran Qureshi", day: "Saturday / Monday", timing: "12pm to 02pm / 6pm to 8pm", contact: "0333-2621545" },
    { name: "Dr. Mujtaba Shah", day: "Tue, Thu, Sat / Sunday", timing: "2pm to 4pm / 04pm to 06pm", contact: "0312-3438946" },
    { name: "Dr. Adeel Rajput", day: "Wednesday", timing: "4:30pm to 6:30pm", contact: "0304-8718301" }
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <header className="relative h-[350px] bg-gray-900 flex items-center justify-center">
        <img src="/slider2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Banner" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" data-aos="fade-down">
            General Physician
          </h1>
          <div className="w-20 h-1 bg-[#c2272c] mx-auto"></div>
        </div>
      </header>

      {/* DOCTORS */}
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doc, i) => (
          <div key={i} className="p-8 border border-gray-100 rounded-[2rem] hover:shadow-2xl transition-all group hover:border-[#c2272c]" data-aos="fade-up">

            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-red-50 text-[#c2272c] rounded-2xl group-hover:bg-[#c2272c] group-hover:text-white transition-colors">
                <User size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900">{doc.name}</h3>
            </div>

            <div className="space-y-3 mb-8 text-gray-600">
              <p className="flex items-center gap-2 font-medium">
                <Calendar size={18} className="text-[#c2272c]" /> {doc.day}
              </p>
              <p className="flex items-center gap-2 font-medium">
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

export default GeneralPhysician;
