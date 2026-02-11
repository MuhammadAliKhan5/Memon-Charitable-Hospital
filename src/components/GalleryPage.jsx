import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GalleryPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Exactly 11 images as per your requirement
  const hospitalImages = [
    { id: 1, src: '1.jpeg', title: 'Hospital View 1' },
    { id: 2, src: '2.jpeg', title: 'Hospital View 2' },
    { id: 3, src: '3.jpeg', title: 'Hospital View 3' },
    { id: 4, src: '4.jpeg', title: 'Hospital View 4' },
    { id: 5, src: '5.jpeg', title: 'Hospital View 5' },
    { id: 6, src: '6.jpeg', title: 'Hospital View 6' },
    { id: 7, src: '7.jpeg', title: 'Hospital View 7' },
    { id: 8, src: '8.jpeg', title: 'Hospital View 8' },
    { id: 9, src: '9.jpeg', title: 'Hospital View 9' },
    { id: 10, src: '10.jpeg', title: 'Hospital View 10' },
    { id: 11, src: '11.jpeg', title: 'Hospital View 11' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <main>
        {/* Simple Header */}
        <div className="pt-32 pb-12 bg-white shadow-sm" data-aos="fade">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#c2272c] tracking-tight">
              Hospital Gallery
            </h1>
            <div className="w-20 h-1 bg-[#c2272c] mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-500 font-medium text-lg">
              Visual glimpse of our facilities and medical infrastructure
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="max-w-7xl mx-auto px-6 mt-12">
          {/* Grid Settings:
            Mobile: 1 column
            Tablet: 2 columns
            Desktop: 3 columns
            Large Desktop: 4 columns
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {hospitalImages.map((image) => (
              <div 
                key={image.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                data-aos="fade-up"
              >
                {/* Image Container */}
                <div className="overflow-hidden h-64 bg-gray-200">
                  <img 
                    src={image.src} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy" // Performance optimization
                  />
                </div>
                
                {/* Card Body (Titles) */}
                <div className="p-4 bg-white text-center">
                  <h3 className="font-bold text-gray-700 text-sm md:text-base">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;