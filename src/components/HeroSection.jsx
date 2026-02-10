import { useState, useEffect } from 'react';
import { Phone, Clock, ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1200",
            title: "Emergency Room"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1584467735871-8db9ac8c05a5?auto=format&fit=crop&w=1200",
            title: "Ambulance Services"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1516549655669-df6654e435de?auto=format&fit=crop&w=1200",
            title: "ICU Facilities"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200",
            title: "Medical Team"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content Section */}
                    <div className="text-gray-800">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#c2272c]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#c2272c]/20 mb-8">
                            <div className="w-3 h-3 bg-[#c2272c] rounded-full animate-pulse"></div>
                            <span className="font-bold tracking-widest uppercase text-sm text-[#c2272c]">
                                24/7 AVAILABLE
                            </span>
                            <div className="w-3 h-3 bg-[#c2272c] rounded-full animate-pulse"></div>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                            Emergency<br />
                            <span className="bg-gradient-to-r from-[#c2272c] to-[#ff6b6b] bg-clip-text text-transparent">
                                Care Services
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            Round-the-clock emergency services with advanced life support systems
                            and trauma care specialists ready to help.
                        </p>

                        {/* Emergency Contact Buttons */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <button
                                onClick={() => window.location.href = 'tel:03197822734'}
                                className="group bg-gradient-to-r from-[#c2272c] to-[#ff6b6b] text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] active:scale-95"
                            >
                                <Phone size={18} className="group-hover:animate-pulse" />
                                <span className="text-sm">Emergency Call</span>
                                <span className="text-xs opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-300">→</span>
                            </button>

                            <button className="group relative p-[2px] rounded-full bg-gradient-to-r from-[#c2272c] to-[#ff6b6b] hover:shadow-xl transition-all duration-300">
                                <div className="relative bg-white text-[#c2272c] group-hover:text-white group-hover:bg-transparent px-5 py-3 rounded-full font-semibold transition-all duration-300">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Clock size={18} className="group-hover:animate-pulse" />
                                        View ER Timings
                                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-300" />
                                    </div>
                                </div>
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-300/30">
                            <div className="text-center">
                                <div className="text-3xl font-black text-[#c2272c] mb-2">15+</div>
                                <div className="text-gray-600 text-sm font-medium">Specialists</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-[#c2272c] mb-2">0 Min</div>
                                <div className="text-gray-600 text-sm font-medium">Waiting Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-black text-[#c2272c] mb-2">24/7</div>
                                <div className="text-gray-600 text-sm font-medium">Operation</div>
                            </div>
                        </div>
                    </div>

                    {/* Image Slider Section */}
                    <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                        {/* Slides */}
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 bg-gradient-to-r from-[#c2272c] to-[#ff6b6b] text-white px-4 py-2 rounded-full shadow-lg">
                                    <span className="text-sm font-semibold">{slide.title}</span>
                                </div>
                            </div>
                        ))}

                        {/* Slider Controls */}
                        <div className="absolute bottom-6 right-6 flex gap-2">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#c2272c] hover:text-white transition-all duration-300 shadow-lg"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#c2272c] hover:text-white transition-all duration-300 shadow-lg"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                                            ? 'bg-white scale-125'
                                            : 'bg-white/50 hover:bg-white'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Floating Emergency Badge */}
                <div className="hidden lg:block absolute top-8 right-8 bg-gradient-to-r from-[#c2272c] to-[#ff6b6b] text-white px-6 py-3 rounded-full font-bold shadow-2xl animate-bounce">
                    <div className="flex items-center gap-2">
                        <AlertTriangle size={20} />
                        <span>EMERGENCY</span>
                    </div>
                </div>

                {/* Decorative Elements - Adjusted positioning */}
                <div className="absolute -top-20 -right-10 w-64 h-64 bg-[#c2272c]/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-10 w-64 h-64 bg-[#c2272c]/5 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
};

export default HeroSection;