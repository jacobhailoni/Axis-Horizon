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
            <span>Zeug</span>nis
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
                  <span className="sub-title">Unsere Erfahrungsberichte</span>
                  <h2 className="title">
                    Hören Sie, was andere über eine
                    <span className="color1">Partnerschaft mit uns sagen.</span>
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
                        Wir können das Team dort gar nicht genug loben. Sie
                        haben unsere Vision aufgegriffen und in eine
                        atemberaubende Website umgesetzt, die unsere Vision
                        perfekt einfängt.
                      </p>
                      <div className="info-box">
                        <div className="user-thumb">
                          
                        </div>
                        <div className="user-info">
                          <h4 className="name">Tina Brown</h4>
                          <span className="designation">DESIGNER</span>
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
                        Sie haben unsere Vision aufgegriffen und in eine
                        atemberaubende Website umgesetzt, die unsere Vision
                        perfekt einfängt. Der Prozess war nahtlos, und sie
                        hielten uns informiert.
                      </p>
                      <div className="info-box">
                        <div className="user-thumb">
                          
                        </div>
                        <div className="user-info">
                          <h4 className="name">Theresa Webb</h4>
                          <span className="designation">DESIGNER</span>
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
                        Ich kann nicht genug gute Dinge über das Team bei Axis
                        Horizon sagen. Sie haben unsere Vision aufgegriffen und
                        in eine atemberaubende Website umgesetzt, die unsere
                        Vision perfekt einfängt.
                      </p>
                      <div className="info-box">
                        <div className="user-thumb">
                          
                        </div>
                        <div className="user-info">
                          <h4 className="name">Ralph Edwards</h4>
                          <span className="designation">DESIGNER</span>
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
                        Wir können nicht genug gute Dinge über das Team bei Axis
                        Horizon sagen. Sie haben unsere Vision aufgegriffen und
                        in eine atemberaubende Website umgesetzt, die unsere
                        Vision perfekt einfängt.
                      </p>
                      <div className="info-box">
                        <div className="user-thumb">
                          
                        </div>
                        <div className="user-info">
                          <h4 className="name">Wade Warren</h4>
                          <span className="designation">DESIGNER</span>
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
                        Sie haben unsere Vision aufgegriffen und in eine
                        atemberaubende Website umgesetzt, die unsere Vision
                        perfekt einfängt. Der Prozess war reibungslos, und sie
                        hielten uns stets informiert.
                      </p>
                      <div className="info-box">
                        <div className="user-thumb">
                          
                        </div>
                        <div className="user-info">
                          <h4 className="name">Wade Warren</h4>
                          <span className="designation">DESIGNER</span>
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
