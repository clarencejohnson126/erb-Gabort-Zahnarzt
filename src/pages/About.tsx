import React from 'react';
import { Award, Users, Heart, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-dental-dark-blue mb-6">
                Über uns
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Seit über 15 Jahren stehen wir für moderne Zahnmedizin mit menschlicher Wärme. 
                Unser Team verbindet neueste Technologie mit einfühlsamer Betreuung.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Zahnarztpraxis Team" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Ertl Gabor Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Dr. Ertl Gabor" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-dental-dark-blue mb-6">
                Dr. Ertl Gabor
              </h2>
              <p className="text-gray-700 mb-4">
                Als Zahnarzt mit langjähriger Erfahrung ist es mir wichtig, dass sich jeder Patient 
                in unserer Praxis wohlfühlt. Mein Ziel ist es, Ihnen mit modernster Technik und 
                einfühlsamer Betreuung zu einem gesunden, strahlenden Lächeln zu verhelfen.
              </p>
              <p className="text-gray-700 mb-6">
                Besonders am Herzen liegt mir die Behandlung von Angstpatienten und die 
                Betreuung von Kindern. Durch kontinuierliche Weiterbildung und den Einsatz 
                neuester Technologien können wir Ihnen stets die bestmögliche Behandlung bieten.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-dental-blue" />
                  <span className="text-sm">Zahnärztekammer Baden-Württemberg</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-dental-blue" />
                  <span className="text-sm">Implantologie-Zertifikat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Praxisphilosophie */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-dental-dark-blue mb-12">
            Unsere Praxisphilosophie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="h-8 w-8 text-dental-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Einfühlsame Betreuung</h3>
              <p className="text-gray-700">
                Jeder Patient ist einzigartig. Wir nehmen uns die Zeit, die Sie brauchen, 
                und gehen auf Ihre individuellen Bedürfnisse ein.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="h-8 w-8 text-dental-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Moderne Technologie</h3>
              <p className="text-gray-700">
                Wir investieren kontinuierlich in modernste Technik, um Ihnen 
                schonende und präzise Behandlungen zu ermöglichen.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-dental-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Familiäre Atmosphäre</h3>
              <p className="text-gray-700">
                Unser Team schafft eine warme, familiäre Atmosphäre, 
                in der sich Patienten jeden Alters wohlfühlen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifikationen */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-dental-dark-blue mb-12">
            Qualifikationen & Zertifizierungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-dental-light-blue rounded-lg">
              <Award className="h-12 w-12 text-dental-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Zahnärztekammer</h3>
              <p className="text-sm text-gray-600">Baden-Württemberg</p>
            </div>
            <div className="text-center p-6 bg-dental-light-blue rounded-lg">
              <CheckCircle className="h-12 w-12 text-dental-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Implantologie</h3>
              <p className="text-sm text-gray-600">Zertifizierter Implantologe</p>
            </div>
            <div className="text-center p-6 bg-dental-light-blue rounded-lg">
              <Heart className="h-12 w-12 text-dental-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Kinderzahnheilkunde</h3>
              <p className="text-sm text-gray-600">Spezialisierung</p>
            </div>
            <div className="text-center p-6 bg-dental-light-blue rounded-lg">
              <Users className="h-12 w-12 text-dental-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Angstpatienten</h3>
              <p className="text-sm text-gray-600">Fortbildung</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;