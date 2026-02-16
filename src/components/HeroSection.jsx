import React, { useState, useEffect } from 'react';
import { Users, MapPin, Award, ArrowRight } from 'lucide-react';

const HeroSection = () => {
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="relative bg-[#fffafa] py-12 md:py-20 overflow-hidden">
            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    
                    {/* Left Side: Image with Floating Stats */}
                    <div className="w-full lg:w-1/2 relative group animate-fade-up">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-200 aspect-[4/3]">
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
                            <span className="text-red-600">Care Since 1954</span>
                        </h1>

                        <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                            Memon Charitable Hospital (MCH), Hyderabad, is a leading tertiary care hospital 
                            providing high-quality patient care with modern infrastructure and experienced medical professionals.
                        </p>

                        {/* THE BUTTON: Navigation removed, back to standard button */}
                        <div className="pt-4">
                            <button 
                                className="inline-flex items-center gap-3 bg-[#c2272c] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-all hover:shadow-lg group"
                            >
                                Learn More About Us
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                            <div className="flex items-start gap-4">
                                <div className="bg-red-50 p-2 rounded-lg">
                                    <Award className="text-[#c2272c]" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">70+</h4>
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50/50 to-transparent pointer-events-none"></div>
        </section>
    );
};

export default HeroSection;