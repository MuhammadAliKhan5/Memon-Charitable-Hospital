import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera, Images } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GalleryPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
    // Auto-play timer
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Changes image every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  const hospitalImages = [
    { id: 1, src: '1.jpeg', title: 'Main Entrance' },
    { id: 2, src: '2.jpeg', title: 'Modern Facilities' },
    { id: 3, src: '3.jpeg', title: 'Patient Care' },
    { id: 4, src: '4.jpeg', title: 'Diagnostic Lab' },
    { id: 5, src: '5.jpeg', title: 'Operating Theater' },
    { id: 6, src: '6.jpeg', title: 'Emergency Ward' },
    { id: 7, src: '7.jpeg', title: 'Pharmacy' },
    { id: 8, src: '8.jpeg', title: 'Consultation Room' },
    { id: 9, src: '9.jpeg', title: 'Waiting Area' },
    { id: 10, src: '10.jpeg', title: 'Maternity Ward' },
    { id: 11, src: '11.jpeg', title: 'Outdoor View' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hospitalImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + hospitalImages.length) % hospitalImages.length);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <main>
        {/* Header Section */}
        <div className="pt-32 pb-12 bg-white" data-aos="fade">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#c2272c] tracking-tight">
              Gallery
            </h1>
            <div className="w-16 h-1 bg-[#c2272c] mx-auto mt-4 rounded-full"></div>
            
            {/* The requested descriptive line */}
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-600">
              <Images size={20} className="text-[#c2272c]" />
              <p className="text-lg font-medium italic">
                Explore a complete visual tour of our hospital facilities and departments
              </p>
            </div>
          </div>
        </div>

        {/* Main Slider Section */}
        <div className="max-w-6xl mx-auto px-4 mt-4" data-aos="zoom-in">
          <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl bg-gray-900 aspect-[16/9]">
            
            {/* Image Rendering with smooth cross-fade effect */}
            <div className="relative w-full h-full">
              {hospitalImages.map((image, index) => (
                <img 
                  key={image.id}
                  src={image.src} 
                  alt={image.title} 
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Dark Overlay for Text Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white text-white hover:text-[#c2272c] p-4 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronLeft size={28} />
            </button>

            <button 
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white text-white hover:text-[#c2272c] p-4 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image Info Label */}
            <div className="absolute bottom-10 left-10 text-white z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-[#c2272c] p-1.5 rounded-md">
                  <Camera size={16} className="text-white" />
                </div>
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-gray-300">
                  Hospital Insight {currentIndex + 1} / {hospitalImages.length}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black drop-shadow-lg">
                {hospitalImages[currentIndex].title}
              </h3>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1.5 bg-[#c2272c] transition-all duration-[5000ms] linear" style={{ width: '100%' }} key={currentIndex}></div>
          </div>

          {/* Thumbnails / Indicators */}
          <div className="mt-10 flex justify-center items-center gap-3">
            {hospitalImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-500 rounded-full ${
                  currentIndex === index 
                    ? 'w-10 h-3 bg-[#c2272c]' 
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;