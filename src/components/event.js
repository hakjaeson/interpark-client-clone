import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/common.css";
import "../styles/event.css";
import axios from "axios";

function Event() {
  const swiperRef = useRef();

  const [htmlTag, setHtmlTag] = useState([]);

  const axiosGetData = () => {
    axios
      .get("event.json")
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((res) => {
        let arr = [];
        for (let i = 0; i < res.total; i++) {
          const obj = res["event_" + (i + 1)];
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
    <section className="event">
      <div className="event-inner">
        <div className="event-header">
          <h2 className="event-title">이벤트</h2>

          <span className="event-sub">
            인터파크에서 할인혜택을 꼭 챙기세요.
          </span>
        </div>

        <div className="event-content">
          <Swiper
            slidesPerView={4}
            spaceBetween={24}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={{ Navigation }}
            navigation={{
              nextEl: "event-slide-wrap .slide-next-bt",
              prevEl: "event-slide-wrap .slide-prev-bt",
            }}
            className="event-slide"
          >
            {htmlTag.map(function (item, index) {
              return (
                <SwiperSlide key={index}>
                  {index === htmlTag.length - 1 ? (
                    <a href={item.url}>바로가기</a>
                  ) : (
                    <div className="event-slide-item">
                      <a href={item.url} className="event-link">
                        <div class="event-img">
                          <img src={item.file} alt="#" />
                          <div class="img-bg"></div>
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
    </section>
  );
}
export default Event;
