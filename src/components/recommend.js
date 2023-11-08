import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/common.css";
import "../styles/recommend.css";
import axios from "axios";
// import { Btcate, BtSlideNext, BtSlidePrev } from "../components/ui/buttons";

function Recommend() {
  const swiperRef = useRef();

  const [htmlTag, setHtmlTag] = useState([]);

  const axiosGetData = () => {
    axios
      .get("recommend.json")
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((res) => {
        let arr = [];
        for (let i = 0; i < res.total; i++) {
          const obj = res["recommend_" + (i + 1)];
          arr[i] = obj;
        }
        setHtmlTag(arr);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    // 외부 데이터 불러들이기
    // getJsonData();
    axiosGetData();
  }, []);

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
            modules={{ Navigation }}
            navigation={{
              nextEl: "recommend-slide-wrap .slide-next-bt",
              prevEl: "recommend-slide-wrap .slide-prev-bt",
            }}
            className="recommend-slide"
          >
            {htmlTag.map(function (item, index) {
              return (
                <SwiperSlide key={index}>
                  {index === htmlTag.length - 1 ? (
                    <a href={item.url}>바로가기</a>
                  ) : (
                    <div className="recommend-slide-item">
                      <a href={item.url} className="recommend-link">
                        <div class="recommend-img">
                          <img src={item.file} alt="#" />
                        </div>
                        <div class="recommend-info">
                          <ul class="recommend-good-list">
                            <li>
                              <span class="recommend-good-info-price">
                                <b>
                                  {item.discount !== 0
                                    ? item.discount + "%"
                                    : ""}
                                </b>
                                <em>{item.price}</em>원
                              </span>
                            </li>
                            <li>
                              <p class="recommend-good-info-desc">
                                {item.desc}
                              </p>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>

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
