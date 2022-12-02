import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./Home";
import KakaoMap from "./KakaoMap";
import Desc from "./Desc";
import Certification from "./Certification";

export default function Routers() {
  const [modal, setModal] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<KakaoMap setModal={setModal} />} />
      <Route path="/desc" element={<Desc />} />
      <Route path="/certification" element={<Certification />} />
    </Routes>
  );
}
