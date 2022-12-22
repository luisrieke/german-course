import { NextPage } from 'next';
import { Fragment } from 'react';
import { Element, Link as ScrollLink } from 'react-scroll';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import PageProgress from 'components/common/PageProgress';
import Script from 'next/script';

// -------- data -------- //
const linkList = [
  { id: 1, title: '1. Imprint', to: 'imprint' },
  { id: 2, title: '2. Data Privacy', to: 'data-privacy' }
];

const breadcrumb = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Imprint and Data Privacy', url: '/terms' }
];

const Terms: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      <main className="content-wrapper">
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                <h1 className="display-1 mb-3">Imprint & Data privacy</h1>
                <Breadcrumb data={breadcrumb} />
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row gx-0">
            <aside className="col-xl-3 sidebar sticky-sidebar mt-md-0 py-16 d-none d-xl-block">
              <div className="widget">
                <nav id="sidebar-nav">
                  <ul className="list-unstyled text-reset">
                    {linkList.map(({ id, title, to }) => (
                      <li key={id}>
                        <ScrollLink smooth spy activeClass="active" to={to} className="nav-link">
                          {title}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            <div className="col-xl-8">
              <Element name="imprint" className="wrapper pt-16">
                <div className="card">
                  <div className="card-body p-10">
                    <h2 className="mb-3">1. Imprint</h2>
                    <br />
                    <br />
                    <p>
                      This imprint and data privacy is written in German as we are a German based company. You can
                      easily use Google Translate or DeepL to translate it into your language:{' '}
                      <a href="https://www.deepl.com/de/translator">https://www.deepl.com/de/translator</a>
                    </p>
                    <br />
                    <p>Spacifik UG (haftungsbeschränkt)</p>
                    <p>Gerichtstr. 19, 13347 Berlin</p>
                    <p>
                      <a href="mailto:luis.rieke@spacifik.com">Luis.rieke@spacifik.com</a>
                    </p>
                    <br />
                    <p>Amtsgericht Berlin-Charlottenburg</p>
                    <p>HRB 195740 B</p>
                    <p>Sitz der Gesellschaft: Berlin, Deutschland</p>
                    <p>Geschäftsführer Luis Rieke</p>
                    <p>USt-ID: DE317616086.</p>
                    <br />
                    <p>Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV: Luis Rieke (Anschrift wie oben)</p>
                    <p>Datenschutzbeauftragter: Luis Rieke (Anschrift wie oben)</p>
                    <br />
                    <p>Schutz deiner Daten Siehe dazu unsere Datenschutzerklärung.</p>
                    <p>
                      Haftung für unsere Inhalte: Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
                      die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr
                      übernehmen. Als Diensteanbieter sind wir gemäß § 18 Abs. 2 Medienstaatsvertrag für eigene Inhalte
                      auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Weiße uns also bitte freundlich
                      darauf hin, wenn es Inhalte gibt, die inhaltlich korrigiert werden müssen. Wir werden dem
                      nachkommen.
                    </p>
                    <p>
                      Haftungshinweis bei externen Links: Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                      deren Inhalte wir leider keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
                      keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                      oder Betreiber der Seiten verantwortlich und nicht wir. Die verlinkten Seiten wurden zum Zeitpunkt
                      der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt
                      der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                      jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                      Rechtsverletzungen werden wir derartige Links natürlich umgehend entfernen.
                    </p>
                    <p>
                      Unser Urheberrecht und dein Urheberrecht sind uns wichtig. Die durch uns erstellten Inhalte und
                      Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                      Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes brauchen eine
                      explizit angeforderte, schriftliche Erlaubnis der Spacifik UG (haftungsbeschränkt). Downloads und
                      Kopien dieser Seite sind nicht gestattet. Wenn die Inhalte auf dieser Seite nicht von uns selbst
                      erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter
                      als solche gekennzeichnet. Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam
                      werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                      werden wir derartige Inhalte natürlich umgehend entfernen.
                    </p>
                    <p>
                      Streitschlichtungshinweis: Nutze die Möglichkeit der Online-Streitbeilegung der EU:
                      <a href="http://ec.europa.eu/consumers/odr">http://ec.europa.eu/consumers/odr</a>
                    </p>
                    <p>
                      Verstöße, Kritik und Verbesserungsvorschläge: Falls du dich egal aus welchem Grund ungerecht
                      behandelt fühlst und Kritik äußern willst, möchten wir dich bitten zunächst mit uns Kontakt
                      aufzunehmen. Über alles lässt sich reden und wir finden bestimmt eine Lösung auch ohne Anwalt.
                      Über Vorschläge und Ideen freuen wir uns sowieso, also keine Scheu vor der Kontaktaufnahme.
                    </p>
                  </div>
                </div>
              </Element>

              <Element name="data-privacy" className="wrapper pt-16">
                <div className="card">
                  <div className="card-body p-10">
                    <h2 className="mb-3">2. Data privacy</h2>
                    <br />
                    <br />
                    <p>1. Einleitung</p>
                    <p>
                      Datenschutz ist ein wichtiges Thema in Zeiten des Internets. Viel zu oft wissen wir nicht
                      wirklich, was im Hintergrund geschieht. Deswegen legt diese Seite die Karten auf den Tisch und
                      zeigt, was Sache ist. Wir versuchen dir hier transparent zu erklären, wie eine Website arbeitet
                      und wenn Fragen offenbleiben, komm gerne auf uns zurück.
                    </p>
                    <br />
                    <p>2. Verantwortlich für diese Website</p>
                    <p>Siehe oben bei Imprint.</p>
                    <br />
                    <p>3. Wozu diese Texte?</p>
                    <p>
                      Die folgenden Texte dienen dazu, dir als „betroffener Person“ zu zeigen, wie personenbezogenen
                      Daten durch uns verarbeitet werden und natürlich ist es für uns auch wichtig, dir deine Rechte aus
                      dem Datenschutzgesetzen zu erklären. Wichtig ist für dich zunächst einmal zu wissen, dass unsere
                      Internetseiten grundsätzlich ohne Eingabe personenbezogener Daten genutzt werden können. Du wirst
                      also nicht verpflichtet Angaben über dich als Person offen zu legen. Wenn du uns kontaktierst
                      werden aber natürlich personenbezogene Daten wie beispielsweise in der Regel Name und Email
                      Adresse erfasst. Natürlich können wir aber auch diese auf deinen Wunsch rückwirkend wieder
                      löschen. Natürlich verarbeiten wir personenbezogene Daten vertraulich und wenn du uns über das
                      Kontaktformular oder per Email kontaktierst, geben wir deine Email Adresse auch natürlich nicht
                      weiter. Alle Daten werden immer im Einklang mit der Datenschutz Grundverordnung (DSGVO) und mit
                      den für die „Spacifik UG (haftungsbeschränkt)“ geltenden landesspezifischen
                      Datenschutzbestimmungen verarbeitet. Diese einzelnen Datenschutzerklärungen zeigen dir immer
                      genau, wie viele und welche Daten wir erheben und wieso.
                    </p>
                    <br />
                    <p>4. Ganz wichtig für dich</p>
                    <p>
                      Von Anfang an haben wir darauf geachtet, dass deine Daten sicher sind und wir diese schützen, wie
                      unsere eigenen. Wir arbeiten mit zahlreichen Maßnahmen, um einen möglichst lückenlosen Schutz der
                      über diese Internetseite verarbeiteten personenbezogenen Daten sicherzustellen. Wir weisen jedoch
                      darauf hin, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann.
                      Internetbasierte Datenübertragungen können ganz grundsätzlich Sicherheitslücken aufweisen, sodass
                      ein absoluter Schutz nicht gewährleistet werden kann. Das solltest du immer im Kopf haben, auf
                      jeder Seite im Internet. Dies kann zum Beispiel durch Lücken beim WLAN Router der Fall sein. Ein
                      gutes Anti Viren Programm hilft eventuell. Auch eine anständige Firewall und ein geschützter
                      Browser sind hierbei von Vorteil. Am sichersten unterwegs ist man vermutlich mit Linux
                      Distributionen und alternativen Browsern. Ein lückenloser Schutz der Daten vor dem Zugriff durch
                      Dritte ist allerdings nicht möglich. Aus diesem Grund wollen wir natürlich jedem die Option
                      offenlassen, personenbezogene Daten auch auf alternativem Wege, beispielsweise telefonisch oder
                      per Post, an uns zu übermitteln.
                    </p>
                    <br />
                    <p>5. Welche Rechte du an deinen Daten hast</p>
                    <p>
                      Sobald du in Austausch getreten bist, kannst du jederzeit die vollständige Löschung deiner Daten
                      anfordern.
                    </p>
                    <br />
                    <p>6. Wir betreiben viele Websites</p>
                    <p>
                      Nur ein Teil der hier aufgeführten Anwendungen, Tools und Programme treffen auf diese Website zu.
                      Nicht alle werden verwendet. Da wir viele Websites verwalten, wollen wir auf Nummer Sicher gehen
                      und sicher sein, dass du auf jeden Fall weißt, welche Vorgänge im Hintergrund ablaufen können.
                      Meistens benutzt die Website auf der du gerade bist aber oft nur einen kleinen Teil dieser
                      Programme, Methoden und Tools die in dieser Datenschutzerklärung gelistet werden. Im Zweifelsfall,
                      frag gerne nach.
                    </p>
                    <br />
                    <p>7. Begriffserklärungen</p>
                    <p>
                      Wir wollen natürlich, dass du die Texte hier auch alle verstehst, deswegen ein paar erläuternde
                      Erklärungen dazu. Solltest du Fragen haben melde dich gerne bei unserem Datenschutzbeauftragten.
                      Die hier aufgeführten Begrifflichkeiten wurden bei dem Erlass der Datenschutz Grundverordnung
                      (DSGVO) verwendet. Wir verwenden in unserer Datenschutzerklärung unter anderen diese Begriffe:
                      Auftragsverarbeiter sind natürliche oder juristische Personen. Das können zum Beispiel Behörden
                      sein oder Einrichtungen oder eine andere Stelle, die personenbezogene Daten im Auftrag eines
                      Verantwortlichen verarbeitet. Betroffene Person ist jeder, dessen Daten von unserem Unternehmen
                      verarbeitet werden. Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder
                      andere Stelle. Aber auf jeden Fall jemand anders als du und wir. Er ist also jemand außer der
                      betroffenen Person (also gegebenenfalls du), dem Verantwortlichen, dem Auftragsverarbeiter und den
                      Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des
                      Auftragsverarbeiters dazu berechtigt wurden, die personenbezogenen Daten zu verarbeiten.
                      Einschränkung der Verarbeitung ist die Markierung der personenbezogenen Daten um die künftige
                      Verarbeitung einzuschränken. Einwilligung ist eine unmissverständlich abgegebene Willensbekundung
                      in Form einer schriftlichen Erklärung oder einer anderen bestätigenden eindeutigen Handlung, mit
                      der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung de r betreffenden
                      personenbezogenen Daten über sie einverstanden ist. Empfänger ist eine natürliche oder juristische
                      Person, Behörde, Einrichtung oder andere Stelle, der personenbezogene Daten zur Verfügung gestellt
                      werden. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags personenbezogene Daten
                      einfordern, gelten jedoch nicht als Empfänger. Personenbezogene Daten sind alle Informationen, die
                      sich auf dich als identifizierbare natürliche Person beziehen. Das kann so etwas sein wie
                      beispielsweise dein Name, dein Standort oder besondere Merkmale der psychischen, wirtschaftlichen,
                      physischen, physiologischen, genetischen, kulturellen oder sozialen Identität. Profiling ist jede
                      Art der Verarbeitung personenbezogener Daten um bestimmte persönliche Aspekte, die sich auf eine
                      natürliche Person beziehen zu schätzen, zu analysieren und gegebenenfalls zu bewerten.
                      Pseudonymisierung ist die Verarbeitung personenbezogener Daten, so dass nicht mehr eine
                      spezifische Person zugeordnet werden kann. Es können also keine erfassten Daten einer
                      identifizierbaren natürlichen Person zugewiesen werden. Verarbeitung ist jedes automatisiertes
                      Verfahren im Zusammenhang mit personenbezogenen Daten. Das können zum Beispiel das Erheben, das
                      Erfassen, die Verknüpfung, das Sortieren, die Organisation, die Speicherung, die Editierung, das
                      Auslesen, die Verwendung oder eine Form der Bereitstellung sein.
                    </p>
                    <br />
                    <p>8. Rechtsgrundlage der Verarbeitung</p>
                    <p>
                      Wir beziehen uns auf Art. 6 Abs. 1 lit. b DSGVO. Wenn wir personenbezogene Daten von dir brauchen,
                      um einen Auftrag zu erfüllen, fragen wir explizit nach deiner Erlaubnis. In Art. 6 DSGVO steht
                      ganz am Anfang: „Die Verarbeitung ist nur rechtmäßig, wenn mindestens eine der nachstehenden
                      Bedingungen erfüllt ist: Die betroffene Person hat ihre Einwilligung zu der Verarbeitung der sie
                      betreffenden personenbezogenen Daten für einen oder mehrere bestimmte Zwecke gegeben.“ Darauf
                      beziehen wir uns in diesem Fall. Manchmal ist die Verarbeitung personenbezogener Daten zur
                      Erfüllung eines Vertrags, wo du unser Vertragspartner bist, erforderlich. Das kann bei klassischen
                      Verarbeitungsvorgängen sein, wie zum Beispiel einer Lieferung von einem schriftlichen Produkt oder
                      Vertrag per Post, oder einer Anfrage oder beispielsweise zur Erfüllung steuerlicher Pflichten.
                      Wenn das Erfordernis der Fall ist, beruht die Verarbeitung auf Art. 6 Abs. 1 lit. b DSGVO.
                      Unwahrscheinlich ist, aber auch hierauf wollen wir eingehen, dass jemand in Gefahr ist. Wenn zum
                      Beispiel ein Besucher sich in unserem Unternehmen schwer verletzt, geben wir natürlich
                      lebenswichtige Informationen an einen Arzt, das Krankenhaus oder sonstige Dritte. Auch hier beruht
                      die Verarbeitung auf Art. 6 Abs. 1 lit. d DSGVO. In seltenen Fällen kann also die Verarbeitung von
                      personenbezogenen Daten erforderlich sein um lebenswichtige Interessen der betroffenen Person zu
                      schützen. Letztlich könnten Verarbeitungsvorgänge auf Art. 6 Abs. 1 lit. f DSGVO beruhen. Auf
                      dieser Rechtsgrundlage basieren Verarbeitungsvorgänge, die von keiner der vorgenannten
                      Rechtsgrundlagen erfasst werden konnten. Vor allem auch genau dann, wenn die Verarbeitung zur
                      Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich ist.
                      Diese Verarbeitungsvorgänge sind uns vor allem deswegen gestattet, weil der Europäischen
                      Gesetzgeber sie besonders erwähnt hat. Dieser vertrat die Auffassung, dass ein berechtigtes
                      Interesse anzunehmen sein könnte, wenn Sie ein Kunde unseres Unternehmens sind. Hierbei beziehen
                      wir uns explizit auf Erwägungsgrund 47 Satz 2 der DSGVO.
                    </p>
                    <br />
                    <p>9. Unser Hosting</p>
                    <p>
                      Diese Website wird von Netlify gehostet. Auf den Systemen von Netlify werden automatisiert
                      Protokolle (sog. Logfiles) für bestimmte Dienste auf dem Server erfasst. Dies sind zum Beispiel
                      die Zugriffe auf die Website, die IP-Adresse des Nutzers, die Art des Browsers, das Betriebssystem
                      und die Uhrzeit des Zugriffs.
                    </p>
                    <br />
                    <p>10. Content Management System</p>
                    <p>
                      Bei dieser Seite verwenden wir kein Content Managament System. Es handelt sich um eine
                      statistische Seite.
                    </p>
                    <br />
                    <p>11. Plugins</p>
                    <p>Auf dieser Seite werden keine Plugins verwendet. Es handelt sich um eine statistische Seite.</p>
                    <br />
                    <p>12. Technik</p>
                    <p>
                      Wenn du nur auf dieser Website bist, um dich zu informieren, also dich nirgends registrierst und
                      auch keinen Kommentar schreibst und auch kein Formular benutzt oder uns anders Informationen
                      übermittelst, dann erhalten wir wirklich nur solche Daten, die dein Browser an unseren Server
                      übermittelt. Diese Information nennt man ein sogenanntes Server-Logfile. Im Rahmen dessen können
                      ein paar Informationen erhoben werden: Welchen Browser du nutzt Dein Betriebssystem Die
                      Internetseite über die du auf unsere Seite gekommen bist Deine Internet-Protokoll-Adresse Der
                      Internet-Service-Provider Die Unterseiten, auf die du klickst Das Datum und die Uhrzeit, wann du
                      auf der Website warst Bei der Nutzung dieser allgemeinen Daten und Informationen ziehen wir keine
                      Rückschlüsse auf dich als Person. Diese Daten werden anonym ausgewertet. Wir brauchen diese
                      Informationen, damit wir: Wissen auf welche technischen Gegebenheiten wir unsere Websites bauen
                      müssen (Handys, Laptops, Computer? Welcher Browser? Und so weiter) Also wir brauchen diese
                      Informationen, um die Inhalte unserer Internetseite korrekt auszuliefern und die Werbung zu
                      optimieren Um Strafverfolgungsbehörden im Falle eines Cyberangriffes die notwendigen Informationen
                      bereitstellen können Die Funktionsfähigkeit unserer IT-Systeme sicherstellen können Deine
                      erhobenen Daten und Informationen werden also nur in der Masse mit allen anderen Daten
                      zusammengerechnet für uns interessant und wir versuchen statistisch und ferner mit dem Ziel, den
                      Datenschutz und die Datensicherheit in unserem Unternehmen zu erhöhen, Auswertungen zu machen.
                      Damit versuchen wir am Ende ein perfektes Schutzniveau für unsere personenbezogenen Daten und
                      deren Verarbeitung sicherzustellen. Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs.
                      1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt also aus oben aufgelisteten Zwecken zur
                      Datenerhebung, weil wir nur so die Seiten betreiben können die unsere Geschäftsgrundlage
                      darstellen.
                    </p>
                    <br />
                    <p>13. Weitergabe von Daten an Dritte</p>
                    <p>
                      Wir geben deine persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Gründen
                      nicht weiter. Wir geben deine persönlichen Daten wirklich nur dann an Dritte weiter, wenn: Du nach
                      Art. 6 Abs. 1 S. 1 lit. a DSGVO deine Einwilligung dazu erteilt hast Für die Weitergabe nach Art.
                      6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht Dies gesetzlich zulässig und
                      nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit dir
                      erforderlich ist Die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Wahrung unserer
                      berechtigten Interessen zulässig ist und kein Anlass zur Annahme besteht, dass du ein
                      überwiegendes schutzwürdiges Interesse an Nichtweitergabe deiner Daten hast.
                    </p>
                    <br />
                    <p>14. Kontaktaufnahme</p>
                    <p>
                      Sobald du in Kontakt mit uns trittst, zum Beispiel per E-Mail, werden deine Angaben für die
                      Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert.
                    </p>
                  </div>
                </div>
              </Element>

              <Element name="data-privacy" className="wrapper pt-16">
                <div className="card">
                  <div className="card-body p-10">
                    <h2 className="mb-3">3. Cookies</h2>
                    <Script
                      id="CookieDeclaration"
                      src="https://consent.cookiebot.com/1315d47d-d606-4f96-a103-c9afa6469781/cd.js"
                      type="text/javascript"
                      async
                    ></Script>
                  </div>
                </div>
              </Element>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Terms;
