import React from "react";
import Link from "next/link";
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";

function ThankYouPage() {
  return (
    <Layout HeaderStyle="three" FooterStyle="three">
      <PageTitle pageName="Danke" />
      <section className="contact-section style-four pt-0 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="sec-title text-center mb-40">
                <span className="sub-title">Vielen Dank</span>
                <h2 className="title">Wir haben Ihre Anfrage erhalten</h2>
                <p className="text">
                  Wir melden uns so schnell wie moglich bei Ihnen. Wenn es
                  dringend ist, konnen Sie uns gern direkt anrufen.
                </p>
              </div>
              <div className="text-center">
                <Link href="/" className="theme-btn btn-style-four">
                  <span className="btn-title">Zur Startseite</span>
                  <span className="dot-box">
                    <span className="dot-item"></span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ThankYouPage;
