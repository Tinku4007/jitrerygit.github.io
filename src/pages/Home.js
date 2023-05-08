import React from "react";
import "./globle.css";
import "../components/HeaderGlobal.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import UserInfoSlider from "../components/UserInfoSlider";

const Home = () => {
  return (
    <>
      {/* <!-- -----------------------header end------------------ --> */}

      <div className="home-header-banner">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div
              className="item active home-banner-slide-1"
              id="item-1"
              nr-slide="0"
            >
              <div className="container">
                <img src="img/img-dino-track-glow.webp" alt="" width="100%" />
                <div className="circule-glow">
                  <img
                    src="img/circle-glow-in-the-dark.webp"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="chid-div">
                  <img
                    src="img/dino-track-lights-on-off-1.webp"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="saur-car-track">
                  <img src="img/extras-dino-track.webp" alt="" width="100%" />
                </div>
                <div className="first-slider-btn track-safari-dino-btn">
                  <a href="">SHOP NOW</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item home-banner-slide-2" id="item-2" nr-slide="1">
              <div className="container">
                <div className="voltroid-flex">
                  <div className="voiltred-img">
                    <div className="logo-robo-solide">
                      <img src="img/logo-robotryx.webp" alt="" width="100%" />
                    </div>
                    <img src="img/voltroid.webp" alt="" width="100%" />
                    <div className="second-slide-btn">
                      <a href="">
                        SHOP
                        <strong>
                          NOW
                          <span>
                            <i className="fa-solid fa-angle-right"></i>
                          </span>
                        </strong>
                      </a>
                    </div>
                  </div>
                  <div className="voiltred-robo">
                    <img
                      src="img/voltroid-banner-photo.webp"
                      alt=""
                      width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item home-banner-slide-3" id="item-3" nr-slide="2">
              <div className="container">
                <div className="buy-slider-amazon">
                  <div className="buy-prime-alider">
                    <h4>
                      GET YOUR FAVORITE
                      <br />
                      PRODUCTS WITH
                    </h4>

                    <div className="fast-free">
                      <h2>
                        FAST, FREE
                        <br />
                        SHIPPING &<br />
                        RETURNS
                        <br />
                        <span style={{ fontSize: "36px" }}>THROUGH</span>
                      </h2>
                    </div>
                    <div className="amazon-slider-content">
                      <h1>AMAZON PRIME</h1>
                    </div>
                    <div className="amazon-slider-shipping">
                      <h5>
                        1 BUSINESS DAY SHIPPING*
                        <br />
                        ON ELEGIBLE PRODUCTS
                      </h5>
                    </div>
                  </div>
                  <div className="buy-prime-slider-img">
                    <img src="img/img-banner-ppal.jpg" alt="" width="100%" />
                  </div>
                </div>
                <div className="amazon-slider-btn">
                  <a href="">Buy WITH PRIME NOW</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <section>
        <div className="container">
          <div className="service">
            <div className="service-box">
              <div className="service-icon">
                <i className="fa-solid fa-user-shield"></i>
              </div>
              <div className="service-caption">
                <h5>
                  <strong> TRUSTED BY MILLIONS</strong>
                </h5>
                <div className="divider"></div>
                <p>
                  Millions of customers & <strong>4.5+ star rating</strong> on
                  every online platform. Check us out on all major marketplaces!
                </p>
              </div>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <i className="fa-solid fa-truck-ramp-box"></i>
              </div>
              <div className="service-caption">
                <h5>
                  <strong> FREE 2-DAY SHIPPING</strong>
                </h5>
                <div className="divider"></div>
                <p>
                  Get your products quicker. All orders of{" "}
                  <strong>$50.00*</strong> or more get fast, free shipping. on
                  JitteryGit.com
                </p>
              </div>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <i className="fa-solid fa-rotate-left"></i>
              </div>
              <div className="service-caption">
                <h5>
                  <strong> 30 DAY MONEY BACK GUARANTEE</strong>
                </h5>
                <div className="divider"></div>
                <p>
                  Our priority is to see our customers satisfied and{" "}
                  <strong>100% happy</strong> with their JitteryGit purchase.
                </p>
              </div>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <i className="fa-solid fa-award"></i>
              </div>
              <div className="service-caption">
                <h5>
                  <strong>DURABLE S.T.E.M. TOYS</strong>
                </h5>
                <div className="divider"></div>
                <p>
                  {" "}
                  <strong>Great quality toys</strong> that last. The best kind
                  of learning happens when they’re having fun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="EXCLUSIVE-DEALS">
        <div className="container">
          <div className="exclisive">
            <div className="EXCLUSIVE-DEALS_icon">
              <i
                className="fa-regular fa-envelope"
                style={{ color: "#eb0064", fontSize: "2.85em" }}
              ></i>
            </div>
            <div className="exclusive_caption">
              <strong>
                <h2>
                  EXCLUSIVE <span style={{ color: "#eb0064" }}> DEALS </span>
                </h2>
              </strong>
              <p>
                Subscribe to our newsletter and get access to our
                <br />
                <strong>
                  <span style={{ color: "#eb0064" }}> VIP CLUB</span>, sales,
                  latest products and news.
                </strong>{" "}
              </p>
            </div>
            <div className="exclusive-signup">
              <input type="Email" name="" id="" placeholder="Type your email" />
              <input type="Submit" value="SIGN ME UP" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="robo_section">
            <div className="robo-logo">
              <img src="img/logo-robotryx (1).webp" alt="" />
            </div>
            <div className="robo-caption">
              <p>
                Build the future with your own hands, and watch as your bots
                come to life. Collect all <br /> of our unique character, 3-in-1
                building sets. The Robotryx Guardians are out of this <br />{" "}
                world & the Robotryx Heroes Squad will fight crime and save the
                day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="robot">
            <div className="robot-box-blue">
              <div className="robo-image-blue">
                <img
                  src="img/main-banner-robotryx-homepage-2.webp"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
            <div className="btn-image">
              <div className="robot-box">
                <div className="robo-image">
                  <h3>CLIFFSLING</h3>
                  <img
                    src="img/robot-green-detail-1.webp"
                    alt=""
                    width="100%"
                  />
                  <div className="robo-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <p>4.8 (306)</p>
                  </div>
                  <div className="robo-price">
                    <h6>$12.99</h6>
                  </div>
                  <div
                    className="robo-btn"
                    style={{ backgroundImage: "img/Cliffsling-bg-boton.png" }}
                  >
                    <a href="">
                      Buy Now{" "}
                      <span>
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="robot-box">
                <div className="robo-image">
                  <h3>GRINDBURST</h3>
                  <img
                    src="img/robot-red-main-image.webp"
                    alt=""
                    width="100%"
                  />
                  <div className="robo-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <p>4.8 (306)</p>
                  </div>
                  <div className="robo-price">
                    <h6>$12.99</h6>
                  </div>
                  <div
                    className="robo-btn"
                    id="robo-btn"
                    style={{ backgroundImage: "img/Grindburst-bg-boton.png" }}
                  >
                    <a href="">
                      Buy Now{" "}
                      <span>
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dinomaniacs_section">
        <div className="container">
          <div className="dinomaniacs-logo">
            <img src="img/dinomaniacs-logo.webp" alt="" />
            <p>
              Open the door to the remarkable world of dinosaurs! Come in and
              explore the high-
              <br />
              speed, adventure packed land of imagination, where dinosaurs are
              brought to life and <br /> Jurassic friends roam free.
            </p>
          </div>
          <div className="dinomaniacs">
            <div className="shob-now_image">
              <div className="dinomaniacs-image">
                <img
                  src="img/12-dinos-eggs-digging-game.webp"
                  alt=""
                  width="100%"
                  className="dino-egg"
                />
                <img
                  src="img/dino-eggs-no-ballons-main-image-1.webp"
                  alt=""
                  width="100%"
                />
                <div className="robo-rating">
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <p>4.9 (463)</p>
                </div>
                <div className="robo-price">
                  <h6>$19.99</h6>
                </div>
                <div className="dinomaniacs-btn">
                  <a href="">
                    {" "}
                    SHOP NOW
                    <span>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="dinomaniacs-image">
                <img
                  src="img/dinosaur-pinata-tresure-hunt-title.webp"
                  alt=""
                  width="100%"
                  className="dino-egg"
                />
                <img
                  src="img/dino-pinata-tresure-hunter-game.webp"
                  alt=""
                  width="100%"
                />
                <div className="robo-rating">
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <i className="fa-sharp fa-solid fa-star"></i>
                  <p>5.0 (1)</p>
                </div>
                <div className="robo-price">
                  <h6>$19.99</h6>
                </div>
                <div className="dinomaniacs-btn" id="dinomaniacs-btn">
                  <a href="">
                    SHOP NOW{" "}
                    <span>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="dinomaniacs-image" style={{ width: "45%" }}>
              <img
                src="img/main-banner-dinomaniacs-homepage (1).webp"
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="extra-piece">
            <div className="extra-image" id="mobile-img">
              <img
                src="img/Homepage-2nd-Version-V2_03-2.webp"
                alt=""
                width="100%"
                className="egg-img"
              />
            </div>
            <div className="extra-image">
              <img
                src="img//Homepage-2nd-Version-V2_05.webp"
                alt=""
                width="100%"
                className="egg-img"
              />
              <div className="extra-caption">
                <h1>
                  {" "}
                  <strong>EXTRA </strong> <br /> PIECES
                </h1>
                <h6>Complete your story with more pieces</h6>
                <p>
                  The show must go on & sometimes we <br />
                  need to add a little extra.{" "}
                  <strong>
                    The action
                    <br />
                    doesn’t stop when imagination is at <br />
                    play
                  </strong>{" "}
                  , and why should it? Get additional
                  <br /> pieces for all of your JitteryGit favorites.
                </p>
                <div className="extra-piexe_btn">
                  <a href="">SHOP NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="we-comments_section">
        <div className="container">
          <div className="we-heart">
            <h1>
              {" "}
              WE
              <span>
                <i className="fa-solid fa-heart"></i>
              </span>
              YOUR COMMENTS
            </h1>
            <p>
              WE LOVE HEARING ABOUT YOUR EXPERIENCE WITH OUR PRODUCTS. WITH SO
              MANY HAPPY AND <br />
              SATISFIED CUSTOMERS, <strong>
                WE’RE TRUSTED BY MILLIONS!
              </strong>{" "}
            </p>
            <div className="social-services">
              <img src="img/amazon-logo.webp" alt="" width="150px" />
              <img src="img/walmart-logo.webp" alt="" />
              <img src="img/ebay-logo.webp" alt="" />
              <img src="img/mercado-libre-logo.webp" alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="user-slider">
        <UserInfoSlider />
      </div>

      <section className="bg-tifen">
        <div className="books-img">
          <img
            src="img/bg-banner-wholesale-hp.webp"
            alt=""
            width="100%"
            className="desktop"
          />
          <img
            src="img/mobile-homepage-wholesale-banner.webp"
            alt=""
            width="100%"
            className="mobile"
          />
          <div className="books-img_caption">
            <div className="jittery-logo-img">
              <img src="img/jitterygit-logo.webp" alt="" />
            </div>
            <h1>
              {" "}
              <strong> WHOLESALE </strong> <br /> PARTNERS{" "}
            </h1>
            <div className="books-btn">
              <a href="">CONTACT US NOW </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ------------------footer------------------ --> */}
    </>
  );
};

export default Home;
