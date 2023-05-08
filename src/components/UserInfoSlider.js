import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const UserInfoSlider = () => {
  return (
    <>
      <section className="trusted-by-millions">
        <div className="testimonial-slider">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="testimonial slide-1">
                <div className="slide-image">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:serif="http://www.serif.com/" width="100px" height="100px" viewBox="0 0 334 334"
                                version="1.1" xml:space="preserve"
                                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <rect x="0" y="0" width="333.333" height="333.333" style="fill:#b08652;" />
                                <clipPath id="_clip1">
                                    <rect x="0" y="0" width="333.333" height="333.333" />
                                </clipPath>
                                <g clip-path="url(#_clip1)">
                                    <circle cx="166.667" cy="102.367" r="57.15" style="fill:#fff;fill-opacity:0.5;" />
                                    <ellipse cx="166.877" cy="318.75" rx="138.4" ry="146.733"
                                        style="fill:#fff;fill-opacity:0.5;" />
                                </g>
                            </svg> */}
                </div>
                <div className="slide-content">
                  <div className="person-detail">
                    <h3>love penguins</h3>
                    <h5>2022-04-22</h5>
                    <div className="review-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>my grandson is just so happy</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial slide-2">
                <div className="slide-image">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:serif="http://www.serif.com/" width="100px" height="100px" viewBox="0 0 334 334"
                                version="1.1" xml:space="preserve"
                                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <rect x="0" y="0" width="333.333" height="333.333" style="fill:#52b096;" />
                                <clipPath id="_clip1">
                                    <rect x="0" y="0" width="333.333" height="333.333" />
                                </clipPath>
                                <g clip-path="url(#_clip1)">
                                    <circle cx="166.667" cy="102.367" r="57.15" style="fill:#fff;fill-opacity:0.5;" />
                                    <ellipse cx="166.877" cy="318.75" rx="138.4" ry="146.733"
                                        style="fill:#fff;fill-opacity:0.5;" />
                                </g>
                            </svg> */}
                </div>
                <div className="slide-content">
                  <div className="person-detail">
                    <h3>Alda E. Anduze</h3>
                    <h5>2022-04-08</h5>
                    <div className="review-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <p>The kids had a great time with tgis</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial slide-3">
                <div className="slide-image">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:serif="http://www.serif.com/" width="100px" height="100px" viewBox="0 0 334 334"
                                version="1.1" xml:space="preserve"
                                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <rect x="0" y="0" width="333.333" height="333.333" style="fill:#529ab0;" />
                                <clipPath id="_clip1">
                                    <rect x="0" y="0" width="333.333" height="333.333" />
                                </clipPath>
                                <g clip-path="url(#_clip1)">
                                    <circle cx="166.667" cy="102.367" r="57.15" style="fill:#fff;fill-opacity:0.5;" />
                                    <ellipse cx="166.877" cy="318.75" rx="138.4" ry="146.733"
                                        style="fill:#fff;fill-opacity:0.5;" />
                                </g>
                            </svg> */}
                </div>
                <div className="slide-content">
                  <div className="person-detail">
                    <h3>Zebra finch owner</h3>
                    <h5>2022-04-07</h5>
                    <div className="review-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>6 year old grandson loved it!</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial slide-4">
                <div className="slide-image">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:serif="http://www.serif.com/" width="100px" height="100px" viewBox="0 0 334 334"
                                version="1.1" xml:space="preserve"
                                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <rect x="0" y="0" width="333.333" height="333.333" style="fill:#b05291;" />
                                <clipPath id="_clip1">
                                    <rect x="0" y="0" width="333.333" height="333.333" />
                                </clipPath>
                                <g clip-path="url(#_clip1)">
                                    <circle cx="166.667" cy="102.367" r="57.15" style="fill:#fff;fill-opacity:0.5;" />
                                    <ellipse cx="166.877" cy="318.75" rx="138.4" ry="146.733"
                                        style="fill:#fff;fill-opacity:0.5;" />
                                </g>
                            </svg> */}
                </div>
                <div className="slide-content">
                  <div className="person-detail">
                    <h3>SC</h3>
                    <h5>2022-03-04</h5>
                    <div className="review-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>He loved it</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial slide-5">
                <div className="slide-image">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:serif="http://www.serif.com/" width="100px" height="100px" viewBox="0 0 334 334"
                                version="1.1" xml:space="preserve"
                                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <rect x="0" y="0" width="333.333" height="333.333" style="fill:#b08652;" />
                                <clipPath id="_clip1">
                                    <rect x="0" y="0" width="333.333" height="333.333" />
                                </clipPath>
                                <g clip-path="url(#_clip1)">
                                    <circle cx="166.667" cy="102.367" r="57.15" style="fill:#fff;fill-opacity:0.5;" />
                                    <ellipse cx="166.877" cy="318.75" rx="138.4" ry="146.733"
                                        style="fill:#fff;fill-opacity:0.5;" />
                                </g>
                            </svg> */}
                </div>
                <div className="slide-content">
                  <div className="person-detail">
                    <h3>rayna</h3>
                    <h5>2022-03-03</h5>
                    <div className="review-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>Great product</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial slide-6">
                <div className="slide-image">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:serif="http://www.serif.com/" width="100px" height="100px" viewBox="0 0 334 334"
                                version="1.1" xml:space="preserve"
                                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <rect x="0" y="0" width="333.333" height="333.333" style="fill:#52b096;" />
                                <clipPath id="_clip1">
                                    <rect x="0" y="0" width="333.333" height="333.333" />
                                </clipPath>
                                <g clip-path="url(#_clip1)">
                                    <circle cx="166.667" cy="102.367" r="57.15" style="fill:#fff;fill-opacity:0.5;" />
                                    <ellipse cx="166.877" cy="318.75" rx="138.4" ry="146.733"
                                        style="fill:#fff;fill-opacity:0.5;" />
                                </g>
                            </svg> */}
                </div>
                <div className="slide-content">
                  <div className="person-detail">
                    <h3>rayna</h3>
                    <h5>2022-03-03</h5>
                    <div className="review-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>Ordered to many mistake</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial slide-7">
                <div className="slide-image">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:serif="http://www.serif.com/" width="100px" height="100px" viewBox="0 0 334 334"
                                version="1.1" xml:space="preserve"
                                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <rect x="0" y="0" width="333.333" height="333.333" style="fill:#52b096;" />
                                <clipPath id="_clip1">
                                    <rect x="0" y="0" width="333.333" height="333.333" />
                                </clipPath>
                                <g clip-path="url(#_clip1)">
                                    <circle cx="166.667" cy="102.367" r="57.15" style="fill:#fff;fill-opacity:0.5;" />
                                    <ellipse cx="166.877" cy="318.75" rx="138.4" ry="146.733"
                                        style="fill:#fff;fill-opacity:0.5;" />
                                </g>
                            </svg> */}
                </div>
                <div className="slide-content">
                  <div className="person-detail">
                    <h3>TestyMama</h3>
                    <h5>2022-03-02</h5>
                    <div className="review-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>Delivered as promised</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial slide-8">
                <div className="slide-image">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:serif="http://www.serif.com/" width="100px" height="100px" viewBox="0 0 334 334"
                                version="1.1" xml:space="preserve"
                                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <rect x="0" y="0" width="333.333" height="333.333" style="fill:#b08652;" />
                                <clipPath id="_clip1">
                                    <rect x="0" y="0" width="333.333" height="333.333" />
                                </clipPath>
                                <g clip-path="url(#_clip1)">
                                    <circle cx="166.667" cy="102.367" r="57.15" style="fill:#fff;fill-opacity:0.5;" />
                                    <ellipse cx="166.877" cy="318.75" rx="138.4" ry="146.733"
                                        style="fill:#fff;fill-opacity:0.5;" />
                                </g>
                            </svg> */}
                </div>
                <div className="slide-content">
                  <div className="person-detail">
                    <h3>Carolyn Buckner</h3>
                    <h5>2022-02-26</h5>
                    <div className="review-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>
                      The merchandise was delivered very quickly and sooner than
                      originally promised
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial slide-9">
                <div className="slide-image">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:serif="http://www.serif.com/" width="100px" height="100px" viewBox="0 0 334 334"
                                version="1.1" xml:space="preserve"
                                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                <rect x="0" y="0" width="333.333" height="333.333" style="fill:#52b096;" />
                                <clipPath id="_clip1">
                                    <rect x="0" y="0" width="333.333" height="333.333" />
                                </clipPath>
                                <g clip-path="url(#_clip1)">
                                    <circle cx="166.667" cy="102.367" r="57.15" style="fill:#fff;fill-opacity:0.5;" />
                                    <ellipse cx="166.877" cy="318.75" rx="138.4" ry="146.733"
                                        style="fill:#fff;fill-opacity:0.5;" />
                                </g>
                            </svg> */}
                </div>
                <div className="slide-content">
                  <div className="person-detail">
                    <h3>Amazon Customer</h3>
                    <h5>2022-02-26</h5>
                    <div className="review-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <p>Good service.</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default UserInfoSlider;
