import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Lobby from "./pages/Lobby";
import Play from "./pages/Play";
import { BrowserRouter } from "react-router-dom";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
