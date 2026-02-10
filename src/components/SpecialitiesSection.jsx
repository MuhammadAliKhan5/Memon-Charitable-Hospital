import { HeartPulse, Baby, Eye, Heart, Wind, Stethoscope, ChevronRight } from 'lucide-react';

const SpecialtiesSection = () => {
  const specialties = [
    {
      icon: <HeartPulse size={28} />,
      title: "Cardiology",
      description: "Comprehensive heart care including heart failure & non-invasive treatments with advanced diagnostic facilities.",
      stats: ["2+", "Daily", "24/7"]
    },
    {
      icon: <Baby size={28} />,
      title: "Pediatrics",
      description: "Child specialists for pneumonia, asthma & growth monitoring with child-friendly environment and care.",
      stats: ["MD", "Daily", "24/7"]
    },
    {
      icon: <Eye size={28} />,
      title: "Ophthalmology",
      description: "Advanced eye surgery including cataract & retina care with state-of-the-art surgical equipment.",
      stats: ["FRCS", "Friday", "24/7"]
    },
    {
      icon: <Heart size={28} />,
      title: "Gynecology",
      description: "Women's health including C-sections & infertility care with modern labor and delivery suites.",
      stats: ["2+", "Multiple", "24/7"]
    },
    {
      icon: <Wind size={28} />,
      title: "Pulmonology",
      description: "Care for asthma, TB, chronic cough & breathing issues with pulmonary function testing facilities.",
      stats: ["DTCD", "Thursday", "24/7"]
    },
    {
      icon: <Stethoscope size={28} />,
      title: "General Medicine",
      description: "Treatment for diabetes, BP, hepatitis, TB & joint pain with comprehensive diagnostic services.",
      stats: ["FCPS", "Friday", "24/7"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1.5 bg-[#c2272c] rounded-full"></div>
            <span className="text-[#c2272c] font-bold uppercase tracking-wider text-base">Our Services</span>
            <div className="w-12 h-1.5 bg-[#c2272c] rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Medical Specialties</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive healthcare services across various medical specialties with expert professionals
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#c2272c]/30 hover:-translate-y-1"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center text-[#c2272c]">
                  {specialty.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900">{specialty.title}</h3>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                {specialty.description}
              </p>
              
              {/* Stats */}
              <div className="flex justify-between pt-6 border-t border-gray-200">
                {specialty.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center flex-1">
                    <div className="text-xl font-bold text-[#c2272c] mb-2">{stat}</div>
                    <div className="text-sm text-gray-600 font-medium">
                      {statIndex === 0 ? 'Specialists' : statIndex === 1 ? 'OPD Days' : 'Emergency'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-[#c2272c] to-[#ff6b6b] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 text-lg">
            <Stethoscope size={22} />
            <span>View All Departments</span>
            <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;