import React, { useEffect, useState } from "react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "UI/UX Design",
    icon: "flaticon-paint-roller",
    Image: "service-ui-ux-design.png",
    description:
      "Wir gestalten intuitive Benutzeroberflächen mit klarer Struktur, die Nutzer gezielt führen und Conversions nachhaltig steigern.",
    details: [
      { label: "Corporate Identity", value: "UI/UX Design" },
      { label: "Visuelle Planung", value: "Wireframes & Prototypen" },
      { label: "Rebranding", value: "Brand Experience" },
      { label: "Design-Systeme", value: "" },
    ],
    detailsLink: "#",
  },
  {
    number: "02",
    title: "Webentwicklung",
    icon: "flaticon-mobile-development",
    Image: "service-web-development.png",
    description:
      "Wir entwickeln moderne, performante Websites mit sauberem Code – optimiert für Geschwindigkeit, SEO und langfristige Skalierbarkeit.",
    details: [
      { label: "Frontend", value: "React / Next.js" },
      { label: "Backend", value: "APIs & CMS" },
      { label: "Performance", value: "Core Web Vitals" },
      { label: "Sicherheit", value: "Best Practices" },
    ],
    detailsLink: "#",
  },
  {
    number: "03",
    title: "SEO-Marketing",
    icon: "flaticon-seo",
    Image: "service-seo-optimization.png",
    description:
      "Wir optimieren Ihre Website gezielt für bessere Sichtbarkeit, qualifizierten Traffic und nachhaltiges Wachstum in den Suchmaschinen.",
    details: [
      { label: "On-Page SEO", value: "Technik & Content" },
      { label: "Keyword-Strategie", value: "Markt & Wettbewerb" },
      { label: "Content SEO", value: "Struktur & Relevanz" },
      { label: "Reporting", value: "Messbare Ergebnisse" },
    ],
    detailsLink: "#",
  },
  {
    number: "04",
    title: "Videoproduktion",
    icon: "flaticon-film",
    Image: "service-video-production.png",
    description:
      "Wir produzieren professionelle Videos für starke Markenauftritte, Social Media und performanceorientierte Kampagnen",
    details: [
      { label: "Konzept", value: "Story & Skript" },
      { label: "Produktion", value: "Video & Animation" },
      { label: "Postproduktion", value: "Schnitt & Effekte" },
      { label: "Formate", value: "Web & Social Media" },
    ],
    detailsLink: "#",
  },
  {
    number: "05",
    title: "Digitales Marketing",
    icon: "flaticon-seo",
    Image: "service-digital-marketing.png",
    description:
      "Wir entwickeln strategisches Online-Marketing zur gezielten Lead-Generierung und skalierbaren Weiterentwicklung von Marken.",
    details: [
      { label: "Performance Ads", value: "Google & Meta" },
      { label: "Strategie", value: "Funnel & Ziele" },
      { label: "Tracking", value: "Daten & KPIs" },
      { label: "Optimierung", value: "Kontinuierlich" },
    ],
    detailsLink: "#",
  },
  {
    number: "06",
    title: "Entwicklung mobiler Apps",
    icon: "flaticon-mobile-development",
    Image: "service-mobile-app-development.png",
    description:
      "Wir entwickeln individuelle Mobile Apps für iOS und Android – mit Fokus auf Performance, Nutzererlebnis und Skalierbarkeit.",
    details: [
      { label: "Plattformen", value: "iOS & Android" },
      { label: "Technologie", value: "Cross-Platform" },
      { label: "UX", value: "Mobile-first Design" },
      { label: "Integration", value: "APIs & Systeme" },
    ],
    detailsLink: "#",
  },
  {
    number: "07",
    title: "Social Media Management",
    icon: "flaticon-paint-roller",
    Image: "service-social-media-management.png",
    description:
      "Wir planen, erstellen und verwalten Social-Media-Inhalte für nachhaltige Reichweite, Engagement und Community-Aufbau.",
    details: [
      { label: "Content", value: "Posts & Reels" },
      { label: "Redaktionsplan", value: "Struktur & Timing" },
      { label: "Community", value: "Interaktion & Wachstum" },
      { label: "Analyse", value: "Performance Insights" },
    ],
    detailsLink: "#",
  },
  {
    number: "08",
    title: "Kreatives Design",
    icon: "flaticon-paint-roller",
    Image: "service-creative-design.png",
    description:
      "Wir entwickeln visuelle Konzepte, die Marken klar positionieren und nachhaltige Wiedererkennung schaffen.",
    details: [
      { label: "Branding", value: "Visuelle Identität" },
      { label: "Grafikdesign", value: "Digital & Print" },
      { label: "Kampagnen", value: "Key Visuals" },
      { label: "Design-Assets", value: "" },
    ],
    detailsLink: "#",
  },
  {
    number: "09",
    title: "Online-Shop-Lösungen",
    icon: "flaticon-mobile-development",
    Image: "service-ecommerce-solutions.png",
    description:
      "Wir entwickeln E-Commerce-Lösungen, die verkaufen – von der technischen Umsetzung bis zur Conversion-Optimierung.",
    details: [
      { label: "Plattformen", value: "Shopify & Custom" },
      { label: "UX", value: "Conversion-orientiert" },
      { label: "Zahlungen", value: "Sichere Systeme" },
      { label: "Skalierung", value: "Wachstum & Performance" },
    ],
    detailsLink: "#",
  },
  {
    number: "10",
    title: "Wartung & Support",
    icon: "flaticon-seo",
    Image: "service-maintenance-support.png",
    description:
      "Wir sorgen für die zuverlässige Betreuung, Wartung und Sicherheit von Websites, Apps und digitalen Systemen.",
    details: [
      { label: "Updates", value: "System & Sicherheit" },
      { label: "Monitoring", value: "Stabilität" },
      { label: "Support", value: "Schnelle Reaktion" },
      { label: "Optimierung", value: "Laufend" },
    ],
    detailsLink: "#",
  },
];

