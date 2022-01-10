import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { BrowserRouter } from "react-router-dom";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
