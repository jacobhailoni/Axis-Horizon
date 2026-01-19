import React from "react";

const ContactPage = () => {
  return (
    <>
      <section className="contact-details pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title"> Senden Sie uns eine E-Mail</span>

                <h2>Feel free to write</h2>
              </div>
              <form
                id="contact_form"
                name="contact_form"
                className=""
                action="/"
                method="post"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_name"
                        className="form-control"
                        type="text"
                        placeholder="Geben Sie den Namen ein"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_email"
                        className="form-control required email"
                        type="email"
                        placeholder="Geben Sie die E-Mail ein"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_subject"
                        className="form-control required"
                        type="text"
                        placeholder="Geben Sie den Betreff ein"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="form_phone"
                        className="form-control"
                        type="text"
                        placeholder="Geben Sie die Telefonnummer ein"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    name="form_message"
                    className="form-control required"
                    rows={7}
                    placeholder="Geben Sie die Nachricht ein"
                  ></textarea>
                </div>
                <div className="mb-5">
                  <input
                    name="form_botcheck"
                    className="form-control"
                    type="hidden"
                    value=""
                  />
                  <button
                    type="submit"
                    className="theme-btn btn-style-one mb-3 mb-xl-0"
                    data-loading-text="Bitte warten..."
                  >
                    <span className="btn-title">Nachricht senden</span>
                  </button>
                  <button
                    type="reset"
                    className="theme-btn btn-style-one bg-theme-color5"
                  >
                    <span className="btn-title">Reset</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">Brauchen Sie Hilfe?</span>
                  <h2>Mit uns in Kontakt treten</h2>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmod tempor.
                  </div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li className="d-flex align-items-center mb-4">
                    <div className="icon">
                      <span className="fal fa-phone-plus"></span>
                    </div>
                    <div className="text ms-3">
                      <h4>Haben Sie Fragen?</h4>
                      <a href="tel:+4915212384897">
                        <span>Free</span> +49 152 12384897
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-4">
                    <div className="icon">
                      <span className="fal fa-envelope"></span>
                    </div>
                    <div className="text ms-3">
                      <h4>E-Mail schreiben</h4>
                      <a href="mailto:info@axishorizon.com">
                        info@axishorizon.com
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="icon">
                      <span className="fal fa-location-arrow"></span>
                    </div>
                    <div className="text ms-3">
                      <h4>Besuchen Sie uns jederzeit</h4>
                      <span>Vulkanstraße 12 C, 10365 Berlin</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map-section">
        <iframe
          className="map w-100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2307.074816662526!2d13.4917912!3d52.530374200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f51dfc2e123%3A0xca8b6c6781bb62e8!2sAxis%20Horizon%20GmbH!5e1!3m2!1sen!2sae!4v1768802543908!5m2!1sen!2sae"
          title="Google Map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
};

export default ContactPage;
