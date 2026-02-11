import React, { useState, useEffect } from 'react';
import { Users, MapPin, Award } from 'lucide-react';

const HeroSection = () => {
    // 1. Array of your images
    const images = [
        "image1.jpg", 
        "image2.jpg", 
        "image3.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // 2. Logic to change image every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [images.length]);

    return (
        <section className="relative bg-[#fffafa] py-12 md:py-20 overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    
                    {/* Left Side: Image with Floating Stats */}
                    <div className="w-full lg:w-1/2 relative group animate-fade-up">
                        {/* Container for Images */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-200 aspect-[4/3]">
                            
                            {/* 3. Mapping through images to create the fade effect */}
                            {images.map((img, index) => (
                                <img 
                                    key={index}
                                    src={img} 
                                    alt={`Hospital slide ${index}`} 
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                                        index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                    }`}
                                />
                            ))}

                            {/* Optional Placeholder (only shows if no images load) */}
                            <span className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium italic -z-10">
                                Loading Images...
                            </span>
                        </div>

                        {/* Floating Patient Count Card */}
                        <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white p-4 md:p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 animate-float z-20">
                            <div className="bg-red-50 p-3 rounded-xl">
                                <Users className="text-[#c2272c]" size={28} />
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-black text-gray-900">20K+</div>
                                <div className="text-sm text-gray-500 font-medium">Patients Treated</div>
                            </div>
                        </div>

                        {/* Floating Satisfaction Rate */}
                        <div className="absolute bottom-10 -right-4 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg border border-white/50 z-20">
                            <div className="text-xl font-bold text-[#c2272c]">98%</div>
                            <div className="text-[10px] uppercase tracking-wider font-bold text-gray-600">Satisfaction Rate</div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2 space-y-8 animate-slide-right">
                        <div className="inline-block">
                            <span className="bg-[#c2272c] text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                                Trusted Healthcare Provider
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1]">
                            Excellence in Medical <br /> 
                            <span className="text-gradient">Care Since 1954</span>
                        </h1>

                        <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                            Memon Charitable Hospital (MCH), Hyderabad, is a leading tertiary care hospital 
                            with over 200 beds in a spacious Ground + Four Floor building. We provide high-quality 
                            patient care with modern infrastructure and experienced medical professionals.
                        </p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-red-50 p-2 rounded-lg">
                                    <Award className="text-[#c2272c]" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">5+</h4>
                                    <p className="text-xs text-gray-500 font-medium leading-tight">Years Experience</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-red-50 p-2 rounded-lg">
                                    <Users className="text-[#c2272c]" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">150+</h4>
                                    <p className="text-xs text-gray-500 font-medium leading-tight">Medical Specialists</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-red-50 p-2 rounded-lg">
                                    <MapPin className="text-[#c2272c]" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">1</h4>
                                    <p className="text-xs text-gray-500 font-medium leading-tight">Central Location</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50/50 to-transparent pointer-events-none"></div>
        </section>
    );
};

export default HeroSection;