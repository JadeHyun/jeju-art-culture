import React from "react";
import styled from "styled-components";
import base from "../img/까마귀_축하";

export default function CardSection({ name, state }) {
  console.log(name);
  return (
    <Wrapper>
      <div className="secWrapper">
        <Container>
          <img
            src={`${name}`}
            alt={`${name}까마귀`}
            className={state ? "imgCard" : "optical"}
          />
        </Container>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: inline-block;
  text-align: center;
`;

const Container = styled.section`
  background-color: rgba(255, 222, 173, 0.5);
  box-shadow: 5px 3px 3px rgba(255, 222, 173, 1);
  border-radius: 15px;
  margin: 15px;

  .imgCard {
    flex-basis: 20%;
    width: 110px;
    border-radius: 15px;
    height: 110px;
  }

  .optical {
    opacity: 0.2;
    width: 110px;
    height: 110px;
  }
`;
