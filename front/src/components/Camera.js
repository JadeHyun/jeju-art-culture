import React, { useRef } from "react";
import styled from "styled-components";

import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import mapChamp from "../assets/map캐릭터.png";

export default function Camera() {
  const videoElement = useRef();

  const userMedia = navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      width: 640,
      height: 480,
      facingMode: "environment",
    },
  });

  userMedia
    .then((stream) => {
      const videoEl = videoElement.current;

      videoEl.srcObject = stream;
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <Container>
      <TopBar />
      <video id="video" autoPlay playsInline ref={videoElement}></video>
      <img src={mapChamp} alt="제주도 캐릭터" className="champ" />
      <NavBar />
    </Container>
  );
}

const Container = styled.section`
  video {
    width: 100%;
    height: 500px;
  }

  .champ {
    transform: translate(90px, 120px);
    width: 58%;
  }
`;
