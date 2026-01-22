export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceFeature {
  image: string;
  text: string;
  alt?: string;
}

export interface ServiceDetailData {
  slug: string;
  title: string;
  heroImage: string;
  overviewTitle: string;
  overview: string[];
  centerTitle: string;
  centerText: string;
  blockquote: string;
  features: ServiceFeature[];
  faqTitle: string;
  faqIntro: string;
  faqItems: ServiceFaqItem[];
}

export const serviceDetails: ServiceDetailData[] = [
  {
    slug: "web-development",
    title: "Webentwicklung",
    heroImage: "assets/images/resource/service-details.jpg",
    overviewTitle: "Professionelle Webentwicklungs-Services",
    overview: [
      "Verwandeln Sie Ihre Geschäftsidee in eine starke digitale Präsenz mit unseren umfassenden Webentwicklungs-Services. Wir sind spezialisiert auf die Entwicklung individueller Websites, Web-Applikationen und digitaler Plattformen für kleine Unternehmen und Startups. Unser Entwicklerteam nutzt moderne Technologien wie React, Angular, Vue.js, Node.js, PHP, Python und .NET, um skalierbare, sichere und leistungsstarke Lösungen zu realisieren.",
      "Ob Unternehmenswebsite, E-Commerce-Plattform, individuelle Web-Applikation oder Content-Management-System – wir liefern messbare Ergebnisse. Unser Entwicklungsprozess kombiniert agile Methoden mit bewährten Standards. Von responsivem Design und Browser-Kompatibilität bis hin zu API-Integrationen und Datenbank-Optimierung übernehmen wir alle technischen Aufgaben. Wir arbeiten mit WordPress, Shopify, Magento, Drupal und maßgeschneiderten Lösungen."
    ],
    centerTitle: "Full-Stack-Entwicklungskompetenz",
    centerText:
      "Unser Team aus erfahrenen Entwicklern bietet End-to-End-Services – von der Konzeption über Design und Entwicklung bis hin zu Testing, Deployment und Support. Transparente Kommunikation und verlässliche Ergebnisse stehen dabei im Fokus.",
    blockquote:
      "Ihre Website ist Ihr digitales Schaufenster. Wir entwickeln Lösungen, die Besucher in Kunden verwandeln.",
    features: [
      {
        image: "assets/images/resource/service-d1.jpg",
        text: "Individuelle Web-Applikationen mit modernen Frameworks wie React, Angular, Vue.js und Next.js für maximale Performance und Skalierbarkeit.",
        alt: "Individuelle Webentwicklung"
      },
      {
        image: "assets/images/resource/service-d2.jpg",
        text: "Responsives Webdesign für alle Geräte. Mobile-First-Ansatz, schnelle Ladezeiten und optimale Nutzererlebnisse auf Desktop, Tablet und Smartphone.",
        alt: "Responsives Webdesign"
      }
    ],
    faqTitle: "Häufig gestellte Fragen",
    faqIntro:
      "Antworten auf die wichtigsten Fragen zu unseren Webentwicklungs-Services, Technologien und Projektabläufen.",
    faqItems: [
      {
        question: "Welche Technologien nutzen Sie für die Webentwicklung?",
        answer:
          "Wir arbeiten mit React, Angular, Vue.js, Next.js, Node.js, PHP, Python, Django, Laravel, .NET und Ruby on Rails. Für CMS-Lösungen setzen wir auf WordPress, Drupal und Joomla. Die Technologie wird immer passend zu Ihren Anforderungen ausgewählt."
      },
      {
        question: "Wie lange dauert die Entwicklung einer Website?",
        answer:
          "Eine einfache Unternehmenswebsite benötigt in der Regel 4–6 Wochen. Komplexe Web-Applikationen dauern etwa 8–16 Wochen. Der genaue Zeitplan wird vor Projektstart definiert."
      },
      {
        question: "Bieten Sie Wartung und Support an?",
        answer:
          "Ja. Wir bieten Wartungspakete mit Sicherheitsupdates, Fehlerbehebungen, Performance-Optimierung und regelmäßigen Updates. Der Betrieb bleibt stabil und sicher."
      },
      {
        question: "Sind API- und Drittanbieter-Integrationen möglich?",
        answer:
          "Ja. Wir integrieren Zahlungsanbieter, CRM-Systeme, Marketing-Tools, Analyse-Services und individuelle APIs wie Stripe, PayPal, HubSpot oder Salesforce."
      }
    ]
  },
  {
    slug: "digital-marketing",
    title: "Digitales Marketing",
    heroImage: "assets/images/resource/service-details.jpg",
    overviewTitle: "Ergebnisorientierte Digital-Marketing-Services",
    overview: [
      "Steigern Sie Ihr Wachstum mit datenbasierten Digital-Marketing-Strategien für kleine Unternehmen und Startups. Wir bieten SEO, PPC-Werbung, Content-Marketing, E-Mail-Marketing, Conversion-Optimierung und Online-Reputationsmanagement.",
      "Unser Fokus liegt auf messbarem ROI. Wir betreuen Google Ads, Social-Media-Werbung, Local SEO und Performance-Tracking mit professionellen Tools wie Google Analytics, SEMrush und Ahrefs."
    ],
    centerTitle: "Ganzheitliche Marketinglösungen",
    centerText:
      "Alle Marketingkanäle arbeiten zusammen, um Sichtbarkeit, Leads und Umsatz zu steigern. Klare KPIs sorgen für transparente Ergebnisse.",
    blockquote:
      "Digitales Marketing bedeutet nicht nur online zu sein – sondern gefunden und gewählt zu werden.",
    features: [
      {
        image: "assets/images/resource/service-d1.jpg",
        text: "Suchmaschinenoptimierung für bessere Rankings, mehr organischen Traffic und nachhaltige Sichtbarkeit bei Google.",
        alt: "SEO-Services"
      },
      {
        image: "assets/images/resource/service-d2.jpg",
        text: "Gezielte PPC-Kampagnen auf Google, Facebook, Instagram und LinkedIn mit optimierten Kosten und hoher Conversion-Rate.",
        alt: "PPC-Werbung"
      }
    ],
    faqTitle: "Häufig gestellte Fragen",
    faqIntro:
      "Antworten auf typische Fragen zu unseren Digital-Marketing-Strategien und Ergebnissen.",
    faqItems: [
      {
        question: "Welche Digital-Marketing-Leistungen bieten Sie an?",
        answer:
          "SEO, Google Ads, Social-Media-Ads, Content-Marketing, E-Mail-Marketing, Conversion-Optimierung und Reputationsmanagement."
      },
      {
        question: "Wann sehe ich erste Ergebnisse?",
        answer:
          "PPC-Kampagnen liefern oft innerhalb weniger Tage Resultate. SEO zeigt erste Effekte nach 2–3 Monaten und wächst langfristig."
      },
      {
        question: "Wie messen Sie den Erfolg?",
        answer:
          "Wir messen Traffic, Leads, Conversions, Kosten pro Lead und ROI. Alle Ergebnisse werden transparent berichtet."
      },
      {
        question: "Ist Digital-Marketing auch für kleine Budgets sinnvoll?",
        answer:
          "Ja. Wir entwickeln Strategien, die auch mit begrenzten Budgets messbare Ergebnisse erzielen."
      }
    ]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Entwicklung",
    heroImage: "assets/images/resource/service-details.jpg",
    overviewTitle: "Professionelle Mobile-App-Entwicklung",
    overview: [
      "Wir entwickeln leistungsstarke mobile Apps für iOS, Android und Cross-Platform. Ideal für Startups und Unternehmen, die digitale Produkte skalieren möchten.",
      "Von MVPs bis hin zu komplexen Business-Apps übernehmen wir Design, Entwicklung, Testing und Store-Veröffentlichung."
    ],
    centerTitle: "Native & Cross-Platform-Lösungen",
    centerText:
      "Wir entwickeln Apps mit React Native, Flutter, Swift und Kotlin für maximale Performance und Nutzerfreundlichkeit.",
    blockquote:
      "In einer mobilen Welt ist Ihre App der direkte Draht zu Ihren Kunden.",
    features: [
      {
        image: "assets/images/resource/service-d1.jpg",
        text: "Cross-Platform-Apps mit React Native und Flutter für iOS und Android mit einer gemeinsamen Codebasis.",
        alt: "Cross-Platform App-Entwicklung"
      },
      {
        image: "assets/images/resource/service-d2.jpg",
        text: "Native iOS- und Android-Apps für höchste Performance und Geräteintegration.",
        alt: "Native App-Entwicklung"
      }
    ],
    faqTitle: "Häufig gestellte Fragen",
    faqIntro:
      "Antworten zu Kosten, Technologien und Entwicklungsdauer von Mobile Apps.",
    faqItems: [
      {
        question: "Native oder Cross-Platform?",
        answer:
          "Cross-Platform ist kosteneffizient. Native Apps eignen sich für sehr komplexe Anforderungen."
      },
      {
        question: "Wie lange dauert die Entwicklung?",
        answer:
          "Ein MVP dauert ca. 8–12 Wochen. Komplexe Apps mehrere Monate."
      },
      {
        question: "Übernehmen Sie die App-Store-Veröffentlichung?",
        answer:
          "Ja. Wir kümmern uns um Apple App Store und Google Play inkl. Richtlinien und Optimierung."
      },
      {
        question: "Sind spätere Updates möglich?",
        answer:
          "Ja. Wir bieten laufende Weiterentwicklung und Support."
      }
    ]
  },
  {
    slug: "social-media-management",
    title: "Social-Media-Management",
    heroImage: "assets/images/resource/service-details.jpg",
    overviewTitle: "Professionelles Social-Media-Management",
    overview: [
      "Wir betreuen Ihre Social-Media-Kanäle strategisch und kreativ – von Content-Planung bis Community-Management.",
      "Ziel ist mehr Reichweite, Engagement und qualifizierte Leads."
    ],
    centerTitle: "Strategisches Social-Media-Wachstum",
    centerText:
      "Individuelle Strategien, konsistenter Content und messbare Ergebnisse für Ihre Marke.",
    blockquote:
      "Social Media lebt von Beziehungen – nicht nur von Beiträgen.",
    features: [
      {
        image: "assets/images/resource/service-d1.jpg",
        text: "Content-Erstellung mit Grafiken, Videos, Reels und Texten für jede Plattform.",
        alt: "Social-Media-Content"
      },
      {
        image: "assets/images/resource/service-d2.jpg",
        text: "Community-Management und aktiver Dialog mit Ihrer Zielgruppe.",
        alt: "Community Management"
      }
    ],
    faqTitle: "Häufig gestellte Fragen",
    faqIntro:
      "Antworten rund um Social-Media-Strategien und Performance.",
    faqItems: [
      {
        question: "Welche Plattformen sind sinnvoll?",
        answer:
          "Das hängt von Zielgruppe und Branche ab. Wir beraten individuell."
      },
      {
        question: "Wie oft wird gepostet?",
        answer:
          "Abhängig von Plattform und Strategie – Qualität steht immer vor Quantität."
      },
      {
        question: "Erstellen Sie auch Videos?",
        answer:
          "Ja. Reels, Stories und Kurzvideos gehören fest zu unserem Angebot."
      },
      {
        question: "Wie messen Sie Erfolg?",
        answer:
          "Über Reichweite, Engagement, Klicks, Leads und Conversions."
      }
    ]
  },
  {
    slug: "creative-design",
    title: "Kreatives Design",
    heroImage: "assets/images/resource/service-details.jpg",
    overviewTitle: "Professionelle Design-Services",
    overview: [
      "Wir gestalten starke Markenauftritte mit Fokus auf Wiedererkennung und Conversion.",
      "Von Branding über UI/UX bis hin zu Marketingmaterialien liefern wir durchdachte Designlösungen."
    ],
    centerTitle: "Design mit Strategie",
    centerText:
      "Klares Design, konsistente Markenführung und nutzerzentrierte Gestaltung.",
    blockquote:
      "Design ist die visuelle Stimme Ihrer Marke.",
    features: [
      {
        image: "assets/images/resource/service-d1.jpg",
        text: "Branding, Logos, Farben, Typografie und Design-Guidelines.",
        alt: "Brand Design"
      },
      {
        image: "assets/images/resource/service-d2.jpg",
        text: "UI/UX-Design für Websites und Apps mit Fokus auf Nutzerfreundlichkeit.",
        alt: "UI UX Design"
      }
    ],
    faqTitle: "Häufig gestellte Fragen",
    faqIntro:
      "Antworten zu Designprozessen und Deliverables.",
    faqItems: [
      {
        question: "Liefern Sie offene Dateien?",
        answer:
          "Ja. Alle Projekte enthalten editierbare Quelldateien."
      },
      {
        question: "Sind Überarbeitungen möglich?",
        answer:
          "Ja. Feedback-Schleifen sind fester Bestandteil."
      },
      {
        question: "Können Sie bestehende Marken weiterführen?",
        answer:
          "Ja. Wir arbeiten sowohl mit bestehenden als auch neuen Marken."
      },
      {
        question: "Wie lange dauert ein Designprojekt?",
        answer:
          "Logos ca. 1–2 Wochen, komplette Markenauftritte 4–8 Wochen."
      }
    ]
  },
  {
    slug: "ecommerce-solutions",
    title: "E-Commerce-Lösungen",
    heroImage: "assets/images/resource/service-details.jpg",
    overviewTitle: "Professionelle E-Commerce-Entwicklung",
    overview: [
      "Wir entwickeln verkaufsstarke Online-Shops mit Shopify, WooCommerce, Magento und individuellen Lösungen.",
      "Alles aus einer Hand – von Setup über Design bis Conversion-Optimierung."
    ],
    centerTitle: "Umsatzorientierte Online-Shops",
    centerText:
      "Optimierte Kaufprozesse, sichere Zahlungen und hohe Conversion-Raten.",
    blockquote:
      "Ihr Online-Shop ist Ihr Verkäufer – rund um die Uhr.",
    features: [
      {
        image: "assets/images/resource/service-d1.jpg",
        text: "Individuelle Shop-Funktionen wie Produktvarianten, Rabatte und Warenkorb-Optimierung.",
        alt: "E-Commerce Entwicklung"
      },
      {
        image: "assets/images/resource/service-d2.jpg",
        text: "Sichere Zahlungsintegration mit Kreditkarten, Wallets und lokalen Anbietern.",
        alt: "Zahlungsintegration"
      }
    ],
    faqTitle: "Häufig gestellte Fragen",
    faqIntro:
      "Antworten zu Plattformen, Funktionen und Sicherheit.",
    faqItems: [
      {
        question: "Welche Plattform ist die richtige?",
        answer:
          "Shopify für schnellen Start, WooCommerce für Flexibilität, Magento für große Shops."
      },
      {
        question: "Wie lange dauert der Launch?",
        answer:
          "In der Regel 3–6 Wochen."
      },
      {
        question: "Ist der Shop mobil optimiert?",
        answer:
          "Ja. Alle Shops sind vollständig responsive."
      },
      {
        question: "Ist der Shop sicher?",
        answer:
          "Ja. SSL, sichere Zahlungen und regelmäßige Updates sind Standard."
      }
    ]
  },
  {
    slug: "maintenance-support",
    title: "Wartung & Support",
    heroImage: "assets/images/resource/service-details.jpg",
    overviewTitle: "Zuverlässige Wartungs- und Support-Services",
    overview: [
      "Wir sorgen dafür, dass Ihre Website, App oder Plattform sicher, schnell und stabil läuft.",
      "Proaktive Wartung, Updates und technischer Support entlasten Ihr Team."
    ],
    centerTitle: "Proaktiver technischer Support",
    centerText:
      "Schnelle Reaktionszeiten, kontinuierliche Überwachung und transparente Betreuung.",
    blockquote:
      "Regelmäßige Wartung verhindert teure Ausfälle.",
    features: [
      {
        image: "assets/images/resource/service-d1.jpg",
        text: "Sicherheitsüberwachung, Backups und Schutz vor Cyber-Bedrohungen.",
        alt: "Sicherheitswartung"
      },
      {
        image: "assets/images/resource/service-d2.jpg",
        text: "Performance-Optimierung für schnelle Ladezeiten und bessere Nutzererlebnisse.",
        alt: "Performance Optimierung"
      }
    ],
    faqTitle: "Häufig gestellte Fragen",
    faqIntro:
      "Antworten zu Wartungspaketen und Support-Leistungen.",
    faqItems: [
      {
        question: "Was ist im Wartungspaket enthalten?",
        answer:
          "Backups, Updates, Sicherheitschecks, Performance-Optimierung und Support."
      },
      {
        question: "Wie schnell reagieren Sie?",
        answer:
          "Kritische Probleme werden innerhalb einer Stunde bearbeitet."
      },
      {
        question: "Bieten Sie Notfall-Support?",
        answer:
          "Ja, auch außerhalb der Geschäftszeiten."
      },
      {
        question: "Betreuen Sie auch fremde Projekte?",
        answer:
          "Ja. Unabhängig davon, wer das Projekt ursprünglich erstellt hat."
      }
    ]
  }
];
