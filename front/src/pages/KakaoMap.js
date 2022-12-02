/* global kakao */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "../components/Modal";

// const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    ////////// 카카오맵 생성 ////////////////
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.373701, 126.570667), // 지도의 중심좌표
        level: 11, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    var positions = [
      {
        id: 1,
        title: "제주특별자치도 서귀포시 성산읍 수시로10번길 3",
        content: "<div>책방무사</div>",
        latlng: new kakao.maps.LatLng(33.4461621, 126.8867558),
      },
      {
        id: 2,
        title: "제주특별자치도 서귀포시 성산읍 섭지코지로 107",
        content: "<div>유민미술관</div>",
        latlng: new kakao.maps.LatLng(33.4305782, 126.9277688),
      },
      {
        id: 3,
        title: "제주특별자치도 제주시 일도2동 852",
        content: "<div>제주문화예술진흥원</div>",
        latlng: new kakao.maps.LatLng(33.5043089, 126.5353859),
      },
      {
        id: 4,
        title: "제주특별자치도 서귀포시 성산읍 고성리 2039-22",
        content: "<div>제주빛의벙커</div>",
        latlng: new kakao.maps.LatLng(33.4403298, 126.9051193),
      },
      {
        id: 5,
        title: "제주특별자치도 서귀포시 남성중로153번길 15",
        content: "<div>기당미술관</div>",
        latlng: new kakao.maps.LatLng(33.2446568, 126.5517975),
      },
      {
        id: 6,
        title: "제주특별자치도 제주시 한경면 용금로 883-5",
        content: "<div>제주도립 김창열미술관</div>",
        latlng: new kakao.maps.LatLng(33.3494334, 126.284919),
      },
      {
        id: 7,
        title: "제주특별자치도 제주시 삼도이동 탑동로 14",
        content: "<div>아라리오뮤지엄 탑동시네마</div>",
        latlng: new kakao.maps.LatLng(33.507071, 126.492764),
      },
    ];
  }, []);

  return (
    <div className="KakaoMap">
      <MapContainer id="map"></MapContainer>
      <Modal />
    </div>
  );
};

export default KakaoMap;

let MapContainer = styled.div`
  border-radius: 20px;
  width: 310px;
  height: 380px;
  margin: 0 20px;
`;
