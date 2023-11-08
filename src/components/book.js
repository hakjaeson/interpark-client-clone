import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/common.css";
import "../styles/book.css";
import axios from "axios";

function Book() {
  const swiperRef = useRef();

  const [htmlTag, setHtmlTag] = useState([]);

  const axiosGetData = () => {
    axios
      .get("book.json")
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .then((res) => {
        let arr = [];
        for (let i = 0; i < res.total; i++) {
          const item = res["book_" + (i + 1)];
          arr[i] = item;
        }
        setHtmlTag(arr);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axiosGetData();
  }, []);

  return (
    <section class="book">
      <div class="book-inner">
        <div class="book-header">
          <h2 class="book-title">오늘의 도서</h2>

          <span class="book-sub">지금 읽기 딱 좋은 책, 놓치지 마세요!</span>
        </div>

        <div class="book-content">
          <div class="book-category">
            <ul class="book-list">
              <li>
                <button class="cate-bt cate-bt-active">MD's Pick</button>
              </li>
              <li>
                <button class="cate-bt">베스트셀러</button>
              </li>
              <li>
                <button class="cate-bt">신간추천</button>
              </li>
              <li>
                <button class="cate-bt">특가할인</button>
              </li>
            </ul>
          </div>

          <Swiper
            slidesPerView={5}
            spaceBetween={28}
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
                    <div class="book-slide-item">
                      <a href={item.url} src="">
                        <div className="kimori">
                          <img src={item.file} alt="" />
                        </div>

                        <div class="book-info">
                          <div class="book-title-2">
                            <span>{item.book_title}</span>
                          </div>
                          <div class="book-price">
                            <span>
                              {item.book_price !== ""
                                ? item.book_price + "원"
                                : ""}
                            </span>
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
        <a href="#" className="cate-more-bt">
          <span>쇼핑 홈 바로가기</span>
        </a>
      </div>
    </section>
  );
}
export default Book;
