import React, { useEffect } from 'react';
import { Heart, Users, ShieldCheck, Zap, Award, Stethoscope, Star } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutBody = () => {
  useEffect(() => {
    // We initialize AOS but ensure it doesn't create extra width/scroll issues
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-out-cubic',
      disableMutationObserver: false,
    });
  }, []);

  return (
    /* Removed overflow-x-hidden to prevent the 'stuck' scroll feeling */
    <main className="font-sans text-gray-900 bg-white">
      
      {/* --- HERO BANNER SECTION --- */}
      <section className="relative w-full h-[350px] md:h-[500px] flex items-center overflow-hidden">
        <img 
          src="about.jpeg" 
          alt="Hospital Banner" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        <div className="relative container mx-auto px-6 lg:px-12 z-10">
          <div className="max-w-2xl">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#c2272c] text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4 rounded-full shadow-md"
              data-aos="fade-down"
            >
              Est. 1954
            </div>
            
            <h1 
              className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight" 
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Memon Charitable <br/>
              <span className="text-[#c2272c]">Hospital</span>
            </h1>
            
            <p 
              className="text-base md:text-lg text-gray-200 font-medium leading-relaxed max-w-xl border-l-2 border-[#c2272c] pl-4" 
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              Operational for over seven decades, providing world-class tertiary care 
              and affordable healthcare in the heart of Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {/* --- INTRO & POSTER SECTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              "Excellence in Healthcare Since 1954"
            </h2>
            <div className="w-16 h-1 bg-[#c2272c] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-500 italic">
              Providing quality medical services with modern facilities and a patient-focused approach.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7" data-aos="zoom-in">
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-gray-50 bg-gray-50">
                <img 
                  src="about-img1.jpg" 
                  className="w-full h-auto object-contain max-h-[600px] block mx-auto transition-transform duration-700 hover:scale-105" 
                  alt="Medical Services" 
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6" data-aos="fade-left">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                Trusted <span className="text-[#c2272c]">Healthcare</span> Provider
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                MCH has been serving the community with reliable and affordable healthcare services for over seven decades.
              </p>

              <div className="grid gap-4 mt-8">
                {[
                  { val: "200", label: "Hospital Beds", icon: <ShieldCheck size={20}/> },
                  { val: "70+", label: "Years of Service", icon: <Award size={20}/> },
                  { val: "24/7", label: "Emergency Services", icon: <Zap size={20}/> }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-white hover:shadow-lg transition-all">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#c2272c] shadow-sm group-hover:bg-[#c2272c] group-hover:text-white transition-colors">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-black text-[#c2272c]">{stat.val}</div>
                      <div className="font-bold text-gray-700 text-xs uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- IMPACT STATS SECTION --- */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "250+", label: "Participants", icon: <Users size={28} /> },
              { val: "150+", label: "Free Screenings", icon: <Stethoscope size={28} /> },
              { val: "15+", label: "Medical Experts", icon: <Star size={28} /> },
              { val: "100%", label: "Community Impact", icon: <Heart size={28} /> }
            ].map((item, idx) => (
              <div key={idx} className="text-center group" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="w-16 h-16 bg-[#c2272c] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:bg-white/5 transition-all">
                  <div className="text-white group-hover:text-[#c2272c] transition-colors">
                    {item.icon}
                  </div>
                </div>
                <div className="text-3xl font-black mb-1">{item.val}</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOARD OF DIRECTORS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Board of Directors</h2>
            <div className="w-20 h-1 bg-[#c2272c] mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Ahmed Memon", role: "Chairman", img: "doc1.png" },
              { name: "Mr. Yusuf Ibrahim", role: "Vice Chairman", img: "doc2.png" },
              { name: "Dr. Fatima Khan", role: "Secretary", img: "doc3.png" },
              { name: "Mr. Hassan Ali", role: "Treasurer", img: "doc4.png" }
            ].map((director, idx) => (
              <div key={idx} className="group text-left" data-aos="fade-up" data-aos-delay={idx * 150}>
                <div className="relative mb-5 aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 shadow-md">
                  <img 
                    src={director.img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt={director.name} 
                  />
                </div>
                <div className="px-1">
                    <h4 className="text-xl font-bold text-gray-900">{director.name}</h4>
                    <p className="text-[#c2272c] font-bold text-[11px] uppercase tracking-widest mt-1">{director.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutBody;