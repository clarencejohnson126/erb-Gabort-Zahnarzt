import React from 'react';

const Impressum = () => {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold text-dental-dark-blue mb-8">Impressum</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-2">
              <p className="font-semibold">MVZ Heidelberg-Süd Zahnarztpraxis</p>
              <p>Dr. Ertl Gabor</p>
              <p>Buchwaldweg 14</p>
              <p>69126 Heidelberg-Boxberg</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">Kontakt</h2>
            <div className="space-y-2">
              <p>Telefon: <a href="tel:+4962213547820" className="text-dental-blue hover:underline">06221 354 78 20</a></p>
              <p>E-Mail: <a href="mailto:info@mvz-heidelberg-sued.de" className="text-dental-blue hover:underline">info@mvz-heidelberg-sued.de</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <div className="space-y-2">
              <p>Berufsbezeichnung: Zahnarzt (verliehen in Deutschland)</p>
              <p>Zuständige Kammer: Landeszahnärztekammer Baden-Württemberg</p>
              <p>Adresse der Kammer: Albstadtweg 9, 70567 Stuttgart</p>
              <p>Es gelten folgende berufsrechtliche Regelungen:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Heilberufe-Kammergesetz (HKaG)</li>
                <li>Berufsordnung für Zahnärzte Baden-Württembergs</li>
                <li>Gebührenordnung für Zahnärzte (GOZ)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">Redaktionell verantwortlich</h2>
            <div className="space-y-2">
              <p>Dr. Ertl Gabor</p>
              <p>Buchwaldweg 14</p>
              <p>69126 Heidelberg-Boxberg</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" className="text-dental-blue hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
              Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
              fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;