function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ once: true, duration: 1000 });
      AOS.refreshHard();
    });
  }, []);

  return (
    <section className="services-section-three">
      <div className="anim-icons">
        <div className="image-1">
          <img
            src="assets/images/icons/section-bg-shape6.png"
            alt="Background"
          />
        </div>
      </div>

      <div className="container">
        <div className="sec-title">
          <div className="row">
            <div className="col-lg-7">
              <span className="sub-title wow fadeInUp">
                <img
                  className="icon-img"
                  src="assets/images/icons/sub-title-shape.png"
                  alt="Shape"
                />
                Dienstleistungen
              </span>
              <h2 className="title mb-lg-0 wow fadeInUp">
                Digitale Lösungen, <br />
                die Ihr Unternehmen <span>voranbringen</span>
              </h2>
            </div>
            <div className="col-lg-5">
              <div className="text">
                Wir entwickeln digitale Lösungen, die Marken sichtbar machen,
                Prozesse optimieren und messbares Wachstum ermöglichen. Von
                Strategie und Design bis zur Umsetzung und Betreuung – alles aus
                einer Hand.
              </div>
              <Link href="/services" className="theme-btn btn-style-four">
                <span className="btn-title">Alle Leistungen</span>
                <span className="dot-box">
                  <span className="dot-item"></span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="outer-box">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                className="service-block-three"
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={200 + index * 100}
              >
                <div
                  className={`inner-box ${isActive ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="title-box">
                    <div className="number">
                      <span>{service.number}</span>
                    </div>
                    <div className="title">{service.title}</div>
                    <div className="icon-box">
                      <i className={`icon ${service.icon}`}></i>
                    </div>
                  </div>
                  {isActive && (
                    <div className="content-box">
                      <div className="row">
                        <div className="image-column col-lg-6">
                          <div className="inner-column">
                            <figure className="image">
                              <img
                                src={`assets/images/resource/${service.Image}`}
                                alt={service.title}
                              />
                            </figure>
                            <div className="icon-box">
                              <Link href="/services">
                                <i className="icon flaticon-right-down"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content-column col-lg-5">
                          <div className="inner-column">
                            <div className="text">{service.description}</div>

                            {Array.isArray(service.details) &&
                              service.details.length > 0 && (
                                <div className="info-list">
                                  {service.details.map((item, i) => (
                                    <div className="list-item" key={i}>
                                      <span>{item.label}</span>
                                      {item.value ? ` ${item.value}` : ""}
                                    </div>
                                  ))}
                                </div>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default ServiceSection;
