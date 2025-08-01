
import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          {property.type}
        </div>
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {property.status}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            {property.beds && (
              <div className="flex items-center text-gray-600">
                <Bed size={16} className="mr-1" />
                <span className="text-sm">{property.beds}</span>
              </div>
            )}
            {property.baths && (
              <div className="flex items-center text-gray-600">
                <Bath size={16} className="mr-1" />
                <span className="text-sm">{property.baths}</span>
              </div>
            )}
            {property.sqft && (
              <div className="flex items-center text-gray-600">
                <Square size={16} className="mr-1" />
                <span className="text-sm">{property.sqft} sqft</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">{property.price}</div>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
