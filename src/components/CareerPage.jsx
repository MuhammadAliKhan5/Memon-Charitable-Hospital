import React, { useEffect } from 'react';
import { CheckCircle, MapPin, Award } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CareerPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">
      <main>
        {/* Page Title */}
        <div className="bg-white py-16 md:py-24 border-b border-gray-100" data-aos="fade">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#c2272c] mb-4">Careers</h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Join our mission to provide quality healthcare to the community.
            </p>
          </div>
        </div>

        {/* Why Join Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              <div className="lg:w-5/12" data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Work at MCH?</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  At Memon Charitable Hospital, we believe our greatest asset is our people. 
                  We offer a collaborative environment where medical professionals can grow while 
                  making a real difference in patient lives.
                </p>

                <ul className="space-y-4 mb-10">
                  {['Professional Growth & Training', 'Modern Medical Infrastructure', 'Inclusive & Diverse Workplace'].map((text) => (
                    <li key={text} className="flex items-center text-gray-700 font-medium text-lg">
                      <CheckCircle className="text-[#c2272c] mr-4 shrink-0" size={24} />
                      {text}
                    </li>
                  ))}
                </ul>

                <a href="#jobs" className="inline-block bg-[#c2272c] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition shadow-lg">
                  View Openings
                </a>
              </div>

              <div className="lg:w-7/12 relative" data-aos="fade-left">
                <div className="relative">
                  <img 
                    src="2.jpeg" 
                    alt="MCH Medical Team" 
                    className="w-full h-[400px] md:h-[550px] object-cover rounded-3xl shadow-2xl border-8 border-white"
                  />
                  <div className="absolute -bottom-8 -left-8 bg-[#c2272c] text-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300">
                    <h3 className="text-5xl font-black mb-1">70+</h3>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-90">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Jobs Openings */}
        <section id="jobs" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 mb-12 text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our latest opportunities and become part of our dedicated medical team.</p>
          </div>

          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Job Card 1 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in" data-aos-delay="100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-red-50 text-[#c2272c] rounded-md text-xs font-bold uppercase mb-3 tracking-wide">Medical</span>
                    <h4 className="text-2xl font-bold text-gray-900">Staff Nurse (ER/ICU)</h4>
                    <p className="flex items-center text-gray-500 mt-2"><MapPin size={16} className="mr-1" /> Hyderabad, Sindh</p>
                  </div>
                  <a href="mailto:hospitalmemoncharitable@gmail.com" className="px-6 py-2 border-2 border-[#c2272c] text-[#c2272c] rounded-full text-sm font-bold hover:bg-[#c2272c] hover:text-white transition text-center">Apply Now</a>
                </div>
                <hr className="border-gray-100 mb-6" />
                <p className="text-gray-600 italic">Required: 2+ years of experience in critical care. Valid nursing registration mandatory.</p>
              </div>

              {/* Job Card 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in" data-aos-delay="200">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-red-50 text-[#c2272c] rounded-md text-xs font-bold uppercase mb-3 tracking-wide">Administration</span>
                    <h4 className="text-2xl font-bold text-gray-900">Patient Coordinator</h4>
                    <p className="flex items-center text-gray-500 mt-2"><MapPin size={16} className="mr-1" /> Hyderabad, Sindh</p>
                  </div>
                  <a href="mailto:hospitalmemoncharitable@gmail.com" className="px-6 py-2 border-2 border-[#c2272c] text-[#c2272c] rounded-full text-sm font-bold hover:bg-[#c2272c] hover:text-white transition text-center">Apply Now</a>
                </div>
                <hr className="border-gray-100 mb-6" />
                <p className="text-gray-600 italic">Required: Excellent communication skills and proficiency in hospital management software.</p>
              </div>
            </div>

            <div className="mt-16 text-center p-10 rounded-[2.5rem] border-2 border-dashed border-gray-300 bg-white/50">
              <h5 className="text-xl font-bold mb-2">Don't see a matching role?</h5>
              <p className="text-gray-600">Send your CV to <strong className="text-[#c2272c]">hospitalmemoncharitable@gmail.com</strong> and we will contact you for future openings.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CareerPage;