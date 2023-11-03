import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "../styles/common.css";
import "../styles/tour.css";

function Tour() {
  const swiperRef = useRef();
  // fetch("tour.json").then().then().catch();
  return (
    <section className="tour">
      <div className="tour-inner">
        <div className="tour-header">
          <h2 className="tour-title">투어 특가</h2>

          <span className="tour-txt">해외여행은 인터파크다</span>
        </div>

        <div className="tour-main">
          <div className="tour-category">
            <ul className="tour-list">
              <li>
                <button className="cate-bt cate-bt-active">
                  망설이면 품절
                </button>
              </li>
              <li>
                <button className="cate-bt">패키지</button>
              </li>
              <li>
                <button className="cate-bt">국내숙소</button>
              </li>
              <li>
                <button className="cate-bt">해외숙소</button>
              </li>
            </ul>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={24}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="tour-slide"
          >
            <SwiperSlide>
              <div className="tour-slide-item">
                <a href="#" className="tour-link">
                  <div class="tour-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/shoes.jpeg"}
                      alt="#"
                    />
                  </div>
                  <div className="tour-info">
                    <ul className="tour-good-list">
                      <li>
                        <span className="tour-good-info-price">
                          <b>#</b>
                          <em>#</em>원
                        </span>
                      </li>
                      <li>
                        <p className="tour-good-info-desc">#</p>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>

          <button className="slide-next-bt"></button>
          <button className="slide-prev-bt"></button>
        </div>
      </div>

      <div className="content-footer">
        <a href="#" className="cate-more-bt">
          <span>투어 홈 바로가기</span>
        </a>
      </div>
    </section>
  );
}
export default Tour;
