import React, { useEffect } from 'react';
import { PhoneCall, MapPin, Phone, Mail, Info, CheckCircle2 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-white">
      <main>
        {/* Page Title */}
        <div className="bg-white py-16 border-b border-gray-100 text-center" data-aos="fade">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-extrabold text-[#d9261c] mb-2">Contact Us</h1>
            <p className="text-gray-500 text-lg">We are here to help. Reach out to us for any medical inquiries or support.</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4" data-aos="fade-up">
            
            {/* Emergency Banner */}
            <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#d9261c] to-[#a31a14] text-white text-center shadow-lg" data-aos="fade-up">
              <div className="flex justify-center mb-4">
                <PhoneCall size={32} className="animate-pulse" />
              </div>
              <h4 className="text-2xl font-bold mb-1">24/7 Emergency Contact</h4>
              <p className="opacity-90 mb-4 text-lg">For immediate medical assistance, call our emergency hotline</p>
              <div className="text-3xl md:text-4xl font-black tracking-widest">022-2631206-7</div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { 
                  icon: <MapPin size={40} />, 
                  title: 'Visit Us', 
                  desc: 'Domanwa Road, Shahi Bazar\nHyderabad, Sindh 71000\nPakistan',
                  link: 'https://maps.google.com' 
                },
                { 
                  icon: <Phone size={40} />, 
                  title: 'Call Us', 
                  desc: 'Main Line: 022-2631206-7\nMobile: 0319-7822734',
                  link: 'tel:03197822734' 
                },
                { 
                  icon: <Mail size={40} />, 
                  title: 'Email Us', 
                  desc: 'hospitalmemoncharitable@gmail.com\nWorking Hours: 24/7 Available',
                  link: 'mailto:hospitalmemoncharitable@gmail.com' 
                }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link} 
                  className="group block bg-white p-10 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-red-50 text-[#d9261c] group-hover:bg-[#d9261c] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line leading-relaxed">{item.desc}</p>
                </a>
              ))}
            </div>

            {/* Map Section */}
            <div className="mb-16" data-aos="fade-up">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl h-[400px] md:h-[550px] border-8 border-white">
                <iframe
                  title="MCH Location"
                  className="w-full h-full grayscale-[0.2] contrast-[1.1]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.151126938985!2d68.368383!3d25.385556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIzJzA4LjAiTiA2OMKwMjInMDYuMiJF!5e0!3m2!1sen!2s!4v1620000000000"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Important Info Box */}
            <div className="bg-red-50/50 p-8 md:p-12 rounded-2xl border-l-8 border-[#d9261c]" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-8">
                <Info className="text-[#d9261c]" size={28} />
                <h4 className="text-2xl font-bold">Important Information</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                {[
                  "24/7 Emergency services available",
                  "Free ambulance service for emergencies",
                  "Ample parking space available",
                  "Multiple specialist consultations daily",
                  "Pharmacy and diagnostic lab on-site",
                  "Wheelchair accessible facilities"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#d9261c] mt-1 shrink-0" />
                    <span className="text-gray-700 font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;