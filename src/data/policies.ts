export interface PolicySection {
  heading?: string;
  body?: string[];
  list?: string[];
  link?: { label: string; href: string };
}

export interface PolicyDetailData {
  slug: string;
  title: string;
  sections: PolicySection[];
}

export const policies: PolicyDetailData[] = [
  {
    slug: "impressum",
    title: "Impressum",
    sections: [
      {
        heading: "Angaben gemaess § 5 TMG",
        body: [
          "Axis Horizon GmbH",
          "Vulkanstrasse 12C",
          "10367 Berlin",
          "Deutschland",
        ],
      },
      {
        heading: "Vertreten durch",
        body: ["Fadi Hayatleh"],
      },
      {
        heading: "Kontakt",
        body: ["Telefon: +49 152 12384897", "E-Mail: info@axishorizonglobal.de"],
      },
      {
        heading: "Registereintrag",
        body: [
          "Eintragung im Handelsregister",
          "Registergericht: Amtsgericht Charlottenburg",
          "Registernummer: HRB 275044 B",
        ],
      },
      {
        heading: "Umsatzsteuer-ID",
        body: [
          "Umsatzsteuer-Identifikationsnummer gemaess § 27 a Umsatzsteuergesetz:",
          "DE455057479",
        ],
      },
      {
        heading: "Verantwortlich fuer den Inhalt nach § 18 Abs. 2 MStV",
        body: ["Fadi Hayatleh", "Vulkanstrasse 12C", "10367 Berlin"],
      },
      {
        heading: "EU-Streitschlichtung",
        body: [
          "Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
        ],
        link: {
          label: "https://ec.europa.eu/consumers/odr",
          href: "https://ec.europa.eu/consumers/odr",
        },
      },
      {
        body: [
          "Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        ],
      },
    ],
  },
  {
    slug: "datenschutzerklaerung",
    title: "Datenschutzerklaerung",
    sections: [
      {
        heading: "1. Datenschutz auf einen Blick",
        body: [
          "Allgemeine Hinweise",
          "Die folgenden Hinweise geben einen einfachen Ueberblick darueber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.",
          "Personenbezogene Daten sind alle Daten, mit denen Sie persoenlich identifiziert werden koennen.",
        ],
      },
      {
        heading: "Datenerfassung auf dieser Website",
        body: [
          "Wer ist verantwortlich fuer die Datenerfassung auf dieser Website?",
          "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.",
          "Dessen Kontaktdaten koennen Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ entnehmen.",
          "Wie erfassen wir Ihre Daten?",
          "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z. B. durch ein Kontaktformular oder per E-Mail.",
          "Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst (z. B. Browser, Betriebssystem, Uhrzeit).",
          "Wofuer nutzen wir Ihre Daten?",
          "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewaehren.",
          "Andere Daten koennen zur Analyse Ihres Nutzerverhaltens oder zur Kontaktaufnahme genutzt werden.",
          "Welche Rechte haben Sie bezueglich Ihrer Daten?",
          "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Loeschung oder Einschraenkung der Verarbeitung Ihrer personenbezogenen Daten.",
          "Zudem haben Sie ein Beschwerderecht bei der zustaendigen Aufsichtsbehoerde.",
        ],
      },
      {
        heading: "2. Hinweis zur verantwortlichen Stelle",
        body: [
          "Verantwortliche Stelle ist:",
          "Axis Horizon GmbH",
          "Vulkanstrasse 12C",
          "10367 Berlin",
          "Deutschland",
          "Telefon: +49 152 12384897",
          "E-Mail: info@axishorizonglobal.de",
          "Verantwortliche Stelle ist die natuerliche oder juristische Person, die allein oder gemeinsam mit anderen ueber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.",
        ],
      },
      {
        heading: "3. Speicherung und Schutz Ihrer Daten",
        body: [
          "Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklaerung.",
          "Wir weisen darauf hin, dass die Datenuebertragung im Internet (z. B. bei E-Mail-Kommunikation) Sicherheitsluecken aufweisen kann.",
        ],
      },
      {
        heading: "4. Datenerfassung auf dieser Website",
        body: [
          "Server-Log-Dateien",
          "Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch uebermittelt:",
        ],
        list: [
          "Browsertyp und Browserversion",
          "verwendetes Betriebssystem",
          "Referrer URL",
          "Hostname des zugreifenden Rechners",
          "Uhrzeit der Serveranfrage",
          "IP-Adresse",
        ],
      },
      {
        body: [
          "Eine Zusammenfuehrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an technisch fehlerfreier Darstellung)",
        ],
      },
      {
        heading: "5. Kontaktaufnahme",
        body: [
          "Wenn Sie uns per E-Mail oder Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert.",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertrag oder vorvertragliche Massnahmen) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)",
        ],
      },
      {
        heading: "6. Cookies",
        body: [
          "Unsere Website verwendet Cookies. Cookies richten auf Ihrem Endgeraet keinen Schaden an und enthalten keine Viren.",
          "Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.",
          "Rechtsgrundlage: technisch notwendige Cookies: Art. 6 Abs. 1 lit. f DSGVO; Cookies auf Basis Ihrer Einwilligung: Art. 6 Abs. 1 lit. a DSGVO.",
          "Sie koennen Ihre Einwilligung jederzeit widerrufen.",
        ],
      },
      {
        heading: "7. Analyse- und Marketing-Tools (falls genutzt)",
        body: [
          "Sofern Analyse- oder Marketing-Tools (z. B. Google Analytics, Meta Pixel, LinkedIn Ads etc.) eingesetzt werden, erfolgt dies nur auf Grundlage Ihrer Einwilligung.",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO",
        ],
      },
      {
        heading: "8. Ihre Rechte",
        body: ["Sie haben jederzeit das Recht auf:"],
        list: [
          "Auskunft (Art. 15 DSGVO)",
          "Berichtigung (Art. 16 DSGVO)",
          "Loeschung (Art. 17 DSGVO)",
          "Einschraenkung der Verarbeitung (Art. 18 DSGVO)",
          "Datenuebertragbarkeit (Art. 20 DSGVO)",
          "Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO)",
          "Ausserdem haben Sie ein Beschwerderecht bei der zustaendigen Datenschutzaufsichtsbehoerde.",
        ],
      },
      {
        heading: "9. SSL- bzw. TLS-Verschluesselung",
        body: [
          "Diese Seite nutzt aus Sicherheitsgruenden und zum Schutz der Uebertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschluesselung.",
        ],
      },
      {
        heading: "10. Aenderung dieser Datenschutzerklaerung",
        body: [
          "Wir behalten uns vor, diese Datenschutzerklaerung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.",
        ],
      },
    ],
  },
  {
    slug: "agb",
    title: "Allgemeine Geschaeftsbedingungen (AGB)",
    sections: [
      {
        heading: "1. Geltungsbereich",
        body: [
          "Diese Allgemeinen Geschaeftsbedingungen (AGB) gelten fuer alle Vertraege zwischen der",
          "Axis Horizon GmbH",
          "Vulkanstrasse 12C",
          "10367 Berlin",
          "– nachfolgend „Anbieter“ –",
          "und ihren Kunden, soweit nicht ausdruecklich schriftlich etwas anderes vereinbart wurde.",
          "Abweichende Bedingungen des Kunden finden keine Anwendung, es sei denn, der Anbieter stimmt ihrer Geltung ausdruecklich schriftlich zu.",
        ],
      },
      {
        heading: "2. Leistungen des Anbieters",
        body: [
          "Der Anbieter erbringt Dienstleistungen im Bereich Marketing, Beratung, Strategie, Werbung, Online-Marketing, Social Media, Performance-Marketing und verwandter Leistungen.",
          "Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot, Vertrag oder der Leistungsbeschreibung.",
          "Der Anbieter schuldet keinen konkreten wirtschaftlichen Erfolg (z. B. Umsatzsteigerung, Leads, Reichweite), sondern die vereinbarte Dienstleistung.",
        ],
      },
      {
        heading: "3. Vertragsschluss",
        body: [
          "Ein Vertrag kommt zustande durch:",
          "schriftliche Bestaetigung eines Angebots (per E-Mail ausreichend),",
          "Unterzeichnung eines Vertrags,",
          "oder durch Beginn der Leistungserbringung.",
          "Angebote sind freibleibend, sofern nicht ausdruecklich als verbindlich gekennzeichnet.",
        ],
      },
      {
        heading: "4. Mitwirkungspflichten des Kunden",
        body: [
          "Der Kunde verpflichtet sich, alle fuer die Leistungserbringung erforderlichen Informationen, Inhalte und Zugaenge rechtzeitig bereitzustellen.",
          "Verzoegerungen oder Mehrkosten, die durch fehlende oder verspaetete Mitwirkung entstehen, gehen nicht zulasten des Anbieters.",
        ],
      },
      {
        heading: "5. Verguetung und Zahlungsbedingungen",
        body: [
          "Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben.",
          "Rechnungen sind innerhalb von 14 Tagen ohne Abzug zur Zahlung faellig.",
          "Der Anbieter ist berechtigt, Leistungen bis zum Zahlungseingang zurueckzuhalten.",
        ],
      },
      {
        heading: "6. Haftung",
        body: [
          "Der Anbieter haftet nur fuer Schaeden, die auf vorsaetzlichem oder grob fahrlaessigem Verhalten beruhen.",
          "Bei leichter Fahrlaessigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), und zwar begrenzt auf den vorhersehbaren, vertragstypischen Schaden.",
          "Eine Haftung fuer entgangenen Gewinn, Umsatzausfaelle oder mittelbare Schaeden ist ausgeschlossen, soweit gesetzlich zulaessig.",
        ],
      },
      {
        heading: "7. Gewaehrleistung und Erfolgsausschluss",
        body: [
          "Marketing- und Beratungsleistungen unterliegen Schwankungen und externen Faktoren (z. B. Plattform-Algorithmen, Marktverhalten).",
          "Der Anbieter uebernimmt keine Garantie fuer bestimmte Ergebnisse oder wirtschaftlichen Erfolg.",
        ],
      },
      {
        heading: "8. Nutzungsrechte",
        body: [
          "Sofern nicht anders vereinbart, erhaelt der Kunde nach vollstaendiger Zahlung ein einfaches, nicht uebertragbares Nutzungsrecht an den erstellten Leistungen.",
          "Eine Weitergabe an Dritte oder Bearbeitung bedarf der vorherigen schriftlichen Zustimmung des Anbieters.",
        ],
      },
      {
        heading: "9. Vertragslaufzeit und Kuendigung",
        body: [
          "Sofern eine feste Laufzeit vereinbart ist, verlaengert sich der Vertrag nicht automatisch, wenn nichts anderes geregelt ist.",
          "Das Recht zur ausserordentlichen Kuendigung aus wichtigem Grund bleibt unberuehrt.",
        ],
      },
      {
        heading: "10. Vertraulichkeit",
        body: [
          "Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit bekannt gewordenen vertraulichen Informationen geheim zu halten.",
        ],
      },
      {
        heading: "11. Datenschutz",
        body: [
          "Der Anbieter verarbeitet personenbezogene Daten ausschliesslich im Rahmen der geltenden Datenschutzgesetze.",
          "Weitere Informationen sind der Datenschutzerklaerung auf der Website zu entnehmen.",
        ],
      },
      {
        heading: "12. Schlussbestimmungen",
        body: [
          "Es gilt das Recht der Bundesrepublik Deutschland.",
          "Gerichtsstand ist – soweit gesetzlich zulaessig – Berlin.",
          "Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der uebrigen Regelungen unberuehrt.",
        ],
      },
    ],
  },
  {
    slug: "cookie-einstellungen",
    title: "Cookie-Einstellungen",
    sections: [
      {
        heading: "Verwendung von Cookies",
        body: [
          "Unsere Website verwendet Cookies und aehnliche Technologien. Diese dienen dazu, unsere Website technisch bereitzustellen, Funktionen anzubieten sowie – sofern Sie einwilligen – unser Marketing und unsere Analyse zu verbessern.",
          "Cookies sind kleine Textdateien, die auf Ihrem Endgeraet gespeichert werden.",
        ],
      },
      {
        heading: "Kategorien von Cookies",
        body: ["Notwendige Cookies"],
        list: [
          "Diese Cookies sind erforderlich, damit die Website ordnungsgemaess funktioniert (z. B. Seitennavigation, Sicherheit, Spracheinstellungen).",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO",
          "Einwilligung erforderlich: Nein",
        ],
      },
      {
        body: ["Funktionale Cookies"],
        list: [
          "Diese Cookies ermoeglichen erweiterte Funktionen und Personalisierung (z. B. Speicherung von Praeferenzen).",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO",
          "Einwilligung erforderlich: Ja",
        ],
      },
      {
        body: ["Statistik / Analyse Cookies"],
        list: [
          "Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen (z. B. Seitenaufrufe, Verweildauer), um unser Angebot zu verbessern.",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO",
          "Einwilligung erforderlich: Ja",
        ],
      },
      {
        body: ["Marketing Cookies"],
        list: [
          "Diese Cookies werden verwendet, um Besuchern relevante Werbung anzuzeigen und Marketingkampagnen zu messen (z. B. Google Ads, Meta Pixel, LinkedIn Ads).",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO",
          "Einwilligung erforderlich: Ja",
        ],
      },
      {
        heading: "Einwilligung und Widerruf",
        body: [
          "Beim ersten Besuch unserer Website werden Sie ueber ein Cookie-Banner um Ihre Einwilligung gebeten.",
          "Sie koennen: Ihre Einwilligung jederzeit widerrufen, Ihre Cookie-Einstellungen aendern.",
          "Dies ist jederzeit ueber den Button „Cookie-Einstellungen“ auf unserer Website moeglich.",
        ],
      },
      {
        heading: "Speicherdauer",
        body: [
          "Die Speicherdauer der Cookies variiert je nach Art und Zweck.",
          "Session-Cookies werden nach Ende Ihres Besuchs automatisch geloescht.",
          "Persistente Cookies bleiben gespeichert, bis Sie diese loeschen oder die Speicherdauer ablaeuft.",
        ],
      },
      {
        heading: "Drittanbieter",
        body: [
          "Sofern Drittanbieter-Cookies eingesetzt werden, koennen Daten an Drittlaender (z. B. USA) uebertragen werden.",
          "Dies erfolgt ausschliesslich auf Grundlage Ihrer ausdruecklichen Einwilligung.",
          "Weitere Informationen finden Sie in unserer Datenschutzerklaerung.",
        ],
      },
    ],
  },
];
