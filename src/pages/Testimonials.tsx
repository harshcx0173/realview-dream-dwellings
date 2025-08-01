
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Beverly Hills, CA",
      rating: 5,
      text: "Bhargav and his team at Realview Reality made buying our dream home an absolute pleasure. Their expertise, attention to detail, and personalized service exceeded all our expectations. We couldn't be happier with our new home!",
      property: "Luxury Villa Purchase",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      location: "Manhattan, NY",
      rating: 5,
      text: "As a first-time commercial property investor, I was nervous about the process. Realview Reality guided me through every step with patience and expertise. The office space they found for my business is perfect, and the investment has already paid off.",
      property: "Commercial Office Investment",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      location: "Austin, TX",
      rating: 5,
      text: "Selling our family home was emotional, but Bhargav made it so much easier. His market knowledge helped us price it perfectly, and we sold within two weeks at full asking price. Professional, caring, and results-driven!",
      property: "Family Home Sale",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      location: "Miami Beach, FL",
      rating: 5,
      text: "The level of service from Realview Reality is unmatched. They understood exactly what I was looking for in a luxury property and found me the perfect penthouse. Their network and market insights are incredible.",
      property: "Luxury Penthouse Purchase",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Park",
      location: "Chicago, IL",
      rating: 5,
      text: "Working with Realview Reality was a game-changer for my rental property portfolio. They helped me find three investment properties that generate excellent cash flow. Their market analysis and negotiation skills saved me thousands.",
      property: "Investment Property Portfolio",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Robert Martinez",
      location: "Suburban, TX",
      rating: 5,
      text: "From our first meeting to closing day, Realview Reality was there every step of the way. Their communication was excellent, and they made what could have been a stressful process feel seamless. Highly recommended!",
      property: "First Home Purchase",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied clients have to say about their experience with Realview Reality.
          </p>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <Quote size={48} className="text-primary mx-auto mb-4" />
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>

              <div className="text-center">
                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-gray-800">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                    <p className="text-primary font-medium text-sm">
                      {testimonials[currentTestimonial].property}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Over 200 happy clients and counting. Join our family of satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                  <Quote size={24} className="text-primary/30" />
                </div>
                
                <p className="text-gray-700 mb-6 line-clamp-4">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.property}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-gray-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-200">Properties Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-gray-200">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-200">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the Realview Reality difference for yourself. Contact us today to get started.
          </p>
          <div className="space-x-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Start Your Journey
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              View Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
