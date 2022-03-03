import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../../pages";
import "../../../presentation/styles/global.scss";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
