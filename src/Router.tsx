import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import Join from "~pages/Join";
import Lobby from "~pages/Lobby";
import Main from "~pages/Main";
import Play from "~pages/Play";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/play" element={<Play />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
