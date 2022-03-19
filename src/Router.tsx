import React, { ReactElement } from "react";

import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import Join from "~pages/Join";
import Lobby from "~pages/Lobby";
import Main from "~pages/Main";
import Play from "~pages/Play";
import WaitRoom from "~pages/WaitRoom";
import { cookieUtil } from "~utils/Utils";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/lobby" element={<PrivateRouter element={<Lobby />} />} />
        <Route path="/play" element={<PrivateRouter element={<Play />} />} />
        <Route path="/wait-room" element={<PrivateRouter element={<WaitRoom />} />} />
      </Routes>
    </BrowserRouter>
  );
};

const PrivateRouter: React.FC<{ element: ReactElement }> = ({ element }: { element: ReactElement }) => {
  return cookieUtil.checkLogin() ? element : <Navigate replace to="/" />;
};

export default Router;
