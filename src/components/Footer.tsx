import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dental-dark-blue text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kontakt */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Buchwaldweg 14</p>
                  <p>69126 Heidelberg-Boxberg</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+4962213547820" className="hover:text-dental-light-blue transition-colors">
                  06221 354 78 20
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@mvz-heidelberg-sued.de" className="hover:text-dental-light-blue transition-colors">
                  info@mvz-heidelberg-sued.de
                </a>
              </div>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Öffnungszeiten</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Montag-Freitag: 8:00-18:00</span>
              </div>
              <p>Samstag: 9:00-13:00</p>
              <p>Sonntag: Geschlossen</p>
              <div className="mt-4 p-3 bg-red-600 rounded-lg">
                <p className="font-semibold">24h Notfall-Hotline</p>
                <a href="tel:+4962213547820" className="text-white hover:underline">
                  06221 354 78 20
                </a>
              </div>
            </div>
          </div>

          {/* Schnelllinks */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Schnelllinks</h3>
            <div className="space-y-2 text-sm">
              <Link to="/services" className="block hover:text-dental-light-blue transition-colors">
                Leistungen
              </Link>
              <Link to="/team" className="block hover:text-dental-light-blue transition-colors">
                Unser Team
              </Link>
              <Link to="/contact" className="block hover:text-dental-light-blue transition-colors">
                Termin buchen
              </Link>
              <Link to="/about" className="block hover:text-dental-light-blue transition-colors">
                Über uns
              </Link>
            </div>
          </div>

          {/* Social Media & Rechtliches */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Folgen Sie uns</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-dental-light-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-dental-light-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <Link to="/impressum" className="block hover:text-dental-light-blue transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="block hover:text-dental-light-blue transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 MVZ Heidelberg-Süd Zahnarztpraxis. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;