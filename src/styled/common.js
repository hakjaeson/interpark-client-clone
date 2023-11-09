import styled from "@emotion/styled";

export const cate_bt = styled.div`
  padding: 0px 20px;
  border: 1px solid #c9c9c9;
  position: relative;
  background-color: #fff;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 44px;
  cursor: pointer;
  border-radius: 18px;
`;

//   .cate-bt-active {
//     background-color: #333;
//     color: #fff;
//     font-weight: 700;
//   }

// /* slide button */
//   .slide-prev-bt.swiper-button-disabled {
//     display: none;
//   }
//   .slide-prev-bt
export const Slide_prev_bt = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid #e3e2e3;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 0 0.8 rgba(0, 0, 0, 0.13);
  &::before {
    display: block;
    margin: 0 auto;
    position: relative;
    width: 10px;
    height: 18px;
    background: url("../images/slider_arrow.svg") no-repeat center;
    content: "";
    transform: rotateY(180deg);
  }
`;
//  slide-next-bt
export const Slide_next_bt = styled.common`
  position: absolute;
  right: 0;
  top: 50%;
  z-index: 2;
  transform: translateX(50%) translateY(-50%);
  width: 48px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid #e3e2e3;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 0 0.8 rgba(0, 0, 0, 0.13);
  &&::before {
    display: block;
    margin: 0 auto;
    position: relative;
    width: 10px;
    height: 18px;
    background: url("../images/slider_arrow.svg") no-repeat center;
    content: "";
  }
`;

export const content_footer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  gap: 1rem;
`;

export const cate_more_bt = styled.div`
  padding: 20px 39px;
  border: 1px solid #c9c9c9;
  background-color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 30px;
  text-align: center;
  &::after {
    display: inline-block;
    margin-left: 0.7rem;
    width: 1rem;
    height: 1.1rem;
    position: relatives;
    font-weight: 400;
    content: "";
    background: url("../images/slider_arrow.svg") no-repeat center;
  }
`;
