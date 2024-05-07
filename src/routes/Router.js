import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignupPage } from "../pages";

const Router = ({ isLogin }) => {
  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <Route path="/" element={<HomePage />} />
        ) : (
          <>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
