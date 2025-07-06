import { Calendar, Shield, Heart, Star, Phone, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-dental-dark-blue mb-6">
                Ihre Zahngesundheit in besten Händen
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Moderne Zahnmedizin mit Herz in Heidelberg-Boxberg. 
                Dr. Ertl Gabor und sein Team sorgen für Ihr strahlendes Lächeln.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn-primary flex items-center justify-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Online Termin buchen</span>
                </a>
                <a href="tel:+4962213547820" className="btn-secondary flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Notfallkontakt</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Moderne Zahnarztpraxis" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold">4.9/5 Bewertungen</span>
                </div>
                <p className="text-sm text-gray-600">Über 500 zufriedene Patienten</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-dental-dark-blue mb-12">
            Warum Patienten uns vertrauen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-dental-light-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-dental-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Angstpatienten-Programm</h3>
              <p className="text-gray-600">
                Einfühlsame Betreuung und moderne Entspannungstechniken für 
                eine stressfreie Behandlung. Ihr Wohlbefinden steht im Mittelpunkt.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-dental-light-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-dental-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digitale High-End-Technik</h3>
              <p className="text-gray-600">
                Modernste Geräte wie 3D-Röntgen und Intraoralscanner für 
                präzise Diagnosen und schonende Behandlungen.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="bg-dental-light-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-dental-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kinderfreundliche Praxis</h3>
              <p className="text-gray-600">
                Spielerische Herangehensweise und kindgerechte Behandlungsmethoden 
                für die kleinsten Patienten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-dental-dark-blue mb-12">
            Das sagen unsere Patienten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Dr. Ertl Gabor hat meine Angst vor dem Zahnarzt komplett genommen. 
                Die Behandlung war schmerzfrei und das Team ist unglaublich einfühlsam."
              </p>
              <p className="font-semibold">- Maria K., Heidelberg</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Moderne Ausstattung, kompetente Beratung und sehr freundliches Personal. 
                Hier fühlt man sich wirklich gut aufgehoben."
              </p>
              <p className="font-semibold">- Thomas M., Boxberg</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Meine Kinder gehen gerne zum Zahnarzt! Das Team macht die Behandlung 
                zu einem positiven Erlebnis. Absolute Empfehlung!"
              </p>
              <p className="font-semibold">- Sandra L., Heidelberg</p>
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
                Zahn-Notfall? Wir sind für Sie da!
              </h2>
              <p className="text-red-700">
                24 Stunden erreichbar für Notfälle. Schnelle Hilfe bei Schmerzen und Unfällen.
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

      {/* CTA Section */}
      <section className="section-padding bg-dental-dark-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Bereit für Ihre nächste Behandlung?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie jetzt einen Termin und erleben Sie moderne Zahnmedizin 
            in entspannter Atmosphäre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-dental-dark-blue font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Termin vereinbaren</span>
            </a>
            <a href="/services" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-dental-dark-blue transition-colors duration-300">
              Leistungen ansehen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;