import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import musaImg from "../assets/musa.png";

export default function Modal({ a, setA }) {
  return (
    <Container>
      <div className="musaImg">
        <img src={musaImg} alt="musa 책방 이미지" />
        <button onClick={() => setA(!a)}>X</button>
      </div>
      <div>
        <p>주소 : 제주 서귀포시 성산읍 수시로10번길 3</p>
        <p>
          인스타그램 : <a href="https://storemusa.com/">storemusa</a>
        </p>
        <p>연락처 : 010-6584-6571</p>
        <pre>
          제주 동쪽 성산 일출봉 근처 수산리라고 하는 <br />
          작은 마을에 있습니다. 간판이 없어 찾기가 쉽지
          <br />
          않을 수 있습니다. 그럴 때는 <br />
          ‘수산 초등학교’를 찾아 앞에서 두리번 거리다
          <br />
          어쩐지 측은하게 생긴 점방 건물이
          <br />
          보인다면 그곳이 책방입니다.
          <br />
          제주섬과 모두의 무사한 하루를
          <br />
          진심으로 바라며 책방 문을 엽니다.
        </pre>
      </div>
      <div className="wrapper">
        <Link to="qrcheck">QR체크하기</Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  padding: 10px;

  position: absolute;
  top: 45%;
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

  .musaImg {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }

  .wrapper {
    /* border: 1px solid black; */
    display: flex;
    align-items: end;
    margin-bottom: 20px;
  }
`;
