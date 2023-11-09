import "../styles/header.css";
export default function Header() {
  return (
    <header class="header">
      <div class="header-inner">
        <div class="header-top">
          <div class="header-left">
            <a href="index.html" class="logo"></a>
            {/* <!-- search area --> */}
            <div class="header-search">
              {/* <!-- search form --> */}
              <form class="search-form">
                <input
                  type="text"
                  class="search-word"
                  placeholder="80만원 여행상품권 이벤트"
                />
                <input type="button" value="검색" class="search-bt" />
              </form>
            </div>
          </div>
          {/* <!-- member menu area --> */}
          <div class="header-right">
            <ul class="member-menu">
              <li>
                <a href="#">로그인</a>
              </li>
              <li>
                <a href="#">회원가입</a>
              </li>
              <li>
                <a href="#" id="mypage-bt" class="mypage-bt">
                  마이페이지
                  <img src="images/icon_arrow.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- header bottom area --> */}
        <div class="header-bottom">
          <ul class="header-category">
            <li>
              <a href="#">
                <img src="images/icon_tour.png" alt="" />
                투어
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icon_ticket.png" alt="" />
                티켓
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icon_shopping.png" alt="" />
                쇼핑
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icon_book.png" alt="" />
                도서
              </a>
            </li>
            <li>
              <a href="#">
                <img src="images/icon_triple.png" alt="" />
                트리플
              </a>
            </li>
            <li>
              <a href="#" class="icon-hot">
                <img src="images/icon_special.png" alt="" />
                여행초특가
              </a>
            </li>
          </ul>
          {/* <!-- 오늘의 이벤트 메뉴 --> */}
          <ul class="header-event">
            <li>
              <a href="#">
                <img src="images/icon_gnb_nol.png" alt="" />
                항공 즉시할인
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
