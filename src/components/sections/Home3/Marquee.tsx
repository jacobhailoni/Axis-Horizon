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
              Digital Marketing
            </h2>
            <h2 className="text" data-text="Mobile App Development">
              Entwicklung mobiler Apps
            </h2>
            <h2 className="text" data-text="Development">
              Social Media Management
            </h2>
          </div>
          <div aria-hidden="true" className="marquee-group">
            <h2 className="text" data-text="Web design">
              Kreatives Design
            </h2>
            <h2 className="text" data-text="Project & Product Consulting">
              Online-Shop Lösungen
            </h2>
            <h2 className="text" data-text="Mobile App Development">
              Wartung & Support
            </h2>
            <h2 className="text" data-text="Project & Product Consulting">
              Digital Marketing
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
export default Marquee;
