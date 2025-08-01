
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import PropertyCard from "../components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, Users, Award, TrendingUp } from "lucide-react";

const Home = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$2,500,000",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=800&h=600&fit=crop",
      type: "Residential",
      status: "For Sale",
      beds: 5,
      baths: 4,
      sqft: "4,200"
    },
    {
      id: 2,
      title: "Downtown Office Space",
      location: "Manhattan, NY",
      price: "$8,500/month",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&h=600&fit=crop",
      type: "Commercial",
      status: "For Rent",
      sqft: "2,800"
    },
    {
      id: 3,
      title: "Cozy Family Home",
      location: "Suburban, TX",
      price: "$450,000",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42d?q=80&w=800&h=600&fit=crop",
      type: "Residential",
      status: "For Sale",
      beds: 3,
      baths: 2,
      sqft: "1,800"
    }
  ];

  const stats = [
    { icon: HomeIcon, number: "500+", label: "Properties Sold" },
    { icon: Users, number: "200+", label: "Happy Clients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: TrendingUp, number: "95%", label: "Success Rate" }
  ];

  return (
    <div>
      <HeroSlider />

      {/* Company Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Realview Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded by Bhargav Rakholiya, Realview Reality is your trusted partner in 
              real estate. We specialize in helping you find the perfect property that 
              matches your dreams and budget, with personalized service and expert guidance.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600">
              Discover our hand-picked selection of premium properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/properties">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Explore All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our expert team help you navigate the real estate market and find 
            the perfect property that meets all your needs.
          </p>
          <div className="space-x-4">
            <Link to="/properties">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3"
              >
                View Properties
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
