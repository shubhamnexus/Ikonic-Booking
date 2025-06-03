import React from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl sm:text-2xl font-bold text-[#FF6600]">IKONIC</span>
              <span className="text-xl sm:text-2xl font-light">LIMOUSINE</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/services" className="text-gray-700 hover:text-[#FF6600] transition-colors duration-300">Services</Link>
            <Link to="/corporate" className="text-gray-700 hover:text-[#FF6600] transition-colors duration-300">Corporate</Link>
            <Link to="/careers" className="text-gray-700 hover:text-[#FF6600] transition-colors duration-300">Careers</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#FF6600] transition-colors duration-300">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#FF6600] transition-colors duration-300">Contact</Link>
            <a href="tel:+97144498900" className="flex items-center text-[#FF6600] hover:text-[#FF6600]/80 transition-colors duration-300">
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden lg:inline">+971 44 498900</span>
              <span className="lg:hidden">+971 44 498900</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#FF6600] transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link 
              to="/services" 
              className="block px-3 py-2 text-gray-700 hover:text-[#FF6600] hover:bg-gray-50 rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/corporate" 
              className="block px-3 py-2 text-gray-700 hover:text-[#FF6600] hover:bg-gray-50 rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Corporate
            </Link>
            <Link 
              to="/careers" 
              className="block px-3 py-2 text-gray-700 hover:text-[#FF6600] hover:bg-gray-50 rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-gray-700 hover:text-[#FF6600] hover:bg-gray-50 rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-700 hover:text-[#FF6600] hover:bg-gray-50 rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="tel:+97144498900" 
              className="flex items-center px-3 py-2 text-[#FF6600] hover:bg-gray-50 rounded-md transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>+971 44 498900</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}