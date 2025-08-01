
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42d?q=80&w=3506&h=2329&fit=crop",
      title: "Your Trusted Partner in Real Estate",
      subtitle: "Find your dream property with our expert guidance and personalized service",
      cta: "Explore Properties"
    },
    {
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=5760&h=3840&fit=crop",
      title: "Find Your Dream Property",
      subtitle: "Discover amazing properties that perfectly match your lifestyle and budget",
      cta: "View Listings"
    },
    {
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=6000&h=4000&fit=crop",
      title: "Where Investment Meets Opportunity",
      subtitle: "Smart investments in prime locations with guaranteed returns",
      cta: "Contact Us"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white max-w-4xl px-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in">
                {slide.subtitle}
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg animate-fade-in"
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
