import Link from "next/link";
import React from "react";
import Accordion from "../elements/Accordion";
import { ServiceDetailData } from "../../data/services";

interface ServiceDetailsProps {
  service: ServiceDetailData;
  services: ServiceDetailData[];
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  service,
  services,
}) => {
  return (
    <section className="services-details pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="service-sidebar">
              <div className="sidebar-widget service-sidebar-single">
                <div className="sidebar-service-list">
                  <ul>
                    {services.map((eachitem) => (
                      <li key={eachitem.slug}>
                        <Link
                          className={
                            eachitem.slug === service.slug ? "current" : ""
                          }
                          href={`/${eachitem.slug}`}
                        >
                          <i className="fas fa-angle-right" />
                          <span>{eachitem.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-details-help">
                  <div className="help-shape-1" />
                  <div className="help-shape-2" />
                  <h2 className="help-title">
                    Kontaktieren <br /> Sie uns für <br />
                    jegliche Beratung.
                  </h2>
                  <div className="help-icon">
                    <span className="fa-regular fa-headset" />
                  </div>
                  <div className="help-contact">
                    <p>Brauchen Sie Hilfe? Sprechen Sie mit einem Experten.</p>
                    <a href="tel:+49 1521 2384897">+49 1521 2384897</a>
                  </div>
                </div>
                <div className="sidebar-widget service-sidebar-single mt-4">
                  <div
                    className="service-sidebar-single-btn wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="1200m"
                  >
                    <Link href="" className="theme-btn btn-style-one d-grid">
                      <span className="btn-title">
                        <span className="fas fa-file-pdf"></span>Unser Profil
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="services-details__content position-relative overflow-hidden px-3">
              <img
                className="w-100"
                src={service.heroImage}
                alt={service.title}
              />
              <h3 className="mt-4">{service.overviewTitle}</h3>
              {service.overview.map((paragraph, index) => (
                <p className="text" key={index}>
                  {paragraph}
                </p>
              ))}
              <div className="content mt-40">
                <div className="text">
                  <h3>{service.centerTitle}</h3>
                  <p className="text">{service.centerText}</p>
                  <blockquote className="blockquote-one">
                    {service.blockquote}
                  </blockquote>
                </div>
                <div className="feature-list mt-4">
                  <div className="row clearfix">
                    {service.features.map((feature, index) => (
                      <div
                        className="col-lg-6 col-md-6 col-sm-12 column"
                        key={index}
                      >
                        <img
                          className="mb-3 w-100"
                          src={feature.image}
                          alt={feature.alt || service.title}
                        />
                        <p className="text">{feature.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="innerpage mt-25">
                <h3>{service.faqTitle}</h3>
                <p className="text">{service.faqIntro}</p>
                <Accordion items={service.faqItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
