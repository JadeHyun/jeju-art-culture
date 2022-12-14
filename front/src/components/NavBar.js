import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import qrCode from "../assets/qrcode-solid.svg";
import ellipses from "../assets/ellipsis-solid.svg";
import file from "../assets/file-lines-regular.svg";
import logoBlack from "../assets/logoBlack.png";

export default function Modal({ isModal, setIsModal }) {
  return (
    <Container>
      <nav>
        <div>
          <Link to="/camera">
            <div className="qrDiv">
              <img className="navImg" src={qrCode} alt="더미 이미지" />
              <br />
              QR
            </div>
          </Link>
        </div>
        <div>
          <Link to="/" className="layout">
            <div className="qrDiv">
              <img className="navImg" src={logoBlack} alt="더미 이미지" />
              <br />
              이디저디
            </div>
          </Link>
        </div>
        <div>
          <div className="qrDiv">
            <Link to="/certification">
              <img className="navImg" src={file} alt="더미 이미지" />
              <br />
              인증이력
            </Link>
          </div>
        </div>
        <div>
          <div className="qrDiv">
            <img className="navImg" src={ellipses} alt="더미 이미지" />
            <br />
            더보기
          </div>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  img {
    width: 40%;
  }

  nav {
    // border-radius: 20px;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 90px;

    display: flex;
    background-color: #009aff;
  }

  nav > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navImg {
    width: 30px;
  }

  .qrDiv {
    text-align: center;
    line-height: 1.5;
  }
`;
