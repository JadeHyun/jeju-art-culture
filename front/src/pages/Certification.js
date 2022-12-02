import React from "react";
import styled from "styled-components";

import TopBar from "../components/TopBar";
import CardSection from "./../components/CardSection";
import fir from "../img/까마귀_축하";
import sec from "../img/까마귀_그림";
import thr from "../img/까마귀_기본";
import four from "../img/까마귀_노래";
import fif from "../img/까마귀_불꽃";
import six from "../img/까마귀_블루";
import sev from "../img/까마귀_음악";
import eig from "../img/까마귀_축하";
import nin from "../img/까마귀_흰색";

export default function Certification() {
  const imgBox = [
    {
      name: fir,
      state: true,
    },
    {
      name: sec,
      state: true,
    },
    {
      name: thr,
      state: true,
    },
    {
      name: four,
      state: false,
    },
    {
      name: fif,
      state: false,
    },
    {
      name: six,
      state: false,
    },
    {
      name: sev,
      state: false,
    },
    {
      name: eig,
      state: false,
    },
    {
      name: nin,
      state: false,
    },
  ];
  return (
    <Container>
      <TopBar state={false} desc="인증이력" />
      <div className="wrapper">
        {imgBox.map((el, idx) => {
          return (
            <CardSection
              key={idx}
              name={el.name}
              state={el.state}
              className="card"
            />
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 120px;
  .wrapper {
    text-align: center;
  }
`;
