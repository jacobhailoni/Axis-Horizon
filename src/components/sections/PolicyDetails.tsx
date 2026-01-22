import React from "react";
import { PolicyDetailData } from "../../data/policies";

interface PolicyDetailsProps {
  policy: PolicyDetailData;
}

const PolicyDetails: React.FC<PolicyDetailsProps> = ({ policy }) => {
  return (
    <section className="services-details pt-120 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10">
            <div className="services-details__content position-relative overflow-hidden px-3">
              <h2 className="mt-2">{policy.title}</h2>
              {policy.sections.map((section, index) => (
                <div className="content mt-40" key={index}>
                  {section.heading ? <h3>{section.heading}</h3> : null}
                  {section.body?.map((paragraph, paragraphIndex) => (
                    <p className="text" key={paragraphIndex}>
                      {paragraph}
                    </p>
                  ))}
                  {section.list?.length ? (
                    <ul className="list-style-one mt-3">
                      {section.list.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.link ? (
                    <p className="text">
                      <a href={section.link.href}>{section.link.label}</a>
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyDetails;
