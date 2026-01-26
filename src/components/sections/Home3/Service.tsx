import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceProps {
  className?: string;
}

const Service: React.FC<ServiceProps> = ({ className }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  const services = [
  {
    title: "Webentwicklung",
    category: "Moderne & skalierbare Websites",
    icon: "theme-icon16.png",
    delay: 0.2,
    url: "/web-development",
    slug: "web-development",
    description:
      "Wir entwickeln performante, skalierbare Websites, die nicht nur gut aussehen, sondern Besucher gezielt in Kunden verwandeln – technisch sauber, schnell und zukunftssicher.",
  },
  {
    title: "Digitales Marketing",
    category: "Performance & Wachstum",
    icon: "theme-icon17.png",
    delay: 0.4,
    url: "/digital-marketing",
    slug: "digital-marketing",
    description:
      "Datengetriebenes Marketing für messbare Ergebnisse. Wir steigern Reichweite, Leads und Umsatz durch klare Strategien, gezielte Kampagnen und kontinuierliche Optimierung.",
  },
  {
    title: "Entwicklung mobiler Apps",
    category: "iOS & Android Lösungen",
    icon: "theme-icon18.png",
    delay: 0.6,
    url: "/mobile-app-development",
    slug: "mobile-app-development",
    description:
      "Maßgeschneiderte Mobile Apps für iOS und Android – intuitiv, leistungsstark und perfekt auf Ihre Geschäftsziele abgestimmt.",
  },
  {
    title: "Social Media Management",
    category: "Content & Community",
    icon: "theme-icon16.png",
    delay: 0.6,
    url: "/social-media-management",
    slug: "social-media-management",
    description:
      "Wir entwickeln strategischen Social-Media-Content, bauen aktive Communities auf und sorgen für echte Interaktion – markengerecht, konsistent und messbar.",
  },
  {
    title: "Kreatives Design",
    category: "Branding & visuelle Identität",
    icon: "theme-icon17.png",
    delay: 0.6,
    url: "/creative-design",
    slug: "creative-design",
    description:
      "Wir gestalten starke Markenauftritte mit Wiedererkennungswert – von Logo und Corporate Design bis hin zu modernen Visuals, die überzeugen.",
  },
  {
    title: "Online-Shop Lösungen",
    category: "E-Commerce & Conversion",
    icon: "theme-icon18.png",
    delay: 0.6,
    url: "/ecommerce-solutions",
    slug: "ecommerce-solutions",
    description:
      "Wir entwickeln performante Online-Shops, die Nutzer überzeugen und Verkäufe steigern – optimiert für Conversion, Skalierung und Wachstum.",
  },
];


  return (
    <section className={`services-section-four ${className || ""}`}>
      <div className="scroll-text">
        <div className="title-stroke-text text1 fadeInUpBig">
          <span>unsere </span>Leistungen
        </div>
      </div>
      <div className="outer-box">
        <div className="container">
          <div className="row">
            {services.map((item, index) => (
              <div key={index} className="service-block-four col-xl-4 col-md-6">
                <motion.div
                  className="inner-box"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={item.delay}
                  variants={fadeUp}
                >
                  <div className="content-box">
                    <h4 className="title">
                      <Link href={item.url}>{item.title}</Link>
                    </h4>
                    <div className="category">{item.category}</div>
                    <div className="icon-box">
                      <img
                        className="icon-img"
                        src={`assets/images/icons/${item.icon}`}
                        alt="Icon"
                      />
                    </div>
                    <div className="text">
                      {item.description}
                    </div>
                    <Link className="btn-link" href={item.url}>
                      <i className="icon fa-solid fa-arrow-down-right"></i>
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
