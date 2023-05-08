import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const RobotrixSlider = () => {
  return (
    <>
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
            <img src="img/car-police-robot-voltroid-1.webp" width="100%" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="img/dog-police-robot-voltroid.webp" width="100%" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="img/voltroid-police-robot-lego-3 (1).webp" width="100%" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default RobotrixSlider;
