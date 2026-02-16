import { HeartPulse, Baby, Eye, Heart, Wind, Stethoscope, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SpecialtiesSection = () => {
  // Helper function to force scroll to top
  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // 'instant' ensures the user doesn't see the scroll movement
    });
  };

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
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1.5 bg-[#c2272c] rounded-full"></div>
            <span className="text-[#c2272c] font-bold uppercase tracking-wider text-base">Our Services</span>
            <div className="w-12 h-1.5 bg-[#c2272c] rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Specialties</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover our specialized departments providing advanced healthcare services with expert staff and modern facilities.
          </p>
        </div>

        {/* --- EMERGENCY CARE CONTENT --- */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="w-full lg:w-1/2 space-y-6">
            <span className="text-[#c2272c] font-bold uppercase tracking-widest text-sm">Emergency Medicine</span>
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 leading-tight">
              24/7 Emergency Care Services
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our Emergency Department is equipped with advanced life support systems and staffed by trauma care specialists ready around the clock.
            </p>
            
            <ul className="space-y-4">
              {["24/7 Emergency Response", "Advanced Life Support", "Trauma Care Specialists"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#c2272c]" size={22} />
                  {item}
                </li>
              ))}
            </ul>

            {/* BUTTON 1: Added onClick to scroll to top */}
            <Link 
              to="/speciality/general-physician" 
              onClick={handleNavigation}
              className="bg-[#c2272c] hover:bg-[#a11f23] text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 flex items-center justify-center w-fit gap-2 group shadow-lg shadow-red-200"
            >
              Learn More 
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="w-full lg:w-1/2 relative">
             <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-red-100">
                <img src="specialities.jpg" alt="Emergency Medical Team" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#c2272c]/20 rounded-2xl -z-10 hidden md:block"></div>
          </div>
        </div>

        {/* --- SPECIALTIES GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#c2272c]/30 hover:-translate-y-1">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center text-[#c2272c]">
                  {specialty.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900">{specialty.title}</h3>
              </div>
              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                {specialty.description}
              </p>
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

        {/* BUTTON 2: Added onClick to scroll to top */}
        <div className="text-center mt-16">
          <Link 
            to="/speciality/general-physician" 
            onClick={handleNavigation}
            className="group bg-gradient-to-r from-[#c2272c] to-[#ff6b6b] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 text-lg"
          >
            <Stethoscope size={22} />
            <span>View All Departments</span>
            <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;