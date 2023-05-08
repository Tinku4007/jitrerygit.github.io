import React from "react";
import "../style/robotryix.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RobotrixSlider from "../components/RobotrixSlider";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Robotryix = () => {
  return (
    <>
      <div className="header-banner">
        <div className="container">
          <div className="header-banner-content">
            <div className="header-banner_box">
              <h1>GARANTRON </h1>
              <h2 className="banner-line-text">
                A <strong>STEM robot building set</strong> which includes the
                complete 5 robot bundle.
              </h2>
              <div className="bg-img">
                <h2>GARANTRON SPECIAL PROMOTION </h2>
              </div>
              <div className="robotry-header-banner_price">
                <h2>
                  Price:{" "}
                  <span style={{ fontSize: "26px", color: "#666" }}>
                    <strike>$79.99</strike>
                  </span>
                  $64.99{" "}
                </h2>
              </div>
              <div className="robotry-header-banner-btn">
                <div className="header-banner_buy">
                  <a href="">BUY NOW</a>
                </div>
                <a href="" className="header-banner_watch-me">
                  WATCH ME{" "}
                  <span>
                    <img
                      src="img/boton-play-home-video.webp"
                      alt=""
                      width="20px"
                      style={{ marginTop: "8px" }}
                    />
                  </span>
                </a>
              </div>
              <div className="free-shiping">
                <h2>
                  <a href="">FREE 2-DAYS SHIPPING </a>
                </h2>
                <img src="./img/icono-shipping.webp" />
                <h2>
                  <a href="">HASSLE-FREE RETURNS</a>
                </h2>
              </div>
            </div>
            <div className="header-banner_box-img">
              <img
                src="img/garatron-toy-robot-stem-assamble.webp"
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-intro_robo">
        <div className="container">
          <div className="logo-robotryix">
            <img src="img/logo-robotryx.png" alt="" />
          </div>
          <div className="robo-intro-title">
            <p>
              {" "}
              On the outer realms of Earth’s galaxy hangs Knemesis, a planet
              rich in resources. Knemesis was guarded by five valiant
              protectors: Snabglider, Tangryp, Cliffsling, Grindburst, and
              Zakarpian. One day Knemesis was invaded by the Drakians, and the
              five protectors were scattered to the farthest regions of Earth.
              Secret Drakian troops roam the Earth to finish destroying the
              protectors and to keep them apart. The Robotryx Guardians have ONE
              mission: to reunite and form the invincible, unstoppable,
              Garantron, in order to protect Earth from a Drakian takeover, and
              reconquer Knemesis.
            </p>
            <h6>EVERY ROBOTRYX ROBOT HAS 3 UNIQUE ASSEMBLY OPTIONS</h6>
          </div>
          <div className="video-play_btn" style={{ textAlign: "center" }}>
            <a href="">
              <img src="img/Oo3Fh_xM.webp" alt="" />
            </a>
            <p>CHECK THEM OUT NOW</p>
            <div className="down-arrow">
              <i className="fa-sharp fa-solid fa-angle-down"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="votroid-bg_section">
        <div className="container">
          <div className="voltroid">
            <div className="voltroid_box">
              <h1>Voltroid</h1>
              <div className="voltroid-rating">
                <div className="rating-starts">
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                </div>
                <h6 style={{ color: "#fff" }}>
                  5.0 (1) <span></span>
                </h6>
              </div>
              <div className="voltroid_title slider-para-content">
                <p>
                  Voltroid is the fearless leader of the Robotryx <br />
                  Heroes Squad - crime-stopper by day, hero by
                  <br />
                  night! He is a 245 piece police robot toy that can
                  <br /> be built into a fierce K-9 and a high-tech police
                  <br /> mobile.
                </p>
              </div>
              <div className="voltroid_price">
                <h1>
                  <span style={{ fontSize: "18px", letterSpacing: "0.5px" }}>
                    PRICE:
                  </span>
                  $17.99
                </h1>
              </div>

              <div className="voltroid-btn">
                <div className="robotryix-buy">
                  <a href="">
                    buy now
                    <span>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </a>
                </div>
                <div className="robotryix-extra">
                  <a href="" style={{ color: "#07ffae" }}>
                    EXTRA PIECES
                  </a>
                </div>
              </div>
            </div>
            <div className="voltroid_box-img">
              <div className="slick-carousel slick-slider" id="voltroid-slider">
                <RobotrixSlider />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="snavglider_section">
        <div className="container">
          <div className="SNABGLIDER">
            <div className="SNABGLIDER_box">
              <h1>Snabglider</h1>
              <div
                className="voltroid-rating"
                style={{ justifyContent: "flex-end" }}
              >
                <div className="rating-starts">
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                </div>
                <h6 style={{ color: "#fff" }}>
                  4.8 (706) <span></span>
                </h6>
              </div>
              <div className="snabglider_title slider-para-content">
                <p>
                  The brave commander of the Robotryx Guardians.
                  <br /> He uses his speed and strength to pulverize his <br />{" "}
                  enemies. Snabglider was banished to Earth’s <br />
                  deepest canyons, but uses his cannon blasters <br />
                  to demolish anything that stands in his way.
                </p>
              </div>
              <div className="snabglider-price">
                <h1 style={{ fontSize: "38px" }}>
                  <span style={{ fontSize: "18px", letterSpacing: "0.5px" }}>
                    PRICE:
                  </span>
                  $14.99
                </h1>
              </div>
              <div className="SNABGLIDER-btn">
                <div className="right-extra">
                  <a href="" style={{ color: "#00ffff" }}>
                    EXTRA PIECES
                  </a>
                </div>
                <div className="right-buy">
                  <a href="">
                    buy now
                    <span>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="snabglider_box-img">
              <div
                className="slick-carousel slick-slider"
                id="snabglider-slider"
              >
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div>
                      <img src="img/blue-robot-snabglider.webp" width="100%" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src="img/koRO0g0s.webp" width="100%" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src="img/LLf3U6Ei.webp" width="100%" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cliffsling_section">
        <div className="container">
          <div className="cliffsling">
            <div className="cliffsling_box">
              <h1>Cliffsling</h1>
              <div className="voltroid-rating">
                <div className="rating-starts">
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                </div>
                <h6 style={{ color: "#fff" }}>
                  4.8 (306) <span></span>
                </h6>
              </div>
              <div className="cliffsling_title slider-para-content">
                <p>
                  The brains of every operation, Cliffsling is <br /> strategic
                  but fierce. He is an expert in secret, <br /> special
                  missions. He was cast into Earth’s <br /> metallic icelands,
                  but his hook and crane and <br /> power of genius penetrate
                  the piercing cold
                </p>
              </div>
              <div className="cliffsling_price slider-price">
                <h1 style={{ fontSize: "38px" }}>
                  <span style={{ fontSize: "18px", letterSpacing: "0.5px" }}>
                    PRICE:
                  </span>
                  $12.99
                </h1>
              </div>
              <div className="cliffsling-btn">
                <div className="robotryix-buy">
                  <a href="">
                    buy now
                    <span>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </a>
                </div>
                <div className="robotryix-extra">
                  <a href="" style={{ color: "#ccff00" }}>
                    EXTRA PIECES
                  </a>
                </div>
              </div>
            </div>
            <div className="cliffsling_box-img">
              <div className="slick-slider" id="cliffsling">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div>
                      <img src="img/robot-green.webp" width="100%" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src="img/robot-green-2.webp" width="100%" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src="img/robot-green-3.webp" width="100%" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Grindburst_section">
        <div className="container">
          <div className="GRINDBURST">
            <div className="SNABGLIDER_box">
              <h1>Grindburst</h1>
              <div
                className="voltroid-rating"
                style={{ justifyContent: "flex-end" }}
              >
                <div className="rating-starts">
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                </div>
                <h6 style={{ color: "#fff" }}>
                  4.8 (480) <span></span>
                </h6>
              </div>
              <div className="voltroid_title slider-para-content">
                <p>
                  With his fiery character and absolute toughness, <br />
                  Grindburst is the muscle power of the
                  <br />
                  protectors! He was thrown into Earth’s deepest,
                  <br /> most dangerous volcano. He uses his drilling
                  <br /> arm and fire missiles to break through the lava, <br />
                  stone, and dirt..
                </p>
              </div>
              <div className="voltroid_price">
                <h1 style={{ fontSize: "38px" }}>
                  <span style={{ fontSize: "18px", letterSpacing: "0.5px" }}>
                    PRICE:
                  </span>
                  $12.99
                </h1>
              </div>
              <div className="GRINDBURST-btn">
                <div className="right-extra">
                  <a href="" style={{ color: "#ff0000" }}>
                    EXTRA PIECES
                  </a>
                </div>
                <div className="right-buy">
                  <a href="" style={{ color: "#fff" }}>
                    buy now
                    <span>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="voltroid_box-img grind-burst-bg">
              <div className="slick-slider " id="GRINDBURST">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div>
                      <img src="img/robot-red.webp" width="100%" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src="img/robot-red-eagle.webp" width="100%" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src="img/robot-green-cart.webp" width="100%" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Zakarpian_section">
        <div className="container">
          <div className="zakarpian">
            <div className="voltroid_box">
              <h1>Zakarpian</h1>
              <div className="voltroid-rating">
                <div className="rating-starts">
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                </div>
                <h6 style={{ color: "#fff" }}>
                  5.0 (1) <span></span>
                </h6>
              </div>
              <div className="voltroid_title slider-para-content">
                <p>
                  Zakarpian is the enforcer of the Robotryx
                  <br /> Guardians! He is relentless and ferocious. This
                  <br />
                  guardian fell to the hottest of Earth’s deserts,
                  <br /> but armed with laser vision and paralyzing
                  <br /> poisonous darts, there is no enemy he cannot <br />{" "}
                  destroy.
                </p>
              </div>
              <div className="voltroid_price">
                <h1>
                  <span style={{ fontSize: "18px", letterSpacing: "0.5px" }}>
                    PRICE:
                  </span>
                  $12.99
                </h1>
              </div>
              <div className="zakarpian-btn">
                <div className="robotryix-buy">
                  <a href="">
                    buy now
                    <span>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </a>
                </div>
                <div className="robotryix-extra">
                  <a href="" style={{ color: "#ffcc00" }}>
                    EXTRAhere
                  </a>
                </div>
              </div>
            </div>
            <div className="voltroid_box-img">
              <div className="slick-slider snabglider" id="tangryp">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div>
                      <img src="img/yellow-robot.webp" width="100%" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img
                        src="img/robot-yellow-2-e1601051963348.webp"
                        width="100%"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src="img/robot-yellow-3.webp" width="100%" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="TANGRYP_section">
        <div className="container">
          <div className="TANGRYP">
            <div className="SNABGLIDER_box">
              <h1>Tangryp</h1>
              <div
                className="voltroid-rating"
                style={{ justifyContent: "flex-end" }}
              >
                <div className="rating-starts">
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                  <i
                    className="fa-sharp fa-solid fa-star"
                    style={{ color: "#ffc000" }}
                  ></i>
                </div>
                <h6 style={{ color: "#fff" }}>
                  4.8 (620) <span></span>
                </h6>
              </div>
              <div className="voltroid_title slider-para-content">
                <p>
                  Tangryp is second in command, the right-hand <br />
                  man. He is loyal, trustworthy, and fearless. He <br /> never
                  backs down from a mission. Tangryp <br /> plummeted into
                  Earth’s savage jungleland. His <br /> mighty fire blaster
                  makes him the most skilled <br /> sniper and warrior.
                </p>
              </div>
              <div className="voltroid_price">
                <h1 style={{ fontSize: "38px" }}>
                  <span style={{ fontSize: "18px", letterSpacing: "0.5px" }}>
                    PRICE:
                  </span>
                  $12.99
                </h1>
              </div>
              <div className="TANGRYP-btn">
                <div className="right-extra">
                  {/* <!-- <img src="img/btn-extra-pieces-Tangryp.png" alt=""> --> */}
                  <a href="" style={{ color: "#ff6600" }}>
                    EXTRAhere
                  </a>
                </div>
                <div className="right-buy">
                  {/* <!-- <img src="img/Tangryp-bg-boton.png" alt=""> --> */}
                  <a href="">
                    buy now
                    <span>
                      <i className="fa-solid fa-angle-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="voltroid_box-img">
              <div className="slick-slider snabglider" id="tangryp">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div>
                      <img src="img/orange-robot.webp" width="100%" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src="img/robot-orange-2.webp" width="100%" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src="img/robot-orange-3.webp" width="100%" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="creat-uniq_section">
        <div className="container">
          <div className="create_uniq">
            <div className="create-uniq_box_btn-img">
              <img src="img/img1-banner-orange.jpg" alt="" width="100%" />
              <div className="create-uniq-btn">
                <a href="">BUY NOW EXTRA PIECES</a>
              </div>
            </div>
            <div className="create-uniq_box">
              <img src="img/img2-banner-orange.jpg" alt="" width="100%" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Robotryix;
