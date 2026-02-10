import { useState, useEffect } from 'react';

const PartnersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const partners = [
    { name: "Arif", logo: "/public/Arif.png" },
    { name: "Askari", logo: "/public/Askari.png" },
    { name: "Bismillah", logo: "/public/Bismillah.png" },
    { name: "Coal Mines", logo: "/public/CoalMines.png" },
    { name: "Crescent", logo: "/public/Crescent.png" },
    { name: "Health", logo: "/public/Health.png" },
    { name: "Insurance", logo: "/public/Insurance.png" },
    { name: "Islamic", logo: "/public/Islamic.png" },
    { name: "Jubilee", logo: "/public/Jubilee.png" },
    { name: "Lakhra", logo: "/public/Lakhra.png" },
    { name: "Pak Qatar", logo: "/public/Pak-Qatar.png" },
    { name: "Saylani", logo: "/public/Saylani.png" },
    { name: "Sindh", logo: "/public/Sindh.png" },
    { name: "Tpl", logo: "/public/Tpl.png" },
    { name: "Unique", logo: "/public/Unique.png" },
    { name: "United", logo: "/public/United.png" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-14 relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#c2272c] to-transparent rounded-full"></div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Trusted <span className="text-gradient">Partners</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-1 bg-gradient-to-r from-[#c2272c] to-[#ff6b6b] rounded-full"></div>
            <p className="text-gray-600 text-lg font-medium">Collaborating for Excellence in Healthcare</p>
            <div className="w-8 h-1 bg-gradient-to-r from-[#ff6b6b] to-[#c2272c] rounded-full"></div>
          </div>
          
          <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
            We proudly collaborate with leading healthcare organizations, medical institutions,
            and pharmaceutical companies to provide the highest quality care to our patients.
          </p>
        </div>

        {/* Partners Marquee */}
        <div className="relative mt-12">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-gray-50 via-gray-50/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-gray-50 via-gray-50/90 to-transparent z-10 pointer-events-none"></div>

          <div className="flex overflow-x-hidden py-8">
            <div 
              className="flex gap-16 animate-marquee whitespace-nowrap"
              style={{ animation: 'marquee 30s linear infinite' }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="logo-card">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-14 w-auto object-contain filter brightness-110 contrast-125 group-hover:filter-none hover:scale-110 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Bottom Section */}
        <div className="flex flex-col items-center gap-6 mt-16 pt-12 border-t border-gray-200">
          <div className="flex items-center gap-4">
            {[...Array(6)].map((_, index) => (
              <div 
                key={index}
                className="w-4 h-4 bg-[#c2272c] rounded-full animate-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              ></div>
            ))}
            <div className="text-gray-700 font-bold text-lg">Trusted Partnerships</div>
            {[...Array(6)].map((_, index) => (
              <div 
                key={index + 6}
                className="w-4 h-4 bg-[#c2272c] rounded-full animate-pulse"
                style={{ animationDelay: `${(index + 6) * 0.2}s` }}
              ></div>
            ))}
          </div>
          
          <p className="text-gray-500 text-center max-w-2xl">
            Our partnerships enable us to deliver comprehensive healthcare services
            with access to the latest medical technologies and treatment protocols.
          </p>
        </div>
      </div>

      {/* Add CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-180px * 8));
          }
        }
        
        @media (max-width: 768px) {
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-140px * 8));
            }
          }
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;