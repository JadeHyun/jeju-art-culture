import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import KakaoMap from "./KakaoMap";
import Desc from "./Desc";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<KakaoMap />} />
      <Route path="/desc" element={<Desc />} />
    </Routes>
  );
}
