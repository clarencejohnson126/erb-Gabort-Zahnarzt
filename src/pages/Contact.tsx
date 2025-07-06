import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    appointmentDate: '',
    treatmentType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-dental-dark-blue mb-6">
            Kontakt & Termin
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Nehmen Sie Kontakt mit uns auf und vereinbaren Sie Ihren Termin. 
            Wir freuen uns auf Sie!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-dental-dark-blue mb-8">
                Praxis-Informationen
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-light-blue p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-dental-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      MVZ Heidelberg-Süd Zahnarztpraxis<br />
                      Buchwaldweg 14<br />
                      69126 Heidelberg-Boxberg
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-light-blue p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-dental-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                    <p className="text-gray-600">
                      <a href="tel:+4962213547820" className="hover:text-dental-blue transition-colors">
                        06221 354 78 20
                      </a>
                    </p>
                    <p className="text-sm text-red-600 font-medium">
                      24h Notfall-Hotline
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-light-blue p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-dental-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">E-Mail</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@mvz-heidelberg-sued.de" className="hover:text-dental-blue transition-colors">
                        info@mvz-heidelberg-sued.de
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-dental-light-blue p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-dental-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Öffnungszeiten</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Montag - Freitag: 08:00 - 18:00 Uhr</p>
                      <p>Samstag: 09:00 - 13:00 Uhr</p>
                      <p>Sonntag: Geschlossen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-dental-light-blue p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-dental-dark-blue mb-6">
                Termin vereinbaren
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue focus:border-transparent"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue focus:border-transparent"
                      placeholder="ihre@email.de"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue focus:border-transparent"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Wunschtermin
                    </label>
                    <input
                      type="date"
                      id="appointmentDate"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="treatmentType" className="block text-sm font-medium text-gray-700 mb-2">
                      Behandlungstyp
                    </label>
                    <select
                      id="treatmentType"
                      name="treatmentType"
                      value={formData.treatmentType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue focus:border-transparent"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="vorsorge">Vorsorge/Kontrolle</option>
                      <option value="prophylaxe">Prophylaxe</option>
                      <option value="behandlung">Behandlung</option>
                      <option value="beratung">Beratung</option>
                      <option value="notfall">Notfall</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-blue focus:border-transparent"
                    placeholder="Teilen Sie uns Ihr Anliegen mit..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Nachricht senden</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-dental-dark-blue mb-8">
            So finden Sie uns
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.5!2d8.7!3d49.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDI0JzAwLjAiTiA4wrA0MicwMC4wIkU!5e0!3m2!1sen!2sde!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MVZ Heidelberg-Süd Zahnarztpraxis Standort"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">
              Unsere Praxis liegt zentral in Heidelberg-Boxberg und ist gut mit 
              öffentlichen Verkehrsmitteln und dem Auto erreichbar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-dental-blue rounded-full"></div>
                <span className="text-sm">Parkplätze direkt vor der Praxis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-dental-blue rounded-full"></div>
                <span className="text-sm">Bushaltestelle in 2 Min. Fußweg</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-dental-blue rounded-full"></div>
                <span className="text-sm">Barrierefrei zugänglich</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="bg-red-50 border-l-4 border-red-500 section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-red-800 mb-2">
                Zahn-Notfall außerhalb der Öffnungszeiten?
              </h2>
              <p className="text-red-700">
                Rufen Sie uns an! Wir sind auch außerhalb der regulären Öffnungszeiten 
                für Notfälle erreichbar und helfen Ihnen schnell weiter.
              </p>
            </div>
            <a 
              href="tel:+4962213547820" 
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Notfall-Hotline</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;