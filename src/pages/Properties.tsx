
import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Properties = () => {
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const allProperties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$2,500,000",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=800&h=600&fit=crop",
      type: "residential",
      status: "sale",
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
      type: "commercial",
      status: "rent",
      sqft: "2,800"
    },
    {
      id: 3,
      title: "Cozy Family Home",
      location: "Suburban, TX",
      price: "$450,000",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42d?q=80&w=800&h=600&fit=crop",
      type: "residential",
      status: "sale",
      beds: 3,
      baths: 2,
      sqft: "1,800"
    },
    {
      id: 4,
      title: "Luxury Penthouse",
      location: "Miami Beach, FL",
      price: "$1,850,000",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?q=80&w=800&h=600&fit=crop",
      type: "residential",
      status: "sale",
      beds: 4,
      baths: 3,
      sqft: "3,200"
    },
    {
      id: 5,
      title: "Retail Space Downtown",
      location: "Chicago, IL",
      price: "$6,200/month",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=800&h=600&fit=crop",
      type: "commercial",
      status: "rent",
      sqft: "1,900"
    },
    {
      id: 6,
      title: "Suburban Family Home",
      location: "Austin, TX",
      price: "$3,200/month",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=800&h=600&fit=crop",
      type: "residential",
      status: "rent",
      beds: 4,
      baths: 3,
      sqft: "2,400"
    }
  ];

  const filteredProperties = allProperties.filter((property) => {
    const matchesType = filterType === "all" || property.type === filterType;
    const matchesStatus = filterStatus === "all" || property.status === filterStatus;
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesType && matchesStatus && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Properties</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our extensive collection of premium properties for sale and rent
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Search */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Properties
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search by location or title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Property Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="sale">For Sale</SelectItem>
                  <SelectItem value="rent">For Rent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Clear Filters */}
            <div>
              <Button
                onClick={() => {
                  setFilterType("all");
                  setFilterStatus("all");
                  setSearchTerm("");
                }}
                variant="outline"
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredProperties.length} of {allProperties.length} properties
            </p>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={{
                    ...property,
                    type: property.type.charAt(0).toUpperCase() + property.type.slice(1),
                    status: property.status === "sale" ? "For Sale" : "For Rent"
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">No properties found matching your criteria.</p>
              <Button
                onClick={() => {
                  setFilterType("all");
                  setFilterStatus("all");
                  setSearchTerm("");
                }}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                View All Properties
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us know your requirements and we'll help you find the perfect property
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
            Contact Our Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Properties;
