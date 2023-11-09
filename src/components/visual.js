import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide_next_bt, Slide_prev_bt } from "../styled/common";
import "../styles/common.css";
import "../styles/visual.css";
import styled from "@emotion/styled";

function Visual() {
  const swiperRef = useRef();

  const [htmlTag, setHtmlTag] = useState([]);

  const axiosGetData = () => {
    axios
      .get("visual.json")
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((res) => {
        let arr = [];
        for (let i = 0; i < res.total; i++) {
          const obj = res["visual_" + (i + 1)];
          arr[i] = obj;
        }
        setHtmlTag(arr);
      })
      .catch(function (error) {
        console.log(error);
        // const dodj = {};
        // makeViual
      });
  };

  useEffect(() => {
    // 외부 데이터 불러들이기
    // getJsonData();
    axiosGetData();
  }, []);
  return (
    <section class="visual">
      <div class="visual-inner">
        <Swiper
          slidesPerView={2}
          spaceBetween={24}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: "visual-slide-wrap .slide-next-bt",
            prevEl: "visual-slide-wrap .slide-prev-bt",
          }}
          modules={[Autoplay, Navigation]}
          loop
          className="visual-slide"
        >
          {htmlTag.map(function (item, index) {
            return (
              <SwiperSlide key={index}>
                <div class="visual-slide-item">
                  <a href={item.url}>
                    <img
                      src={process.env.PUBLIC_URL + item.file}
                      alt={item.url}
                    />
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Slide_prev_bt
          onClick={() => {
            swiperRef.current.slidePrev();
          }}
        ></Slide_prev_bt>

        <Slide_next_bt
          onClick={() => {
            swiperRef.current.slideNext();
          }}
        ></Slide_next_bt>
      </div>
    </section>
  );
}
export default Visual;
