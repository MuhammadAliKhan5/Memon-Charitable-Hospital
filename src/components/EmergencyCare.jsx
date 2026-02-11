import React from 'react';
import { Activity, Users, Zap, Phone } from 'lucide-react';

const EmergencySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Badge & Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-100 bg-red-50 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#c2272c] animate-pulse"></span>
            <span className="text-[#c2272c] text-xs font-bold uppercase tracking-wider">Always Open 24/7</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Critical Care & Emergency Room (ER)
          </h2>
          <div className="w-20 h-1 bg-[#c2272c] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our Emergency Department is the frontline of medical excellence, providing immediate life-saving interventions for the Hyderabad community.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Advanced Equipment */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="relative h-56">
              <img 
                src="Emergency1.jpg" 
                alt="Advanced Equipment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-5 right-6 bg-[#c2272c] p-3 rounded-lg shadow-lg text-white">
                <Activity size={24} />
              </div>
            </div>
            <div className="p-8 pt-10 flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Equipment</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Fully equipped with state-of-the-art defibrillators, ECG machines, and advanced monitoring systems. Ensures precise diagnostics and efficient emergency care at all times.
              </p>
              <ul className="space-y-2">
                {['24/7 operational readiness', 'High-tech monitoring systems', 'Trained medical staff support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Expert Medical Staff */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
            <div className="relative h-56">
              <img 
                src="Emergency2.jpg" 
                alt="Medical Staff" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-5 right-6 bg-[#c2272c] p-3 rounded-lg shadow-lg text-white">
                <Users size={24} />
              </div>
            </div>
            <div className="p-8 pt-10 flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Medical Staff</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Manned by highly trained healthcare professionals specializing in trauma, pediatrics, and acute care. Our team ensures rapid response and compassionate patient support 24/7.
              </p>
              <ul className="space-y-2">
                {['Certified trauma specialists', 'Pediatric emergency care', 'Continuous professional training'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3: Rapid Response (The Red Card) */}
          <div className="bg-[#c2272c] rounded-2xl p-8 text-white flex flex-col justify-between shadow-xl shadow-red-900/10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="fill-white" size={28} />
                <h3 className="text-2xl font-bold">Rapid Response</h3>
              </div>
              <p className="text-red-50 text-base leading-relaxed mb-8">
                Optimized workflows ensure every second counts. Our triage system prioritizes the most critical cases instantly.
              </p>
            </div>

            {/* Helpline Sub-card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <span className="text-[10px] uppercase tracking-widest font-bold block mb-4 text-center text-red-100">
                Emergency Helpline
              </span>
              <div className="space-y-3 text-center">
                <a href="tel:03197822734" className="block text-xl font-bold hover:text-red-200 transition-colors">0319-7822734</a>
                <a href="tel:03708626587" className="block text-xl font-bold hover:text-red-200 transition-colors">0370-8626587</a>
                <a href="tel:02226312067" className="block text-xl font-bold hover:text-red-200 transition-colors">022-2631206-7</a>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-center">
                <span className="text-[10px] text-red-100 italic">Call for immediate ambulance support</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmergencySection;