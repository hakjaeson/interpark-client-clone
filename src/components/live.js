import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/common.css";
import "../styles/live.css";

function Live() {
  const swiperRef = useRef();
  const [htmlTag, setHtmlTag] = useState([]);

  const getJsonData = () => {
    // 외부데이터 연동하기 fetch 이용
    fetch("live.json")
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
          const item = res["live_" + (i + 1)];
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
    <section className="live">
      <div className="live-inner">
        <div className="live-header">
          <div className="live-title">
            <img
              src={process.env.PUBLIC_URL + "/images/title_live.svg"}
              alt=""
            />
          </div>

          <Swiper
            slidesPerView={4}
            spaceBetween={24}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={{ Navigation }}
            navigation={{
              nextEl: "live-slide-wrap .slide-next-bt",
              prevEl: "live-slide-wrap .slide-prev-bt",
            }}
            className="live-slide"
          >
            {htmlTag.map(function (item, index) {
              const discount = item.sub_discount;
              const disValue = discount !== 0 ? discount + "%" : "";
              const dateline = item.date;
              const timeline = item.time;
              const dateValue = dateline !== 0 ? dateline : "";
              const timeValue = timeline !== 0 ? timeline : "";
              return (
                <SwiperSlide key={index}>
                  {index === htmlTag.length - 1 ? (
                    <a href={item.url}>바로가기</a>
                  ) : (
                    <div className="live-slide-item">
                      <a href={item.url}>
                        <div className="live-container">
                          <div className="live-img">
                            <img src={item.file} alt="" />
                          </div>

                          <div className="live-profile">
                            <div className="live-status">{item.status}</div>
                            <div className="live-company">{item.company}</div>
                          </div>

                          <div className="live-d-day">
                            <div className="live-date">{dateValue}</div>
                            <div className="live-time">{timeValue}</div>
                          </div>
                        </div>
                      </a>
                      <a href={item.sub_url}>
                        <div className="live-sub-container">
                          <div className="live-sub-img">
                            <img src={item.sub_image} alt="" />
                          </div>

                          <div className="live-sub-profile">
                            <ul>
                              <li>
                                <span className="live-sub-title">
                                  ${item.sub_title}
                                </span>
                              </li>
                              <li>
                                <span className="live-discount">
                                  ${disValue}
                                </span>
                                <span className="live-sub-price">
                                  ${item.sub_price}
                                </span>
                              </li>
                            </ul>
                          </div>
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
        {/* <a href="#" className="cate-more-bt">
          <span>쇼핑 홈 바로가기</span>
        </a> */}
      </div>
    </section>
  );
}
export default Live;
