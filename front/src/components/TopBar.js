import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoBlack from "../assets/logoBlack.png";
import "../font.css";

export default function Modal({ isModal, setIsModal, state }) {
  return (
    <Container>
      <nav>
        <div>
          <Link to="/" className="layout">
            <div className="qrDiv">
              <img className="navImg" src={logoBlack} alt="더미 이미지" />
            </div>
          </Link>
          <div className="logoName">{state ? "이디저디" : "인증이력"}</div>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 95px;
  box-sizing: border-box;

  img {
    width: 20%;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 75px;

    display: flex;

    background-color: #009aff;
  }

  nav > div {
    margin: 15px;
    width: 100%;
    display: flex;
    align-items: center;

    color: white;
  }

  .navImg {
    justify-content: flex-start;
    width: 30px;
  }

  .navImgTwo {
    justify-content: flex-end;
    width: 15px;
  }

  .qrDiv {
    text-align: center;
    line-height: 1.5;
  }

  .logoName {
    margin: 10px;
    font-size: 46px;
    font-family: "Jeju Hallasan", cursive;
  }
`;
