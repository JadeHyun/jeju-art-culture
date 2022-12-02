import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Modal({ isModal, setIsModal }) {
  return (
    <Container>
      <div>책방무사</div>
      <div>
        <p>
          제주 동쪽 성산 일출봉 근처 수산리라고 하는 작은 마을에 있는
          책방입니다.
        </p>
        <p>제주섬과 모두의 무사한 하루를 진심으로 바라며 책방 문을 엽니다.</p>
        <pre>
          인스타그램 : <a href="https://storemusa.com/">storemusa</a>
        </pre>
        <pre>
          2023년 2월 25일 토요일 저녁 19시부터 진행될 공연을 준비중입니다.
          <br />
          뮤지션 백예린이 준비한 추천 코스를 다녀오신 분들께는
          <br />
          공연 티켓 1매와 함께 뮤지션과 관련된 NFT 특전 선물이 증정됩니다.
          <p>(선착순 수량 : 20매)</p>
        </pre>
      </div>
      <div className="wrapper">
        방문 확인을 위해 해당 지점에서&nbsp;<Link to="qrcheck">QR</Link>을 꼭
        찍어주세요.
      </div>
      <p>뮤지션 백예린의 코스</p>
      <pre>
        1. 광치기 해변 <br />
        2. 성산 일출봉 정상 <br />
        3. 고궁 보말칼국수 <br />
        4. 카페 나무아래 <br />
        5. 스피닝울프 펍
      </pre>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(255, 222, 173, 0.5);
  box-shadow: 5px 3px 3px rgba(230, 230, 250, 1);

  width: 100%;
  padding: 10px;

  position: absolute;
  top: 485px;
  left: 0;

  a {
    text-decoration: none;
  }

  p {
    margin: 10px 0px;
  }

  pre {
    margin: 10px 0px;
    line-height: 120%;
  }
  img {
    width: 40%;
  }

  .wrapper {
    display: flex;
    align-items: end;
  }

  button {
    width: 30px;
    height: 25px;
    float: right;
  }
`;
