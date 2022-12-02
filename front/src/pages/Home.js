import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import life from "../assets/생활서비스.png";
import medical from "../assets/의료복지.png";
import culture from "../assets/문화예술.png";
import tourism from "../assets/관광.png";

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
          문화예술
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
  padding-top: 50px;
  color: black;
  font: "doldam";

  img {
    width: 60%;
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

let Button = styled.button`
  font-size: 20px;
  font-weight: 800;
  border-radius: 24px;
  width: 300px;
  height: 70px;
  border: none;
  border-radius: 20px;
  margin-bottom: 15px;
  background: white;
  color: var(--darkgray);
  &:hover {
    cursor: pointer;
    background: var(--orange);
  }
`;
