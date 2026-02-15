import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, User } from 'lucide-react';
import AOS from 'aos';

const GeneralPhysician = () => {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const doctors = [
    { name: "Dr. Ghulam Fareed Memon", day: "Friday", timing: "03pm to 5pm", contact: "0333-2694922" },
    { name: "Dr. Kamran Qureshi", day: "Saturday / Monday", timing: "12pm to 02pm / 6pm to 8pm", contact: "0333-2621545" },
    { name: "Dr. Mujtaba Shah", day: "Tue, Thu, Sat / Sunday", timing: "2pm to 4pm / 04pm to 06pm", contact: "0312-3438946" },
    { name: "Dr. Adeel Rajpu", day: "Wednesday", timing: "4:30pm to 6:30pm", contact: "0304-8718301" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="relative h-[300px] bg-gray-900 flex items-center justify-center">
        <img src="/slider2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Banner" />
        <h1 className="relative z-10 text-4xl font-bold text-white uppercase tracking-wider" data-aos="fade-down">General Physician</h1>
      </header>
      <section className="py-16 container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doc, i) => (
          <div key={i} className="p-6 border rounded-3xl hover:border-[#c2272c] transition-all" data-aos="fade-up">
            <h3 className="font-bold text-lg mb-4 text-gray-900">{doc.name}</h3>
            <div className="text-sm text-gray-600 space-y-2 mb-6">
              <p className="flex items-center gap-2"><Calendar size={14}/> {doc.day}</p>
              <p className="flex items-center gap-2"><Clock size={14}/> {doc.timing}</p>
            </div>
            <a href={`tel:${doc.contact}`} className="block text-center py-2 bg-gray-900 text-white rounded-xl font-semibold hover:bg-[#c2272c] transition-colors">{doc.contact}</a>
          </div>
        ))}
      </section>
    </div>
  );
};
export default GeneralPhysician;