import React, { useEffect } from 'react';
import { Phone, Activity, Calendar, Clock } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OrthopedicSurgeon = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const doctors = [
    {
      name: "Dr. Syed Muhammad Ali",
      day: "Sunday",
      timing: "2pm to 4pm",
      contact: "0300-9371495"
    },
    {
      name: "Dr. Rashid Qayoom",
      day: "Mon, Tue, Thu, Sat",
      timing: "03:pm to 5pm",
      contact: "0333-2435411"
    },
    {
      name: "Dr. Zeeshan Arbab",
      day: "Friday",
      timing: "2pm to 5pm",
      contact: "0334-3023990"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="relative h-[300px] bg-[#c2272c] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center text-white">
          <Activity size={48} className="mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-black uppercase italic" data-aos="zoom-in">
            Orthopedic Surgeon
          </h1>
          <div className="w-16 h-1 bg-white mx-auto mt-2"></div>
        </div>
      </header>

      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {doctors.map((doc, i) => (
            <div key={i} className="bg-gray-50 rounded-[3rem] p-8 shadow-sm hover:shadow-2xl transition-all border-b-8 border-transparent hover:border-gray-900" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 min-h-[3.5rem]">{doc.name}</h3>
                <div className="mt-4 inline-block px-4 py-1 bg-red-50 text-[#c2272c] rounded-full text-[10px] font-black uppercase tracking-tighter">
                  Bone & Joint Specialist
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-500">
                  <Calendar size={18} className="text-[#c2272c]" />
                  <span className="text-sm font-bold uppercase">{doc.day}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <Clock size={18} className="text-[#c2272c]" />
                  <span className="text-sm font-medium">{doc.timing}</span>
                </div>
              </div>

              <a href={`tel:${doc.contact}`} className="flex items-center justify-center gap-2 w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-[#c2272c] transition-colors shadow-lg">
                <Phone size={18} /> {doc.contact}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OrthopedicSurgeon;