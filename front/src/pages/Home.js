import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/map">문화 & 예술</Link>
      <button>기타 등등</button>
      <button>기타 등등</button>
    </div>
  );
}
