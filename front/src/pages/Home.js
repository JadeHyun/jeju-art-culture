import React from "react";
import { Link } from "react-router-dom";
import life from "../assets/lifeService.svg";
import medical from "../assets/Medical.svg";
import culture from "../assets/culture.svg";
import tourism from "../assets/tourism.svg";

export default function Home() {
  return (
    <div>
      <Link to="/map">문화 & 예술</Link>
      <button>기타 등등</button>
      <button>기타 등등</button>
    </div>
  );
}
