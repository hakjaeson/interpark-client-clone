import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../styles/visual.css";
import "../styles/common.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Visual() {
  // js 코드 자리
  // JSX 에 작성된 html 태그를 React 에서 참조
  // 1. swiper 슬라이드 태그를 참조한다.
  const swiperRef = useRef();

  const axiosGetData = function () {
    axios
      .get("visual.json")
      .then(function (res) {
        console.log(res.data);
        makeVisualSlide(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // 외부 데이터 연동 ( fetch 활용)
  //   const fetchGetData = () => {
  //     fetch("visual.json")
  //       .then((res) => res.json())
  //       .then((result) => {
  //         // console.log(result);
  //         // 자료를 출력하자.
  //         makeVisualSlide(result);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  // visual 슬라이드 내용 채우는 기능
  // 리액트용 변수 : 컴포넌트에 출력할 JSX
  //       일반변수 말고  리액트용 변수를 state 라고 합니다.
  let [visualHtml, setVisualHtml] = useState([]);

  const makeVisualSlide = (_data) => {
    const visualRes = _data;
    // console.log(visualRes);
    // for(초기값; 조건식; 증감식) {
    //   할일
    // };
    let visualArray = [];
    for (let i = 0; i < visualRes.total; i++) {
      // console.log("visual_" + (i + 1));
      visualArray[i] = visualRes["visual_" + (i + 1)];
    }
    console.log(visualArray);
    setVisualHtml(visualArray);
    // 배열 자료(visualArray) 를 뜯어서 컴포넌트 담기

    // let slideArray = [];
    // for (let i = 0; i < visualRes.total; i++) {
    //   slideArray[i] = <SwiperSlide></SwiperSlide>;
    // }
    // console.log(slideArray);
  };

  // 화면이 보이면
  // 컴포넌트가 보이면
  // 컴포넌트가 랜더링 되면
  //     데이터 호출 및 배치
  //  주로 하는 작업
  //   1. 네트워크 연동 외부 데이터 불러들임
  //   2. html 을 제어할 때
  //   3. 윈도우 (window) 를 제어할때
  //   4. window.addEventLisener 작성할때
  //   5. window.removeEventListner 작성할떄
  //   6. 컴포넌트가 삭제 될때

  useEffect(() => {
    // 랜더링 될때
    //  visual.json 데이터 불러들이기 기능실행
    // fetchGetData();
    axiosGetData();

    return () => {
      // 삭제될때 (Clean Up 함수)
    };
  }, []);

  return (
    <section className="visual">
      <div className="visual-inner">
        <Swiper
          slidesPerView={2}
          spaceBetween={24}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="visual-slide"
        >
          {visualHtml.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className="visual-slide-item">
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
