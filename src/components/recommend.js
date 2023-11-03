import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "../styles/common.css";
import "../styles/recommend.css";

function Recommend() {
  const swiperRef = useRef();
  // fetch("recommend.json").then().then().catch();
  return (
    <section className="recommend">
      <div className="recommend-inner">
        <div className="recommend-header">
          <h2 className="recommend-title">쇼핑 추천</h2>

          <span className="recommend-sub">
            할인이 쎄다! 지금, 특가 상품을 확인하세요.
          </span>
        </div>

        <div className="recommend-content">
          <div className="recommend-category">
            <ul className="recommend-list">
              <li>
                <button className="cate-bt cate-bt-active">쎈딜</button>
              </li>
              <li>
                <button className="cate-bt">베스트</button>
              </li>
              <li>
                <button className="cate-bt">블프데이</button>
              </li>
              <li>
                <button className="cate-bt">디지털프라자</button>
              </li>
              <li>
                <a href="#" className="cate-bt">
                  소담상회
                </a>
              </li>
            </ul>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={24}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="recommend-slide"
          >
            <SwiperSlide>
              <div className="recommend-slide-item">
                <a href="#" class="recommend-link">
                  <div class="recommend-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/shoes.jpeg"}
                      alt="#"
                    />
                  </div>
                  <div class="recommend-info">
                    <ul class="recommend-good-list">
                      <li>
                        <span class="recommend-good-info-price">
                          <b>#</b>
                          <em>#</em>원
                        </span>
                      </li>
                      <li>
                        <p class="recommend-good-info-desc">#</p>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="recommend-slide-item">
                <a href="#" class="recommend-link">
                  <div class="recommend-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/shoes.jpeg"}
                      alt="#"
                    />
                  </div>
                  <div class="recommend-info">
                    <ul class="recommend-good-list">
                      <li>
                        <span class="recommend-good-info-price">
                          <b>#</b>
                          <em>#</em>원
                        </span>
                      </li>
                      <li>
                        <p class="recommend-good-info-desc">#</p>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="recommend-slide-item">
                <a href="#" class="recommend-link">
                  <div class="recommend-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/shoes.jpeg"}
                      alt="#"
                    />
                  </div>
                  <div class="recommend-info">
                    <ul class="recommend-good-list">
                      <li>
                        <span class="recommend-good-info-price">
                          <b>#</b>
                          <em>#</em>원
                        </span>
                      </li>
                      <li>
                        <p class="recommend-good-info-desc">#</p>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="recommend-slide-item">
                <a href="#" class="recommend-link">
                  <div class="recommend-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/shoes.jpeg"}
                      alt="#"
                    />
                  </div>
                  <div class="recommend-info">
                    <ul class="recommend-good-list">
                      <li>
                        <span class="recommend-good-info-price">
                          <b>#</b>
                          <em>#</em>원
                        </span>
                      </li>
                      <li>
                        <p class="recommend-good-info-desc">#</p>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="recommend-slide-item">
                <a href="#" class="recommend-link">
                  <div class="recommend-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/shoes.jpeg"}
                      alt="#"
                    />
                  </div>
                  <div class="recommend-info">
                    <ul class="recommend-good-list">
                      <li>
                        <span class="recommend-good-info-price">
                          <b>#</b>
                          <em>#</em>원
                        </span>
                      </li>
                      <li>
                        <p class="recommend-good-info-desc">#</p>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="recommend-slide-item">
                <a href="#" class="recommend-link">
                  <div class="recommend-img">
                    <img
                      src={process.env.PUBLIC_URL + "/images/shoes.jpeg"}
                      alt="#"
                    />
                  </div>
                  <div class="recommend-info">
                    <ul class="recommend-good-list">
                      <li>
                        <span class="recommend-good-info-price">
                          <b>#</b>
                          <em>#</em>원
                        </span>
                      </li>
                      <li>
                        <p class="recommend-good-info-desc">#</p>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>

          <button
            className="slide-next-bt"
            onClick={() => {
              swiperRef.current.slidePrev();
            }}
          ></button>
          <button
            className="slide-prev-bt"
            onClick={() => {
              swiperRef.current.slidePrev();
            }}
          ></button>
        </div>
      </div>

      <div className="content-footer">
        <a href="#" className="cate-more-bt">
          <span>쇼핑 홈 바로가기</span>
        </a>
      </div>
    </section>
  );
}
export default Recommend;
