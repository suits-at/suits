export default function ImpressumPage() {
  return (
    <section>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 uppercase">
        //Impressum & Datenschutz
      </h1>

      {/* Impressum Section */}
      <div className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-8 mt-12">//Impressum</h2>

        {/* 1. Information gemäß § 5 Abs 1 ECG */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">1. Information gemäß § 5 Abs 1 ECG</h3>
          <div className="text-lg space-y-2 mb-6">
            <p>
              SUITS (Sebastian Ulbel IT-Solutions)
              <br />
              DI Sebastian Ulbel
              <br />
              Schüttaustraße 60
              <br />
              1220 Wien
            </p>
            <p className="mt-4">
              Vertreten durch:
              <br />
              DI Sebastian Ulbel
            </p>
            <p className="mt-4">
              Kontakt:
              <br />
              E-Mail:{" "}
              <a href="mailto:office@suits.at" className="text-primary hover:underline">
                office@suits.at
              </a>
            </p>
          </div>
        </div>

        {/* 2. Haftung für Inhalte */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">2. Haftung für Inhalte</h3>
          <p className="text-lg leading-relaxed">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich, jedoch nicht verpflichtet, übermittelte oder gespeicherte
            fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
            Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
            diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
            wir diese Inhalte umgehend entfernen.
          </p>
        </div>

        {/* 3. Haftung für Links */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">3. Haftung für Links</h3>
          <p className="text-lg leading-relaxed">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
            verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
            entfernen.
          </p>
        </div>

        {/* 4. Urheberrecht */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">4. Urheberrecht</h3>
          <p className="text-lg leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
            jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
            dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit
            die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
            Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
            aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>

        {/* Datenschutzerklärung Section */}
        <h2 className="text-3xl font-semibold mb-8 mt-16">//Datenschutzerklärung</h2>

        {/* 1. Datenschutz auf einen Blick */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">1. Datenschutz auf einen Blick</h3>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Allgemeine Hinweise</h4>
            <p className="text-lg leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
              Text aufgeführten Datenschutzerklärung.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Datenerfassung auf unserer Website</h4>

            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </h5>
              <p className="text-lg leading-relaxed">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Wie erfassen wir Ihre Daten?</h5>
              <p className="text-lg leading-relaxed">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
                kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme
                erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem
                oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
                sobald Sie unsere Website betreten.
              </p>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">Wofür nutzen wir Ihre Daten?</h5>
              <p className="text-lg leading-relaxed">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
                werden.
              </p>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold mb-3">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </h5>
              <p className="text-lg leading-relaxed">
                Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
                ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit
                unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen
                ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen
                Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung".
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">
              Analyse-Tools und Tools von Drittanbietern
            </h4>
            <p className="text-lg leading-relaxed">
              Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden.
              Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse
              Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu
              Ihnen zurückverfolgt werden. Sie können dieser Analyse widersprechen oder sie durch
              die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen dazu finden
              Sie in der folgenden Datenschutzerklärung.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Sie können dieser Analyse widersprechen. Über die Widerspruchsmöglichkeiten werden wir
              Sie in dieser Datenschutzerklärung informieren.
            </p>
          </div>
        </div>

        {/* 2. Allgemeine Hinweise und Pflichtinformationen */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            2. Allgemeine Hinweise und Pflichtinformationen
          </h3>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Datenschutz</h4>
            <p className="text-lg leading-relaxed">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
              behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
              Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden
              können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und
              wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der
              Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
              Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Hinweis zur verantwortlichen Stelle</h4>
            <p className="text-lg leading-relaxed">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="text-lg space-y-2 mt-4 ml-4">
              <p>
                SUITS (Sebastian Ulbel IT-Solutions)
                <br />
                DI Sebastian Ulbel
                <br />
                Schüttaustraße 60
                <br />
                1220 Wien
              </p>
              <p className="mt-4">
                Vertreten durch:
                <br />
                DI Sebastian Ulbel
              </p>
              <p className="mt-4">
                Kontakt:
                <br />
                E-Mail:{" "}
                <a href="mailto:office@suits.at" className="text-primary hover:underline">
                  office@suits.at
                </a>
              </p>
            </div>
            <p className="text-lg leading-relaxed mt-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
              personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h4>
            <p className="text-lg leading-relaxed">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
              möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu
              reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
              Direktwerbung (Art. 21 DSGVO)
            </h4>
            <p className="text-lg leading-relaxed">
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO
              erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen
              Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch
              einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die
              jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser
              Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen
              personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende
              schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und
              Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder
              Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so
              haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender
              personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für
              das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
              widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke
              der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h4>
            <p className="text-lg leading-relaxed">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
              einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
              Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das
              Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Recht auf Datenübertragbarkeit</h4>
            <p className="text-lg leading-relaxed">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
              eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem
              gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte
              Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
              soweit es technisch machbar ist.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">SSL- bzw. TLS-Verschlüsselung</h4>
            <p className="text-lg leading-relaxed">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als
              Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf
              "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
              übermitteln, nicht von Dritten mitgelesen werden.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">
              Auskunft, Sperrung, Löschung und Berichtigung
            </h4>
            <p className="text-lg leading-relaxed">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
              unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren
              Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
              Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum
              Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum
              angegebenen Adresse an uns wenden.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Recht auf Einschränkung der Verarbeitung</h4>
            <p className="text-lg leading-relaxed">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen
              Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
              folgenden Fällen:
            </p>
            <ul className="text-lg space-y-3 mt-4 ml-4">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>
                  Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
                  bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer
                  der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>
                  Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah /
                  geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung
                  verlangen.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>
                  Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur
                  Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben
                  Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>
                  Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
                  Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch
                  nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die
                  Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen
              diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
              Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines
              wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
              verarbeitet werden.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Widerspruch gegen Werbe-E-Mails</h4>
            <p className="text-lg leading-relaxed">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
              Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien
              wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich
              rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa
              durch Spam-E-Mails, vor.
            </p>
          </div>
        </div>

        {/* 3. Datenerfassung auf unserer Website */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">3. Datenerfassung auf unserer Website</h3>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Server-Log-Dateien</h4>
            <p className="text-lg leading-relaxed">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="text-lg space-y-2 mt-4 ml-4">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Browsertyp und Browserversion</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>verwendetes Betriebssystem</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Referrer URL</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Hostname des zugreifenden Rechners</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>Uhrzeit der Serveranfrage</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-3">•</span>
                <span>IP-Adresse</span>
              </li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
              Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
              Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files
              erfasst werden.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Anfrage per E-Mail oder Telefon</h4>
            <p className="text-lg leading-relaxed">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller
              daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
              Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir
              nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
              beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und / oder
              auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein
              berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen
              haben.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie
              uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der
              Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres
              Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche
              Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </div>
        </div>

        {/* 4. Plugins und Tools */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">4. Plugins und Tools</h3>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Google Maps</h4>
            <p className="text-lg leading-relaxed">
              Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google
              Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP Adresse zu
              speichern. Diese Informationen werden in der Regel an einen Server von Google in den
              USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf
              diese Datenübertragung.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung
              unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der
              Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6
              Abs. 1 lit. f DSGVO dar.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung
              von Google:{" "}
              <a
                href="https://policies.google.com/privacy?hl=de"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy?hl=de
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
