import React from "react";
import styled from "styled-components";

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
    width: 150px;
    border-radius: 15px;
    height: 150px;
  }

  .optical {
    opacity: 0.2;
    width: 150px;
    height: 150px;
  }
`;
