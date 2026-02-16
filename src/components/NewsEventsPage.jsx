import React, { useEffect } from 'react';
import { 
  Users, ClipboardCheck, UserCheck, Heart, 
  GraduationCap, Calendar, MapPin, CheckCircle2, 
  Clock, FileText 
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewsEventsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const stats = [
    { 
      icon: <Users size={32} />, 
      count: '250+', 
      label: 'Participants',
      color: 'from-red-500 to-red-700' 
    },
    { 
      icon: <ClipboardCheck size={32} />, 
      count: '150+', 
      label: 'Free Screenings',
      color: 'from-red-600 to-red-800' 
    },
    { 
      icon: <UserCheck size={32} />, 
      count: '15+', 
      label: 'Medical Experts',
      color: 'from-red-500 to-red-700' 
    },
    { 
      icon: <Heart size={32} />, 
      count: '100%', 
      label: 'Community Impact',
      color: 'from-red-600 to-red-800' 
    },
  ];

  return (
    <div className="bg-white font-sans text-gray-900">
      <main>
        {/* Page Title Section */}
        <div 
          className="pt-32 pb-12 border-b border-gray-100 bg-white" 
          data-aos="fade"
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#c2272c] tracking-tight">
              News & Events
            </h1>
            <p className="mt-4 text-gray-500 text-lg">
              Latest updates and happenings at MCH Hyderabad
            </p>
          </div>
        </div>

        {/* SECTION 1: Pink Day Awareness */}
        <section className="py-16 bg-gradient-to-br from-[#fff5f7] to-white border-b border-gray-50">
          <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-5/12" data-aos="fade-right" data-aos-delay="100">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-red-100">
                  <img src="1.jpeg" alt="Pink Day Celebration" className="w-full h-[400px] object-cover" />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Featured
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-7/12" data-aos="fade-left" data-aos-delay="200">
                <div className="lg:pl-8">
                  <span className="text-pink-500 text-sm font-bold tracking-[0.2em] uppercase block mb-4">Awareness Campaign</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">Pink Day Celebration for Breast Cancer Awareness</h2>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    MCH proudly hosted Pink Day to raise awareness about breast cancer prevention and early detection, 
                    bringing together healthcare professionals and community members for a life-saving mission.
                  </p>
                  <div className="bg-white p-6 rounded-xl border-l-4 border-pink-500 shadow-sm">
                    <h6 className="font-bold text-gray-900 mb-4 flex items-center gap-2">Event Highlights</h6>
                    <ul className="space-y-3">
                      {["Free breast cancer screening", "Awareness sessions by oncology specialists", "Survivor support sessions"].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
                          <Heart size={16} className="text-pink-400 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ADMISSIONS OPEN (NEW EVENT) */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              
              {/* Image/Badge Column */}
              <div className="w-full lg:w-5/12" data-aos="fade-left" data-aos-delay="100">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-100 bg-blue-600 p-8 text-white flex flex-col justify-center min-h-[400px]">
                  <div className="z-10 text-center">
                    <GraduationCap size={80} className="mx-auto mb-6 text-blue-200" />
                    <h3 className="text-3xl font-bold mb-2">Admissions Open</h3>
                    <p className="text-blue-100 text-lg mb-6">Session 2025 – 2026</p>
                    <div className="inline-block bg-white text-blue-700 px-6 py-3 rounded-full font-black text-xl shadow-lg">
                      70% SCHOLARSHIP
                    </div>
                    <p className="mt-4 text-sm text-blue-100 italic">For Deserving Students</p>
                  </div>
                  {/* Decorative background circle */}
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500 rounded-full opacity-50"></div>
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-7/12" data-aos="fade-right" data-aos-delay="200">
                <div className="lg:pr-8">
                  <span className="text-blue-600 text-sm font-bold tracking-[0.2em] uppercase block mb-4">Educational Announcement</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                    Al – Hakim School of Nursing & Rehabilitation Centre
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    Memon Charitable Hospital announces admissions for one-year Paramedical Technician Certificate courses. Shape your future in the healthcare industry with hands-on training and expert faculty.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                      <Calendar size={20} className="text-blue-600" />
                      <span className="text-sm font-semibold">Test Date: 28-02-2026</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                      <Clock size={20} className="text-blue-600" />
                      <span className="text-sm font-semibold">Deadline: 16-02-2026</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg border border-gray-100 shadow-sm md:col-span-2">
                      <MapPin size={20} className="text-blue-600" />
                      <span className="text-sm font-semibold">Venue: Liaquat University Hospital, Hyderabad</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                    <h6 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <FileText size={18} className="text-blue-600" />
                      Eligibility & Requirements
                    </h6>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {[
                        "Matric Science (Biology) - 45%",
                        "Age limit up to 35 Years",
                        "Domicile: Sindh Province Only",
                        "07 Passport Size Photographs",
                        "Matric Marks Sheet & Pacca Cert",
                        "Valid CNIC / Form B"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700 text-xs font-medium">
                          <CheckCircle2 size={14} className="text-blue-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
                  data-aos="fade-up" 
                  data-aos-delay={(idx + 1) * 100}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-black text-[#c2272c] mb-2">{stat.count}</h3>
                  <p className="text-gray-600 font-bold text-sm uppercase tracking-wide">{stat.label}</p>
                  <div className="w-10 h-1 bg-gray-100 mx-auto mt-4 group-hover:w-20 group-hover:bg-[#c2272c] transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewsEventsPage;