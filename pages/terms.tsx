import { NextPage } from 'next';
import { Fragment } from 'react';
import { Element, Link as ScrollLink } from 'react-scroll';
import Breadcrumb from 'components/reuseable/Breadcrumb';
import PageProgress from 'components/common/PageProgress';
import Cookies from 'components/cookies';

// -------- data -------- //
const linkList = [
  { id: 1, title: '1. Imprint', to: 'imprint' },
  { id: 2, title: '2. Data Privacy', to: 'data-privacy' },
  { id: 3, title: '3. Cookies', to: 'cookies' }
];

const breadcrumb = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Imprint and Data Privacy', url: '/terms' },
  { id: 3, title: 'Cookies', url: '/terms' }
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
                    <p>Spacifik UG (haftungsbeschr??nkt)</p>
                    <p>Gerichtstr. 19, 13347 Berlin</p>
                    <p>
                      <a href="mailto:luis.rieke@spacifik.com">Luis.rieke@spacifik.com</a>
                    </p>
                    <br />
                    <p>Amtsgericht Berlin-Charlottenburg</p>
                    <p>HRB 195740 B</p>
                    <p>Sitz der Gesellschaft: Berlin, Deutschland</p>
                    <p>Gesch??ftsf??hrer Luis Rieke</p>
                    <p>USt-ID: DE317616086.</p>
                    <br />
                    <p>Inhaltlich Verantwortlicher gem???? ?? 55 Abs. 2 RStV: Luis Rieke (Anschrift wie oben)</p>
                    <p>Datenschutzbeauftragter: Luis Rieke (Anschrift wie oben)</p>
                    <br />
                    <p>Schutz deiner Daten Siehe dazu unsere Datenschutzerkl??rung.</p>
                    <p>
                      Haftung f??r unsere Inhalte: Die Inhalte unserer Seiten wurden mit gr????ter Sorgfalt erstellt. F??r
                      die Richtigkeit, Vollst??ndigkeit und Aktualit??t der Inhalte k??nnen wir jedoch keine Gew??hr
                      ??bernehmen. Als Diensteanbieter sind wir gem???? ?? 18 Abs. 2 Medienstaatsvertrag f??r eigene Inhalte
                      auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wei??e uns also bitte freundlich
                      darauf hin, wenn es Inhalte gibt, die inhaltlich korrigiert werden m??ssen. Wir werden dem
                      nachkommen.
                    </p>
                    <p>
                      Haftungshinweis bei externen Links: Unser Angebot enth??lt Links zu externen Webseiten Dritter, auf
                      deren Inhalte wir leider keinen Einfluss haben. Deshalb k??nnen wir f??r diese fremden Inhalte auch
                      keine Gew??hr ??bernehmen. F??r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                      oder Betreiber der Seiten verantwortlich und nicht wir. Die verlinkten Seiten wurden zum Zeitpunkt
                      der Verlinkung auf m??gliche Rechtsverst????e ??berpr??ft. Rechtswidrige Inhalte waren zum Zeitpunkt
                      der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                      jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                      Rechtsverletzungen werden wir derartige Links nat??rlich umgehend entfernen.
                    </p>
                    <p>
                      Unser Urheberrecht und dein Urheberrecht sind uns wichtig. Die durch uns erstellten Inhalte und
                      Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf??ltigung, Bearbeitung,
                      Verbreitung und jede Art der Verwertung au??erhalb der Grenzen des Urheberrechtes brauchen eine
                      explizit angeforderte, schriftliche Erlaubnis der Spacifik UG (haftungsbeschr??nkt). Downloads und
                      Kopien dieser Seite sind nicht gestattet. Wenn die Inhalte auf dieser Seite nicht von uns selbst
                      erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter
                      als solche gekennzeichnet. Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam
                      werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                      werden wir derartige Inhalte nat??rlich umgehend entfernen.
                    </p>
                    <p>
                      Streitschlichtungshinweis: Nutze die M??glichkeit der Online-Streitbeilegung der EU:
                      <a href="http://ec.europa.eu/consumers/odr">http://ec.europa.eu/consumers/odr</a>
                    </p>
                    <p>
                      Verst????e, Kritik und Verbesserungsvorschl??ge: Falls du dich egal aus welchem Grund ungerecht
                      behandelt f??hlst und Kritik ??u??ern willst, m??chten wir dich bitten zun??chst mit uns Kontakt
                      aufzunehmen. ??ber alles l??sst sich reden und wir finden bestimmt eine L??sung auch ohne Anwalt.
                      ??ber Vorschl??ge und Ideen freuen wir uns sowieso, also keine Scheu vor der Kontaktaufnahme.
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
                      zeigt, was Sache ist. Wir versuchen dir hier transparent zu erkl??ren, wie eine Website arbeitet
                      und wenn Fragen offenbleiben, komm gerne auf uns zur??ck.
                    </p>
                    <br />
                    <p>2. Verantwortlich f??r diese Website</p>
                    <p>Siehe oben bei Imprint.</p>
                    <br />
                    <p>3. Wozu diese Texte?</p>
                    <p>
                      Die folgenden Texte dienen dazu, dir als ???betroffener Person??? zu zeigen, wie personenbezogenen
                      Daten durch uns verarbeitet werden und nat??rlich ist es f??r uns auch wichtig, dir deine Rechte aus
                      dem Datenschutzgesetzen zu erkl??ren. Wichtig ist f??r dich zun??chst einmal zu wissen, dass unsere
                      Internetseiten grunds??tzlich ohne Eingabe personenbezogener Daten genutzt werden k??nnen. Du wirst
                      also nicht verpflichtet Angaben ??ber dich als Person offen zu legen. Wenn du uns kontaktierst
                      werden aber nat??rlich personenbezogene Daten wie beispielsweise in der Regel Name und Email
                      Adresse erfasst. Nat??rlich k??nnen wir aber auch diese auf deinen Wunsch r??ckwirkend wieder
                      l??schen. Nat??rlich verarbeiten wir personenbezogene Daten vertraulich und wenn du uns ??ber das
                      Kontaktformular oder per Email kontaktierst, geben wir deine Email Adresse auch nat??rlich nicht
                      weiter. Alle Daten werden immer im Einklang mit der Datenschutz Grundverordnung (DSGVO) und mit
                      den f??r die ???Spacifik UG (haftungsbeschr??nkt)??? geltenden landesspezifischen
                      Datenschutzbestimmungen verarbeitet. Diese einzelnen Datenschutzerkl??rungen zeigen dir immer
                      genau, wie viele und welche Daten wir erheben und wieso.
                    </p>
                    <br />
                    <p>4. Ganz wichtig f??r dich</p>
                    <p>
                      Von Anfang an haben wir darauf geachtet, dass deine Daten sicher sind und wir diese sch??tzen, wie
                      unsere eigenen. Wir arbeiten mit zahlreichen Ma??nahmen, um einen m??glichst l??ckenlosen Schutz der
                      ??ber diese Internetseite verarbeiteten personenbezogenen Daten sicherzustellen. Wir weisen jedoch
                      darauf hin, dass die Daten??bertragung im Internet Sicherheitsl??cken aufweisen kann.
                      Internetbasierte Daten??bertragungen k??nnen ganz grunds??tzlich Sicherheitsl??cken aufweisen, sodass
                      ein absoluter Schutz nicht gew??hrleistet werden kann. Das solltest du immer im Kopf haben, auf
                      jeder Seite im Internet. Dies kann zum Beispiel durch L??cken beim WLAN Router der Fall sein. Ein
                      gutes Anti Viren Programm hilft eventuell. Auch eine anst??ndige Firewall und ein gesch??tzter
                      Browser sind hierbei von Vorteil. Am sichersten unterwegs ist man vermutlich mit Linux
                      Distributionen und alternativen Browsern. Ein l??ckenloser Schutz der Daten vor dem Zugriff durch
                      Dritte ist allerdings nicht m??glich. Aus diesem Grund wollen wir nat??rlich jedem die Option
                      offenlassen, personenbezogene Daten auch auf alternativem Wege, beispielsweise telefonisch oder
                      per Post, an uns zu ??bermitteln.
                    </p>
                    <br />
                    <p>5. Welche Rechte du an deinen Daten hast</p>
                    <p>
                      Sobald du in Austausch getreten bist, kannst du jederzeit die vollst??ndige L??schung deiner Daten
                      anfordern.
                    </p>
                    <br />
                    <p>6. Wir betreiben viele Websites</p>
                    <p>
                      Nur ein Teil der hier aufgef??hrten Anwendungen, Tools und Programme treffen auf diese Website zu.
                      Nicht alle werden verwendet. Da wir viele Websites verwalten, wollen wir auf Nummer Sicher gehen
                      und sicher sein, dass du auf jeden Fall wei??t, welche Vorg??nge im Hintergrund ablaufen k??nnen.
                      Meistens benutzt die Website auf der du gerade bist aber oft nur einen kleinen Teil dieser
                      Programme, Methoden und Tools die in dieser Datenschutzerkl??rung gelistet werden. Im Zweifelsfall,
                      frag gerne nach.
                    </p>
                    <br />
                    <p>7. Begriffserkl??rungen</p>
                    <p>
                      Wir wollen nat??rlich, dass du die Texte hier auch alle verstehst, deswegen ein paar erl??uternde
                      Erkl??rungen dazu. Solltest du Fragen haben melde dich gerne bei unserem Datenschutzbeauftragten.
                      Die hier aufgef??hrten Begrifflichkeiten wurden bei dem Erlass der Datenschutz Grundverordnung
                      (DSGVO) verwendet. Wir verwenden in unserer Datenschutzerkl??rung unter anderen diese Begriffe:
                      Auftragsverarbeiter sind nat??rliche oder juristische Personen. Das k??nnen zum Beispiel Beh??rden
                      sein oder Einrichtungen oder eine andere Stelle, die personenbezogene Daten im Auftrag eines
                      Verantwortlichen verarbeitet. Betroffene Person ist jeder, dessen Daten von unserem Unternehmen
                      verarbeitet werden. Dritter ist eine nat??rliche oder juristische Person, Beh??rde, Einrichtung oder
                      andere Stelle. Aber auf jeden Fall jemand anders als du und wir. Er ist also jemand au??er der
                      betroffenen Person (also gegebenenfalls du), dem Verantwortlichen, dem Auftragsverarbeiter und den
                      Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des
                      Auftragsverarbeiters dazu berechtigt wurden, die personenbezogenen Daten zu verarbeiten.
                      Einschr??nkung der Verarbeitung ist die Markierung der personenbezogenen Daten um die k??nftige
                      Verarbeitung einzuschr??nken. Einwilligung ist eine unmissverst??ndlich abgegebene Willensbekundung
                      in Form einer schriftlichen Erkl??rung oder einer anderen best??tigenden eindeutigen Handlung, mit
                      der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung de r betreffenden
                      personenbezogenen Daten ??ber sie einverstanden ist. Empf??nger ist eine nat??rliche oder juristische
                      Person, Beh??rde, Einrichtung oder andere Stelle, der personenbezogene Daten zur Verf??gung gestellt
                      werden. Beh??rden, die im Rahmen eines bestimmten Untersuchungsauftrags personenbezogene Daten
                      einfordern, gelten jedoch nicht als Empf??nger. Personenbezogene Daten sind alle Informationen, die
                      sich auf dich als identifizierbare nat??rliche Person beziehen. Das kann so etwas sein wie
                      beispielsweise dein Name, dein Standort oder besondere Merkmale der psychischen, wirtschaftlichen,
                      physischen, physiologischen, genetischen, kulturellen oder sozialen Identit??t. Profiling ist jede
                      Art der Verarbeitung personenbezogener Daten um bestimmte pers??nliche Aspekte, die sich auf eine
                      nat??rliche Person beziehen zu sch??tzen, zu analysieren und gegebenenfalls zu bewerten.
                      Pseudonymisierung ist die Verarbeitung personenbezogener Daten, so dass nicht mehr eine
                      spezifische Person zugeordnet werden kann. Es k??nnen also keine erfassten Daten einer
                      identifizierbaren nat??rlichen Person zugewiesen werden. Verarbeitung ist jedes automatisiertes
                      Verfahren im Zusammenhang mit personenbezogenen Daten. Das k??nnen zum Beispiel das Erheben, das
                      Erfassen, die Verkn??pfung, das Sortieren, die Organisation, die Speicherung, die Editierung, das
                      Auslesen, die Verwendung oder eine Form der Bereitstellung sein.
                    </p>
                    <br />
                    <p>8. Rechtsgrundlage der Verarbeitung</p>
                    <p>
                      Wir beziehen uns auf Art. 6 Abs. 1 lit. b DSGVO. Wenn wir personenbezogene Daten von dir brauchen,
                      um einen Auftrag zu erf??llen, fragen wir explizit nach deiner Erlaubnis. In Art. 6 DSGVO steht
                      ganz am Anfang: ???Die Verarbeitung ist nur rechtm????ig, wenn mindestens eine der nachstehenden
                      Bedingungen erf??llt ist: Die betroffene Person hat ihre Einwilligung zu der Verarbeitung der sie
                      betreffenden personenbezogenen Daten f??r einen oder mehrere bestimmte Zwecke gegeben.??? Darauf
                      beziehen wir uns in diesem Fall. Manchmal ist die Verarbeitung personenbezogener Daten zur
                      Erf??llung eines Vertrags, wo du unser Vertragspartner bist, erforderlich. Das kann bei klassischen
                      Verarbeitungsvorg??ngen sein, wie zum Beispiel einer Lieferung von einem schriftlichen Produkt oder
                      Vertrag per Post, oder einer Anfrage oder beispielsweise zur Erf??llung steuerlicher Pflichten.
                      Wenn das Erfordernis der Fall ist, beruht die Verarbeitung auf Art. 6 Abs. 1 lit. b DSGVO.
                      Unwahrscheinlich ist, aber auch hierauf wollen wir eingehen, dass jemand in Gefahr ist. Wenn zum
                      Beispiel ein Besucher sich in unserem Unternehmen schwer verletzt, geben wir nat??rlich
                      lebenswichtige Informationen an einen Arzt, das Krankenhaus oder sonstige Dritte. Auch hier beruht
                      die Verarbeitung auf Art. 6 Abs. 1 lit. d DSGVO. In seltenen F??llen kann also die Verarbeitung von
                      personenbezogenen Daten erforderlich sein um lebenswichtige Interessen der betroffenen Person zu
                      sch??tzen. Letztlich k??nnten Verarbeitungsvorg??nge auf Art. 6 Abs. 1 lit. f DSGVO beruhen. Auf
                      dieser Rechtsgrundlage basieren Verarbeitungsvorg??nge, die von keiner der vorgenannten
                      Rechtsgrundlagen erfasst werden konnten. Vor allem auch genau dann, wenn die Verarbeitung zur
                      Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich ist.
                      Diese Verarbeitungsvorg??nge sind uns vor allem deswegen gestattet, weil der Europ??ischen
                      Gesetzgeber sie besonders erw??hnt hat. Dieser vertrat die Auffassung, dass ein berechtigtes
                      Interesse anzunehmen sein k??nnte, wenn Sie ein Kunde unseres Unternehmens sind. Hierbei beziehen
                      wir uns explizit auf Erw??gungsgrund 47 Satz 2 der DSGVO.
                    </p>
                    <br />
                    <p>9. Unser Hosting</p>
                    <p>
                      Diese Website wird von Netlify gehostet. Auf den Systemen von Netlify werden automatisiert
                      Protokolle (sog. Logfiles) f??r bestimmte Dienste auf dem Server erfasst. Dies sind zum Beispiel
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
                      ??bermittelst, dann erhalten wir wirklich nur solche Daten, die dein Browser an unseren Server
                      ??bermittelt. Diese Information nennt man ein sogenanntes Server-Logfile. Im Rahmen dessen k??nnen
                      ein paar Informationen erhoben werden: Welchen Browser du nutzt Dein Betriebssystem Die
                      Internetseite ??ber die du auf unsere Seite gekommen bist Deine Internet-Protokoll-Adresse Der
                      Internet-Service-Provider Die Unterseiten, auf die du klickst Das Datum und die Uhrzeit, wann du
                      auf der Website warst Bei der Nutzung dieser allgemeinen Daten und Informationen ziehen wir keine
                      R??ckschl??sse auf dich als Person. Diese Daten werden anonym ausgewertet. Wir brauchen diese
                      Informationen, damit wir: Wissen auf welche technischen Gegebenheiten wir unsere Websites bauen
                      m??ssen (Handys, Laptops, Computer? Welcher Browser? Und so weiter) Also wir brauchen diese
                      Informationen, um die Inhalte unserer Internetseite korrekt auszuliefern und die Werbung zu
                      optimieren Um Strafverfolgungsbeh??rden im Falle eines Cyberangriffes die notwendigen Informationen
                      bereitstellen k??nnen Die Funktionsf??higkeit unserer IT-Systeme sicherstellen k??nnen Deine
                      erhobenen Daten und Informationen werden also nur in der Masse mit allen anderen Daten
                      zusammengerechnet f??r uns interessant und wir versuchen statistisch und ferner mit dem Ziel, den
                      Datenschutz und die Datensicherheit in unserem Unternehmen zu erh??hen, Auswertungen zu machen.
                      Damit versuchen wir am Ende ein perfektes Schutzniveau f??r unsere personenbezogenen Daten und
                      deren Verarbeitung sicherzustellen. Die Rechtsgrundlage f??r die Datenverarbeitung ist Art. 6 Abs.
                      1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt also aus oben aufgelisteten Zwecken zur
                      Datenerhebung, weil wir nur so die Seiten betreiben k??nnen die unsere Gesch??ftsgrundlage
                      darstellen.
                    </p>
                    <br />
                    <p>13. Weitergabe von Daten an Dritte</p>
                    <p>
                      Wir geben deine pers??nlichen Daten an Dritte zu anderen als den im Folgenden aufgef??hrten Gr??nden
                      nicht weiter. Wir geben deine pers??nlichen Daten wirklich nur dann an Dritte weiter, wenn: Du nach
                      Art. 6 Abs. 1 S. 1 lit. a DSGVO deine Einwilligung dazu erteilt hast F??r die Weitergabe nach Art.
                      6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht Dies gesetzlich zul??ssig und
                      nach Art. 6 Abs. 1 S. 1 lit. b DSGVO f??r die Abwicklung von Vertragsverh??ltnissen mit dir
                      erforderlich ist Die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Wahrung unserer
                      berechtigten Interessen zul??ssig ist und kein Anlass zur Annahme besteht, dass du ein
                      ??berwiegendes schutzw??rdiges Interesse an Nichtweitergabe deiner Daten hast.
                    </p>
                    <br />
                    <p>14. Kontaktaufnahme</p>
                    <p>
                      Sobald du in Kontakt mit uns trittst, zum Beispiel per E-Mail, werden deine Angaben f??r die
                      Bearbeitung der Anfrage und f??r den Fall von Anschlussfragen gespeichert.
                    </p>
                  </div>
                </div>
              </Element>

              <Element name="cookies" className="wrapper pt-16">
                <div className="card">
                  <div className="card-body p-10">
                    <h2 className="mb-3">3. Cookies</h2>
                    <p>You will find all detailed Information down below:</p>
                    <Cookies />
                  </div>
                </div>
              </Element>
              <br />
              <br />
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Terms;
