import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../styles/common.css";
import "../styles/visual.css";
import { useRef } from "react";
function Visual() {
  //js code area
  const swiperRef = useRef();
  return (
    <section className="visual">
      <div className="visual-inner">
        <Swiper
          slidesPerView={2}
          spaceBetween={24}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          modules={[Autoplay]}
          loop
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="visual-slide"
        >
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img
                  src={process.env.PUBLIC_URL + "/images/v1.png"}
                  alt="a.html"
                />
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img
                  src={process.env.PUBLIC_URL + "/images/v2.jpg"}
                  alt="a.html"
                />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img src="images/v3.jpg" alt="a.html" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img src="images/v4.jpg" alt="a.html" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img src="images/v5.jpg" alt="a.html" />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="visual-slide-item">
              <a href="a.html">
                <img src="images/v6.png" alt="a.html" />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <div className="swiper visual-slide">
          <div className="swiper-wrapper"></div>
        </div> */}

        <button
          className="slide-prev-bt"
          onClick={() => {
            swiperRef.current.slidePrev();
          }}
        ></button>
        <button
          className="slide-next-bt"
          onClick={() => {
            swiperRef.current.slideNext();
          }}
        ></button>
      </div>
    </section>
  );
}
export default Visual;
