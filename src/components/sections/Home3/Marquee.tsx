import React from "react";

function Marquee() {
  return (
    <>
      <section className="marquee-section">
        <div className="marquee">
          <div className="marquee-group">
            <h2 className="text" data-text="Web design">
              Webentwicklung
            </h2>
            <h2 className="text" data-text="Project & Product Consulting">
              Performance Marketing
            </h2>
            <h2 className="text" data-text="Mobile App Development">
              App-Entwicklung
            </h2>
            <h2 className="text" data-text="Development">
              Social Media
            </h2>
          </div>
          <div aria-hidden="true" className="marquee-group">
            <h2 className="text" data-text="Web design">
              Branding & Design
            </h2>
            <h2 className="text" data-text="Project & Product Consulting">
              Online-Shops
            </h2>
            <h2 className="text" data-text="Mobile App Development">
              Wartung & Support
            </h2>
            <h2 className="text" data-text="Web design">
              Webentwicklung
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
export default Marquee;
