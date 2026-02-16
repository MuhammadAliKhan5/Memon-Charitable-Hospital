import React, { useEffect } from 'react';
import { Heart, Eye, Star, Award, Quote } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutBody = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="font-sans text-gray-900 bg-white">
      {/* BANNER SECTION 
          Removed bg-gray-900 and shadows that create a 'box' look.
          Now it's a simple, full-width image display.
      */}
      <section className="relative w-full h-[350px] md:h-[450px]">
        {/* The Image */}
        <img 
          src="slider2.jpg" 
          alt="Hospital Banner" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        
        {/* Subtle Darkening Overlay (Only for text contrast, no borders) */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Text Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-6 text-center text-white">
            <h1 
              className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight" 
              data-aos="fade-up"
            >
              Memon Charitable Hospital
            </h1>
            <p 
              className="text-lg md:text-xl text-gray-100 font-medium max-w-2xl mx-auto" 
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              Operational since 1954, providing world-class tertiary care 
              in the heart of Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {/* Intro & Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 italic">"Excellence in Healthcare Since 1954"</h2>
            <p className="text-lg text-gray-600">
              Providing quality medical services with modern facilities and a patient-focused approach 
              for the community of Hyderabad.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7" data-aos="fade-right">
               <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                  <img src="about-img1.jpg" className="rounded-3xl w-full object-cover h-[400px]" alt="Facility" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6" data-aos="fade-left">
              <h3 className="text-3xl font-bold text-[#c2272c] border-l-4 border-[#c2272c] pl-4">Trusted Healthcare Provider</h3>
              <p className="text-gray-600 text-lg">
                MCH has been serving the community with reliable and affordable healthcare services for over seven decades.
              </p>
              <div className="grid gap-4">
                {[
                  { val: "200", label: "Hospital Beds" },
                  { val: "70+", label: "Years of Service" },
                  { val: "24/7", label: "Emergency" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-5 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="text-4xl font-black text-[#c2272c]">{stat.val}</div>
                    <div className="font-bold text-gray-900">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Board of Directors</h2>
            <div className="w-24 h-1.5 bg-[#c2272c] mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Director 1 */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="mb-6 aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
                <img src="doc1.jpeg" className="w-full h-full object-cover" alt="Director 1" />
              </div>
              <h4 className="text-2xl font-bold">Dr. Ahmed Memon</h4>
              <p className="text-[#c2272c] font-bold text-sm uppercase">Chairman</p>
            </div>

            {/* Director 2 */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-6 aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
                <img src="doc2.jpeg" className="w-full h-full object-cover" alt="Director 2" />
              </div>
              <h4 className="text-2xl font-bold">Mr. Yusuf Ibrahim</h4>
              <p className="text-[#c2272c] font-bold text-sm uppercase">Vice Chairman</p>
            </div>

            {/* Director 3 */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="mb-6 aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
                <img src="doc3.jpeg" className="w-full h-full object-cover" alt="Director 3" />
              </div>
              <h4 className="text-2xl font-bold">Dr. Fatima Khan</h4>
              <p className="text-[#c2272c] font-bold text-sm uppercase">Secretary</p>
            </div>

            {/* Director 4 */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="mb-6 aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
                <img src="doc4.jpeg" className="w-full h-full object-cover" alt="Director 4" />
              </div>
              <h4 className="text-2xl font-bold">Mr. Hassan Ali</h4>
              <p className="text-[#c2272c] font-bold text-sm uppercase">Treasurer</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutBody;