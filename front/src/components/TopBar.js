import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoBlack from "../assets/logoBlack.png";

export default function Modal({ isModal, setIsModal }) {
  return (
    <Container>
      <nav>
        <div>
          <Link to="/" className="layout">
            <div className="qrDiv">
              <img className="navImg" src={logoBlack} />
            </div>
          </Link>
          <div className="logoName">이디저디</div>
        </div>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 95px;

  img {
    width: 20%;
  }

  nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 75px;

    display: flex;

    background-color: #009AFF;

  }

  nav > div {
    margin: 15px;
    width: 100%;
    display: flex;
    // justify-content: flex-start;
    align-items: center;

    color: white;

  }

  .navImg {
    justify-content: flex-start;
    width: 30px;
  }

  .navImgTwo {
    justify-content: flex-end:
    width: 15px;
  }

  .qrDiv {
    text-align: center;
    line-height: 1.5;
  }

  .logoName {
    margin: 10px;
    font-size: 46px;
  }
`;
