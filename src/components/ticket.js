import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/common.css";
import "../styles/ticket.css";

function Ticket() {
  const swiperRef = useRef();
  const [htmlTag, setHtmlTag] = useState([]);

  const getJsonData = () => {
    // 외부데이터 연동하기 fetch 이용
    fetch("ticket.json")
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
          const item = res["ticket_" + (i + 1)];
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
    <section className="ticket">
      <div className="ticket-inner">
        <div className="ticket-header">
          <h2 className="ticket-title">티켓 랭킹</h2>

          <span className="ticket-sub">오늘 뭐볼까? 지금HOT한 공연</span>
        </div>

        <div className="ticket-content">
          <div className="ticket-category">
            <ul className="ticket-list">
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
            modules={{ Navigation }}
            navigation={{
              nextEl: "ticket-slide-wrap .slide-next-bt",
              prevEl: "ticket-slide-wrap .slide-prev-bt",
            }}
            className="ticket-slide"
          >
            {htmlTag.map(function (item, index) {
              return (
                <SwiperSlide key={index}>
                  {index === htmlTag.length - 1 ? (
                    <a href={item.url}>바로가기</a>
                  ) : (
                    <div className="ticket-slide-item">
                      <a href={item.url}>
                        <div className="tour-img-wrapper">
                          <img src={item.file} alt={item.url} />
                          <span className="ticket-rank">{item.rank}</span>
                        </div>

                        <div className="ticket-info">
                          <ul>
                            <li>
                              <span className="ticketing-title">
                                {item.title}
                              </span>
                            </li>
                            <li>
                              <span className="ticket-place">{item.place}</span>
                            </li>
                            <li>
                              <span className="ticket-date">{item.date}</span>
                            </li>
                            <li>
                              <span className="ticket-status">
                                {item.status}
                              </span>
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
export default Ticket;
