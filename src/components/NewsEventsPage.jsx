import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewsEventsPage = () => {
  useEffect(() => {
    // AOS (Animate On Scroll) initialize
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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

        {/* Featured Event Section */}
        <section className="py-16 bg-gradient-to-br from-[#fff5f7] to-white">
          <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              
              {/* Image Column */}
              <div className="w-full lg:w-5/12" data-aos="fade-right" data-aos-delay="100">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-red-100">
                  <img 
                    src="1.jpeg" 
                    alt="Pink Day Celebration" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Featured
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-7/12" data-aos="fade-left" data-aos-delay="200">
                <div className="lg:pl-8">
                  <span className="text-pink-500 text-sm font-bold tracking-[0.2em] uppercase block mb-4">
                    Awareness Campaign
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                    Pink Day Celebration for Breast Cancer Awareness
                  </h2>
                  
                  <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <i className="bi bi-calendar3 text-[#c2272c] text-lg"></i>
                      <span className="font-semibold text-gray-800">October 28, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="bi bi-geo-alt-fill text-[#c2272c] text-lg"></i>
                      <span className="font-semibold text-gray-800">MCH Hyderabad</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    MCH proudly hosted Pink Day to raise awareness about breast cancer prevention and early detection, 
                    bringing together healthcare professionals and community members for a life-saving mission.
                  </p>
                  
                  {/* Highlights Card */}
                  <div className="bg-white p-6 rounded-xl border-l-4 border-pink-500 shadow-sm">
                    <h6 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-pink-500"></i>
                      Event Highlights
                    </h6>
                    <ul className="space-y-3">
                      {[
                        "Free breast cancer screening and consultations",
                        "Awareness sessions by oncology specialists",
                        "Survivor stories and support sessions"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
                          <i className="bi bi-heart-pulse text-pink-400 mt-0.5"></i>
                          {item}
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { icon: 'bi-people-fill', count: '250+', label: 'Participants' },
                { icon: 'bi-clipboard2-pulse', count: '150+', label: 'Free Screenings' },
                { icon: 'bi-person-check-fill', count: '15+', label: 'Medical Experts' },
                { icon: 'bi-heart-fill', count: '100%', label: 'Community Impact' },
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                  data-aos="fade-up" 
                  data-aos-delay={(idx + 1) * 100}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl shadow-lg">
                    <i className={`bi ${stat.icon}`}></i>
                  </div>
                  <h3 className="text-3xl font-bold text-[#c2272c] mb-1">{stat.count}</h3>
                  <p className="text-gray-500 font-medium text-sm">{stat.label}</p>
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