import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/common.css";
import "../styles/tour.css";

function Tour() {
  const swiperRef = useRef();
  const [htmlTag, setHtmlTag] = useState([]);

  const getJsonData = () => {
    // 외부데이터 연동하기 fetch 이용
    fetch("tour.json")
      .then((response) => {
        console.log("response:", response);
        //자료가 불러들여졌을 때
        return response.json();
      })
      .then((res) => {
        console.log("result", res);
        // 자료를 원하는대로 처리하겠다.
        let arr = [];
        for (let i = 0; i < res.total; i++) {
          const item = res["tour_" + (i + 1)];
          arr[i] = item;
        }
        setHtmlTag(arr);
      })
      //error
      .catch((error) => {
        //error meg
        console.log("error" + error);
      });
  };
  // 타이머 만들 때
  // 외부데이터 부를 때
  // 태그참조
  // window 참조
  // window.addEventlistner("Srcoll")
  // cleanup : 컴포넌트 화면에서 사라질 때 실행할 함수
  // 컴포넌트가 화면에 보여질 때 실행할 내용 기재 장소
  useEffect(() => {
    // 외부 데이터 불러들이기
    getJsonData();
  }, []);

  return (
    <section className="tour">
      <div className="tour-inner">
        <div className="tour-header">
          <h2 className="tour-title">투어 특가</h2>

          <span className="tour-txt">해외여행은 인터파크다</span>
        </div>

        <div className="tour-content">
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
            slidesPerView={3}
            spaceBetween={24}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={{ Navigation }}
            navigation={{
              nextEl: "tour-slide-wrap .slide-next-bt",
              prevEl: "tour-slide-wrap .slide-prev-bt",
            }}
            className="tour-slide"
          >
            {htmlTag.map(function (item, index) {
              return (
                <SwiperSlide key={index}>
                  {index === htmlTag.length - 1 ? (
                    <a href={item.url}>바로가기</a>
                  ) : (
                    <div className="tour-slide-item">
                      <div className="tour-img-wrapper">
                        <a href={item.url} className="tour-link">
                          <div className="tour-img">
                            <img src={item.file} alt={item.url} />
                          </div>

                          <div className="tour-deal-event">
                            <p className="tour-deal-txt">{item.dealEvent}</p>
                          </div>

                          <div className="tour-info">
                            <ul className="tour-good-list">
                              <li>
                                <p className="tour-deal-desc">
                                  {item.dealEventDesc}
                                </p>
                              </li>
                              <li>
                                <p className="tour-good-info-desc">
                                  {item.desc}
                                </p>
                              </li>
                              <li>
                                <span className="tour-good-info-price">
                                  <em>{item.price}</em>원~
                                </span>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
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
export default Tour;
