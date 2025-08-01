
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Realview Reality</h3>
            <p className="text-gray-200 mb-4">
              Your trusted partner in real estate. We help you find the perfect property
              that matches your dreams and budget. With years of experience and a commitment
              to excellence, we make your property journey seamless.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-200 hover:text-white transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-200 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-gray-200" />
                <span className="text-gray-200">123 Real Estate Ave, City, State 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-200" />
                <span className="text-gray-200">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-200" />
                <span className="text-gray-200">info@realviewreality.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-200">
            © 2024 Realview Reality. All rights reserved. | Founded by Bhargav Rakholiya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
