import React, { useEffect } from 'react';
import { Phone, Heart, Calendar, Clock, MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cardiologist = () => {
  // Initialize animations on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Data derived from Memon Charitable Hospital Consultant List 
  const consultant = {
    name: "Dr. Anwar Shaikh",
    specialty: "Cardiologist",
    days: "Monday To Sunday",
    timings: [
      { slot: "02:00 PM to 04:00 PM" },
      { slot: "07:00 PM to 08:00 PM" }
    ],
    contact: "0300-3013809",
    location: "Memon Charitable Hospital, Hyderabad"
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Header Section */}
      <header className="relative h-[400px] bg-gray-900 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Cardiology Department" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80"></div>
        </div>

        <div className="relative z-10 text-center px-4" data-aos="zoom-out">
          <Heart className="text-[#c2272c] w-16 h-16 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            Cardiology <span className="text-[#c2272c]">Unit</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#c2272c] mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-lg mx-auto text-lg">
            Expert heart care and cardiovascular services provided by leading specialists in Hyderabad.
          </p>
        </div>
      </header>

      {/* Consultant Display Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div 
            className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row"
            data-aos="fade-up"
          >
            {/* Profile Sidebar */}
            <div className="bg-gray-900 md:w-1/3 p-12 text-center flex flex-col justify-center items-center text-white">
              <div className="w-32 h-32 bg-[#c2272c] rounded-full flex items-center justify-center mb-6 shadow-xl">
                <Heart size={48} fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold leading-tight mb-2">{consultant.name}</h3>
              <p className="text-[#c2272c] font-black uppercase tracking-widest text-xs">
                Senior {consultant.specialty}
              </p>
            </div>

            {/* Schedule & Contact Details */}
            <div className="md:w-2/3 p-8 md:p-12 bg-white">
              <div className="mb-10">
                <h4 className="text-gray-400 uppercase text-xs font-black tracking-widest mb-6 border-b pb-2">
                  Consultation Schedule
                </h4>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-50 rounded-2xl text-[#c2272c]">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Available Days</p>
                      <p className="text-xl font-bold text-gray-900">{consultant.days}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-50 rounded-2xl text-[#c2272c]">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Visiting Hours</p>
                      {consultant.timings.map((time, index) => (
                        <p key={index} className="text-xl font-bold text-gray-900">
                          {time.slot}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`tel:${consultant.contact}`}
                  className="flex-1 flex items-center justify-center gap-3 bg-[#c2272c] hover:bg-gray-900 text-white py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-red-200"
                >
                  <Phone size={20} />
                  {consultant.contact}
                </a>
                
                <div className="flex-1 flex items-center justify-center gap-3 bg-gray-100 text-gray-600 py-5 rounded-2xl font-bold">
                  <MapPin size={20} className="text-[#c2272c]" />
                  OPD Unit 1
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Footer Branding */}
      <footer className="bg-gray-50 py-12 text-center border-t border-gray-100">
        <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">
          Memon Charitable Hospital Hyderabad • Cardiology Services [cite: 1, 15]
        </p>
      </footer>
    </div>
  );
};

export default Cardiologist;