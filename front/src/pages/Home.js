import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import life from "../assets/생활서비스.png";
import medical from "../assets/의료복지.png";
import culture from "../assets/문화예술.png";
import tourism from "../assets/관광.png";

import logo from "../assets/logo.png";
import "../font.css";

export default function Home() {
  return (
    <Container>
      <div className="header">
        <div className="headerWrapper">
          이디
          <img src={logo} alt="logo" className="logo" />
          저디
        </div>
      </div>
      <div className="wrapper">
        <div className="layout">
          <img src={life} alt="life icon" />
          <button className="btn">생활 서비스</button>
        </div>
        <Link to="/map" className="layout">
          <img src={culture} alt="culture icon" className="cultureImg" />

          <button className="btn">문화예술</button>
        </Link>
      </div>
      <div className="wrapper">
        <div className="layout">
          <img src={medical} alt="medical icon" />
          <button className="btn">의료 복지</button>
        </div>
        <div className="layout">
          <img src={tourism} alt="tourism icon" />
          <button className="btn">관광</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  height: 100vh;

  img {
    width: 60%;
    height: 150px;
    border: none;
  }

  .btn {
    border: none;
    background-color: #f49d11;
    border-radius: 25px;
    padding: 10px;
    width: 150px;
    font-size: 1.2em;
  }

  .btn:hover {
    background-color: #5acaff;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    flex-basis: 30%;
  }

  .headerWrapper {
    font-family: "Jeju Hallasan", cursive;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
  }

  .logo {
    width: 110px;
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
    align-items: center;
    margin: 18px;
  }
`;
