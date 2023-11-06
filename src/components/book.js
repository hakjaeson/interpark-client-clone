import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/common.css";
import "../styles/book.css";

function Book() {
  const swiperRef = useRef();
  const [htmlTag, setHtmlTag] = useState([]);

  const getJsonData = () => {
    // 외부데이터 연동하기 fetch 이용
    fetch("book.json")
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
          const obj = res["book_" + (i + 1)];
          arr[i] = obj;
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
    <section className="book">
      <div className="book-inner">
        <div className="book-header">
          <h2 className="book-title">쇼핑 추천</h2>

          <span className="book-sub">
            할인이 쎄다! 지금, 특가 상품을 확인하세요.
          </span>
        </div>

        <div className="book-content">
          <div className="book-category">
            <ul className="book-list">
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
              nextEl: "book-slide-wrap .slide-next-bt",
              prevEl: "book-slide-wrap .slide-prev-bt",
            }}
            className="book-slide"
          >
            {htmlTag.map(function (item, index) {
              return (
                <SwiperSlide key={index}>
                  {index === htmlTag.length - 1 ? (
                    <a href={item.url}>바로가기</a>
                  ) : (
                    <div className="book-slide-item">
                      <a href={item.url} className="book-link">
                        <div class="book-img">
                          <img
                            src={process.env.PUBLIC_URL + "/images/shoes.jpeg"}
                            alt="#"
                          />
                        </div>
                        <div class="book-info">
                          <ul class="book-good-list">
                            <li>
                              <span class="book-good-info-price">
                                <b>#</b>
                                <em>#</em>원
                              </span>
                            </li>
                            <li>
                              <p class="book-good-info-desc">#</p>
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
export default Book;
