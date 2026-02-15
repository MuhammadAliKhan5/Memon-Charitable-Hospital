import React, { useEffect } from 'react';
import { Phone, Calendar, Clock, User } from 'lucide-react';
import AOS from 'aos';

const EyeSpecialist = () => {
  useEffect(() => { AOS.init({ duration: 800 }); }, []);

  const doctors = [
    { name: "Dr. Nadeem Nisar Memon", day: "Saturday, Sunday", timing: "5pm to 7pm", contact: "0334-3444159" },
    { name: "Dr. Rahib", day: "Wednesday, Thursday", timing: "5:pm to 7:pm", contact: "0302-9220179" },
    { name: "Dr. Adnan", day: "Friday", timing: "8pm to 10pm", contact: "0334-2916958" },
    { name: "Dr. Noor Muhammad Soomro", day: "Monday, Tuesday", timing: "5pm to 7pm", contact: "0300-3099242" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="relative h-[350px] bg-gray-900 flex items-center justify-center">
        <img src="/slider2.jpg" className="absolute inset-0 w-full h-full object-cover opacity-40" alt="Banner" />
        <h1 className="relative z-10 text-5xl font-black text-white uppercase tracking-tighter" data-aos="fade-up">Eye Specialists</h1>
      </header>
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 gap-12">
        {doctors.map((doc, i) => (
          <div key={i} className="flex gap-6 items-start bg-gray-50 p-8 rounded-[2rem] border-transparent border-2 hover:border-[#c2272c] transition-all" data-aos="fade-up">
            <div className="text-5xl font-bold text-gray-200">#{i + 18}</div>
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">{doc.name}</h4>
              <p className="text-[#c2272c] font-bold mb-4 uppercase text-xs tracking-widest">{doc.day} — {doc.timing}</p>
              <a href={`tel:${doc.contact}`} className="text-lg font-mono flex items-center gap-2 font-bold hover:text-[#c2272c]">
                <Phone size={18} /> {doc.contact}
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EyeSpecialist;