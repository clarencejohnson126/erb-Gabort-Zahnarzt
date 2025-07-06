import React from 'react';
import { Shield, Heart, Smile, Camera, Baby, Stethoscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Prophylaxe & Vorsorge",
      description: "Professionelle Zahnreinigung und Vorsorgeuntersuchungen für langfristige Zahngesundheit.",
      features: ["Professionelle Zahnreinigung", "Kariesvorsorge", "Parodontitis-Prävention", "Fluoridierung"]
    },
    {
      icon: Smile,
      title: "Implantologie",
      description: "Modernste Implantattechnik für natürlich aussehenden Zahnersatz.",
      features: ["3D-Implantatplanung", "Sofortimplantate", "Knochenaufbau", "Implantatgetragener Zahnersatz"]
    },
    {
      icon: Heart,
      title: "Ästhetische Zahnheilkunde",
      description: "Für Ihr strahlendes Lächeln - von Bleaching bis zu Veneers.",
      features: ["Professionelles Bleaching", "Veneers", "Füllungen in Zahnfarbe", "Zahnschmuck"]
    },
    {
      icon: Baby,
      title: "Kinderzahnheilkunde",
      description: "Einfühlsame Betreuung für unsere jüngsten Patienten.",
      features: ["Spielerische Behandlung", "Fissurenversiegelung", "Fluoridierung", "Aufklärung für Eltern"]
    },
    {
      icon: Stethoscope,
      title: "Parodontologie",
      description: "Behandlung von Zahnfleischerkrankungen für gesunde Zähne.",
      features: ["Parodontitis-Behandlung", "Zahnfleischpflege", "Nachsorge", "Recall-System"]
    },
    {
      icon: Camera,
      title: "Digitale Zahnheilkunde",
      description: "Modernste Technik für präzise Diagnosen und Behandlungen.",
      features: ["3D-Röntgen", "Intraoralscanner", "Digitale Abformung", "CAD/CAM-Technik"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-dental-dark-blue mb-6">
            Unsere Leistungen
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Umfassende zahnmedizinische Betreuung mit modernster Technik 
            und einfühlsamer Behandlung für die ganze Familie.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="bg-dental-light-blue w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-dental-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-dental-dark-blue mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-dental-blue rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <a 
                    href="/contact" 
                    className="w-full bg-dental-blue hover:bg-dental-dark-blue text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 inline-block text-center"
                  >
                    Termin vereinbaren
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Angstpatienten Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dental-dark-blue mb-6">
                Speziell für Angstpatienten
              </h2>
              <p className="text-gray-700 mb-6">
                Wir verstehen, dass der Zahnarztbesuch für manche Menschen mit Angst verbunden ist. 
                Deshalb haben wir spezielle Verfahren und Techniken entwickelt, um Ihnen die 
                Behandlung so angenehm wie möglich zu gestalten.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-dental-blue rounded-full"></div>
                  <span>Einfühlsame Beratung und Aufklärung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-dental-blue rounded-full"></div>
                  <span>Schmerzfreie Behandlungsmethoden</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-dental-blue rounded-full"></div>
                  <span>Entspannungstechniken</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-dental-blue rounded-full"></div>
                  <span>Individuelles Tempo</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Einfühlsame Zahnbehandlung" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Moderne Technik Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-dental-dark-blue mb-12">
            Modernste Technologie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-dental-light-blue w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-10 w-10 text-dental-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3D-Röntgen</h3>
              <p className="text-gray-600">
                Präzise Diagnostik mit geringster Strahlenbelastung für 
                optimale Behandlungsplanung.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-dental-light-blue w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smile className="h-10 w-10 text-dental-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intraoralscanner</h3>
              <p className="text-gray-600">
                Digitale Abformung ohne unangenehme Abdruckmasse für 
                höchsten Patientenkomfort.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-dental-light-blue w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-dental-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Laser-Therapie</h3>
              <p className="text-gray-600">
                Schonende und präzise Behandlung mit modernster 
                Laser-Technologie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dental-dark-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Haben Sie Fragen zu unseren Leistungen?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Gerne beraten wir Sie persönlich und finden gemeinsam die 
            beste Behandlung für Ihre Bedürfnisse.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-dental-dark-blue font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
          >
            Beratungstermin vereinbaren
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;