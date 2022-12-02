/* global kakao */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "../components/Modal";

// const { kakao } = window;

const KakaoMap = () => {
  // 마커 클릭했을 때 나올 모달 상태
  const [isModal, setIsModal] = useState(false);

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
      ],
      selectedMarker = null;

    // 기본마커이미지
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    // 클릭했을 때 마커이미지
    var hotImageSrc =
      "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-128.png";

    // 지도 위에 여러개 마커를 표시합니다
    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      var hotMarkerImage = new kakao.maps.MarkerImage(hotImageSrc, imageSize);

      // 마커를 생성할 때 필요한 position 을 미리 설정해놓습니다
      let markerId = positions[i].id;

      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
        id: markerId,
      });

      marker.markerImage = markerImage;

      // 마커에 표시할 인포윈도우를 생성합니다
      // var infowindow = new kakao.maps.InfoWindow({
      //   content: positions[i].content, // 인포윈도우에 표시할 내용
      // });
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다

      kakao.maps.event.addListener(marker, "click", function click() {
        console.log("click");

        setIsModal(!isModal);
        // // 클릭된 마커가 없고, click 마커가 클릭된 마커가 아니면
        // // 마커의 이미지를 클릭 이미지로 변경합니다
        // if (!selectedMarker || selectedMarker !== markerImage) {
        //   // 클릭된 마커 객체가 null이 아니면
        //   // 클릭된 마커의 이미지를 기본 이미지로 변경하고
        //   !!selectedMarker &&
        //     selectedMarker.setImage(selectedMarker.markerImage);

        //   // 현재 클릭된 마커의 이미지는 클릭 이미지로 변경합니다
        //   marker.setImage(hotMarkerImage);
        // }

        // // 클릭된 마커를 현재 클릭된 마커 객체로 설정합니다
        // selectedMarker = hotMarkerImage;
      });
    }
  }, [isModal, setIsModal]);

  return (
    <Wrapper className="KakaoMap">
      <i className="fa-regular fa-house"></i>
      <MapContainer id="map"></MapContainer>
      {isModal ? <Modal setIsModal={setIsModal} /> : null}
    </Wrapper>
  );
};

export default KakaoMap;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
`;

let MapContainer = styled.div`
  border-radius: 20px;
  width: 400px;
  height: 400px;
  margin: 0 10px;
`;
