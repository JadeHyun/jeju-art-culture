import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import life from "../assets/lifeService.svg";
import medical from "../assets/Medical.svg";
import culture from "../assets/culture.svg";
import tourism from "../assets/tourism.svg";

export default function Home() {
  return (
    <Container>
      <div className="header">
        <p>이디저디</p>
      </div>
      <div className="wrapper">
        <div className="layout">
          <img src={life} alt="life icon" />
          생활 서비스
        </div>
        <Link to="/map" className="layout">
          <img src={culture} alt="culture icon" className="cultureImg" />
          문화 예술
        </Link>
      </div>
      <div className="wrapper">
        <div className="layout">
          <img src={medical} alt="medical icon" />
          의료 복지
        </div>
        <div className="layout">
          <img src={tourism} alt="tourism icon" />
          관광
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  text-align: center;
  /* border: 1px solid red; */
  padding-top: 50px;
  color: black;
  img {
    width: 40%;
    height: 150px;
    border: none;
  }

  .header {
    margin-bottom: 50px;
  }

  a {
    text-decoration: none;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .cultureImg {
    display: block;
  }

  .layout {
    display: flex;
    flex-direction: column;
    width: 50%;
    /* border: 1px solid black; */
    align-items: center;
  }
`;
