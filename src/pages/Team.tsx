import React from 'react';
import { Award, Heart, Users, GraduationCap } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Ertl Gabor",
      role: "Zahnarzt & Praxisinhaber",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Implantologie", "Angstpatienten", "Kinderzahnheilkunde"],
      description: "Mit über 15 Jahren Erfahrung ist Dr. Ertl Gabor Experte für einfühlsame Zahnbehandlung und moderne Implantologie."
    },
    {
      name: "Andrea Müller",
      role: "Zahnmedizinische Fachangestellte",
      image: "https://images.pexels.com/photos/6627374/pexels-photo-6627374.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Prophylaxe", "Patientenbetreuung", "Verwaltung"],
      description: "Andrea ist die gute Seele unserer Praxis und sorgt dafür, dass sich alle Patienten wohlfühlen."
    },
    {
      name: "Petra Schmidt",
      role: "Dentalhygienikerin",
      image: "https://images.pexels.com/photos/6627450/pexels-photo-6627450.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Professionelle Zahnreinigung", "Parodontologie", "Prävention"],
      description: "Petra ist unsere Expertin für Prophylaxe und sorgt für die optimale Mundhygiene unserer Patienten."
    },
    {
      name: "Julia Wagner",
      role: "Zahnmedizinische Fachangestellte",
      image: "https://images.pexels.com/photos/6627452/pexels-photo-6627452.jpeg?auto=compress&cs=tinysrgb&w=400",
      specialties: ["Assistenz", "Kinderzahnheilkunde", "Terminplanung"],
      description: "Julia unterstützt unser Team bei der Behandlung und hat ein besonderes Händchen für kleine Patienten."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-dental-dark-blue mb-6">
            Unser Team
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Lernen Sie die Menschen kennen, die mit Leidenschaft und Kompetenz 
            für Ihre Zahngesundheit sorgen.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-dental-dark-blue mb-2">
                    {member.name}
                  </h3>
                  <p className="text-dental-blue font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="bg-dental-light-blue text-dental-dark-blue px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-dental-dark-blue mb-12">
            Unsere Werte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="h-8 w-8 text-dental-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Einfühlsamkeit</h3>
              <p className="text-gray-700">
                Wir verstehen die Bedürfnisse unserer Patienten und gehen 
                individuell auf jeden ein.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="h-8 w-8 text-dental-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kompetenz</h3>
              <p className="text-gray-700">
                Durch kontinuierliche Fortbildung bleiben wir immer auf dem 
                neuesten Stand der Zahnmedizin.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-dental-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Teamwork</h3>
              <p className="text-gray-700">
                Gemeinsam arbeiten wir Hand in Hand für das Wohl 
                unserer Patienten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifikationen */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-dental-dark-blue mb-12">
            Qualifikationen & Fortbildungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-dental-light-blue rounded-lg">
              <GraduationCap className="h-12 w-12 text-dental-blue mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Zahnmedizinstudium</h3>
              <p className="text-sm text-gray-600">Universität Heidelberg</p>
            </div>
            <div className="text-center p-6 bg-dental-light-blue rounded-lg">
              <Award className="h-12 w-12 text-dental-blue mx-auto mb-4" />
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
              <h3 className="font-semibold mb-2">Fortbildung</h3>
              <p className="text-sm text-gray-600">Regelmäßige Weiterbildung</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dental-dark-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Lernen Sie uns persönlich kennen!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie einen Termin und erleben Sie selbst, 
            wie herzlich und kompetent unser Team ist.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-dental-dark-blue font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
          >
            Kennenlerntermin vereinbaren
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;