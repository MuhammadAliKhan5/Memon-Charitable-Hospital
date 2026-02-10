import { BookOpen } from 'lucide-react';

const IntroSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-1 bg-gradient-to-r from-[#c2272c] to-[#ff6b6b] rounded-full"></div>
              <span className="text-[#c2272c] font-semibold uppercase tracking-wider text-xs">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Memon Charitable Hospital
              <span className="block text-[#c2272c] font-black">(MCH)</span>
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-base leading-relaxed">
                MCH provides comprehensive tertiary care services ensuring high-quality patient care 
                through advanced technology and experienced medical professionals.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Operational since 1954, MCH is a 200+ bed tertiary care hospital providing advanced 
                medical solutions with compassion and excellence.
              </p>
            </div>
            
            <button className="group bg-gradient-to-r from-[#c2272c] to-[#ff6b6b] text-white px-5 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 hover:gap-3">
              <BookOpen size={18} />
              <span className="text-sm">Learn More</span>
              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
            </button>
          </div>
          
          {/* Image Section */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&h=500"
              alt="Hospital Facility"
              className="w-full h-[300px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;