import React from "react";

function Contact() {
  return (
    <>
      <section className="contact-section style-four pt-0">
        <div className="anim-icons">
          <div className="image-1">
            <img src="assets/images/icons/section-bg-shape6.png" alt="Image" />
          </div>
        </div>
        <div className="outer-box">
          <div
            className="bg bg-image"
            style={{
              backgroundImage:
                "url(assets/images/icons/section-bg-shape13.png)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="content-column col-lg-6 col-xl-6">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title wow fadeInUp">
                      <img
                        className="icon-img"
                        src="assets/images/icons/sub-title-shape.png"
                        alt="Image"
                      />
                      KONTAKT AUFNEHMEN
                    </span>
                    <h2 className="title wow fadeInUp">
                      Erfolg ist Teamarbeit{" "}
                      <span className="color1">
                        lassen Sie uns ihn gemeinsam erreichen
                      </span>
                    </h2>
                  </div>
                  <div className="contact-info">
                    <h6 className="email">marketing@axisgorizon.com</h6>
                    <h3 className="phone">(+49) 000 000 000</h3>
                  </div>
                </div>
              </div>
              <div className="form-column col-lg-6 col-xl-6">
                <div className="inner-column">
                  <div className="contact-form wow fadeInLeft">
                    <form method="post" action="/" id="contact-form">
                      <div className="row">
                        <div className="form-group col-lg-6 col-md-6">
                          <label htmlFor="fName">Name *</label>
                          <input
                            type="text"
                            id="fName"
                            name="fName"
                            placeholder="Your Full Name"
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <label htmlFor="eAddress">E-Mail-Adresse</label>
                          <input
                            type="email"
                            id="eAddress"
                            name="eAddress"
                            placeholder="E-Mail-Adresse"
                            required
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <label htmlFor="ysubject">Betreff *</label>
                          <input
                            type="text"
                            id="ysubject"
                            name="ysubject"
                            placeholder="Ihr Betreff"
                          />
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <label htmlFor="ybudget">Ihr Budget</label>
                          <input
                            type="text"
                            id="ybudget"
                            name="ybudget"
                            placeholder="Ihr Budget"
                          />
                        </div>
                        <div className="form-group col-lg-12">
                          <label htmlFor="yMessage">Nachricht</label>
                          <textarea
                            name="yMessage"
                            id="yMessage"
                            placeholder="Nachricht schreiben"
                            rows={2}
                          ></textarea>
                        </div>
                        <div className="form-group col-lg-12">
                          <button
                            type="submit"
                            className="theme-btn btn-style-four"
                            name="submit-form"
                          >
                            <span className="btn-title">Nachricht senden</span>
                            <span className="dot-box">
                              <span className="dot-item"></span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
