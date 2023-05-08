import React from "react";
import { SwiperSlide } from "swiper/react";

// const slideData = [
//   {
//     HTML: "<div className='item active' id='item-1' nr-slide='0'><div className='container'><img src='img/img-dino-track-glow.webp'  width='100%' /><div className='circule-glow'><img src='img/circle-glow-in-the-dark.webp'width='100%' /></div><div className='chid-div'>img src='img/dino-track-lights-on-off-1.webp' width='100%'/></div><div className='saur-car-track'><img src='img/extras-dino-track.webp' width='100%' /></div><div className='first-slider-btn track-safari-dino-btn'><>SHOP NOW</a></div></div> </div>",
//   },
// ];
function SliderSlide() {
  return (
    <SwiperSlide>
      <div className="item active" id="item-1" nr-slide="0">
        <div className="container">
          <img src="img/img-dino-track-glow.webp" alt="" width="100%" />
          <div className="circule-glow">
            <img src="img/circle-glow-in-the-dark.webp" alt="" width="100%" />
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

      <div className="item" id="item-2" nr-slide="1">
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
              <img src="img/voltroid-banner-photo.webp" alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>

      <div className="item" id="item-3" nr-slide="2">
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
  );
}

export default SliderSlide;
