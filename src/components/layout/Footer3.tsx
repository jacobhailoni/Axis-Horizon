import React from "react";
import Link from "next/link";

function Footer3() {
  return (
    <footer className="main-footer footer-style-three">
      <div className="widgets-section">
        <div className="anim-icons">
          <div className="image-1 circleZoom">
            <img src="/assets/images/icons/theme-icon39.png" alt="Theme Icon" />
          </div>
        </div>

        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-widget about-widget">
                <div className="logo">
                  <img src="/assets/images/logo-2.png" alt="Company Logo" />
                </div>
                <div className="widget-content">
                  <div className="text">
                    Wir helfen Unternehmen dabei, digital zu wachsen – mit
                    klarer Strategie, starkem Design und messbaren
                    Ergebnissen.n.
                  </div>
                  <div className="social-widget">
                    <ul className="social-icon-list1">
                      {/* <li>
                        <Link
                          href="https://twitter.com"
                          target="_blank"
                          aria-label="Twitter"
                        >
                          <i className="fab fa-twitter" />
                        </Link>
                      </li> */}
                      <li>
                        <Link
                          href="https://www.facebook.com/646493791872312?ref=_xav_ig_profile_page_web"
                          target="_blank"
                          aria-label="Facebook"
                        >
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.linkedin.com/company/axis-horizon"
                          target="_blank"
                          aria-label="LinkedIn"
                        >
                          <i className="fab fa-linkedin" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.instagram.com/axishorizonglobal/"
                          target="_blank"
                          aria-label="Instagram"
                        >
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.tiktok.com/@axishorizongmbh"
                          target="_blank"
                          aria-label="tiktok"
                        >
                          <i className="fab fa-tiktok" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="text mt-5">
                    <b className="text-white">HRB 275044 B</b> <br />
                    <b className="text-white">USt-IdNr. DE455957479</b> <br />
                    <b className="text-white">37/213/53929</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-widget links-widget">
                <h5 className="widget-title">Unsere Leistungen</h5>
                <ul className="user-links">
                  <li>
                    <Link href="/">Webentwicklung</Link>
                  </li>
                  <li>
                    <Link href="/">UI/UX Design</Link>
                  </li>
                  <li>
                    <Link href="/">Mobile App-Entwicklung</Link>
                  </li>
                  <li>
                    <Link href="/">Digitales Marketing</Link>
                  </li>
                  <li>
                    <Link href="/">SEO-Optimierung</Link>
                  </li>
                  <li>
                    <Link href="/">E-Commerce-Lösungen</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-widget links-widget">
                <h5 className="widget-title">Rechtliches</h5>
                <ul className="user-links">
                  <li>
                    <Link href="/">Impressum</Link>
                    <Link href="/">Datenschutzerklärung</Link>
                    <Link href="/">AGB</Link>
                    <Link href="/">Cookie-Einstellungen</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-widget links-widget">
                <h5 className="widget-title">Kontakt</h5>
                <div className="widget-content">
                  <div className="contact-info-box">
                    <div className="icon-box">
                      <i className="fa fa-envelope" />
                    </div>
                    <div className="content-box">
                      <h6 className="title">E-Mail:</h6>
                      <p>
                        <Link
                          href="mailto:info@axishorizonglobal.com"
                          className="link"
                        >
                          info@axishorizonglobal.com
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="contact-info-box">
                    <div className="icon-box">
                      <i className="fa fa-map-marker-alt" />
                    </div>
                    <div className="content-box">
                      <h6 className="title">Adresse:</h6>
                      <Link
                        href="https://maps.app.goo.gl/3apQE64PvjwXjnVD7"
                        className="link"
                      >
                        Vulkanstraße 12 C, 10365 Berlin
                      </Link>
                    </div>
                  </div>
                  <div className="contact-info-box">
                    <div className="icon-box">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="content-box">
                      <h6 className="title">Telefon:</h6>
                      <p>
                        <Link href="tel:+4915212384897" className="link">
                          +49 1521 2384897
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="inner-container justify-content-center">
                <p className="copyright-text">
                  © {new Date().getFullYear()} All rights reserved by Axis
                  Horizon GmbH.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer3;
