import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import modalLogo from "../assets/modalLogo.png";
import "../font.css";

export default function Modal({ isModal, setIsModal }) {
  return (
    <Container>
      <div className="title">
        <div>책방무사</div>
        <img src={modalLogo} alt="modalLogo" />
      </div>

      <div>
        <p>2023년 2월 25일 토요일 저녁 19시</p>
        <pre>
          <br />
          뮤지션 백예린이 준비한 추천 코스를 다녀오신 분들께는
          <br />
          공연 티켓 1매와 함께 뮤지션과 관련된 NFT 특전 선물이 증정됩니다.
        </pre>
      </div>

      <pre>
        <p>뮤지션 백예린의 코스</p>
        1. 광치기 해변 <br />
        2. 성산 일출봉 정상 <br />
        3. 고궁 보말칼국수
        <br />
        4. 카페 나무아래
        <br />
        5. 스피닝울프 펍<br />
      </pre>
      <div className="wrapper">
        방문 확인을 위해 해당 지점에서&nbsp;<Link to="/camera">QR</Link>을 꼭
        찍어주세요!
      </div>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border: 1px solid black;

  width: 400px;
  height: 330px;
  padding: 0px 0px 15px;

  position: absolute;

  top: 505px;

  a {
    text-decoration: none;
  }

  p {
    margin: 15px 15px 0 15px;
    font-size: 22px;
    font-weight: bold;
    color: #ff5500;
  }

  pre {
    text-align: center;
    margin-top: 3px;
    line-height: 130%;
  }

  pre > p {
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
    padding: 0px 0px 5px 0px;
    color: #ff6a00;
  }

  img {
    width: 11%;
  }

  .wrapper {
    display: flex;
    justify-content: flex-end;
  }

  button {
    width: 30px;
    height: 25px;
    float: right;
  }

  div {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title > div {
    font-size: 30px;
    margin-right: 50px;
  }
`;
