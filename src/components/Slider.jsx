import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const ExpertBanner = () => {
  // Array containing 4 images for the background
  const slides = [
    { id: 1, image: "slider1.jpg" },
    { id: 2, image: "slider2.jpg" },
    { id: 3, image: "slider3.jpg" },
    { id: 4, image: "slider4.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-shift logic: 4 seconds (4000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[500px] overflow-hidden group">
      {/* Background Images with Fade Transition */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt="Medical Team"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl space-y-6">
            {/* Red Badge */}
            <div className="inline-block">
              <span className="bg-[#c2272c] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                150+ Specialists
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Expert Medical <br /> Professionals
            </h2>

            {/* Description */}
            <p className="text-white/90 text-lg max-w-lg leading-relaxed">
              Our team of highly qualified doctors and healthcare specialists are committed to providing compassionate, personalized care.
            </p>

            {/* CTA Button */}
            <button className="flex items-center gap-2 bg-[#c2272c] hover:bg-[#a11f23] text-white px-8 py-3 rounded-full font-bold transition-all duration-300">
              View More <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 transition-all rounded-full ${
              index === currentIndex ? 'w-8 bg-[#c2272c]' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ExpertBanner;