import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "../styles/common.css";
import "../styles/ticket.css";

function Ticket() {
  const swiperRef = useRef();
  // fetch("ticket.json").then().then().catch();
  return (
    <section className="ticket">
      <div className="ticket-inner">
        {/* ticket-section-header-area */}
        <div className="ticket-header">
          {/* ticket-header-title */}
          <h2 className="ticket-title">티켓 랭킹</h2>
          {/* ticket-header-sub-title */}
          <span className="ticket-sub">오늘 뭐볼까? 지금HOT한 공연</span>
        </div>
        {/* ticket-section-main-area */}
        <div className="ticket-content">
          {/* ticket-section-main-category */}
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
            className="ticket-slide"
          >
            <SwiperSlide>
              <div className="ticket-slide-item">
                <div className="tour-img-wrapper">
                  <a href="#">
                    <img
                      src={process.env.PUBLIC_URL + "/images/t_1.png"}
                      alt="#"
                    />
                    <span className="ticket-rank">#</span>
                  </a>
                </div>
                <div className="ticket-info">
                  <ul>
                    <li>
                      <span className="ticketing-title">#</span>
                    </li>
                    <li>
                      <span className="ticket-place">#</span>
                    </li>
                    <li>
                      <span className="ticket-date">#</span>
                    </li>
                    <li>
                      <span className="ticket-status">#</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* ticket Navigation */}
          <button
            className="slide-next-bt"
            onClick={() => {
              swiperRef.current.slidePrev();
            }}
          ></button>
          <button
            className="slide-next-bt"
            onClick={() => {
              swiperRef.current.slidePrev();
            }}
          ></button>
        </div>
      </div>
      {/* tour-footer-area */}
      <div className="content-footer">
        <a href="#" className="cate-more-bt">
          <span>티켓 홈 바로가기</span>
        </a>
      </div>
    </section>
  );
}

export default Ticket;
