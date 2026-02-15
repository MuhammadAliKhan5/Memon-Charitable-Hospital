import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, User } from 'lucide-react';
import AOS from 'aos';

const Sonologist = () => {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

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
        <h1 className="relative z-10 text-5xl font-black text-white" data-aos="fade-up">Sonology Department</h1>
      </header>
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doc, i) => (
          <div key={i} className="p-8 border rounded-[2rem] hover:border-[#c2272c] transition-all" data-aos="fade-up">
            <h3 className="font-bold text-xl mb-4">{doc.name}</h3>
            <p className="text-gray-600 mb-2">Days: {doc.day}</p>
            <p className="text-gray-600 mb-6">Timing: {doc.timing}</p>
            <a href={`tel:${doc.contact}`} className="block text-center py-3 bg-red-600 text-white rounded-xl font-bold">{doc.contact}</a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Sonologist;