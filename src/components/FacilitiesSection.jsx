import { Activity, Pill, Heart, Scissors, FlaskConical, Droplets, ChevronRight } from 'lucide-react';

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: <Activity size={28} />,
      title: "Emergency Room",
      description: "24/7 Emergency Room with ECG & defibrillators staffed by experienced emergency physicians"
    },
    {
      icon: <Pill size={28} />,
      title: "24-Hour Pharmacy",
      description: "Medicines available round the clock with expert pharmacists on duty 24/7"
    },
    {
      icon: <Heart size={28} />,
      title: "ICU Department",
      description: "Advanced ICU with ventilators & continuous monitoring by critical care specialists"
    },
    {
      icon: <Scissors size={28} />,
      title: "Operation Theater",
      description: "Modern OT rooms with anesthesia and advanced surgical equipment for all procedures"
    },
    {
      icon: <FlaskConical size={28} />,
      title: "Diagnostic Lab",
      description: "Comprehensive Lab & Radiology services with latest imaging technology"
    },
    {
      icon: <Droplets size={28} />,
      title: "Dialysis Unit",
      description: "10-bed dialysis unit with isolation facilities and experienced nephrology team"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1.5 bg-[#c2272c] rounded-full"></div>
            <span className="text-[#c2272c] font-bold uppercase tracking-wider text-base">Hospital Facilities</span>
            <div className="w-12 h-1.5 bg-[#c2272c] rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Medical Facilities</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            State-of-the-art medical facilities equipped with advanced technology for comprehensive patient care
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#c2272c]/30 group hover:-translate-y-1"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center text-[#c2272c] mb-6 mx-auto group-hover:bg-gradient-to-br group-hover:from-[#c2272c] group-hover:to-[#ff6b6b] group-hover:text-white transition-all duration-300">
                {facility.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{facility.title}</h3>
              <p className="text-gray-600 text-base text-center leading-relaxed mb-6">
                {facility.description}
              </p>
              
              <div className="text-center">
                <button className="text-[#c2272c] text-sm font-semibold hover:text-red-700 transition-colors duration-300 inline-flex items-center gap-1 group-hover:gap-2">
                  Learn more
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-[#c2272c] to-[#ff6b6b] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 text-lg">
            <FlaskConical size={22} />
            <span>Explore All Facilities</span>
            <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;