import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="main-footer footer-style-one overflow-hidden">
      <div className="widgets-section">
        <div className="anim-icons">
          <div className="image-1 bounce-x">
            <img src="assets/images/icons/shape-style53.png" alt="Shape Icon" />
          </div>
          <div className="image-2 bounce-y">
            <img src="assets/images/icons/shape-style53.png" alt="Shape Icon" />
          </div>
        </div>
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="footer-column col-lg-5">
                <div className="footer-widget about-widget wow fadeInLeft">
                  <h1 className="title">Lass uns reden</h1>
                  <div className="widget-content">
                    <div className="text">
                      Wir helfen Unternehmen dabei, digital zu wachsen – mit
                      klarer
                      <br className="d-none d-xl-block" />
                      Strategie, starkem Design und messbaren Ergebnissen.n.
                    </div>
                    <div className="social-widget">
                      <ul className="social-icon-list1">
                        <li>
                          <Link href="https://www.linkedin.com/company/axis-horizon" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.facebook.com/646493791872312?ref=_xav_ig_profile_page_web" aria-label="Facebook">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.tiktok.com/@axishorizongmbh" aria-label="TikTok">
                            <i className="fab fa-tiktok" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.instagram.com/axishorizonglobal/" aria-label="Instagram">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-column col-lg-2">
                <div
                  className="footer-widget links-widget col wow fadeInLeft"
                  data-wow-delay="100ms"
                >
                  <h5 className="widget-title">Unsere Leistungen</h5>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li>
                        <Link href="/web-development">Webentwicklung</Link>
                      </li>
                      <li>
                        <Link href="/creative-design">Kreatives Design</Link>
                      </li>
                      <li>
                        <Link href="/mobile-app-development">Mobile App-Entwicklung</Link>
                      </li>
                      <li>
                        <Link href="/ecommerce-solutions">E-Commerce-Lösungen</Link>
                      </li>
                      <li>
                        <Link href="/contact">Kontakt</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-column col-lg-5">
                <div
                  className="footer-widget subscribe-widget wow fadeInLeft"
                  data-wow-delay="200ms"
                >
                  <h5 className="text">
                    Lassen Sie sich inspirieren und gewinnen Sie neue Einblicke.
                  </h5>
                  <div className="subscribe-form-one">
                    <form method="post" action="#">
                      <div
                        className="form-group"
                        style={{ position: "relative" }}
                      >
                        <label htmlFor="emailaddress" className="sr-only">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="emailaddress"
                          name="emailaddress"
                          className="email"
                          placeholder="E-Mail-Adresse"
                          required
                        />
                        <button
                          type="submit"
                          className="theme-btn"
                          aria-label="Submit email"
                        >
                          <i className="icon flaticon-paper-plane"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="row">
                    <div
                      className="footer-widget col wow fadeInLeft"
                      data-wow-delay="400ms"
                    >
                      <h5 className="widget-title">Adresse</h5>
                      <div className="widget-content">
                        <div className="text">
                          Vulkanstraße 12 C,{" "}
                          <br className="d-none d-lg-block" />
                           10365 Berlin
                        </div>
                      </div>
                    </div>
                    <div
                      className="footer-widget col wow fadeInLeft"
                      data-wow-delay="400ms"
                    >
                      <h5 className="widget-title">Unterstützung</h5>
                      <div className="widget-content">
                        <div className="text">
                          info@axishorizonglobal.de{" "}
                          <br className="d-none d-lg-block" />
                          +49 1521 2384897
                        </div>
                      </div>
                    </div>
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
                © {new Date().getFullYear()} Alle Rechte vorbehalten Axishorizon GmbH
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
