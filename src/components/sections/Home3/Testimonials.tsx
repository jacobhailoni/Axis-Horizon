import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  navigation: {
    clickable: true,
    prevEl: ".testimonial-arry-prev",
    nextEl: ".testimonial-arry-next",
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
    1350: {
      slidesPerView: 4,
    },
  },
};

function Testimonials() {
  return (
    <>
      <section className="testimonial-section-three">
        <div className="scroll-text">
          <div className="title-stroke-text text1 fadeInUpBig">
            <span>REFER</span>ENZEN
          </div>
        </div>
        <div className="anim-icons">
          <div className="image-1 tm-gsap-animate-circle">
            <img src="assets/images/icons/pattern-6.png" alt="Image" />
          </div>
          <div className="image-2">
            <img src="assets/images/icons/shape-style9.png" alt="Image" />
          </div>
        </div>
        <div className="outer-box">
          <div className="container">
            <div className="sec-title">
              <div className="row">
                <div className="col-xxl-6 col-xl-7 col-lg-8">
                  <span className="sub-title">KUNDENFEEDBACK</span>
                  <h2 className="title">
                    Erfahren Sie, was unsere Kunden{" "}
                    <span className="color1">
                      über die Zusammenarbeit mit uns sagen.
                    </span>
                  </h2>
                </div>
                <div className="col-xxl-4 col-xl-5 col-lg-4 offset-xxl-2">
                  <div className="testimonial-arry">
                    <button className="arry-prev testimonial-arry-prev">
                      <i className="fa-light fa-solid fa-angle-left"></i>
                    </button>
                    <button className="arry-next testimonial-arry-next">
                      <i className="fa-light fa-solid fa-angle-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper testimonial-swiper-two">
              <Swiper {...swiperOptions} className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-block-three">
                    <div className="inner-box">
                      <div className="review">
                        <div className="title">5.0</div>
                        <div className="rating">
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p className="text">
                        „Die Zusammenarbeit war von Anfang an professionell
                        und zielgerichtet. Unsere Online-Sichtbarkeit hat sich
                        innerhalb weniger Wochen deutlich verbessert. Klare
                        Empfehlung!“
                      </p>
                      <div className="info-box">
                        <div className="user-thumb"></div>
                        <div className="user-info">
                          <h4 className="name">Anna Müller</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-block-three">
                    <div className="inner-box">
                      <div className="review">
                        <div className="title">5.0</div>
                        <div className="rating">
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p className="text">
                        „Endlich ein Marketing-Partner, der unsere Marke
                        wirklich verstanden hat. Kreativ, zuverlässig und
                        messbare Ergebnisse – genau das, was wir gesucht
                        haben.“
                      </p>
                      <div className="info-box">
                        <div className="user-thumb"></div>
                        <div className="user-info">
                          <h4 className="name">Markus Schneider</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-block-three">
                    <div className="inner-box">
                      <div className="review">
                        <div className="title">5.0</div>
                        <div className="rating">
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p className="text">
                        „Dank der strategischen Beratung und der starken
                        Umsetzung konnten wir deutlich mehr Kunden gewinnen.
                        Sehr kompetentes Team mit frischen Ideen.“
                      </p>
                      <div className="info-box">
                        <div className="user-thumb"></div>
                        <div className="user-info">
                          <h4 className="name">Laura Becker</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-block-three">
                    <div className="inner-box">
                      <div className="review">
                        <div className="title">5.0</div>
                        <div className="rating">
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p className="text">
                        „Top Service und schnelle Kommunikation. Unsere
                        Kampagnen performen besser als je zuvor. Man merkt,
                        dass hier echte Marketing-Profis am Werk sind.“
                      </p>
                      <div className="info-box">
                        <div className="user-thumb"></div>
                        <div className="user-info">
                          <h4 className="name">Daniel Weber</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-block-three">
                    <div className="inner-box">
                      <div className="review">
                        <div className="title">5.0</div>
                        <div className="rating">
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                          <i className="icon fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p className="text">
                        „Modernes Marketing, klare Prozesse und transparente
                        Ergebnisse. Die Zusammenarbeit hat unser Unternehmen
                        auf das nächste Level gebracht.“
                      </p>
                      <div className="info-box">
                        <div className="user-thumb"></div>
                        <div className="user-info">
                          <h4 className="name">Sophie Krüger</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
