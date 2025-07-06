const Datenschutz = () => {
  return (
    <div className="section-padding bg-gray-50">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold text-dental-dark-blue mb-8">Datenschutzerklärung</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-semibold mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-lg font-semibold mb-2">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der 
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-lg font-semibold mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            
            <h3 className="text-lg font-semibold mb-2 mt-4">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
              aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">4. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
              <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>Einschränkung der Datenverarbeitung zu verlangen</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten zu erheben</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">5. Analyse-Tools und Tools von Drittanbietern</h2>
            <p>
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. 
              Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte 
              Informationen zu diesen Analyseprogrammen finden Sie in der folgenden 
              Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">6. Server-Log-Dateien</h2>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in 
              so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
              Dies sind:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">7. Kontakt</h2>
            <p>
              Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
            </p>
            <div className="mt-4 space-y-2">
              <p className="font-semibold">MVZ Heidelberg-Süd Zahnarztpraxis</p>
              <p>Dr. Ertl Gabor</p>
              <p>Buchwaldweg 14</p>
              <p>69126 Heidelberg-Boxberg</p>
              <p>Telefon: <a href="tel:+4962213547820" className="text-dental-blue hover:underline">06221 354 78 20</a></p>
              <p>E-Mail: <a href="mailto:info@mvz-heidelberg-sued.de" className="text-dental-blue hover:underline">info@mvz-heidelberg-sued.de</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">8. Speicherdauer</h2>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer 
              genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck 
              für die Datenverarbeitung entfällt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dental-dark-blue mb-4">9. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets 
              den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer 
              Leistungen in der Datenschutzerklärung umzusetzen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;