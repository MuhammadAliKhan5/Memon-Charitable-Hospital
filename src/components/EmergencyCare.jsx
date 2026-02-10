import React from 'react';
import { Activity, Users, Zap, Phone, PhoneCall, PhoneForwarded, AlertTriangle } from 'lucide-react';

const EmergencyCare = () => {
  const emergencyFeatures = [
    {
      icon: <Activity size={40} />,
      title: "Advanced Equipment",
      description: "Fully equipped with state-of-the-art defibrillators, ECG machines, and advanced monitoring systems."
    },
    {
      icon: <Users size={40} />,
      title: "Expert Medical Staff",
      description: "Manned by highly trained healthcare professionals specializing in trauma, pediatrics, and acute care."
    },
    {
      icon: <Zap size={40} />,
      title: "Rapid Response",
      description: "Optimized workflows ensure every second counts. Our triage system prioritizes the most critical cases instantly."
    }
  ];

  const emergencyNumbers = [
    { number: "0319-7822734", label: "Primary Emergency", icon: <Phone size={24} /> },
    { number: "0370-8626587", label: "Secondary Emergency", icon: <PhoneCall size={24} /> },
    { number: "022-2631206-7", label: "Hospital Direct", icon: <PhoneForwarded size={24} /> }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-black mb-6">
            Critical Care & <span className="text-gradient">Emergency Room (ER)</span>
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            Our Emergency Department is the frontline of medical excellence, providing immediate life-saving
            interventions for the Hyderabad community.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {emergencyFeatures.map((feature, index) => (
            <div
              key={index}
              className="service-card bg-gray-50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:border-[#c2272c]/30 group"
            >
              <div className="w-20 h-20 bg-gradient-red rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
              <p className="text-black leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Emergency Contact Box */}
        <div className="max-w-4xl mx-auto bg-gray-100 border-2 border-[#c2272c]/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#c2272c] rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#c2272c] rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 bg-[#c2272c]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#c2272c]/30 mb-6">
                <div className="w-3 h-3 bg-[#c2272c] rounded-full animate-pulse"></div>
                <span className="font-bold tracking-widest uppercase text-sm text-black">
                  EMERGENCY HELPLINE
                </span>
                <div className="w-3 h-3 bg-[#c2272c] rounded-full animate-pulse"></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
                Call for Immediate Ambulance Support
              </h2>
            </div>

            {/* Phone Numbers */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {emergencyNumbers.map((number, index) => (
                <a
                  key={index}
                  href={`tel:${number.number.replace(/-/g, '')}`}
                  className="bg-gray-100 hover:bg-[#c2272c] border border-gray-200 hover:border-[#c2272c] rounded-xl p-6 text-center transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-red rounded-full flex items-center justify-center mb-4 group-hover:bg-white transition-colors duration-300">
                      {React.cloneElement(number.icon, {
                        className: "w-6 h-6 text-white group-hover:text-[#c2272c] transition-colors duration-300"
                      })}
                    </div>
                    <div className="text-2xl font-bold text-black group-hover:text-white transition-colors duration-300">
                      {number.number}
                    </div>
                    <div className="text-sm text-gray-800 mt-2 group-hover:text-white transition-colors duration-300">
                      {number.label}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Emergency Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-3xl font-black text-black mb-2">24/7</div>
                <div className="text-sm text-gray-600">Operation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-black mb-2">0 Min</div>
                <div className="text-sm text-gray-600">Waiting Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-black mb-2">10+</div>
                <div className="text-sm text-gray-600">Ambulances</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Emergency Badge */}
        <div className="absolute top-8 right-8 bg-gradient-to-r from-[#c2272c] to-[#ff6b6b] text-white px-6 py-3 rounded-full font-bold shadow-2xl animate-bounce">
          <div className="flex items-center gap-2">
            <AlertTriangle size={20} />
            <span>EMERGENCY DEPARTMENT</span>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Waves */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="rgba(194,39,44,0.1)" d="M0,0V120H1440V0C1234,120 810,120 720,120C630,120 206,120 0,0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default EmergencyCare;