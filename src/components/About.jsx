import React, { useEffect } from 'react';
import { 
  Heart, Eye, Star, Award, Quote 
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutBody = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="font-sans text-gray-900 bg-white">
      {/* Banner Section - Darker Overlay for better readability */}
      <section className="relative w-full overflow-hidden bg-gray-900">
        <div className="relative w-full h-[400px] md:h-[500px]">
          {/* Main Image */}
          <img 
            src="slider2.jpg" 
            alt="Hospital Banner" 
            className="w-full h-full object-cover object-top" 
          />
          
          {/* DARK OVERLAY: opacity ko 60% rakha hai taake image dark ho jaye */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* TEXT CONTENT: text-white aur drop-shadow use kiya hai extra clarity ke liye */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-6 text-center text-white">
              <div className="max-w-4xl mx-auto">
                <h1 
                  className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-2xl text-white tracking-tight" 
                  data-aos="fade-up"
                >
                  Memon Charitable Hospital Hyderabad
                </h1>
                <p 
                  className="text-lg md:text-2xl text-gray-100 opacity-100 leading-relaxed drop-shadow-lg font-semibold max-w-2xl mx-auto" 
                  data-aos="fade-up" 
                  data-aos-delay="100"
                >
                  Operational since 1954, providing world-class tertiary care 
                  at Nishat Chowk, Domanwa Road, Hyderabad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro & Stats Section */}
      <section id="about" className="py-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 italic">"Excellence in Healthcare Since 1954"</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Providing quality medical services with modern facilities and a patient-focused approach 
              for the community of Hyderabad.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7" data-aos="fade-right">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                  <img 
                    src="about-img1.jpg" 
                    className="rounded-3xl shadow-2xl w-full object-cover object-top h-[380px] md:h-[420px] border-4 border-white" 
                    alt="Medical facility" 
                  />
                </div>
                <div className="col-span-6">
                  <img src="about-img3.jpg" className="rounded-2xl shadow-lg w-full h-40 object-cover object-top border-2 border-white" data-aos="zoom-in" data-aos-delay="200" alt="Medical team" />
                </div>
                <div className="col-span-6">
                  <img src="about-img2.jpg" className="rounded-2xl shadow-lg w-full h-40 object-cover object-top border-2 border-white" data-aos="zoom-in" data-aos-delay="300" alt="Patient consultation" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6" data-aos="fade-left">
              <h3 className="text-3xl font-bold text-[#c2272c] border-l-4 border-[#c2272c] pl-4">Trusted Healthcare Provider</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Memon Charitable Hospital has been serving the community with reliable,
                affordable, and quality healthcare services for over seven decades.
              </p>

              <div className="grid gap-4">
                {[
                  { val: "200", label: "Hospital Beds", desc: "Modern Facilities" },
                  { val: "70+", label: "Years of Service", desc: "Since 1954" },
                  { val: "24/7", label: "Emergency", desc: "Always Available" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-5 p-5 rounded-2xl bg-white shadow-sm border border-gray-100 hover:border-[#c2272c] transition-colors">
                    <div className="text-4xl font-black text-[#c2272c]">{stat.val}</div>
                    <div>
                      <h5 className="font-bold text-gray-900">{stat.label}</h5>
                      <p className="text-sm text-gray-500">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { Icon: Heart, title: "Our Mission", text: "To provide quality healthcare with compassion, integrity, and respect." },
            { Icon: Eye, title: "Our Vision", text: "To be a trusted institution known for ethical medical practices." },
            { Icon: Star, title: "Our Promise", text: "Safe, affordable, and respectful treatment where dignity comes first." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm text-center border border-gray-100 group hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="w-16 h-16 bg-red-50 text-[#c2272c] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c2272c] group-hover:text-white transition-colors">
                <item.Icon size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Board of Directors</h2>
            <div className="w-24 h-1.5 bg-[#c2272c] mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Ahmed Memon", pos: "Chairman", exp: "25+ Years" },
              { name: "Mr. Yusuf Ibrahim", pos: "Vice Chairman", exp: "20+ Years" },
              { name: "Dr. Fatima Khan", pos: "Secretary", exp: "18+ Years" },
              { name: "Mr. Hassan Ali", pos: "Treasurer", exp: "22+ Years" }
            ].map((member, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="group">
                <div className="relative overflow-hidden rounded-[2rem] mb-6 shadow-lg aspect-[4/5] border-4 border-white group-hover:border-[#c2272c] transition-all">
                  <img src="Dr-dummy.png" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" alt={member.name} />
                </div>
                <div className="text-center">
                  <span className="text-[#c2272c] font-bold text-xs uppercase tracking-widest">{member.pos}</span>
                  <h4 className="text-2xl font-bold text-gray-900 mt-1">{member.name}</h4>
                  <p className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-1 font-medium">
                    <Award size={16} className="text-[#c2272c]" /> {member.exp} Experience
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Board Message */}
          <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl" data-aos="fade-up">
            <Quote className="absolute top-10 right-10 text-white/5 w-40 h-40" />
            <div className="relative z-10 max-w-3xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
                <span className="w-12 h-1 bg-[#c2272c] rounded-full"></span>
                Message from the Board
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic font-light">
                "We strive to ensure that every patient receives world-class medical care 
                in a safe, respectful, and supportive environment. Our legacy since 1954 
                is built on the trust of the people of Hyderabad."
              </p>
              <div className="mt-10 font-bold text-[#c2272c] text-lg">
                — The Board of Directors, MCH
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutBody;