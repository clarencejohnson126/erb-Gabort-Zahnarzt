import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Über uns', href: '/about' },
    { name: 'Leistungen', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Kontakt', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://i.postimg.cc/Zq8byZFD/mvz-zahnarzt.png" 
              alt="MVZ Heidelberg-Süd Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-dental-dark-blue">
                MVZ Heidelberg-Süd
              </h1>
              <p className="text-sm text-gray-600">Dr. Ertl Gabor</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-dental-blue border-b-2 border-dental-blue'
                    : 'text-gray-700 hover:text-dental-blue'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <a href="tel:+4962213547820" className="btn-secondary flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Anrufen</span>
            </a>
            <a href="/contact" className="btn-primary flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Termin buchen</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-dental-blue'
                      : 'text-gray-700 hover:text-dental-blue'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <a href="tel:+4962213547820" className="btn-secondary flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Anrufen</span>
                </a>
                <a href="/contact" className="btn-primary flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Termin buchen</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;